import { supabase } from '../supabase.js';

export async function enrichBottle(brand, bottle) {
	const { data, error } = await supabase.functions.invoke('enrich-bottle', {
		body: { brand, bottle },
	});
	if (error) throw error;
	return data;
}
