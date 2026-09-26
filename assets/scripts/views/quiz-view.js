import { QUIZ_QUESTIONS, QUIZ_CATEGORIES, QUIZ_DIFFICULTIES, QUIZ_SOURCES } from '../data/quiz-data.js';
import { LEXICON_TERMS } from '../data/lexicon-data.js';
import { REGIONS_DATA } from '../data/regions-data.js';
import { escapeHtml } from '../utils.js';
import { KEY_ENTER } from '../config/constants.js';
import {
	QUIZ_LENGTH_ALL,
	getQuestion,
	filterQuestions,
	getQuizLength,
	buildQuiz,
	restoreQuiz,
	scoreQuiz
} from '../quiz-engine.js';
import {
	loadActiveQuiz,
	saveActiveQuiz,
	clearActiveQuiz,
	appendHistory,
	loadLastConfig,
	saveLastConfig
} from '../quiz-storage.js';

const SCREEN_SETUP = 'setup';
const SCREEN_QUESTION = 'question';
const SCREEN_RESULTS = 'results';

const MODE_STUDY = 'study';
const LENGTH_OPTIONS = [10, 20, 30, QUIZ_LENGTH_ALL];

const DEFAULT_CONFIG = {
	categories: [],
	difficulties: [],
	sources: [],
	length: 20,
	mode: MODE_STUDY,
};

const SOURCE_LABELS = {
	lexicon: 'Lexicon',
	regions: 'Regions',
};

const LEXICON_NAMES = new Map(LEXICON_TERMS.map(term => [term.id, term.name]));
const REGION_NAMES = new Map(REGIONS_DATA.map(region => [region.id, region.name]));

function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function countBy(key) {
	return QUIZ_QUESTIONS.reduce((counts, question) => {
		counts[question[key]] = (counts[question[key]] ?? 0) + 1;
		return counts;
	}, {});
}

export class QuizView {
	constructor(elContainer) {
		this.el = {
			container: elContainer,
			hero: elContainer.querySelector('.quiz-view__hero'),
			screen: elContainer.querySelector('.quiz-view__screen'),
		};

		this.state = {
			screen: SCREEN_SETUP,
			quiz: null,
			config: this.sanitizeConfig(loadLastConfig()),
		};

		this.filterGroups = [
			{ key: 'categories', label: 'Category', values: QUIZ_CATEGORIES, counts: countBy('category'), format: value => value },
			{ key: 'difficulties', label: 'Difficulty', values: QUIZ_DIFFICULTIES, counts: countBy('difficulty'), format: capitalize },
			{ key: 'sources', label: 'Source', values: QUIZ_SOURCES, counts: countBy('source'), format: value => SOURCE_LABELS[value] ?? value },
		];

		this.init();
	}

	init() {
		const quiz = restoreQuiz(loadActiveQuiz());

		if (quiz) {
			this.state.quiz = quiz;
			this.state.screen = quiz.completedAt ? SCREEN_RESULTS : SCREEN_QUESTION;
			saveActiveQuiz(quiz);
		} else {
			clearActiveQuiz();
		}

		this.addEventListeners();
		this.render();
	}

	addEventListeners() {
		this.el.screen.addEventListener('click', event => this.onClick(event));
		document.addEventListener('keydown', event => this.onKeydown(event));
	}

	// Config
	// ---------------------------------------------------------------

	sanitizeConfig(config) {
		const pick = (values, allowed) => Array.isArray(values) ? values.filter(value => allowed.includes(value)) : [];

		return {
			...DEFAULT_CONFIG,
			categories: pick(config?.categories, QUIZ_CATEGORIES),
			difficulties: pick(config?.difficulties, QUIZ_DIFFICULTIES),
			sources: pick(config?.sources, QUIZ_SOURCES),
			length: LENGTH_OPTIONS.includes(config?.length) ? config.length : DEFAULT_CONFIG.length,
		};
	}

	toggleFilter(key, value) {
		const values = this.state.config[key];
		this.state.config[key] = values.includes(value)
			? values.filter(item => item !== value)
			: [...values, value];
		saveLastConfig(this.state.config);
	}

	setLength(value) {
		this.state.config.length = value === QUIZ_LENGTH_ALL ? QUIZ_LENGTH_ALL : Number(value);
		saveLastConfig(this.state.config);
	}

	clearFilters() {
		this.state.config = { ...this.state.config, categories: [], difficulties: [], sources: [] };
		saveLastConfig(this.state.config);
	}

	// Quiz lifecycle
	// ---------------------------------------------------------------

