import { LEXICON_CATEGORIES } from '../../data/lexicon-data.js';
import { REGIONS_DATA } from '../../data/regions-data.js';
import {
	QUIZ_SOURCE,
	QUIZ_SOURCES,
	QUIZ_DIFFICULTIES,
	QUIZ_REGION_TOPIC,
	QUIZ_REGION_TOPICS,
	QUIZ_MODE,
	QUIZ_MODES,
	QUIZ_LENGTH_ALL,
	QUIZ_LENGTH_OPTIONS,
	QUIZ_FILTER_KEYS,
	QUIZ_SOURCE_FILTER_KEYS,
	QUIZ_DEFAULT_CONFIG,
	QUIZ_PROGRESS_GROUPS
} from './constants.js';
import { formatSource, formatRegionTopic, formatDifficulty, formatRegion, formatCount } from './format.js';

// Quiz config: the filters, length, mode and prioritize setting a quiz is built from.
// These functions never change the config passed in; the ones that update it return a new one.

// `source` marks a group as a sub-filter of that source
export const QUIZ_FILTER_GROUPS = Object.freeze({
	sources: {
		label: 'Source',
		values: QUIZ_SOURCES,
		format: formatSource,
	},
	lexiconCategories: {
		label: 'Lexicon categories',
		source: QUIZ_SOURCE.LEXICON,
		values: LEXICON_CATEGORIES,
		format: value => value,
	},
	regionCountries: {
		label: 'Region countries',
		source: QUIZ_SOURCE.REGIONS,
		values: REGIONS_DATA.map(region => region.id),
		format: formatRegion,
	},
	regionTopics: {
		label: 'Region question types',
		source: QUIZ_SOURCE.REGIONS,
		values: QUIZ_REGION_TOPICS,
		format: value => value === QUIZ_REGION_TOPIC.SUB_REGIONS ? 'Sub-regions (Scotland)' : formatRegionTopic(value),
	},
	difficulties: {
		label: 'Difficulty',
		values: QUIZ_DIFFICULTIES,
		format: formatDifficulty,
	},
});

// Reading
// ---------------------------------------------------------------

// A source counts as picked when it's selected directly or through one of its sub-filters
export function isSourcePicked(config, source) {
	return config.sources.includes(source) || QUIZ_SOURCE_FILTER_KEYS[source].some(key => config[key].length);
}

// Quizzes draw from one source at a time, so at most one source is picked
export function getPickedSource(config) {
	return QUIZ_SOURCES.find(source => isSourcePicked(config, source));
}

function getFilterSource(key, value) {
	return key === 'sources' ? value : QUIZ_FILTER_GROUPS[key].source;
}

// Filters that belong to a different source than the picked one are locked
export function isFilterLocked(config, key, value) {
	const picked = getPickedSource(config);
	const source = getFilterSource(key, value);
	return Boolean(picked && source && source !== picked);
}

export function isFilterPressed(config, key, value) {
	return key === 'sources' ? isSourcePicked(config, value) : config[key].includes(value);
}

export function hasFilters(config) {
	return QUIZ_FILTER_KEYS.some(key => config[key].length);
}

// Identifies quizzes with the same settings for score comparisons; question selection doesn't count
export function getConfigKey(config) {
	return JSON.stringify([config.mode, config.length, ...QUIZ_FILTER_KEYS.map(key => [...config[key]].sort())]);
}

// Short summary for history entries, e.g. "Regions · Scotland, Ireland · Hard"
export function describeConfig(config) {
	if (config.mode === QUIZ_MODE.REVIEW) return 'Missed questions';

	const parts = [];
	const source = getPickedSource(config);
	if (source) parts.push(formatSource(source));

	QUIZ_PROGRESS_GROUPS.forEach(key => {
		const values = config[key];
		if (!values.length) return;
		parts.push(values.length > 2
			? formatCount(key, values.length)
			: values.map(QUIZ_FILTER_GROUPS[key].format).join(', '));
	});

	return parts.length ? parts.join(' · ') : 'All questions';
}

// Updating
// ---------------------------------------------------------------

// Makes a saved or stored config safe to use, dropping values that no longer exist
export function sanitizeConfig(config) {
	const pick = (values, allowed) => Array.isArray(values) ? values.filter(value => allowed.includes(value)) : [];

	const result = {
		...QUIZ_DEFAULT_CONFIG,
		...Object.fromEntries(QUIZ_FILTER_KEYS.map(key => [key, pick(config?.[key], QUIZ_FILTER_GROUPS[key].values)])),
		length: QUIZ_LENGTH_OPTIONS.includes(config?.length) ? config.length : QUIZ_DEFAULT_CONFIG.length,
		mode: QUIZ_MODES.includes(config?.mode) ? config.mode : QUIZ_DEFAULT_CONFIG.mode,
		prioritize: typeof config?.prioritize === 'boolean' ? config.prioritize : QUIZ_DEFAULT_CONFIG.prioritize,
	};

	// Older saved configs may mix sources; keep only the first picked one
	const picked = getPickedSource(result);
	QUIZ_SOURCES.filter(source => source !== picked).forEach(source => {
		result.sources = result.sources.filter(item => item !== source);
		QUIZ_SOURCE_FILTER_KEYS[source].forEach(key => { result[key] = []; });
	});

	return result;
}

// Returns the same config when the filter is locked, so callers can skip saving
export function toggleFilter(config, key, value) {
	if (isFilterLocked(config, key, value)) return config;

	if (key === 'sources' && isSourcePicked(config, value)) {
		// Deselecting a source also clears its sub-filters
		return {
			...config,
			sources: config.sources.filter(item => item !== value),
			...Object.fromEntries(QUIZ_SOURCE_FILTER_KEYS[value].map(subKey => [subKey, []])),
		};
	}

	return {
		...config,
		[key]: config[key].includes(value)
			? config[key].filter(item => item !== value)
			: [...config[key], value],
	};
}

// `value` comes from a chip's data attribute, so it's a string
export function setLength(config, value) {
	return { ...config, length: value === QUIZ_LENGTH_ALL ? QUIZ_LENGTH_ALL : Number(value) };
}

export function setPrioritize(config, value) {
	return { ...config, prioritize: value === 'true' };
}

export function clearFilters(config) {
	return {
		...config,
		...Object.fromEntries(QUIZ_FILTER_KEYS.map(key => [key, []])),
	};
}
