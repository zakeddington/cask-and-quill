import { QUIZ_QUESTIONS } from './data/quiz/index.js';
import { getQuestion, isInFilter } from './quiz-engine.js';

// Pure helpers that derive progress from saved quiz history (newest entry first).
// Question metadata is read from the current data, so edits to a question's
// difficulty or category are reflected, and removed questions are skipped.

function isValidEntry(entry) {
	return entry && Array.isArray(entry.asked) && Array.isArray(entry.missed);
}

// Map of question ID to { seen, correct, lastSeenAt, lastCorrect }
export function getQuestionStats(history) {
	const stats = new Map();

	// Walk oldest to newest so `last*` fields end up describing the latest attempt
	[...history].reverse().filter(isValidEntry).forEach(entry => {
		const missed = new Set(entry.missed);

		entry.asked.forEach(id => {
			if (!getQuestion(id)) return;

			const correct = !missed.has(id);
			const item = stats.get(id) ?? { seen: 0, correct: 0, lastSeenAt: null, lastCorrect: null };
			item.seen += 1;
			if (correct) item.correct += 1;
			item.lastSeenAt = entry.completedAt ?? null;
			item.lastCorrect = correct;
			stats.set(id, item);
		});
	});

	return stats;
}

// Stats for each value of a filter group, e.g. ('regionCountries', ['japan', 'usa']).
// `correct`/`attempts` count every answer; `seen`/`pool` count distinct questions.
export function getFilterStats(questionStats, key, values) {
	return Object.fromEntries(values.map(value => {
		const result = { correct: 0, attempts: 0, seen: 0, pool: 0 };

		QUIZ_QUESTIONS.forEach(question => {
			if (!isInFilter(question, key, value)) return;
			result.pool += 1;

			const item = questionStats.get(question.id);
			if (!item) return;
			result.seen += 1;
			result.attempts += item.seen;
			result.correct += item.correct;
		});

		return [value, result];
	}));
}

// Overall progress, plus the percentage score of the most recent quizzes (newest first)
export function getSummary(history, questionStats, trendLength = 10) {
	const entries = history.filter(isValidEntry);
	let attempts = 0;
	let correct = 0;

	questionStats.forEach(item => {
		attempts += item.seen;
		correct += item.correct;
	});

	return {
		quizzesTaken: entries.length,
		questionsSeen: questionStats.size,
		poolSize: QUIZ_QUESTIONS.length,
		accuracy: attempts ? correct / attempts : null,
		recentScores: entries
			.filter(entry => entry.total)
			.slice(0, trendLength)
			.map(getPercent),
	};
}

export function getPercent(entry) {
	return entry.total ? Math.round((entry.score / entry.total) * 100) : 0;
}

// Questions whose most recent answer was wrong, most recently missed first
export function getMissedQuestionIds(questionStats) {
	return [...questionStats]
		.filter(([, item]) => item.lastCorrect === false)
		.sort(([, a], [, b]) => (b.lastSeenAt ?? 0) - (a.lastSeenAt ?? 0))
		.map(([id]) => id);
}

// How a finished quiz compares with earlier quizzes that `isSameConfig` accepts.
// `change` is in percentage points against the most recent of those; null when there are none.
export function compareWithPrevious(history, current, isSameConfig) {
	const previous = history.filter(entry =>
		isValidEntry(entry) &&
		entry.id !== current.id &&
		entry.completedAt < current.completedAt &&
		isSameConfig(entry.config)
	);
	if (!previous.length) return null;

	const percent = getPercent(current);
	const bestPercent = Math.max(...previous.map(getPercent));

	return {
		change: percent - getPercent(previous[0]),
		bestPercent,
		isPersonalBest: percent > bestPercent,
	};
}
