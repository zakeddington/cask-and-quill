import { escapeHtml } from '../../../utils/utils.js';
import {
	QUIZ_MODE,
	QUIZ_HISTORY_STATUS,
	QUIZ_ACTION,
	QUIZ_HISTORY_PREVIEW_LENGTH,
	QUIZ_TREND_LENGTH,
	QUIZ_PROGRESS_GROUPS,
	QUIZ_FOCUS_AREA
} from '../constants.js';
import { QUIZ_FILTER_GROUPS, sanitizeConfig, describeConfig } from '../config.js';
import { getQuestionStats, getFilterStats, getSummary, getMissedQuestionIds, getPercent } from '../stats.js';
import { formatDate, formatShortDate } from '../format.js';
import { renderIcon } from './shared.js';

// Progress section on the setup screen: stats, recent scores, focus areas and past quizzes.
// The view re-renders just this section when history changes, so setup selections are kept.

// `hasMessage` and `hasRemovedEntry` keep the section visible for a status message even with no history
export function renderProgress({ history, status, isSynced, showAllHistory, hasRemovedEntry, hasMessage }) {
	const isEmpty = !history.length && !hasRemovedEntry && !hasMessage;

	if (status === QUIZ_HISTORY_STATUS.LOADING) {
		return `
			<section class="quiz-progress" aria-labelledby="quiz-progress-title" aria-busy="true">
				${renderHeader(isSynced)}
				<p class="quiz-progress__notice" role="status">Loading your progress…</p>
			</section>
		`;
	}

	if (status !== QUIZ_HISTORY_STATUS.ERROR && isEmpty) return '<section class="quiz-progress" hidden></section>';

	const questionStats = getQuestionStats(history);
	const areas = QUIZ_PROGRESS_GROUPS.map(key => ({
		key,
		stats: getFilterStats(questionStats, key, QUIZ_FILTER_GROUPS[key].values),
	}));

	return `
		<section class="quiz-progress" aria-labelledby="quiz-progress-title">
			${renderHeader(isSynced)}
			${status === QUIZ_HISTORY_STATUS.ERROR ? `
				<div class="quiz-progress__notice" role="alert">
					<p>Couldn't load your quiz history from your account.${history.length ? ' Showing quizzes from this browser that are waiting to sync.' : ''}</p>
					<button class="quiz-progress__retry button button--secondary" type="button" data-action="${QUIZ_ACTION.RETRY_HISTORY_LOAD}">Try again</button>
				</div>
			` : ''}
			${history.length ? `
				${renderStats(getSummary(history, questionStats), getMissedQuestionIds(questionStats).length)}
				<div class="quiz-progress__overview">
					${renderTrend(history)}
					${renderFocusAreas(areas)}
				</div>
				${renderAreaBreakdowns(areas)}
			` : ''}
			${renderHistory(history, showAllHistory)}
		</section>
	`;
}

function renderHeader(isSynced) {
	const source = isSynced
		? 'Built from the quizzes saved to your account, on any device.'
		: "Built from the quizzes you've finished in this browser.";

	return `
		<div class="quiz-progress__header">
			<h2 id="quiz-progress-title" class="text-heading-lg">Your progress</h2>
			<p>${source} Remove a quiz to leave it out.</p>
		</div>
	`;
}

function renderStats(summary, missedCount) {
	const coverage = Math.round((summary.questionsSeen / summary.poolSize) * 100);
	const tiles = [
		{ label: 'Quizzes taken', value: summary.quizzesTaken },
		{ label: 'Questions seen', value: summary.questionsSeen, detail: `of ${summary.poolSize} (${coverage}%)` },
		{ label: 'Accuracy', value: summary.accuracy === null ? '-' : `${Math.round(summary.accuracy * 100)}%`, detail: 'across all answers' },
		{ label: 'To practice', value: missedCount, detail: 'wrong last time' },
	];

	return `
		<dl class="quiz-progress__stats">
			${tiles.map(({ label, value, detail }) => `
				<div class="quiz-stat">
					<dt class="quiz-stat__label text-label">${label}</dt>
					<dd class="quiz-stat__value">${value}</dd>
					${detail ? `<dd class="quiz-stat__detail text-body-sm">${detail}</dd>` : ''}
				</div>
			`).join('')}
		</dl>
	`;
}

