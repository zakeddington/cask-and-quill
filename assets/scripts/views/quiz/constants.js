// Question fields, used by the question data in data/quiz
// ---------------------------------------------------------------

export const QUIZ_SOURCE = Object.freeze({
	LEXICON: 'lexicon',
	REGIONS: 'regions',
});

export const QUIZ_DIFFICULTY = Object.freeze({
	EASY: 'easy',
	MEDIUM: 'medium',
	HARD: 'hard',
});

// Region question topics, matching the sections of the Regions page
export const QUIZ_REGION_TOPIC = Object.freeze({
	LEGAL: 'legal',
	VARIETIES: 'varieties',
	SUB_REGIONS: 'sub-regions',
});

export const QUIZ_SOURCES = Object.freeze(Object.values(QUIZ_SOURCE));
export const QUIZ_DIFFICULTIES = Object.freeze(Object.values(QUIZ_DIFFICULTY));
export const QUIZ_REGION_TOPICS = Object.freeze(Object.values(QUIZ_REGION_TOPIC));

// Quiz setup
// ---------------------------------------------------------------

// Bump when the saved quiz shape changes, so stale saved quizzes are discarded
export const QUIZ_VERSION = 1;

// Study quizzes draw from the filters; review quizzes draw from questions last answered wrong
export const QUIZ_MODE = Object.freeze({
	STUDY: 'study',
	REVIEW: 'review',
});

export const QUIZ_MODES = Object.freeze(Object.values(QUIZ_MODE));

export const QUIZ_LENGTH_ALL = 'all';
export const QUIZ_LENGTH_OPTIONS = Object.freeze([10, 20, 30, QUIZ_LENGTH_ALL]);

export const QUIZ_FILTER_KEYS = Object.freeze(['sources', 'lexiconCategories', 'regionCountries', 'regionTopics', 'difficulties']);

// Sub-filters that belong to each source; picking any of them includes that source
export const QUIZ_SOURCE_FILTER_KEYS = Object.freeze({
	[QUIZ_SOURCE.LEXICON]: ['lexiconCategories'],
	[QUIZ_SOURCE.REGIONS]: ['regionCountries', 'regionTopics'],
});

export const QUIZ_DEFAULT_CONFIG = Object.freeze({
	sources: [],
	lexiconCategories: [],
	regionCountries: [],
	regionTopics: [],
	difficulties: [],
	length: 20,
	mode: QUIZ_MODE.STUDY,
	prioritize: true,
});

export const QUIZ_PRIORITIZE_OPTIONS = Object.freeze([
	{ value: true, label: 'Favor new & missed' },
	{ value: false, label: 'Fully random' },
]);

// Screens and history
// ---------------------------------------------------------------

export const QUIZ_SCREEN = Object.freeze({
	SETUP: 'setup',
	QUESTION: 'question',
	RESULTS: 'results',
});

// Values for the `data-action` attribute on clickable elements; the view maps each to a handler
export const QUIZ_ACTION = Object.freeze({
	// Setup
	TOGGLE_FILTER: 'toggle-filter',
	SET_LENGTH: 'set-length',
	SET_PRIORITIZE: 'set-prioritize',
	CLEAR_FILTERS: 'clear-filters',
	START_QUIZ: 'start-quiz',
	START_REVIEW: 'start-review',
	RESUME_QUIZ: 'resume-quiz',
	DISCARD_QUIZ: 'discard-quiz',
	// Progress
	START_AREA_QUIZ: 'start-area-quiz',
	RETRY_HISTORY_LOAD: 'retry-history-load',
	REMOVE_HISTORY_ENTRY: 'remove-history-entry',
	UNDO_REMOVE: 'undo-remove',
	CLEAR_HISTORY: 'clear-history',
	TOGGLE_HISTORY: 'toggle-history',
	// Question
	ANSWER: 'answer',
	NEXT_QUESTION: 'next-question',
	EXIT_QUIZ: 'exit-quiz',
	// Results
	RETRY_QUIZ: 'retry-quiz',
	BACK_TO_SETUP: 'back-to-setup',
});

export const QUIZ_HISTORY_STATUS = Object.freeze({
	LOADING: 'loading',
	READY: 'ready',
	ERROR: 'error',
});

// Progress section
// ---------------------------------------------------------------

export const QUIZ_HISTORY_PREVIEW_LENGTH = 10;
export const QUIZ_TREND_LENGTH = 12;
export const QUIZ_PROGRESS_GROUPS = Object.freeze(['lexiconCategories', 'regionCountries', 'regionTopics', 'difficulties']);

// An area needs enough answers, and a low enough score, to be suggested for focus
export const QUIZ_FOCUS_AREA = Object.freeze({
	MIN_ATTEMPTS: 5,
	MAX_ACCURACY: 0.8,
	LIMIT: 3,
});
