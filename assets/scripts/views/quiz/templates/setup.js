import { escapeHtml } from '../../../utils/utils.js';
import { QUIZ_QUESTIONS } from '../../../data/quiz/index.js';
import {
	QUIZ_SOURCES,
	QUIZ_SOURCE_FILTER_KEYS,
	QUIZ_LENGTH_ALL,
	QUIZ_LENGTH_OPTIONS,
	QUIZ_PRIORITIZE_OPTIONS
} from '../constants.js';
import { QUIZ_FILTER_GROUPS } from '../config.js';
import { renderIcon } from './shared.js';

// Setup screen. Chips render unpressed and without counts; the view fills those in from
// the current config, so it can update them later without re-rendering.

export function renderSetup({ quiz, missedCount, progressHtml }) {
	return `
		${renderResumeBanner(quiz)}
		<section class="quiz-setup" aria-labelledby="quiz-setup-title">
			<div class="quiz-setup__header theme--accent">
				<h2 id="quiz-setup-title" class="text-heading-lg text-color-secondary">Build a quiz</h2>
				<p>Pick the Lexicon or Regions to quiz on everything in it, or narrow it down by category, country, or question type. Leave everything unselected for a random mix of all ${QUIZ_QUESTIONS.length} questions.</p>
			</div>
			<div class="quiz-setup__sources">
				${renderFilterGroup('sources')}
				${QUIZ_SOURCES.map(source => `
					<div class="quiz-setup__source-filters">
						${QUIZ_SOURCE_FILTER_KEYS[source].map(key => renderFilterGroup(key)).join('')}
					</div>
				`).join('')}
			</div>
			${renderFilterGroup('difficulties')}
			${renderLengthGroup()}
			${renderPrioritizeGroup()}
			<div class="quiz-setup__footer">
				<p class="quiz-setup__summary" aria-live="polite"></p>
				<div class="quiz-setup__actions">
					<button class="quiz-setup__clear button button--tertiary" type="button">
						${renderIcon('icon-x')}
						Clear filters
					</button>
					<button class="quiz-setup__start button" type="button">Start quiz</button>
				</div>
			</div>
		</section>
		${renderPracticeBanner(missedCount)}
		${progressHtml}
	`;
}

// Always rendered, hidden when empty, so the view can replace it in place when history changes
export function renderPracticeBanner(missedCount) {
	const questions = missedCount === 1 ? 'question' : 'questions';

	return `
		<section class="quiz-practice" aria-label="Practice missed questions" ${missedCount ? '' : 'hidden'}>
			<div>
				<h2 class="text-heading-md">Practice missed questions</h2>
				<p class="quiz-practice__text">You have ${missedCount} ${questions} you got wrong the last time you saw them. Answer one correctly and it comes off the list.</p>
			</div>
			<button class="quiz-practice__start button" type="button">Practice ${missedCount} ${questions}</button>
		</section>
	`;
}

function renderResumeBanner(quiz) {
	if (!quiz || quiz.completedAt) return '';

	const answered = Object.keys(quiz.answers).length;

	return `
		<section class="quiz-resume" aria-label="Quiz in progress">
			<div>
				<h2 class="text-heading-md text-color-accent">Quiz in progress</h2>
				<p class="quiz-resume__text">${answered} of ${quiz.questions.length} questions answered. Starting a new quiz will replace it.</p>
			</div>
			<div class="quiz-resume__actions">
				<button class="quiz-resume__discard button button--tertiary" type="button">Discard</button>
				<button class="quiz-resume__continue button" type="button">Resume quiz</button>
			</div>
		</section>
	`;
}

function renderFilterGroup(key) {
	const group = QUIZ_FILTER_GROUPS[key];
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

function renderLengthGroup() {
	return `
		<fieldset class="quiz-setup__group">
			<legend class="quiz-setup__legend">Questions</legend>
			<div class="quiz-setup__chips">
				${QUIZ_LENGTH_OPTIONS.map(value => `
					<button class="quiz-chip button--secondary" type="button" data-group="length" data-value="${value}" aria-pressed="false">
						${value === QUIZ_LENGTH_ALL ? 'All' : value}
					</button>
				`).join('')}
			</div>
		</fieldset>
	`;
}

function renderPrioritizeGroup() {
	return `
		<fieldset class="quiz-setup__group">
			<legend class="quiz-setup__legend">Question selection</legend>
			<div class="quiz-setup__chips">
				${QUIZ_PRIORITIZE_OPTIONS.map(({ value, label }) => `
					<button class="quiz-chip button--secondary" type="button" data-group="prioritize" data-value="${value}" aria-pressed="false">
						${label}
					</button>
				`).join('')}
			</div>
		</fieldset>
	`;
}