// Recent scores as bars, oldest to newest; each bar shows its details on hover or focus
function renderTrend(history) {
	const entries = history.filter(entry => entry.total).slice(0, QUIZ_TREND_LENGTH).reverse();
	const average = Math.round(entries.reduce((sum, entry) => sum + getPercent(entry), 0) / entries.length);

	return `
		<div class="quiz-trend">
			<h3 class="quiz-trend__title text-label">Recent scores</h3>
			${entries.length < 2 ? '<p class="text-body-sm">Finish another quiz to see your scores over time.</p>' : `
				<p class="quiz-trend__summary text-body-sm">Last ${entries.length} quizzes, averaging ${average}%.</p>
				<div class="quiz-trend__plot">
					<ol class="quiz-trend__chart list-reset" aria-label="Scores, oldest to newest">
						${entries.map(entry => {
							const percent = getPercent(entry);
							const label = `${formatShortDate(entry.completedAt)}: ${entry.score}/${entry.total} (${percent}%)`;
							return `
								<li class="quiz-trend__item" tabindex="0" aria-label="${escapeHtml(label)}">
									<span class="quiz-trend__bar" style="height: ${percent}%"></span>
									<span class="quiz-trend__tooltip" aria-hidden="true">${escapeHtml(label)}</span>
								</li>
							`;
						}).join('')}
					</ol>
					<span class="quiz-trend__axis quiz-trend__axis--top" aria-hidden="true">100%</span>
					<span class="quiz-trend__axis quiz-trend__axis--bottom" aria-hidden="true">0%</span>
				</div>
			`}
		</div>
	`;
}

// The lowest-scoring areas with enough answers to judge, each with a one-click quiz
function renderFocusAreas(areas) {
	const focus = areas
		.flatMap(({ key, stats }) => Object.entries(stats)
			.filter(([, item]) => item.attempts >= QUIZ_FOCUS_AREA.MIN_ATTEMPTS && item.correct / item.attempts < QUIZ_FOCUS_AREA.MAX_ACCURACY)
			.map(([value, item]) => ({ key, value, accuracy: item.correct / item.attempts })))
		.sort((a, b) => a.accuracy - b.accuracy)
		.slice(0, QUIZ_FOCUS_AREA.LIMIT);

	return `
		<div class="quiz-focus">
			<h3 class="quiz-focus__title text-label">Focus areas</h3>
			${focus.length ? `
				<ul class="quiz-focus__list list-reset">
					${focus.map(({ key, value, accuracy }) => {
						const group = QUIZ_FILTER_GROUPS[key];
						const name = group.format(value);
						return `
							<li class="quiz-focus__item">
								<div>
									<p class="quiz-focus__name">${escapeHtml(name)}</p>
									<p class="quiz-focus__meta text-body-sm">${escapeHtml(group.label)} · ${Math.round(accuracy * 100)}% correct</p>
								</div>
								<button class="quiz-focus__start button button--secondary" type="button" data-action="${QUIZ_ACTION.START_AREA_QUIZ}" data-group="${key}" data-value="${escapeHtml(value)}" aria-label="Quiz me on ${escapeHtml(name)}">Quiz me</button>
							</li>
						`;
					}).join('')}
				</ul>
			` : `<p class="text-body-sm">Nothing stands out yet. Areas where you score under ${QUIZ_FOCUS_AREA.MAX_ACCURACY * 100}% after ${QUIZ_FOCUS_AREA.MIN_ATTEMPTS} or more answers will show here.</p>`}
		</div>
	`;
}

