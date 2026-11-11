import { escapeHtml } from '../../../utils/utils.js';
import { QUIZ_ACTION, QUIZ_MODE, QUIZ_DIFFICULTIES, QUIZ_REGION_TOPICS } from '../constants.js';
import { QUIZ_FILTER_GROUPS, sanitizeConfig, getConfigKey } from '../config.js';
import { getQuestion, scoreQuiz } from '../engine.js';
import { getPercent, compareWithPrevious } from '../stats.js';
import { formatRegion, formatRegionTopic, formatDifficulty, formatChange } from '../format.js';
import { renderTags, renderSourceLink } from './shared.js';

// Results screen: score, comparison with past attempts, breakdowns and missed questions.
// `history` should already include this quiz, and `missedCount` reflect it.

export function renderResults({ quiz, history, missedCount }) {
	const { score, total, byLexiconCategory, byRegionCountry, byRegionTopic, byDifficulty, missed } = scoreQuiz(quiz);
	const percent = getPercent({ score, total });
	const isReview = quiz.config.mode === QUIZ_MODE.REVIEW;

	return `
		<section class="quiz-results">
			<div class="quiz-results__summary grid">
				<div class="quiz-results__score-col grid__col--12-md grid__col--5-lg">
					<p class="text-label">${isReview ? 'Practice complete' : 'Quiz complete'}</p>
					<h2 class="quiz-results__title text-display-lg" tabindex="-1">
						${score}<span class="quiz-results__total">/${total}</span>
					</h2>
					<p class="quiz-results__percent text-heading-md">${percent}% correct</p>
					${renderComparison(quiz, history, { id: quiz.id, score, total, completedAt: quiz.completedAt })}
					<div class="quiz-results__actions">
						${renderRetryButton(isReview, missedCount)}
						<button class="quiz-results__setup button button--secondary" type="button" data-action="${QUIZ_ACTION.BACK_TO_SETUP}">Back to setup</button>
					</div>
				</div>
				<div class="quiz-results__breakdowns grid__col--12-md grid__col--7-lg">
					${renderBreakdown('By lexicon category', byLexiconCategory, QUIZ_FILTER_GROUPS.lexiconCategories.values, QUIZ_FILTER_GROUPS.lexiconCategories.format)}
					${renderBreakdown('By region country', byRegionCountry, QUIZ_FILTER_GROUPS.regionCountries.values, formatRegion)}
					${renderBreakdown('By region question type', byRegionTopic, QUIZ_REGION_TOPICS, formatRegionTopic)}
					${renderBreakdown('By difficulty', byDifficulty, QUIZ_DIFFICULTIES, formatDifficulty)}
				</div>
			</div>

			<section class="quiz-results__review" aria-labelledby="quiz-review-title">
				<h2 id="quiz-review-title" class="text-heading-lg">${missed.length ? `Missed questions (${missed.length})` : 'Perfect score'}</h2>
				${missed.length
					? `<div class="quiz-results__review-list">${missed.map(id => renderReviewItem(id, quiz.answers[id])).join('')}</div>`
					: '<p>Nothing to review. Nicely done.</p>'}
			</section>
		</section>
	`;
}

function renderComparison(quiz, history, current) {
	const key = getConfigKey(sanitizeConfig(quiz.config));
	const comparison = compareWithPrevious(history, current, config => getConfigKey(sanitizeConfig(config)) === key);
	if (!comparison) return '';

	const { change, bestPercent, isPersonalBest } = comparison;
	const previous = quiz.config.mode === QUIZ_MODE.REVIEW ? 'your last practice' : 'your last quiz with these settings';

	return `
		<p class="quiz-results__comparison">
			${isPersonalBest ? '<strong>New personal best.</strong>' : `Personal best: ${bestPercent}%.`}
			${formatChange(change)} ${previous}.
		</p>
	`;
}

// Review quizzes can only be retried while missed questions remain
function renderRetryButton(isReview, missedCount) {
	if (!isReview) return `<button class="quiz-results__retry button" type="button" data-action="${QUIZ_ACTION.RETRY_QUIZ}">New quiz, same settings</button>`;
	if (!missedCount) return '';

	return `<button class="quiz-results__retry button" type="button" data-action="${QUIZ_ACTION.RETRY_QUIZ}">Practice ${missedCount} missed ${missedCount === 1 ? 'question' : 'questions'}</button>`;
}

function renderBreakdown(title, breakdown, order, format) {
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

function renderReviewItem(id, selected) {
	const question = getQuestion(id);

	return `
		<article class="quiz-review">
			${renderTags(question)}
			<h3 class="quiz-review__question text-heading-md">${escapeHtml(question.question)}</h3>
			<div class="quiz-review__answers">
				<p class="quiz-review__answer quiz-review__answer--yours text-body-sm">Your answer: <span>${escapeHtml(selected ?? 'No answer')}</span></p>
				<p class="quiz-review__answer quiz-review__answer--correct text-body-sm">Correct answer: <span>${escapeHtml(question.answer)}</span></p>
			</div>
			<p class="quiz-review__explanation">${escapeHtml(question.explanation)}</p>
			${renderSourceLink(question)}
		</article>
	`;
}
