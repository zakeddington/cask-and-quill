import { QUIZ_QUESTIONS, QUIZ_DIFFICULTIES, QUIZ_SOURCES, QUIZ_REGION_TOPICS } from '../data/quiz-data.js';
import { LEXICON_TERMS, LEXICON_CATEGORIES } from '../data/lexicon-data.js';
import { REGIONS_DATA } from '../data/regions-data.js';
import { escapeHtml } from '../utils.js';
import { KEY_ENTER } from '../config/constants.js';
import {
	QUIZ_LENGTH_ALL,
	SOURCE_FILTER_KEYS,
	getQuestion,
	getLexiconCategory,
	getIncludedSources,
	filterQuestions,
	countFilterMatches,
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

const FILTER_KEYS = ['sources', 'lexiconCategories', 'regionCountries', 'regionTopics', 'difficulties'];

const DEFAULT_CONFIG = {
	sources: [],
	lexiconCategories: [],
	regionCountries: [],
	regionTopics: [],
	difficulties: [],
	length: 20,
	mode: MODE_STUDY,
};

const SOURCE_LABELS = {
	lexicon: 'Lexicon',
	regions: 'Regions',
};

const TOPIC_LABELS = {
	'legal': 'Legal',
	'varieties': 'Varieties',
	'sub-regions': 'Sub-regions',
};

const LEXICON_NAMES = new Map(LEXICON_TERMS.map(term => [term.id, term.name]));
const REGION_NAMES = new Map(REGIONS_DATA.map(region => [region.id, region.name]));
const REGION_IDS = REGIONS_DATA.map(region => region.id);

function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatTopic(value) {
	return TOPIC_LABELS[value] ?? value;
}

// A source counts as picked when it's selected directly or through one of its sub-filters
function isSourcePicked(config, source) {
	return config.sources.includes(source) || SOURCE_FILTER_KEYS[source].some(key => config[key].length);
}

// Quizzes draw from one source at a time, so at most one source is picked
function getPickedSource(config) {
	return QUIZ_SOURCES.find(source => isSourcePicked(config, source));
}

export class QuizView {
	constructor(elContainer) {
		this.el = {
			container: elContainer,
			screen: elContainer.querySelector('.quiz-view__screen'),
		};

		// `source` marks a group as a sub-filter of that source
		this.filterGroups = {
			sources: { label: 'Source', values: QUIZ_SOURCES, format: value => SOURCE_LABELS[value] ?? value },
			lexiconCategories: { label: 'Lexicon categories', source: 'lexicon', values: LEXICON_CATEGORIES, format: value => value },
			regionCountries: { label: 'Region countries', source: 'regions', values: REGION_IDS, format: value => REGION_NAMES.get(value) ?? value },
			regionTopics: { label: 'Region question types', source: 'regions', values: QUIZ_REGION_TOPICS, format: value => value === 'sub-regions' ? 'Sub-regions (Scotland)' : formatTopic(value) },
			difficulties: { label: 'Difficulty', values: QUIZ_DIFFICULTIES, format: capitalize },
		};

		this.state = {
			screen: SCREEN_SETUP,
			quiz: null,
			config: this.sanitizeConfig(loadLastConfig()),
		};

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

		const result = {
			...DEFAULT_CONFIG,
			...Object.fromEntries(FILTER_KEYS.map(key => [key, pick(config?.[key], this.filterGroups[key].values)])),
			length: LENGTH_OPTIONS.includes(config?.length) ? config.length : DEFAULT_CONFIG.length,
		};

		// Older saved configs may mix sources; keep only the first picked one
		const picked = getPickedSource(result);
		QUIZ_SOURCES.filter(source => source !== picked).forEach(source => {
			result.sources = result.sources.filter(item => item !== source);
			SOURCE_FILTER_KEYS[source].forEach(key => { result[key] = []; });
		});

		return result;
	}

	getFilterSource(key, value) {
		return key === 'sources' ? value : this.filterGroups[key].source;
	}

	// Filters that belong to a different source than the picked one are locked
	isFilterLocked(key, value) {
		const picked = getPickedSource(this.state.config);
		const source = this.getFilterSource(key, value);
		return Boolean(picked && source && source !== picked);
	}

	isFilterPressed(key, value) {
		return key === 'sources' ? isSourcePicked(this.state.config, value) : this.state.config[key].includes(value);
	}

	toggleFilter(key, value) {
		const config = this.state.config;
		if (this.isFilterLocked(key, value)) return;

		if (key === 'sources' && isSourcePicked(config, value)) {
			// Deselecting a source also clears its sub-filters
			config.sources = config.sources.filter(item => item !== value);
			SOURCE_FILTER_KEYS[value].forEach(subKey => { config[subKey] = []; });
		} else {
			config[key] = config[key].includes(value)
				? config[key].filter(item => item !== value)
				: [...config[key], value];
		}

		saveLastConfig(config);
	}

	setLength(value) {
		this.state.config.length = value === QUIZ_LENGTH_ALL ? QUIZ_LENGTH_ALL : Number(value);
		saveLastConfig(this.state.config);
	}

	clearFilters() {
		this.state.config = {
			...this.state.config,
			...Object.fromEntries(FILTER_KEYS.map(key => [key, []])),
		};
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

		appendHistory({
			id: quiz.id,
			config: quiz.config,
			...scoreQuiz(quiz),
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
			this.startQuiz(this.sanitizeConfig(this.state.quiz.config));
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
		this.el.screen.scrollIntoView({ block: 'start' });

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

		return `<p class="quiz-source-link text-body-sm">Learn more: <a href="${escapeHtml(href)}" target="_blank">${escapeHtml(label)} — ${escapeHtml(name)}</a></p>`;
	}

	renderTags(question) {
		const labels = question.source === 'lexicon'
			? [getLexiconCategory(question)]
			: [REGION_NAMES.get(question.sourceId), formatTopic(question.topic)];
		labels.push(capitalize(question.difficulty));

		return `
			<div class="tags">
				${labels.filter(Boolean).map(label => `<span class="tag text-label">${escapeHtml(label)}</span>`).join('')}
			</div>
		`;
	}

	// Setup screen

	renderSetup() {
		return `
			${this.renderResumeBanner()}
			<section class="quiz-setup" aria-labelledby="quiz-setup-title">
				<div class="quiz-setup__header theme--accent">
					<h2 id="quiz-setup-title" class="text-heading-lg text-color-secondary">Build a quiz</h2>
					<p>Pick the Lexicon or Regions to quiz on everything in it, or narrow it down by category, country, or question type. Leave everything unselected for a random mix of all ${QUIZ_QUESTIONS.length} questions.</p>
				</div>
				<div class="quiz-setup__sources">
					${this.renderFilterGroup('sources')}
					${QUIZ_SOURCES.map(source => `
						<div class="quiz-setup__source-filters">
							${SOURCE_FILTER_KEYS[source].map(key => this.renderFilterGroup(key)).join('')}
						</div>
					`).join('')}
				</div>
				${this.renderFilterGroup('difficulties')}
				${this.renderLengthGroup()}
				<div class="quiz-setup__footer">
					<p class="quiz-setup__summary" aria-live="polite"></p>
					<div class="quiz-setup__actions">
						<button class="quiz-setup__clear button button--tertiary" type="button">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="/assets/images/icon-sprite.svg#icon-x"></use></svg>
							Clear filters
						</button>
						<button class="quiz-setup__start button" type="button">Start quiz</button>
					</div>
				</div>
			</section>
		`;
	}

	renderResumeBanner() {
		const quiz = this.state.quiz;
		if (!quiz || quiz.completedAt) return '';

		const answered = Object.keys(quiz.answers).length;

		return `
			<section class="quiz-resume theme--accent" aria-label="Quiz in progress">
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

	renderFilterGroup(key) {
		const group = this.filterGroups[key];
		const classes = ['quiz-setup__group'];
		if (key === 'sources') classes.push('quiz-setup__group--sources');
		if (group.source) classes.push('quiz-setup__group--sub');

		return `
			<fieldset class="${classes.join(' ')}">
				<legend class="quiz-setup__legend">
					${escapeHtml(group.label)}
					<span class="quiz-setup__legend-count text-label" data-group="${key}"></span>
				</legend>
				<div class="quiz-setup__chips">
					${group.values.map(value => `
						<button class="quiz-chip button--secondary" type="button" data-group="${key}" data-value="${escapeHtml(value)}" aria-pressed="false">
							${escapeHtml(group.format(value))}
							<span class="quiz-chip__count"></span>
						</button>
					`).join('')}
				</div>
			</fieldset>
		`;
	}

	renderLengthGroup() {
		return `
			<fieldset class="quiz-setup__group">
				<legend class="quiz-setup__legend">Questions</legend>
				<div class="quiz-setup__chips">
					${LENGTH_OPTIONS.map(value => `
						<button class="quiz-chip button--secondary" type="button" data-group="length" data-value="${value}" aria-pressed="false">
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

		const includedSources = getIncludedSources(config);

		this.el.screen.querySelectorAll('.quiz-chip').forEach(chip => {
			const { group, value } = chip.dataset;

			if (group === 'length') {
				chip.setAttribute('aria-pressed', String(String(config.length) === value));
				return;
			}

			// Counts reflect the other selections, so options that would add nothing are disabled,
			// as is everything in the source that isn't picked
			const isPressed = this.isFilterPressed(group, value);
			const count = countFilterMatches(config, group, value);
			chip.setAttribute('aria-pressed', String(isPressed));
			chip.disabled = this.isFilterLocked(group, value) || (!isPressed && !count);
			chip.querySelector('.quiz-chip__count').textContent = `(${count})`;
		});

		this.el.screen.querySelectorAll('.quiz-setup__legend-count').forEach(hint => {
			const key = hint.dataset.group;
			const source = this.filterGroups[key].source;
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
		if (clearBtn) clearBtn.hidden = !FILTER_KEYS.some(key => config[key].length);
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
					<div class="quiz-question__progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answeredCount}">
						<div class="quiz-question__progress-bar" style="width: ${(answeredCount / total) * 100}%"></div>
					</div>
				</div>

				<div class="quiz-question__question">
					${this.renderTags(question)}
					<h2 id="quiz-question-title" class="quiz-question__title text-heading-lg" tabindex="-1">${escapeHtml(question.question)}</h2>
				</div>

				<ol class="quiz-question__options list-reset">
					${entry.options.map((option, index) => this.renderOption(question, option, index, selected)).join('')}
				</ol>

				${isAnswered ? this.renderFeedback(question, selected) : '<p class="quiz-question__hint text-body-sm">Tip: Use keyboard 1–4 to answer.</p>'}
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
		const { score, total, byLexiconCategory, byRegionCountry, byRegionTopic, byDifficulty, missed } = scoreQuiz(quiz);
		const percent = total ? Math.round((score / total) * 100) : 0;

		return `
			<section class="quiz-results">
				<div class="quiz-results__summary grid">
					<div class="quiz-results__score-col grid__col--12-md grid__col--5-lg">
						<p class="text-label">Quiz complete</p>
						<h2 class="quiz-results__title text-display-lg" tabindex="-1">
							${score}<span class="quiz-results__total">/${total}</span>
						</h2>
						<p class="quiz-results__percent text-heading-md">${percent}% correct</p>
						<div class="quiz-results__actions">
							<button class="quiz-results__retry button" type="button">New quiz, same settings</button>
							<button class="quiz-results__setup button button--secondary" type="button">Back to setup</button>
						</div>
					</div>
					<div class="quiz-results__breakdowns grid__col--12-md grid__col--7-lg">
						${this.renderBreakdown('By lexicon category', byLexiconCategory, LEXICON_CATEGORIES, value => value)}
						${this.renderBreakdown('By region country', byRegionCountry, REGION_IDS, value => REGION_NAMES.get(value) ?? value)}
						${this.renderBreakdown('By region question type', byRegionTopic, QUIZ_REGION_TOPICS, formatTopic)}
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
				<div class="quiz-review__answers">
					<p class="quiz-review__answer quiz-review__answer--yours text-body-sm">Your answer: <span>${escapeHtml(selected ?? 'No answer')}</span></p>
					<p class="quiz-review__answer quiz-review__answer--correct text-body-sm">Correct answer: <span>${escapeHtml(question.answer)}</span></p>
				</div>
				<p class="quiz-review__explanation">${escapeHtml(question.explanation)}</p>
				${this.renderSourceLink(question)}
			</article>
		`;
	}
}