function renderAreaBreakdowns(areas) {
	const groups = areas.map(renderAreaGroup).join('');
	if (!groups) return '';

	return `
		<div class="quiz-progress__areas">
			<div class="quiz-progress__areas-header">
				<h3 class="text-heading-md">By area</h3>
				<p class="text-body-sm">Bars show the share of your answers that were correct. The last column shows how many of the area's questions you've seen.</p>
			</div>
			<div class="quiz-progress__area-groups">${groups}</div>
		</div>
	`;
}

function renderAreaGroup({ key, stats }) {
	const group = QUIZ_FILTER_GROUPS[key];
	const rows = group.values.filter(value => stats[value].seen);
	if (!rows.length) return '';

	return `
		<div class="quiz-breakdown quiz-breakdown--coverage">
			<h4 class="quiz-breakdown__title text-label">${escapeHtml(group.label)}</h4>
			<ul class="quiz-breakdown__list list-reset">
				${rows.map(value => {
					const { correct, attempts, seen, pool } = stats[value];
					const percent = Math.round((correct / attempts) * 100);
					return `
						<li class="quiz-breakdown__row">
							<span class="quiz-breakdown__label">${escapeHtml(group.format(value))}</span>
							<span class="quiz-breakdown__meter" aria-hidden="true">
								<span class="quiz-breakdown__meter-fill" style="width: ${percent}%"></span>
							</span>
							<span class="quiz-breakdown__value" aria-label="${percent}% correct">${percent}%</span>
							<span class="quiz-breakdown__meta">${seen}/${pool} seen</span>
						</li>
					`;
				}).join('')}
			</ul>
		</div>
	`;
}

function renderHistory(history, showAll) {
	const visible = showAll ? history : history.slice(0, QUIZ_HISTORY_PREVIEW_LENGTH);

	return `
		<div class="quiz-history">
			<div class="quiz-history__header">
				<h3 class="quiz-history__title text-heading-md" tabindex="-1">Past quizzes${history.length ? ` (${history.length})` : ''}</h3>
				${history.length ? `
					<button class="quiz-history__clear button button--tertiary" type="button" data-action="${QUIZ_ACTION.CLEAR_HISTORY}">
						${renderIcon('icon-x')}
						Clear history
					</button>
				` : ''}
			</div>
			<p class="quiz-history__status text-body-sm" role="status"></p>
			${history.length
				? `<ol class="quiz-history__list list-reset">${visible.map(renderHistoryItem).join('')}</ol>`
				: '<p>No quizzes in your history.</p>'}
			${history.length > QUIZ_HISTORY_PREVIEW_LENGTH ? `
				<button class="quiz-history__toggle button button--secondary" type="button" data-action="${QUIZ_ACTION.TOGGLE_HISTORY}" aria-expanded="${showAll}">
					${showAll ? 'Show fewer' : `Show all ${history.length} quizzes`}
				</button>
			` : ''}
		</div>
	`;
}

function renderHistoryItem(entry) {
	const config = sanitizeConfig(entry.config);
	const date = formatDate(entry.completedAt);
	const questions = entry.total === 1 ? 'question' : 'questions';

	return `
		<li class="quiz-history__item">
			<div class="quiz-history__details">
				<p class="quiz-history__name">
					${config.mode === QUIZ_MODE.REVIEW ? '<span class="tag text-label">Practice</span>' : ''}
					${escapeHtml(describeConfig(config))}
				</p>
				<p class="quiz-history__meta text-body-sm">
					<time datetime="${new Date(entry.completedAt).toISOString()}">${escapeHtml(date)}</time> · ${entry.total} ${questions}
				</p>
			</div>
			<p class="quiz-history__score">
				<strong>${entry.score}/${entry.total}</strong>
				<span class="quiz-history__percent">${getPercent(entry)}%</span>
			</p>
			<button class="quiz-history__remove button button--icon-only" type="button" data-action="${QUIZ_ACTION.REMOVE_HISTORY_ENTRY}" data-id="${escapeHtml(entry.id)}" aria-label="Remove quiz from ${escapeHtml(date)}">
				${renderIcon('icon-x')}
			</button>
		</li>
	`;
}
