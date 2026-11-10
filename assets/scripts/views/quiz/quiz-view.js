import { escapeHtml } from '../../utils/utils.js';
import { KEY_ENTER } from '../../config/constants.js';
import { AUTH_CHANGE } from '../../config/events.js';
import {
	QUIZ_SOURCES,
	QUIZ_VERSION,
	QUIZ_MODE,
	QUIZ_LENGTH_ALL,
	QUIZ_DEFAULT_CONFIG,
	QUIZ_SCREEN
} from './constants.js';
import {
	QUIZ_FILTER_GROUPS,
	isSourcePicked,
	isFilterLocked,
	isFilterPressed,
	hasFilters,
	sanitizeConfig,
	toggleFilter,
	setLength,
	setPrioritize,
	clearFilters
} from './config.js';
import {
	getIncludedSources,
	filterQuestions,
	countFilterMatches,
	getQuizLength,
	buildQuiz,
	restoreQuiz,
	scoreQuiz
} from './engine.js';
import {
	loadActiveQuiz,
	saveActiveQuiz,
	clearActiveQuiz,
	loadLastConfig,
	saveLastConfig
} from './storage.js';
import {
	getHistory,
	getHistoryStatus,
	isHistorySynced,
	onHistoryChange,
	loadHistory,
	addHistoryEntry,
	removeHistoryEntry,
	restoreHistoryEntry,
	clearAllHistory
} from './history.js';
import { getQuestionStats, getMissedQuestionIds } from './stats.js';
import { renderSetup, renderPracticeBanner } from './templates/setup.js';
import { renderProgress } from './templates/progress.js';
import { renderQuestion } from './templates/question.js';
import { renderResults } from './templates/results.js';

export class QuizView {
	constructor(elContainer) {
		this.el = {
			container: elContainer,
			screen: elContainer.querySelector('.quiz-view__screen'),
		};

		this.state = {
			screen: QUIZ_SCREEN.SETUP,
			quiz: null,
			config: sanitizeConfig(loadLastConfig()),
			showAllHistory: false,
			removedEntry: null,
		};

		this.init();
	}

	init() {
		const quiz = restoreQuiz(loadActiveQuiz());

		if (quiz) {
			this.state.quiz = quiz;
			this.state.screen = quiz.completedAt ? QUIZ_SCREEN.RESULTS : QUIZ_SCREEN.QUESTION;
			saveActiveQuiz(quiz);
		} else {
			clearActiveQuiz();
		}

		this.addEventListeners();
		this.render();
		loadHistory();
	}

	addEventListeners() {
		this.el.screen.addEventListener('click', event => this.onClick(event));
		window.addEventListener(AUTH_CHANGE, () => loadHistory());
		onHistoryChange(() => this.onHistoryChange());
		document.addEventListener('keydown', event => this.onKeydown(event));
	}

	// Config
	// ---------------------------------------------------------------

	// Config changes come from the pure functions in config.js; this stores and saves the result
	updateConfig(config) {
		if (config === this.state.config) return;
		this.state.config = config;
		saveLastConfig(config);
	}

	// Quiz lifecycle
	// ---------------------------------------------------------------

	getQuestionStats() {
		return getQuestionStats(getHistory());
	}

	getMissedCount() {
		return getMissedQuestionIds(this.getQuestionStats()).length;
	}

	startQuiz(config) {
		const quiz = buildQuiz({ ...config }, this.getQuestionStats());
		if (!quiz.questions.length) return;

		this.state.quiz = quiz;
		saveActiveQuiz(quiz);
		this.showScreen(QUIZ_SCREEN.QUESTION);
	}

	answerCurrent(optionIndex) {
		const quiz = this.state.quiz;
		const entry = quiz?.questions[quiz.currentIndex];
		if (!entry || quiz.answers[entry.id] !== undefined) return;

		const option = entry.options[optionIndex];
		if (option === undefined) return;

		quiz.answers[entry.id] = option;
		saveActiveQuiz(quiz);
		this.render();
		this.el.screen.querySelector('.quiz-question__next')?.focus();
	}

	nextQuestion() {
		const quiz = this.state.quiz;
		const entry = quiz?.questions[quiz.currentIndex];
		if (!entry || quiz.answers[entry.id] === undefined) return;

		if (quiz.currentIndex < quiz.questions.length - 1) {
			quiz.currentIndex += 1;
			saveActiveQuiz(quiz);
			this.showScreen(QUIZ_SCREEN.QUESTION);
		} else {
			this.completeQuiz();
		}
	}

