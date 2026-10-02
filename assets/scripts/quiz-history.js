import {
	getSession,
	fetchQuizHistory,
	insertQuizHistory,
	deleteQuizHistory,
	clearQuizHistory
} from './supabase.js';
import * as local from './quiz-storage.js';

// Quiz history, newest first. Signed-in users' history lives in Supabase so it follows them
// across devices; everyone else's lives in localStorage. Entries are kept in memory so reads
// stay synchronous. Changes apply to memory straight away and are saved in the background;
// removals reject (and roll back) if the save fails.

export const HISTORY_LOADING = 'loading';
export const HISTORY_READY = 'ready';
export const HISTORY_ERROR = 'error';

// Starts with this browser's history so signed-out visitors never see a loading state
const state = {
	userId: null,
	entries: local.loadHistory(),
	status: HISTORY_READY,
};

const listeners = new Set();
let loadCount = 0;

function sortEntries(entries) {
	return [...entries].sort((a, b) => b.completedAt - a.completedAt);
}

function isValidEntry(entry) {
	return entry && Array.isArray(entry.asked) && Array.isArray(entry.missed);
}

export function getHistory() {
	return state.entries;
}

export function getHistoryStatus() {
	return state.status;
}

export function isHistorySynced() {
	return Boolean(state.userId);
}

// Called after each load finishes (or starts, for signed-in users), not after individual changes
export function onHistoryChange(listener) {
	listeners.add(listener);
}

function notify() {
	listeners.forEach(listener => listener());
}

// Pending entries are quizzes that failed to upload; they're shown and retried on the next load
function addPending(userId, entry) {
	const pending = local.loadPendingHistory(userId).filter(item => item.id !== entry.id);
	local.savePendingHistory(userId, [...pending, entry]);
}

function removePending(userId, id) {
	local.savePendingHistory(userId, local.loadPendingHistory(userId).filter(item => item.id !== id));
}

async function flushPending(userId) {
	const pending = local.loadPendingHistory(userId);
	if (!pending.length) return;

	await insertQuizHistory(pending);
	local.savePendingHistory(userId, []);
}

// History from before signing in moves to the account, then leaves this browser
async function importLocalHistory() {
	const entries = local.loadHistory().filter(isValidEntry);
	if (entries.length) await insertQuizHistory(entries);
	local.clearHistory();
}

// Load for whoever is signed in now; call again whenever that changes
export async function loadHistory() {
	const load = ++loadCount;
	const session = await getSession();
	if (load !== loadCount) return;

	state.userId = session?.user.id ?? null;

	if (!state.userId) {
		state.entries = local.loadHistory();
		state.status = HISTORY_READY;
		notify();
		return;
	}

	const userId = state.userId;
	state.entries = [];
	state.status = HISTORY_LOADING;
	notify();

	try {
		await importLocalHistory();
		await flushPending(userId);
		const entries = await fetchQuizHistory();
		if (load !== loadCount) return;

		state.entries = entries;
		state.status = HISTORY_READY;
	} catch (error) {
		if (load !== loadCount) return;

		console.error('Failed to load quiz history', error);
		state.entries = sortEntries(local.loadPendingHistory(userId));
		state.status = HISTORY_ERROR;
	}

	notify();
}

// Never rejects: if the upload fails, the entry is queued and retried on the next load
export async function addHistoryEntry(entry) {
	state.entries = sortEntries([entry, ...state.entries.filter(item => item.id !== entry.id)]);

	if (!state.userId) {
		local.appendHistory(entry);
		state.entries = local.loadHistory();
		return;
	}

	const userId = state.userId;
	try {
		await insertQuizHistory([entry]);
	} catch (error) {
		console.error('Failed to save quiz history; queued for retry', error);
		addPending(userId, entry);
	}
}

export async function removeHistoryEntry(id) {
	const previous = state.entries;
	state.entries = previous.filter(item => item.id !== id);

	if (!state.userId) {
		local.removeHistoryEntry(id);
		return;
	}

	removePending(state.userId, id);
	try {
		await deleteQuizHistory(id);
	} catch (error) {
		state.entries = previous;
		throw error;
	}
}

// Puts a removed entry back, e.g. to undo a removal
export async function restoreHistoryEntry(entry) {
	const previous = state.entries;
	state.entries = sortEntries([entry, ...previous.filter(item => item.id !== entry.id)]);

	if (!state.userId) {
		local.restoreHistoryEntry(entry);
		state.entries = local.loadHistory();
		return;
	}

	try {
		await insertQuizHistory([entry]);
	} catch (error) {
		state.entries = previous;
		throw error;
	}
}

export async function clearAllHistory() {
	const previous = state.entries;
	state.entries = [];

	if (!state.userId) {
		local.clearHistory();
		return;
	}

	const userId = state.userId;
	const pending = local.loadPendingHistory(userId);
	local.savePendingHistory(userId, []);
	try {
		await clearQuizHistory(userId);
	} catch (error) {
		state.entries = previous;
		local.savePendingHistory(userId, pending);
		throw error;
	}
}
