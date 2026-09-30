const KEY_ACTIVE = 'cq-quiz-active';
const KEY_HISTORY = 'cq-quiz-history';
const KEY_LAST_CONFIG = 'cq-quiz-last-config';
const HISTORY_LIMIT = 100;
// Caps total stored question IDs across entries (~25 bytes each), so long "All" quizzes can't fill storage
const HISTORY_QUESTION_LIMIT = 20000;

// Storage can be unavailable (private mode, blocked site data), so every access is guarded
function read(key, fallback) {
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : fallback;
	} catch {
		return fallback;
	}
}

function write(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {
		// Ignore quota and access errors; the quiz still works for this session
	}
}

function remove(key) {
	try {
		localStorage.removeItem(key);
	} catch {
		// Ignore access errors
	}
}

export function loadActiveQuiz() {
	return read(KEY_ACTIVE, null);
}

export function saveActiveQuiz(quiz) {
	write(KEY_ACTIVE, quiz);
}

export function clearActiveQuiz() {
	remove(KEY_ACTIVE);
}

export function loadHistory() {
	return read(KEY_HISTORY, []);
}

// Entries saved before `asked` was recorded only have `missed`, so treat them as partial data
export function appendHistory(entry) {
	const history = [entry, ...loadHistory().filter(item => item.id !== entry.id)].slice(0, HISTORY_LIMIT);

	// Keep the newest entries that fit the question budget; the latest entry is always kept
	let questionCount = 0;
	const kept = history.filter((item, index) => {
		questionCount += item.asked?.length ?? item.missed?.length ?? 0;
		return index === 0 || questionCount <= HISTORY_QUESTION_LIMIT;
	});

	write(KEY_HISTORY, kept);
}

export function loadLastConfig() {
	return read(KEY_LAST_CONFIG, null);
}

export function saveLastConfig(config) {
	write(KEY_LAST_CONFIG, config);
}