	completeQuiz() {
		const quiz = this.state.quiz;
		quiz.completedAt = Date.now();

		// Store question IDs only; breakdowns are derived from current question data when read
		const { score, total, missed } = scoreQuiz(quiz);
		addHistoryEntry({
			version: QUIZ_VERSION,
			id: quiz.id,
			config: quiz.config,
			score,
			total,
			asked: quiz.questions.map(entry => entry.id),
			missed,
			startedAt: quiz.startedAt,
			completedAt: quiz.completedAt,
		});

		saveActiveQuiz(quiz);
		this.showScreen(QUIZ_SCREEN.RESULTS);
	}

	// Review quizzes ignore the setup filters and include every missed question
	startReview() {
		this.startQuiz({ ...QUIZ_DEFAULT_CONFIG, mode: QUIZ_MODE.REVIEW, length: QUIZ_LENGTH_ALL });
	}

	// Focus-area quizzes use the setup's length and selection, but only the one area's filter
	startAreaQuiz(key, value) {
		const { length, prioritize } = this.state.config;
		this.startQuiz({ ...QUIZ_DEFAULT_CONFIG, length, prioritize, [key]: [value] });
	}

	discardQuiz() {
		this.state.quiz = null;
		clearActiveQuiz();
	}

	// History
	// ---------------------------------------------------------------

	// History changes apply in memory straight away; if saving fails they're rolled back and explained

	async removeEntry(id) {
		const history = getHistory();
		const index = history.findIndex(entry => entry.id === id);
		if (index === -1) return;

		const request = removeHistoryEntry(id);
		this.state.removedEntry = history[index];
		this.refreshProgress();

		// Keep focus in the list: the next item, else the previous one, else Undo
		const buttons = [...this.el.screen.querySelectorAll('.quiz-history__remove')];
		(buttons[index] ?? buttons[index - 1] ?? this.el.screen.querySelector('.quiz-history__undo'))?.focus();

		try {
			await request;
		} catch (error) {
			console.error('Failed to remove quiz from history', error);
			this.state.removedEntry = null;
			this.refreshProgress("Couldn't remove that quiz. Check your connection and try again.");
		}
	}

	async undoRemove() {
		const entry = this.state.removedEntry;
		if (!entry) return;

		const request = restoreHistoryEntry(entry);
		this.state.removedEntry = null;
		this.refreshProgress();

		const button = this.el.screen.querySelector(`.quiz-history__remove[data-id="${CSS.escape(entry.id)}"]`);
		(button ?? this.el.screen.querySelector('.quiz-history__title'))?.focus();

		try {
			await request;
		} catch (error) {
			console.error('Failed to restore quiz to history', error);
			this.state.removedEntry = entry;
			this.refreshProgress("Couldn't put that quiz back. Check your connection and try again.");
		}
	}

	async clearAllHistory() {
		const count = getHistory().length;
		const quizzes = count === 1 ? 'quiz' : 'quizzes';
		const where = isHistorySynced() ? 'your account' : 'your history';
		if (!window.confirm(`Clear all ${count} ${quizzes} from ${where}? Your progress will be reset and this can't be undone.`)) return;

		const request = clearAllHistory();
		this.state.removedEntry = null;
		this.refreshProgress();
		this.el.screen.querySelector('.quiz-setup__start')?.focus();

		try {
			await request;
		} catch (error) {
			console.error('Failed to clear quiz history', error);
			this.refreshProgress("Couldn't clear your history. Check your connection and try again.");
		}
	}

	// A load finished or started, e.g. on page load or after signing in or out
	onHistoryChange() {
		this.state.removedEntry = null;

		if (this.state.screen === QUIZ_SCREEN.SETUP) {
			this.refreshProgress();
		} else if (this.state.screen === QUIZ_SCREEN.RESULTS) {
			this.render();
		}
	}

	toggleHistory() {
		this.state.showAllHistory = !this.state.showAllHistory;
		this.refreshProgress();
		this.el.screen.querySelector('.quiz-history__toggle')?.focus();
	}

