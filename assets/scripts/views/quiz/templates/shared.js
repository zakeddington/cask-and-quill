import { escapeHtml } from '../../../utils/utils.js';
import { SPRITE_URL } from '../../../config/constants.js';
import { QUIZ_SOURCE } from '../constants.js';
import { getLexiconCategory } from '../engine.js';
import { formatSource, formatRegionTopic, formatDifficulty, getLexiconTermName, getRegionName } from '../format.js';

// Markup used by more than one quiz screen

export function renderIcon(name) {
	return `<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${name}"></use></svg>`;
}

export function renderTags(question) {
	const labels = question.source === QUIZ_SOURCE.LEXICON
		? [getLexiconCategory(question)]
		: [getRegionName(question.sourceId), formatRegionTopic(question.topic)];
	labels.push(formatDifficulty(question.difficulty));

	return `
		<div class="tags">
			${labels.filter(Boolean).map(label => `<span class="tag text-label">${escapeHtml(label)}</span>`).join('')}
		</div>
	`;
}

export function renderSourceLink(question) {
	const isLexicon = question.source === QUIZ_SOURCE.LEXICON;
	const name = isLexicon ? getLexiconTermName(question.sourceId) : getRegionName(question.sourceId);
	if (!name) return '';

	const href = isLexicon ? `/lexicon/#${question.sourceId}` : `/#region-${question.sourceId}`;
	const label = formatSource(question.source);

	return `<p class="quiz-source-link text-body-sm">Learn more: <a href="${escapeHtml(href)}" target="_blank">${escapeHtml(label)} — ${escapeHtml(name)}</a></p>`;
}
