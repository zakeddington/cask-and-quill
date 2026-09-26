import { QUIZ_QUESTIONS } from './data/quiz-data.js';

export const QUIZ_VERSION = 1;
export const QUIZ_LENGTH_ALL = 'all';

const QUESTIONS_BY_ID = new Map(QUIZ_QUESTIONS.map(question => [question.id, question]));

export function getQuestion(id) {
	return QUESTIONS_BY_ID.get(id);
}

export function shuffle(items) {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

// An empty filter list means "any"
export function filterQuestions(config) {
	const { categories = [], difficulties = [], sources = [] } = config;

	return QUIZ_QUESTIONS.filter(question =>
		(!categories.length || categories.includes(question.category)) &&
		(!difficulties.length || difficulties.includes(question.difficulty)) &&
		(!sources.length || sources.includes(question.source))
	);
}

export function getQuizLength(config, poolSize) {
	return config.length === QUIZ_LENGTH_ALL ? poolSize : Math.min(config.length, poolSize);
}

export function buildQuiz(config) {
	const pool = filterQuestions(config);
	const picked = shuffle(pool).slice(0, getQuizLength(config, pool.length));

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
		byCategory: {},
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

		addToBreakdown(result.byCategory, question.category, correct);
		addToBreakdown(result.byDifficulty, question.difficulty, correct);
	});

	return result;
}