	// Re-render only what history affects, so the setup selections, scroll and focus are kept.
	// `message` replaces the usual status, e.g. to explain a failed save.
	refreshProgress(message = '') {
		this.el.screen.querySelector('.quiz-practice').outerHTML = renderPracticeBanner(this.getMissedCount());
		this.el.screen.querySelector('.quiz-progress').outerHTML = this.getProgressHtml(Boolean(message));

		const statusHtml = message
			? escapeHtml(message)
			: this.state.removedEntry
				? 'Quiz removed. <button class="quiz-history__undo button button--tertiary" type="button">Undo</button>'
				: '';

		// Fill the status after insertion so screen readers announce it
		const status = this.el.screen.querySelector('.quiz-history__status');
		if (status && statusHtml) {
			requestAnimationFrame(() => {
				status.innerHTML = statusHtml;
			});
		}
	}

	// Events
	// ---------------------------------------------------------------

	onClick(event) {
		const target = event.target;

		const chip = target.closest('.quiz-chip');
		if (chip) {
			if (chip.dataset.group === 'length') {
				this.updateConfig(setLength(this.state.config, chip.dataset.value));
			} else if (chip.dataset.group === 'prioritize') {
				this.updateConfig(setPrioritize(this.state.config, chip.dataset.value));
			} else {
				this.updateConfig(toggleFilter(this.state.config, chip.dataset.group, chip.dataset.value));
			}
			this.updateSetupControls();
			return;
		}

		if (target.closest('.quiz-setup__clear')) {
			this.updateConfig(clearFilters(this.state.config));
			this.updateSetupControls();
			return;
		}

		if (target.closest('.quiz-setup__start')) {
			this.startQuiz(this.state.config);
			return;
		}

		if (target.closest('.quiz-practice__start')) {
			this.startReview();
			return;
		}

		const areaStart = target.closest('.quiz-focus__start');
		if (areaStart) {
			this.startAreaQuiz(areaStart.dataset.group, areaStart.dataset.value);
			return;
		}

		const remove = target.closest('.quiz-history__remove');
		if (remove) {
			this.removeEntry(remove.dataset.id);
			return;
		}

		if (target.closest('.quiz-history__undo')) {
			this.undoRemove();
			return;
		}

		if (target.closest('.quiz-history__clear')) {
			this.clearAllHistory();
			return;
		}

		if (target.closest('.quiz-history__toggle')) {
			this.toggleHistory();
			return;
		}

		if (target.closest('.quiz-progress__retry')) {
			loadHistory();
			return;
		}

		if (target.closest('.quiz-resume__continue')) {
			this.showScreen(this.state.quiz?.completedAt ? QUIZ_SCREEN.RESULTS : QUIZ_SCREEN.QUESTION);
			return;
		}

		if (target.closest('.quiz-resume__discard')) {
			this.discardQuiz();
			this.showScreen(QUIZ_SCREEN.SETUP);
			return;
		}

		const option = target.closest('.quiz-question__option');
		if (option) {
			this.answerCurrent(Number(option.dataset.optionIndex));
			return;
		}

		if (target.closest('.quiz-question__next')) {
			this.nextQuestion();
			return;
		}

		if (target.closest('.quiz-question__exit')) {
			this.showScreen(QUIZ_SCREEN.SETUP);
			return;
		}

		if (target.closest('.quiz-results__retry')) {
			this.startQuiz(sanitizeConfig(this.state.quiz.config));
			return;
		}

		if (target.closest('.quiz-results__setup')) {
			this.discardQuiz();
			this.showScreen(QUIZ_SCREEN.SETUP);
		}
	}

	onKeydown(event) {
		if (this.state.screen !== QUIZ_SCREEN.QUESTION) return;
		if (event.altKey || event.ctrlKey || event.metaKey) return;
		if (event.target.closest('input, textarea, select, dialog')) return;

		const quiz = this.state.quiz;
		const entry = quiz.questions[quiz.currentIndex];
		const isAnswered = quiz.answers[entry.id] !== undefined;

		const number = Number(event.key);
		if (!isAnswered && Number.isInteger(number) && number >= 1 && number <= entry.options.length) {
			event.preventDefault();
			this.answerCurrent(number - 1);
			return;
		}

		// Let focused buttons and links handle Enter themselves
		if (isAnswered && event.key === KEY_ENTER && !event.target.closest('button, a')) {
			event.preventDefault();
			this.nextQuestion();
		}
	}

