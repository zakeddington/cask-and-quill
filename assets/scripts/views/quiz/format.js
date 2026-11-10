import { LEXICON_TERMS } from '../../data/lexicon-data.js';
import { REGIONS_DATA } from '../../data/regions-data.js';
import { QUIZ_SOURCE, QUIZ_REGION_TOPIC } from './constants.js';

// Display text for quiz values. Each formatter falls back to the raw value when it has no label.

const SOURCE_LABELS = {
	[QUIZ_SOURCE.LEXICON]: 'Lexicon',
	[QUIZ_SOURCE.REGIONS]: 'Regions',
};

const REGION_TOPIC_LABELS = {
	[QUIZ_REGION_TOPIC.LEGAL]: 'Legal',
	[QUIZ_REGION_TOPIC.VARIETIES]: 'Varieties',
	[QUIZ_REGION_TOPIC.SUB_REGIONS]: 'Sub-regions',
};

// Used when a quiz summary has too many values in a group to list
const COUNT_LABELS = {
	lexiconCategories: 'categories',
	regionCountries: 'countries',
	regionTopics: 'question types',
	difficulties: 'difficulties',
};

const LEXICON_NAMES = new Map(LEXICON_TERMS.map(term => [term.id, term.name]));
const REGION_NAMES = new Map(REGIONS_DATA.map(region => [region.id, region.name]));

const DATE_FORMAT = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' });
const SHORT_DATE_FORMAT = new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' });

export function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatSource(source) {
	return SOURCE_LABELS[source] ?? source;
}

export function formatRegionTopic(topic) {
	return REGION_TOPIC_LABELS[topic] ?? topic;
}

export function formatDifficulty(difficulty) {
	return capitalize(difficulty);
}

// Returns undefined for unknown IDs, so callers can skip links to missing entries
export function getLexiconTermName(id) {
	return LEXICON_NAMES.get(id);
}

export function getRegionName(id) {
	return REGION_NAMES.get(id);
}

export function formatRegion(id) {
	return REGION_NAMES.get(id) ?? id;
}

export function formatCount(key, count) {
	return `${count} ${COUNT_LABELS[key]}`;
}

export function formatDate(timestamp) {
	return DATE_FORMAT.format(timestamp);
}

export function formatShortDate(timestamp) {
	return SHORT_DATE_FORMAT.format(timestamp);
}

export function formatChange(change) {
	if (!change) return 'Same score as';
	const points = Math.abs(change) === 1 ? 'point' : 'points';
	return change > 0 ? `Up ${change} ${points} on` : `Down ${-change} ${points} on`;
}
