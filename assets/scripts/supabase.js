import { createClient } from '/assets/scripts/vendor/supabase.js';

const SUPABASE_URL = 'https://ksaeybovkdrlbqkfsdqg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzYWV5Ym92a2RybGJxa2ZzZHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0OTg3NzcsImV4cCI6MjA5NTA3NDc3N30.OJymkyxqezO8z7BkaHjp9_xeC4K6NVslybCIpruUtxQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function toBottle(row) {
	return {
		id: row.id,
		fill: row.fill ?? '',
		category: row.category ?? '',
		type: row.type ?? '',
		brand: row.brand ?? '',
		bottle: row.bottle ?? '',
		barrel: row.barrel ?? '',
		age: row.age ?? '',
		abv: row.abv ?? '',
		proof: row.proof ?? '',
		cask: row.cask ?? '',
		distillery: row.distillery ?? '',
		corpOwner: row.corp_owner ?? '',
		origin: row.origin ?? '',
		char: row.char_level ?? '',
		mashBill: row.mash_bill ?? { corn: '', barley: '', maltedBarley: '', rye: '', maltedRye: '', wheat: '' },
		tastingNotes: row.tasting_notes ?? { nose: '', palate: '', finish: '' },
	};
}

function toRow(bottle) {
	return {
		id: bottle.id,
		fill: bottle.fill,
		category: bottle.category,
		type: bottle.type,
		brand: bottle.brand,
		bottle: bottle.bottle,
		barrel: bottle.barrel,
		age: bottle.age,
		abv: bottle.abv,
		proof: bottle.proof,
		cask: bottle.cask,
		distillery: bottle.distillery,
		corp_owner: bottle.corpOwner,
		origin: bottle.origin,
		char_level: bottle.char,
		mash_bill: bottle.mashBill,
		tasting_notes: bottle.tastingNotes,
	};
}

export async function fetchBottles() {
	const { data, error } = await supabase
		.from('bottles')
		.select('*')
		.order('id');
	if (error) throw error;
	return data.map(toBottle);
}

export async function updateBottle(bottle) {
	const { error } = await supabase
		.from('bottles')
		.update(toRow(bottle))
		.eq('id', bottle.id);
	if (error) throw error;
}

export async function insertBottle(bottle) {
	const { error } = await supabase
		.from('bottles')
		.insert(toRow(bottle));
	if (error) throw error;
}

export async function deleteBottle(id) {
	const { error } = await supabase
		.from('bottles')
		.delete()
		.eq('id', id);
	if (error) throw error;
}

export async function getGlobalNotes() {
	const { data, error } = await supabase
		.from('global_settings')
		.select('value')
		.eq('key', 'journal_notes')
		.maybeSingle();
	if (error) throw error;
	return data?.value ?? '';
}

export async function updateGlobalNotes(value) {
	const { error } = await supabase
		.from('global_settings')
		.upsert({ key: 'journal_notes', value, updated_at: new Date().toISOString() });
	if (error) throw error;
}

// Quiz history
// Rows are owned by the signed-in user: user_id defaults to auth.uid() on insert,
// and row level security limits every query to that user's rows.

const QUIZ_HISTORY_COLUMNS = 'id, version, config, score, total, asked, missed, started_at, completed_at';
const QUIZ_HISTORY_PAGE_SIZE = 1000;

function toQuizHistoryEntry(row) {
	return {
		version: row.version,
		id: row.id,
		config: row.config,
		score: row.score,
		total: row.total,
		asked: row.asked,
		missed: row.missed,
		startedAt: row.started_at ? Date.parse(row.started_at) : null,
		completedAt: Date.parse(row.completed_at),
	};
}

function toQuizHistoryRow(entry) {
	return {
		id: entry.id,
		version: entry.version,
		config: entry.config,
		score: entry.score,
		total: entry.total,
		asked: entry.asked,
		missed: entry.missed,
		started_at: entry.startedAt ? new Date(entry.startedAt).toISOString() : null,
		completed_at: new Date(entry.completedAt).toISOString(),
	};
}

// Newest first; fetched in pages because requests are capped at 1000 rows
export async function fetchQuizHistory() {
	const rows = [];

	for (let from = 0; ; from += QUIZ_HISTORY_PAGE_SIZE) {
		const { data, error } = await supabase
			.from('quiz_history')
			.select(QUIZ_HISTORY_COLUMNS)
			.order('completed_at', { ascending: false })
			.range(from, from + QUIZ_HISTORY_PAGE_SIZE - 1);
		if (error) throw error;

		rows.push(...data);
		if (data.length < QUIZ_HISTORY_PAGE_SIZE) break;
	}

	return rows.map(toQuizHistoryEntry);
}

// Entries never change once saved, so ones already stored are skipped
export async function insertQuizHistory(entries) {
	const { error } = await supabase
		.from('quiz_history')
		.upsert(entries.map(toQuizHistoryRow), { onConflict: 'user_id,id', ignoreDuplicates: true });
	if (error) throw error;
}

export async function deleteQuizHistory(id) {
	const { error } = await supabase
		.from('quiz_history')
		.delete()
		.eq('id', id);
	if (error) throw error;
}

export async function clearQuizHistory(userId) {
	const { error } = await supabase
		.from('quiz_history')
		.delete()
		.eq('user_id', userId);
	if (error) throw error;
}

export async function getSession() {
	const { data } = await supabase.auth.getSession();
	return data.session;
}

export async function signIn(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({ email, password });
	if (error) throw error;
	return data.session;
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}

export async function fetchFlavorFamilies() {
	const { data, error } = await supabase
		.from('flavor_families')
		.select('id, name, description, subs, sort_order')
		.order('sort_order');
	if (error) throw error;
	return data.map(row => ({ id: row.id, name: row.name, desc: row.description, subs: row.subs, sortOrder: row.sort_order }));
}

export async function updateFlavorFamily(id, { name, description, subs }) {
	const { error } = await supabase
		.from('flavor_families')
		.update({ name, description, subs })
		.eq('id', id);
	if (error) throw error;
}

export async function deleteFlavorFamily(id) {
	const { error } = await supabase
		.from('flavor_families')
		.delete()
		.eq('id', id);
	if (error) throw error;
}