	// Rendering
	// ---------------------------------------------------------------
	// Markup comes from templates/; this section picks the screen, passes in state and updates the DOM

	showScreen(screen) {
		this.state.screen = screen;
		this.state.removedEntry = null;
		this.render();
		this.el.screen.scrollIntoView({ block: 'start' });

		const focusTarget = screen === QUIZ_SCREEN.QUESTION
			? this.el.screen.querySelector('.quiz-question__title')
			: screen === QUIZ_SCREEN.RESULTS
				? this.el.screen.querySelector('.quiz-results__title')
				: null;
		focusTarget?.focus({ preventScroll: true });
	}

	render() {
		if (this.state.screen === QUIZ_SCREEN.QUESTION && !this.state.quiz) this.state.screen = QUIZ_SCREEN.SETUP;
		if (this.state.screen === QUIZ_SCREEN.RESULTS && !this.state.quiz?.completedAt) this.state.screen = QUIZ_SCREEN.SETUP;

		if (this.state.screen === QUIZ_SCREEN.QUESTION) {
			this.el.screen.innerHTML = renderQuestion(this.state.quiz);
		} else if (this.state.screen === QUIZ_SCREEN.RESULTS) {
			this.el.screen.innerHTML = renderResults({
				quiz: this.state.quiz,
				history: getHistory(),
				missedCount: this.getMissedCount(),
			});
		} else {
			this.el.screen.innerHTML = renderSetup({
				quiz: this.state.quiz,
				missedCount: this.getMissedCount(),
				progressHtml: this.getProgressHtml(),
			});
			this.updateSetupControls();
		}
	}

	// `hasMessage` keeps the section visible to show a status message even with no history
	getProgressHtml(hasMessage = false) {
		return renderProgress({
			history: getHistory(),
			status: getHistoryStatus(),
			isSynced: isHistorySynced(),
			showAllHistory: this.state.showAllHistory,
			hasRemovedEntry: Boolean(this.state.removedEntry),
			hasMessage,
		});
	}

	// Update chip states and the live count without re-rendering, so focus stays on the clicked chip
	updateSetupControls() {
		const config = this.state.config;

		const includedSources = getIncludedSources(config);

		this.el.screen.querySelectorAll('.quiz-chip').forEach(chip => {
			const { group, value } = chip.dataset;

			if (group === 'length') {
				chip.setAttribute('aria-pressed', String(String(config.length) === value));
				return;
			}

			if (group === 'prioritize') {
				chip.setAttribute('aria-pressed', String(String(config.prioritize) === value));
				return;
			}

			// Counts reflect the other selections, so options that would add nothing are disabled,
			// as is everything in the source that isn't picked
			const isPressed = isFilterPressed(config, group, value);
			const count = countFilterMatches(config, group, value);
			chip.setAttribute('aria-pressed', String(isPressed));
			chip.disabled = isFilterLocked(config, group, value) || (!isPressed && !count);
			chip.querySelector('.quiz-chip__count').textContent = `(${count})`;
		});

		this.el.screen.querySelectorAll('.quiz-setup__legend-count').forEach(hint => {
			const key = hint.dataset.group;
			const source = QUIZ_FILTER_GROUPS[key].source;
			const count = key === 'sources'
				? QUIZ_SOURCES.filter(item => isSourcePicked(config, item)).length
				: config[key].length;

			hint.textContent = source && !includedSources.includes(source)
				? 'Not included'
				: count ? `${count} selected` : 'All';
		});

		const poolSize = filterQuestions(config).length;
		const quizLength = getQuizLength(config, poolSize);
		const summary = this.el.screen.querySelector('.quiz-setup__summary');
		const startBtn = this.el.screen.querySelector('.quiz-setup__start');
		const clearBtn = this.el.screen.querySelector('.quiz-setup__clear');

		if (summary) {
			summary.innerHTML = poolSize
				? `<strong>${poolSize}</strong> ${poolSize === 1 ? 'question matches' : 'questions match'}. Your quiz will have <strong>${quizLength}</strong>.`
				: 'No questions match these filters. Try widening your selection.';
		}
		if (startBtn) startBtn.disabled = !poolSize;
		if (clearBtn) clearBtn.hidden = !hasFilters(config);
	}
}
