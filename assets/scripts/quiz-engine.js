import { QUIZ_QUESTIONS, QUIZ_SOURCES } from './data/quiz/index.js';
import { LEXICON_TERMS } from './data/lexicon-data.js';

export const QUIZ_VERSION = 1;
export const QUIZ_LENGTH_ALL = 'all';

// Study quizzes draw from the filters; review quizzes draw from questions last answered wrong
export const QUIZ_MODE_STUDY = 'study';
export const QUIZ_MODE_REVIEW = 'review';

// Relative chances of a question being picked when prioritising new and missed questions
const WEIGHT_UNSEEN = 3;
const WEIGHT_MISSED = 3;
const WEIGHT_RECENT_FACTOR = 0.25;
const RECENT_MS = 24 * 60 * 60 * 1000;

const QUESTIONS_BY_ID = new Map(QUIZ_QUESTIONS.map(question => [question.id, question]));
const LEXICON_CATEGORY_BY_ID = new Map(LEXICON_TERMS.map(term => [term.id, term.category]));

// Sub-filters that belong to each source; picking any of them includes that source
export const SOURCE_FILTER_KEYS = {
	lexicon: ['lexiconCategories'],
	regions: ['regionCountries', 'regionTopics'],
};

export function getQuestion(id) {
	return QUESTIONS_BY_ID.get(id);
}

// Lexicon questions take their category from the linked lexicon term
export function getLexiconCategory(question) {
	return question.source === 'lexicon' ? LEXICON_CATEGORY_BY_ID.get(question.sourceId) : undefined;
}

export function shuffle(items) {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

// A source is included when it's picked directly or through one of its sub-filters.
// Nothing picked at all means every source is included.
export function getIncludedSources(config) {
	const included = QUIZ_SOURCES.filter(source =>
		config.sources?.includes(source) ||
		SOURCE_FILTER_KEYS[source].some(key => config[key]?.length)
	);
	return included.length ? included : QUIZ_SOURCES;
}

// Whether a question belongs to a single filter value, e.g. ('regionCountries', 'japan')
export function isInFilter(question, key, value) {
	switch (key) {
		case 'sources': return question.source === value;
		case 'lexiconCategories': return getLexiconCategory(question) === value;
		case 'regionCountries': return question.source === 'regions' && question.sourceId === value;
		case 'regionTopics': return question.topic === value;
		case 'difficulties': return question.difficulty === value;
		default: return false;
	}
}

// An empty filter list means "any"
function matchesAny(question, config, key) {
	const values = config[key] ?? [];
	return !values.length || values.some(value => isInFilter(question, key, value));
}

export function filterQuestions(config) {
	const sources = getIncludedSources(config);

	return QUIZ_QUESTIONS.filter(question =>
		sources.includes(question.source) &&
		SOURCE_FILTER_KEYS[question.source].every(key => matchesAny(question, config, key)) &&
		matchesAny(question, config, 'difficulties')
	);
}

// How many questions a filter value would contribute, given the other selections
export function countFilterMatches(config, key, value) {
	const trial = key === 'sources'
		? { ...config, sources: [...(config.sources ?? []), value] }
		: { ...config, [key]: [value] };

	return filterQuestions(trial).filter(question => isInFilter(question, key, value)).length;
}

export function getQuizLength(config, poolSize) {
	return config.length === QUIZ_LENGTH_ALL ? poolSize : Math.min(config.length, poolSize);
}

// Weight for a question's stats from getQuestionStats: unseen and last-missed questions are
// most likely; otherwise likelier the more often it's been missed, and less likely if answered recently
export function getPickWeight(item, now = Date.now()) {
	if (!item) return WEIGHT_UNSEEN;
	if (!item.lastCorrect) return WEIGHT_MISSED;

	const weight = 0.5 + (1 - item.correct / item.seen);
	return now - item.lastSeenAt < RECENT_MS ? weight * WEIGHT_RECENT_FACTOR : weight;
}

// Weighted random order without replacement (Efraimidis–Spirakis): heavier items tend to come first
function weightedShuffle(items, getWeight) {
	return items
		.map(item => ({ item, key: Math.random() ** (1 / getWeight(item)) }))
		.sort((a, b) => b.key - a.key)
		.map(({ item }) => item);
}

function getPool(config, questionStats) {
	return config.mode === QUIZ_MODE_REVIEW
		? QUIZ_QUESTIONS.filter(question => questionStats.get(question.id)?.lastCorrect === false)
		: filterQuestions(config);
}

// `questionStats` comes from getQuestionStats and drives review pools and prioritized picks
export function buildQuiz(config, questionStats = new Map()) {
	const pool = getPool(config, questionStats);
	const now = Date.now();
	const ordered = config.prioritize
		? weightedShuffle(pool, question => getPickWeight(questionStats.get(question.id), now))
		: shuffle(pool);

	// Reshuffle the picks so the heaviest questions don't all come first
	const picked = shuffle(ordered.slice(0, getQuizLength(config, pool.length)));

	return {
		version: QUIZ_VERSION,
		id: `quiz-${Date.now()}`,
		config,
		questions: picked.map(question => ({ id: question.id, options: shuffle(question.options) })),
		answers: {},
		currentIndex: 0,
		startedAt: Date.now(),
		completedAt: null,
	};
}

// Reconcile a saved quiz with the current question data: drop removed questions
// and reshuffle options whose wording has changed since the quiz was saved.
export function restoreQuiz(saved) {
	if (!saved || saved.version !== QUIZ_VERSION || !Array.isArray(saved.questions)) return null;

	const questions = saved.questions
		.filter(entry => getQuestion(entry.id))
		.map(entry => {
			const question = getQuestion(entry.id);
			const isSameOptions = entry.options?.length === question.options.length &&
				question.options.every(option => entry.options.includes(option));
			return isSameOptions ? entry : { id: entry.id, options: shuffle(question.options) };
		});

	if (!questions.length) return null;

	const ids = new Set(questions.map(entry => entry.id));
	const answers = Object.fromEntries(
		Object.entries(saved.answers ?? {}).filter(([id]) => ids.has(id))
	);

	return {
		...saved,
		questions,
		answers,
		currentIndex: Math.min(saved.currentIndex ?? 0, questions.length - 1),
	};
}

export function isCorrect(quiz, questionId) {
	return quiz.answers[questionId] === getQuestion(questionId)?.answer;
}

function addToBreakdown(breakdown, key, correct) {
	if (!breakdown[key]) breakdown[key] = { correct: 0, total: 0 };
	breakdown[key].total += 1;
	if (correct) breakdown[key].correct += 1;
}

export function scoreQuiz(quiz) {
	const result = {
		score: 0,
		total: quiz.questions.length,
		byLexiconCategory: {},
		byRegionCountry: {},
		byRegionTopic: {},
		byDifficulty: {},
		missed: [],
	};

	quiz.questions.forEach(({ id }) => {
		const question = getQuestion(id);
		const correct = isCorrect(quiz, id);

		if (correct) {
			result.score += 1;
		} else {
			result.missed.push(id);
		}

		if (question.source === 'lexicon') {
			addToBreakdown(result.byLexiconCategory, getLexiconCategory(question), correct);
		} else {
			addToBreakdown(result.byRegionCountry, question.sourceId, correct);
			addToBreakdown(result.byRegionTopic, question.topic, correct);
		}
		addToBreakdown(result.byDifficulty, question.difficulty, correct);
	});

	return result;
}