	startQuiz(config) {
		const quiz = buildQuiz({ ...config });
		if (!quiz.questions.length) return;

		this.state.quiz = quiz;
		saveActiveQuiz(quiz);
		this.showScreen(SCREEN_QUESTION);
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
			this.showScreen(SCREEN_QUESTION);
		} else {
			this.completeQuiz();
		}
	}

	completeQuiz() {
		const quiz = this.state.quiz;
		quiz.completedAt = Date.now();

		const { score, total, byCategory, byDifficulty, missed } = scoreQuiz(quiz);
		appendHistory({
			id: quiz.id,
			config: quiz.config,
			score,
			total,
			byCategory,
			byDifficulty,
			missed,
			startedAt: quiz.startedAt,
			completedAt: quiz.completedAt,
		});

		saveActiveQuiz(quiz);
		this.showScreen(SCREEN_RESULTS);
	}

	discardQuiz() {
		this.state.quiz = null;
		clearActiveQuiz();
	}

	// Events
	// ---------------------------------------------------------------

	onClick(event) {
		const target = event.target;

		const chip = target.closest('.quiz-chip');
		if (chip) {
			if (chip.dataset.group === 'length') {
				this.setLength(chip.dataset.value);
			} else {
				this.toggleFilter(chip.dataset.group, chip.dataset.value);
			}
			this.updateSetupControls();
			return;
		}

		if (target.closest('.quiz-setup__clear')) {
			this.clearFilters();
			this.updateSetupControls();
			return;
		}

		if (target.closest('.quiz-setup__quick-start')) {
			this.startQuiz(DEFAULT_CONFIG);
			return;
		}

		if (target.closest('.quiz-setup__start')) {
			this.startQuiz(this.state.config);
			return;
		}

		if (target.closest('.quiz-resume__continue')) {
			this.showScreen(this.state.quiz?.completedAt ? SCREEN_RESULTS : SCREEN_QUESTION);
			return;
		}

		if (target.closest('.quiz-resume__discard')) {
			this.discardQuiz();
			this.showScreen(SCREEN_SETUP);
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
			this.showScreen(SCREEN_SETUP);
			return;
		}

		if (target.closest('.quiz-results__retry')) {
			this.startQuiz(this.state.quiz.config);
			return;
		}

		if (target.closest('.quiz-results__setup')) {
			this.discardQuiz();
			this.showScreen(SCREEN_SETUP);
		}
	}

	onKeydown(event) {
		if (this.state.screen !== SCREEN_QUESTION) return;
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

	showScreen(screen) {
		this.state.screen = screen;
		this.render();
		window.scrollTo({ top: 0 });

		const focusTarget = screen === SCREEN_QUESTION
			? this.el.screen.querySelector('.quiz-question__title')
			: screen === SCREEN_RESULTS
				? this.el.screen.querySelector('.quiz-results__title')
				: null;
		focusTarget?.focus({ preventScroll: true });
	}

	render() {
		if (this.state.screen === SCREEN_QUESTION && !this.state.quiz) this.state.screen = SCREEN_SETUP;
		if (this.state.screen === SCREEN_RESULTS && !this.state.quiz?.completedAt) this.state.screen = SCREEN_SETUP;

		if (this.el.hero) this.el.hero.hidden = this.state.screen !== SCREEN_SETUP;

		if (this.state.screen === SCREEN_QUESTION) {
			this.el.screen.innerHTML = this.renderQuestion();
		} else if (this.state.screen === SCREEN_RESULTS) {
			this.el.screen.innerHTML = this.renderResults();
		} else {
			this.el.screen.innerHTML = this.renderSetup();
			this.updateSetupControls();
		}
	}

	renderSourceLink(question) {
		const isLexicon = question.source === 'lexicon';
		const name = isLexicon ? LEXICON_NAMES.get(question.sourceId) : REGION_NAMES.get(question.sourceId);
		if (!name) return '';

		const href = isLexicon ? `/lexicon/#${question.sourceId}` : `/#region-${question.sourceId}`;
		const label = SOURCE_LABELS[question.source];

		return `<p class="quiz-source-link text-body-sm">Learn more: <a href="${escapeHtml(href)}">${escapeHtml(label)} — ${escapeHtml(name)}</a></p>`;
	}

	renderTags(question) {
		return `
			<div class="quiz-tags">
				<span class="tag text-label">${escapeHtml(question.category)}</span>
				<span class="tag text-label">${escapeHtml(capitalize(question.difficulty))}</span>
			</div>
		`;
	}

	// Setup screen

	renderSetup() {
		return `
			<div class="quiz-setup">
				${this.renderResumeBanner()}
				<section class="quiz-setup__panel quiz-setup__panel--quick">
					<div class="quiz-setup__panel-text">
						<h2 class="text-heading-lg">Quick quiz</h2>
						<p>Twenty random questions from every category and difficulty.</p>
					</div>
					<button class="quiz-setup__quick-start button" type="button">Start random quiz</button>
				</section>

				<section class="quiz-setup__panel" aria-labelledby="quiz-custom-title">
					<div class="quiz-setup__panel-text">
						<h2 id="quiz-custom-title" class="text-heading-lg">Custom quiz</h2>
						<p>Narrow the pool by category, difficulty, or source. Leave a group empty to include everything in it.</p>
					</div>
					${this.filterGroups.map(group => this.renderFilterGroup(group)).join('')}
					${this.renderLengthGroup()}
					<div class="quiz-setup__footer">
						<p class="quiz-setup__summary" aria-live="polite"></p>
						<div class="quiz-setup__actions">
							<button class="quiz-setup__clear button button--tertiary" type="button">Clear filters</button>
							<button class="quiz-setup__start button" type="button">Start custom quiz</button>
						</div>
					</div>
				</section>
			</div>
		`;
	}

	renderResumeBanner() {
		const quiz = this.state.quiz;
		if (!quiz || quiz.completedAt) return '';

		const answered = Object.keys(quiz.answers).length;

		return `
			<section class="quiz-resume" aria-label="Quiz in progress">
				<div>
					<p class="text-label">Quiz in progress</p>
					<p class="quiz-resume__text">${answered} of ${quiz.questions.length} questions answered. Starting a new quiz will replace it.</p>
				</div>
				<div class="quiz-resume__actions">
					<button class="quiz-resume__discard button button--tertiary" type="button">Discard</button>
					<button class="quiz-resume__continue button" type="button">Resume quiz</button>
				</div>
			</section>
		`;
	}

	renderFilterGroup(group) {
		return `
			<fieldset class="quiz-setup__group">
				<legend class="quiz-setup__legend text-label">
					${escapeHtml(group.label)}
					<span class="quiz-setup__legend-hint" data-group="${group.key}"></span>
				</legend>
				<div class="quiz-setup__chips">
					${group.values.map(value => `
						<button class="quiz-chip" type="button" data-group="${group.key}" data-value="${escapeHtml(value)}" aria-pressed="false">
							${escapeHtml(group.format(value))}
							<span class="quiz-chip__count">${group.counts[value] ?? 0}</span>
						</button>
					`).join('')}
				</div>
			</fieldset>
		`;
	}

	renderLengthGroup() {
		return `
			<fieldset class="quiz-setup__group">
				<legend class="quiz-setup__legend text-label">Questions</legend>
				<div class="quiz-setup__chips">
					${LENGTH_OPTIONS.map(value => `
						<button class="quiz-chip" type="button" data-group="length" data-value="${value}" aria-pressed="false">
							${value === QUIZ_LENGTH_ALL ? 'All' : value}
						</button>
					`).join('')}
				</div>
			</fieldset>
		`;
	}

	// Update chip states and the live count without re-rendering, so focus stays on the clicked chip
	updateSetupControls() {
		const config = this.state.config;

		this.el.screen.querySelectorAll('.quiz-chip').forEach(chip => {
			const { group, value } = chip.dataset;
			const isPressed = group === 'length'
				? String(config.length) === value
				: config[group].includes(value);
			chip.setAttribute('aria-pressed', String(isPressed));
		});

		this.el.screen.querySelectorAll('.quiz-setup__legend-hint').forEach(hint => {
			const count = config[hint.dataset.group].length;
			hint.textContent = count ? `${count} selected` : 'All';
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
		if (clearBtn) clearBtn.hidden = !(config.categories.length || config.difficulties.length || config.sources.length);
	}

	// Question screen

	renderQuestion() {
		const quiz = this.state.quiz;
		const entry = quiz.questions[quiz.currentIndex];
		const question = getQuestion(entry.id);
		const selected = quiz.answers[entry.id];
		const isAnswered = selected !== undefined;
		const total = quiz.questions.length;
		const answeredCount = Object.keys(quiz.answers).length;

		return `
			<section class="quiz-question" aria-labelledby="quiz-question-title">
				<div class="quiz-question__header">
					<p class="quiz-question__count text-label">Question ${quiz.currentIndex + 1} of ${total}</p>
					<button class="quiz-question__exit button button--tertiary" type="button">Exit quiz</button>
				</div>
				<div class="quiz-progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answeredCount}">
					<div class="quiz-progress__bar" style="width: ${(answeredCount / total) * 100}%"></div>
				</div>

				${this.renderTags(question)}
				<h2 id="quiz-question-title" class="quiz-question__title text-heading-lg" tabindex="-1">${escapeHtml(question.question)}</h2>

				<ol class="quiz-question__options list-reset">
					${entry.options.map((option, index) => this.renderOption(question, option, index, selected)).join('')}
				</ol>

				${isAnswered ? this.renderFeedback(question, selected) : '<p class="quiz-question__hint text-body-sm">Tip: press 1–4 to answer.</p>'}
			</section>
		`;
	}

	renderOption(question, option, index, selected) {
		const isAnswered = selected !== undefined;
		const isAnswer = option === question.answer;
		const isSelected = option === selected;

		const classes = ['quiz-question__option'];
		let status = '';
		if (isAnswered && isAnswer) {
			classes.push('is-correct');
			status = isSelected ? 'Your answer, correct' : 'Correct answer';
		} else if (isSelected) {
			classes.push('is-incorrect');
			status = 'Your answer, incorrect';
		}

		return `
			<li>
				<button class="${classes.join(' ')}" type="button" data-option-index="${index}" ${isAnswered ? 'disabled' : ''}>
					<span class="quiz-question__option-key" aria-hidden="true">${index + 1}</span>
					<span class="quiz-question__option-text">${escapeHtml(option)}</span>
					${status ? `<span class="quiz-question__option-status">${status}</span>` : ''}
				</button>
			</li>
		`;
	}

	renderFeedback(question, selected) {
		const quiz = this.state.quiz;
		const correct = selected === question.answer;
		const isLast = quiz.currentIndex === quiz.questions.length - 1;

		return `
			<div class="quiz-question__feedback ${correct ? 'is-correct' : 'is-incorrect'}">
				<p class="quiz-question__verdict">${correct ? 'Correct' : 'Not quite'}</p>
				<p>${escapeHtml(question.explanation)}</p>
				${this.renderSourceLink(question)}
				<button class="quiz-question__next button" type="button">${isLast ? 'See results' : 'Next question'}</button>
			</div>
		`;
	}

	// Results screen

	renderResults() {
		const quiz = this.state.quiz;
		const { score, total, byCategory, byDifficulty, missed } = scoreQuiz(quiz);
		const percent = total ? Math.round((score / total) * 100) : 0;

		return `
			<section class="quiz-results">
				<div class="quiz-results__summary grid">
					<div class="quiz-results__score-col grid__col--12-md grid__col--5-lg">
						<p class="text-label">Quiz complete</p>
						<h1 class="quiz-results__title" tabindex="-1">
							${score}<span class="quiz-results__total">/${total}</span>
						</h1>
						<p class="quiz-results__percent text-heading-md">${percent}% correct</p>
						<div class="quiz-results__actions">
							<button class="quiz-results__retry button" type="button">New quiz, same settings</button>
							<button class="quiz-results__setup button button--secondary" type="button">Back to setup</button>
						</div>
					</div>
					<div class="quiz-results__breakdowns grid__col--12-md grid__col--7-lg">
						${this.renderBreakdown('By category', byCategory, QUIZ_CATEGORIES, value => value)}
						${this.renderBreakdown('By difficulty', byDifficulty, QUIZ_DIFFICULTIES, capitalize)}
					</div>
				</div>

				<section class="quiz-results__review" aria-labelledby="quiz-review-title">
					<h2 id="quiz-review-title" class="text-heading-lg">${missed.length ? `Missed questions (${missed.length})` : 'Perfect score'}</h2>
					${missed.length
						? `<div class="quiz-results__review-list">${missed.map(id => this.renderReviewItem(id)).join('')}</div>`
						: '<p>Nothing to review. Nicely done.</p>'}
				</section>
			</section>
		`;
	}

	renderBreakdown(title, breakdown, order, format) {
		const rows = order.filter(key => breakdown[key]);
		if (!rows.length) return '';

		return `
			<div class="quiz-breakdown">
				<h3 class="quiz-breakdown__title text-label">${escapeHtml(title)}</h3>
				<ul class="quiz-breakdown__list list-reset">
					${rows.map(key => {
						const { correct, total } = breakdown[key];
						return `
							<li class="quiz-breakdown__row">
								<span class="quiz-breakdown__label">${escapeHtml(format(key))}</span>
								<span class="quiz-breakdown__meter" aria-hidden="true">
									<span class="quiz-breakdown__meter-fill" style="width: ${(correct / total) * 100}%"></span>
								</span>
								<span class="quiz-breakdown__value">${correct}/${total}</span>
							</li>
						`;
					}).join('')}
				</ul>
			</div>
		`;
	}

	renderReviewItem(id) {
		const question = getQuestion(id);
		const selected = this.state.quiz.answers[id];

		return `
			<article class="quiz-review">
				${this.renderTags(question)}
				<h3 class="quiz-review__question text-heading-md">${escapeHtml(question.question)}</h3>
				<p class="quiz-review__answer quiz-review__answer--yours text-body-sm">Your answer: <span>${escapeHtml(selected ?? 'No answer')}</span></p>
				<p class="quiz-review__answer quiz-review__answer--correct text-body-sm">Correct answer: <span>${escapeHtml(question.answer)}</span></p>
				<p class="quiz-review__explanation">${escapeHtml(question.explanation)}</p>
				${this.renderSourceLink(question)}
			</article>
		`;
	}
}
