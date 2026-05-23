import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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
