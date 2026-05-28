import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	try {
		const authHeader = req.headers.get('Authorization');
		if (!authHeader) {
			return new Response(JSON.stringify({ error: 'Unauthorized' }), {
				status: 401,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		const supabaseClient = createClient(
			Deno.env.get('SUPABASE_URL') ?? '',
			Deno.env.get('SUPABASE_ANON_KEY') ?? '',
			{ global: { headers: { Authorization: authHeader } } }
		);

		const { data: { user } } = await supabaseClient.auth.getUser();
		if (!user) {
			return new Response(JSON.stringify({ error: 'Unauthorized' }), {
				status: 401,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		const { brand, bottle } = await req.json();
		if (!brand || !bottle) {
			return new Response(JSON.stringify({ error: 'brand and bottle are required' }), {
				status: 400,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
		if (!apiKey) {
			return new Response(JSON.stringify({ error: 'API key not configured' }), {
				status: 500,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		const prompt = `You are a whiskey reference database. Given a brand and bottle name, return factual information as JSON.
Use empty strings for unknown or uncertain fields. Do not invent or guess values.

Brand: ${brand}
Bottle: ${bottle}

Return only valid JSON with no explanation or markdown, matching this schema:
{
  "category": "",
  "type": "",
  "distillery": "",
  "corpOwner": "",
  "origin": "",
  "age": "",
  "abv": "",
  "proof": "",
  "char": "",
  "cask": "",
  "mashBill": {
    "corn": "",
    "barley": "",
    "maltedBarley": "",
    "rye": "",
    "maltedRye": "",
    "wheat": ""
  }
}

Field notes:
- category: e.g. "Scotch", "Bourbon", "Irish Whiskey", "Japanese Whisky"
- type: e.g. "Single Malt Scotch", "Wheated Bourbon", "Blended Scotch"
- origin: include region where relevant, e.g. "Scotland (Speyside)", "Kentucky, USA"
- age: number only as a string, e.g. "12", or age range e.g. "(8-10)"
- abv: include % symbol, e.g. "43%"
- proof: include degree symbol, e.g. "86°"
- char: e.g. "N/A", "#3", "#4" — use "N/A" for non-bourbon
- cask: cask type and finish info, e.g. "Ex-bourbon & Oloroso sherry"
- mashBill percentages: numeric string with % symbol, e.g. "75%" — leave empty if unknown`;

		const response = await fetch('https://api.anthropic.com/v1/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
				'anthropic-version': '2023-06-01',
			},
			body: JSON.stringify({
				model: 'claude-haiku-4-5-20251001',
				max_tokens: 1024,
				messages: [{ role: 'user', content: prompt }],
			}),
		});

		if (!response.ok) {
			throw new Error(`Anthropic API error: ${response.status}`);
		}

		const anthropicData = await response.json();
		let text = anthropicData.content[0].text.trim();

		// Strip markdown code fences if present
		if (text.startsWith('```')) {
			text = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
		}

		const parsed = JSON.parse(text);

		return new Response(JSON.stringify(parsed), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500,
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	}
});
