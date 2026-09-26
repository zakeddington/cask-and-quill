const KEY_ACTIVE = 'cq-quiz-active';
const KEY_HISTORY = 'cq-quiz-history';
const KEY_LAST_CONFIG = 'cq-quiz-last-config';
const HISTORY_LIMIT = 100;

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

export function appendHistory(entry) {
	const history = loadHistory().filter(item => item.id !== entry.id);
	write(KEY_HISTORY, [entry, ...history].slice(0, HISTORY_LIMIT));
}

export function loadLastConfig() {
	return read(KEY_LAST_CONFIG, null);
}

export function saveLastConfig(config) {
	write(KEY_LAST_CONFIG, config);
}
