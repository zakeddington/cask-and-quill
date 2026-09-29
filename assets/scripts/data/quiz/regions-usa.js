import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: United States
export const REGIONS_USA_QUESTIONS = [
	{
		id: 'bottled-in-bond-not-required',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which of these is NOT a Bottled-in-Bond requirement?',
		options: [
			'Made in one distillation season',
			'Made by one distiller at one distillery',
			'Made from at least 51% corn',
			'The distillery is identified on the label'
		],
		answer: 'Made from at least 51% corn',
		explanation: 'Bottled-in-Bond sets rules for season, distiller, distillery, aging, proof, and labeling, but not for the grain mix.'
	},
	{
		id: 'straight-bourbon-age-statement',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Straight bourbon must carry an age statement if it is younger than how many years?',
		options: ['2 years', '3 years', '4 years', '6 years'],
		answer: '4 years',
		explanation: 'Straight bourbon aged at least 2 years but under 4 years must state its age on the label.'
	},
	{
		id: 'corn-whiskey-oak',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which major U.S. whiskey style does NOT use new charred oak when aged?',
		options: ['Rye Whiskey', 'Wheat Whiskey', 'Corn Whiskey', 'Tennessee Whiskey'],
		answer: 'Corn Whiskey',
		explanation: 'If corn whiskey is aged, it must use used or uncharred new oak. It is often sold unaged.'
	},
	{
		id: 'us-no-age-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'What is the universal minimum aging requirement for American whiskey?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: 'None',
		explanation: 'U.S. law sets no universal aging minimum. Specific minimums apply by category, such as 2 years for straight whiskey.'
	},
	{
		id: 'us-entry-proof-unique',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'Which of these sets a maximum barrel entry proof for whisky?',
		options: ['Scotland', 'Japan', 'United States', 'Canada'],
		answer: 'United States',
		explanation: 'The U.S. caps barrel entry at 62.5% (125°) ABV. Scotland, Japan, and Canada specify no entry proof.'
	},
	{
		id: 'american-single-malt-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'When did American Single Malt become a distinct federal category?',
		options: ['1897', '1964', '2014', 'December 2024'],
		answer: 'December 2024',
		explanation: 'American Single Malt Whisky became a distinct federal category in December 2024.'
	},
	{
		id: 'american-single-malt-proof',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What is the maximum distillation proof for American Single Malt?',
		options: ['125°', '160°', '189.6°', '190°'],
		answer: '160°',
		explanation: 'The 160° ceiling is stricter than Scotch single malt\'s and preserves grain character without requiring pot stills.'
	},
	{
		id: 'american-single-malt-oak',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which oak does American Single Malt allow for maturation?',
		options: [
			'Used, uncharred new, or charred new oak',
			'New charred oak only, as with bourbon',
			'Used oak only, never new or charred',
			'Ex-sherry or ex-wine oak casks only'
		],
		answer: 'Used, uncharred new, or charred new oak',
		explanation: 'American Single Malt allows several oak types in barrels no larger than 700 liters, unlike bourbon\'s new-charred-oak rule.'
	},
	{
		id: 'american-single-malt-caramel',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Under the American Single Malt rules, caramel coloring is...',
		options: [
			'Permitted if disclosed on the label',
			'Prohibited entirely',
			'Permitted without disclosure',
			'Required for consistency'
		],
		answer: 'Permitted if disclosed on the label',
		explanation: 'American Single Malt permits caramel coloring as long as it is disclosed on the label.'
	},
	{
		id: 'american-single-malt-single-distillery',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'The American Single Malt "one distillery" rule applies to which production step?',
		options: ['Distillation only', 'Fermentation only', 'Aging only', 'Every step from mashing to bottling'],
		answer: 'Distillation only',
		explanation: 'Fermentation, aging, and bottling may take place elsewhere, as long as all distillation happens at one U.S. distillery.'
	},
	{
		id: 'kentucky-straight-bourbon-share',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Kentucky Straight Bourbon accounts for roughly what share of global bourbon production?',
		options: ['25%', '50%', '75%', '95%'],
		answer: '95%',
		explanation: 'Kentucky Straight Bourbon makes up roughly 95% of global bourbon production.'
	},
	{
		id: 'kentucky-straight-bourbon-aging',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Beyond straight bourbon rules, Kentucky Straight Bourbon must be distilled in Kentucky and aged there for at least...',
		options: ['6 months', '1 year', '2 years', '4 years'],
		answer: '1 year',
		explanation: 'Kentucky Straight Bourbon adds Kentucky distillation and at least 1 year of aging in Kentucky.'
	},
	{
		id: 'light-whiskey-proof',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Light Whiskey is distilled within which proof range?',
		options: ['80°-100°', '125°-160°', '161°-189°', '190°-200°'],
		answer: '161°-189°',
		explanation: 'Light Whiskey is distilled between 161° and 189° proof and aged in used or uncharred new oak.'
	},
	{
		id: 'straight-rye-traditions',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which two historical American rye traditions are contrasted as lighter and heavier?',
		options: [
			'Maryland (lighter) and Pennsylvania/Monongahela (heavier)',
			'Kentucky (lighter) and Tennessee/Lincoln County (heavier)',
			'Virginia (lighter) and New York/Hudson Valley (heavier)',
			'Indiana (lighter) and Ohio/Cincinnati River (heavier)'
		],
		answer: 'Maryland (lighter) and Pennsylvania/Monongahela (heavier)',
		explanation: 'Straight rye is generally spicier and drier than bourbon, with lighter Maryland and heavier Pennsylvania or Monongahela traditions.'
	},
	{
		id: 'us-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'What is the general U.S. distillation ceiling for whisky?',
		options: ['80% ABV (160°)', '90% ABV (180°)', '94.8% ABV (189.6°)', '95% ABV (190°)'],
		answer: '95% ABV (190°)',
		explanation: 'U.S. whisky may be distilled to no more than 95% ABV, though categories like bourbon set lower limits.'
	},
	{
		id: 'us-regulator',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'Which agency regulates American whiskey?',
		options: ['FDA', 'TTB', 'USDA', 'ATF'],
		answer: 'TTB',
		explanation: 'American whiskey is regulated by the TTB, the Alcohol and Tobacco Tax and Trade Bureau.'
	},
	{
		id: 'us-production-location',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'Where must American whiskey be produced?',
		options: [
			'Entirely at a distillery in the United States',
			'Anywhere, if bottled in the United States',
			'Anywhere in North America',
			'Only in Kentucky or Tennessee'
		],
		answer: 'Entirely at a distillery in the United States',
		explanation: 'American whiskey must be produced entirely at a distillery in the United States.'
	},
	{
		id: 'us-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for American whiskey?',
		options: ['35% (70°) ABV', '40% (80°) ABV', '43% (86°) ABV', '50% (100°) ABV'],
		answer: '40% (80°) ABV',
		explanation: 'American whiskey must be bottled at no less than 40% ABV, or 80° proof.'
	},
	{
		id: 'us-grain-base',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'Which grains may American whiskey be made from?',
		options: [
			'Any grain or combination of grains',
			'Corn only, or corn with a small share of rye',
			'Corn, rye, and wheat only, in any proportion',
			'Malted barley only, with no unmalted grain'
		],
		answer: 'Any grain or combination of grains',
		explanation: 'U.S. law permits any grain or combination of grains, with specific minimums set by category.'
	},
	{
		id: 'us-enzymes-permitted',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'How does U.S. law differ from Scotch law on fermentation?',
		options: [
			'The U.S. permits added enzymes',
			'The U.S. requires wild yeast',
			'The U.S. bans malted grain',
			'The U.S. requires open-top fermenters'
		],
		answer: 'The U.S. permits added enzymes',
		explanation: 'U.S. law permits enzymes during fermentation, while Scotch rules allow yeast only.'
	},
	{
		id: 'us-barrel-wood',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'What type of cask does U.S. law specify for aging whiskey?',
		options: ['Oak', 'Chestnut', 'Cherry', 'Any hardwood'],
		answer: 'Oak',
		explanation: 'American whiskey is aged in oak casks, with the type of oak container varying by category.'
	},
	{
		id: 'us-additives-general',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'Which U.S. designations may include neutral grain spirit, coloring, and flavoring?',
		options: ['Blended designations', 'Straight designations', 'Bottled-in-Bond', 'Single malt designations'],
		answer: 'Blended designations',
		explanation: 'No additives are permitted in general, but blended designations may include neutral grain spirit, coloring, and flavoring.'
	},
	{
		id: 'us-distillation-vs-scotland',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'How does the general U.S. distillation ceiling compare with Scotland\'s?',
		options: [
			'Slightly higher: 95% vs. 94.8% ABV',
			'Slightly lower: 94.8% vs. 95% ABV',
			'Identical at 95% ABV',
			'Much lower: 80% vs. 94.8% ABV'
		],
		answer: 'Slightly higher: 95% vs. 94.8% ABV',
		explanation: 'The U.S. allows distillation up to 95% (190°) ABV, just above Scotland\'s 94.8% (189.6°) limit.'
	},
	{
		id: 'bourbon-location',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Where can bourbon legally be made?',
		options: [
			'Anywhere in the United States',
			'Only in the state of Kentucky',
			'Only in Bourbon County, Kentucky',
			'Only in Kentucky or Tennessee'
		],
		answer: 'Anywhere in the United States',
		explanation: 'Bourbon can be made anywhere in the United States, not only in Kentucky.'
	},
	{
		id: 'bourbon-no-age-minimum',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What is the general minimum age for bourbon that is not labeled straight?',
		options: ['None', '1 year', '2 years', '4 years'],
		answer: 'None',
		explanation: 'Bourbon has no general age minimum. The straight designation requires at least 2 years.'
	},
	{
		id: 'bourbon-additives',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which of these may be added to bourbon?',
		options: ['Nothing but water', 'Caramel coloring', 'Natural flavoring', 'Neutral grain spirit'],
		answer: 'Nothing but water',
		explanation: 'Bourbon allows no additives. Water can bring it down to bottling strength.'
	},
	{
		id: 'bourbon-bottling-proof',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What is the minimum bottling proof for bourbon?',
		options: ['70°', '80°', '90°', '100°'],
		answer: '80°',
		explanation: 'Bourbon must be bottled at no less than 80° proof, or 40% ABV.'
	},
	{
		id: 'straight-bourbon-blending',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which of these is NOT permitted for straight bourbon?',
		options: [
			'Blending with other spirits',
			'Aging longer than 4 years',
			'Being made outside Kentucky',
			'Bottling above 100° proof'
		],
		answer: 'Blending with other spirits',
		explanation: 'Straight bourbon cannot be blended with other spirits or contain additives.'
	},
	{
		id: 'kentucky-straight-bourbon-distillation',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What does Kentucky Straight Bourbon add to the straight bourbon rules?',
		options: [
			'Distillation and at least 1 year of aging in Kentucky',
			'A mash bill of at least 70% corn and 10% rye',
			'Bottling at exactly 100° proof in a bonded warehouse',
			'Filtering through sugar maple charcoal before aging'
		],
		answer: 'Distillation and at least 1 year of aging in Kentucky',
		explanation: 'Kentucky Straight Bourbon must be distilled in Kentucky and aged there for at least 1 year.'
	},
	{
		id: 'tennessee-lincoln-county',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which process must Tennessee Whiskey use?',
		options: ['Lincoln County Process', 'Solera Process', 'Coffey Process', 'Sour Mash Process'],
		answer: 'Lincoln County Process',
		explanation: 'Tennessee Whiskey must use the Lincoln County Process, which filters spirit through charcoal.'
	},
	{
		id: 'tennessee-examples',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which of these is a primary example of Tennessee Whiskey?',
		options: ['Jack Daniel\'s', 'Maker\'s Mark', 'Buffalo Trace', 'Wild Turkey'],
		answer: 'Jack Daniel\'s',
		explanation: 'Jack Daniel\'s and George Dickel are primary examples of Tennessee Whiskey. The others are Kentucky bourbons.'
	},
	{
		id: 'tennessee-base-rules',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Beyond its own requirements, Tennessee Whiskey must meet the criteria for which style?',
		options: ['Bourbon', 'Rye Whiskey', 'Corn Whiskey', 'Light Whiskey'],
		answer: 'Bourbon',
		explanation: 'Tennessee Whiskey meets bourbon criteria, then adds Tennessee production and the Lincoln County Process.'
	},
	{
		id: 'tennessee-aging-location',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What minimum aging period in Tennessee does Tennessee Whiskey require?',
		options: ['None', '1 year', '2 years', '4 years'],
		answer: 'None',
		explanation: 'Tennessee Whiskey must be aged in Tennessee, but with no minimum period, unlike Kentucky Straight Bourbon\'s 1-year rule.'
	},
	{
		id: 'rye-barrel',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What type of barrel must American rye whiskey mature in?',
		options: ['New charred oak', 'Used oak', 'Uncharred new oak', 'Any oak up to 700 liters'],
		answer: 'New charred oak',
		explanation: 'Rye whiskey follows bourbon\'s barrel and proof rules, including maturation in new charred oak.'
	},
	{
		id: 'straight-rye-flavor',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Compared with bourbon, straight rye is generally...',
		options: ['Spicier and drier', 'Sweeter and softer', 'Smokier and more medicinal', 'Lighter and more neutral'],
		answer: 'Spicier and drier',
		explanation: 'Straight rye is generally spicier and drier than bourbon.'
	},
	{
		id: 'straight-rye-blending',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which rule applies to Straight Rye Whiskey?',
		options: [
			'No blending with other whisky types',
			'At least 4 years of aging',
			'Bottling at exactly 100° proof',
			'Production in Pennsylvania or Maryland'
		],
		answer: 'No blending with other whisky types',
		explanation: 'Straight rye requires at least 2 years of aging, an age statement if under 4 years, no blending with other whisky types, and no additives.'
	},
	{
		id: 'malt-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'American Malt Whiskey (not American Single Malt) requires what share of malted barley?',
		options: ['At least 51%', 'At least 80%', '100%', 'No minimum'],
		answer: 'At least 51%',
		explanation: 'American Malt Whiskey uses at least 51% malted barley, while American Single Malt requires 100%.'
	},
	{
		id: 'malt-whiskey-stills',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which statement about American Malt Whiskey is true?',
		options: [
			'It is not required to use pot stills',
			'It must be double distilled in pot stills',
			'It may be aged in used oak',
			'It must be made at a single distillery'
		],
		answer: 'It is not required to use pot stills',
		explanation: 'American Malt Whiskey follows bourbon\'s proof limits and new charred oak rule, and it does not require pot stills.'
	},
	{
		id: 'malt-vs-single-malt-oak',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which barley-based U.S. category must mature in new charred oak?',
		options: ['American Malt Whiskey', 'American Single Malt', 'Both', 'Neither'],
		answer: 'American Malt Whiskey',
		explanation: 'American Malt Whiskey requires new charred oak, while American Single Malt also allows used or uncharred new oak.'
	},
	{
		id: 'corn-whiskey-aging',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Does Corn Whiskey need to be aged?',
		options: [
			'No, and it is often sold unaged',
			'Yes, for at least 2 years',
			'Yes, for at least 6 months',
			'Yes, but only in new charred oak'
		],
		answer: 'No, and it is often sold unaged',
		explanation: 'Corn Whiskey does not require aging and is often sold unaged. If aged, it must use used or uncharred new oak.'
	},
	{
		id: 'corn-whiskey-white-dog',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Unaged Corn Whiskey is often called what, and linked to which tradition?',
		options: [
			'White dog, linked to moonshine',
			'Poitín, linked to Irish farmhouses',
			'New make, linked to Scotch',
			'Shochu, linked to Japanese distilling'
		],
		answer: 'White dog, linked to moonshine',
		explanation: 'Corn Whiskey is often sold unaged as white dog and is tied to the American moonshine tradition.'
	},
	{
		id: 'bottled-in-bond-warehouse',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Where must Bottled-in-Bond whiskey be aged?',
		options: [
			'In a federally bonded warehouse',
			'In a Kentucky rickhouse',
			'At the bottler\'s facility',
			'Anywhere, as long as it is stated on the label'
		],
		answer: 'In a federally bonded warehouse',
		explanation: 'Bottled-in-Bond whiskey is aged under government supervision in a federally bonded warehouse.'
	},
	{
		id: 'bottled-in-bond-purpose',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What does the Bottled-in-Bond designation primarily guarantee?',
		options: ['Authenticity', 'A specific mash bill', 'Single barrel bottling', 'Kentucky origin'],
		answer: 'Authenticity',
		explanation: 'With strict rules and the distillery named on the label, Bottled-in-Bond is a government-backed guarantee of authenticity.'
	},
	{
		id: 'light-whiskey-flavor',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What flavor profile is Light Whiskey designed for?',
		options: ['Lighter and more neutral', 'Heavily peated', 'Rich and sherried', 'Spicy and rye-forward'],
		answer: 'Lighter and more neutral',
		explanation: 'High distillation proof and used or uncharred new oak give Light Whiskey a lighter, more neutral profile.'
	},
	{
		id: 'light-whiskey-oak',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What type of oak is Light Whiskey aged in?',
		options: ['Used or uncharred new oak', 'New charred oak only', 'Ex-wine casks only', 'It is never aged'],
		answer: 'Used or uncharred new oak',
		explanation: 'Like aged Corn Whiskey, Light Whiskey uses used or uncharred new oak rather than new charred oak.'
	},
	{
		id: 'blended-whiskey-remainder',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Beyond its straight whiskey portion, what may make up the rest of American Blended Whiskey?',
		options: [
			'Unaged neutral grain spirit or light whiskey',
			'Only other straight whiskeys',
			'Imported Scotch or Canadian whisky',
			'Brandy or rum'
		],
		answer: 'Unaged neutral grain spirit or light whiskey',
		explanation: 'The remainder of Blended Whiskey may be unaged neutral grain spirit or light whiskey, with coloring or flavoring allowed.'
	},
	{
		id: 'american-single-malt-grain',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What mash bill is required for American Single Malt?',
		options: ['100% malted barley', 'At least 51% malted barley', 'At least 80% malted barley', 'Malted barley and rye'],
		answer: '100% malted barley',
		explanation: 'American Single Malt must be made from a fermented mash of 100% malted barley.'
	},
	{
		id: 'american-single-malt-barrel-size',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'What is the maximum barrel size for American Single Malt?',
		options: ['200 liters', '500 liters', '700 liters', 'No limit'],
		answer: '700 liters',
		explanation: 'American Single Malt must be stored in oak barrels no larger than 700 liters.'
	},
	{
		id: 'american-single-malt-straight',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'American Single Malt has no minimum age, but how long must it age to be labeled straight?',
		options: ['1 year', '2 years', '3 years', '4 years'],
		answer: '2 years',
		explanation: 'American Single Malt establishes a straight designation at 2 years of aging.'
	},
	{
		id: 'us-new-charred-oak-exceptions',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which pair of U.S. categories uses used or uncharred new oak instead of new charred oak?',
		options: [
			'Corn Whiskey and Light Whiskey',
			'Rye Whiskey and Wheat Whiskey',
			'Bourbon and Tennessee Whiskey',
			'Malt Whiskey and Rye Whiskey'
		],
		answer: 'Corn Whiskey and Light Whiskey',
		explanation: 'Aged Corn Whiskey and Light Whiskey use used or uncharred new oak. Bourbon, rye, wheat, and malt whiskey need new charred oak.'
	},
	{
		id: 'us-proof-conversion',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: LEGAL,
		question: 'An American whiskey bottled at 45% ABV is labeled as how many proof?',
		options: ['45°', '80°', '90°', '100°'],
		answer: '90°',
		explanation: 'U.S. proof is double the ABV, so 45% ABV is 90° proof, just as 40% ABV is 80°.'
	},
	{
		id: 'tennessee-charcoal-style',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which U.S. style requires charcoal filtering?',
		options: ['Tennessee Whiskey', 'Kentucky Straight Bourbon', 'Straight Rye Whiskey', 'Light Whiskey'],
		answer: 'Tennessee Whiskey',
		explanation: 'Tennessee Whiskey must use the Lincoln County Process, filtering spirit through sugar maple charcoal.'
	},
	{
		id: 'lincoln-county-timing',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'When does the Lincoln County Process filtering take place?',
		options: [
			'Before or during aging',
			'Only after aging, before bottling',
			'Before fermentation',
			'Between the first and second distillations'
		],
		answer: 'Before or during aging',
		explanation: 'Tennessee Whiskey is filtered through sugar maple charcoal before or during aging.'
	},
	{
		id: 'highest-corn-category',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which U.S. category requires the highest share of corn?',
		options: ['Corn Whiskey', 'Bourbon', 'Tennessee Whiskey', 'Kentucky Straight Bourbon'],
		answer: 'Corn Whiskey',
		explanation: 'Corn Whiskey requires at least 80% corn. Bourbon and its sub-styles require 51%.'
	},
	{
		id: 'light-whiskey-not-bourbon',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Why can Light Whiskey never qualify as bourbon?',
		options: [
			'It is distilled above bourbon\'s 160° limit',
			'It contains less than 51% corn',
			'It is bottled below 80° proof',
			'It is made outside the United States'
		],
		answer: 'It is distilled above bourbon\'s 160° limit',
		explanation: 'Light Whiskey is distilled between 161° and 189° proof, above bourbon\'s 160° ceiling, and it is aged in used or uncharred oak.'
	},
	{
		id: 'rye-distillation-proof',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'American rye whiskey may be distilled to no more than...',
		options: ['125° proof', '160° proof', '189° proof', '190° proof'],
		answer: '160° proof',
		explanation: 'Rye whiskey follows bourbon\'s proof limits: distilled to no more than 160°, barreled at no more than 125°, and bottled at no less than 80°.'
	},
	{
		id: 'blended-whiskey-label',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which word must appear on the label of American Blended Whiskey?',
		options: ['Blended', 'Straight', 'Bonded', 'Light'],
		answer: 'Blended',
		explanation: 'Blended Whiskey must be labeled as blended.'
	},
	{
		id: 'blended-whiskey-coloring',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which of these may American Blended Whiskey contain, unlike straight whiskey?',
		options: ['Coloring or flavoring', 'Wood chips', 'Fruit juice', 'Nothing beyond water'],
		answer: 'Coloring or flavoring',
		explanation: 'Blended Whiskey may contain coloring or flavoring. Straight whiskey allows no additives.'
	},
	{
		id: 'bottled-in-bond-distilleries',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Bottled-in-Bond whiskey may come from how many distilleries?',
		options: ['One', 'Two', 'Up to three', 'Any number, if disclosed'],
		answer: 'One',
		explanation: 'Bottled-in-Bond whiskey must be the product of one distiller at one distillery.'
	},
	{
		id: 'bottled-in-bond-season',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Bottled-in-Bond whiskey must be the product of how many distillation seasons?',
		options: ['One', 'Two', 'Four', 'No limit'],
		answer: 'One',
		explanation: 'Bottled-in-Bond whiskey must come from a single distillation season.'
	},
	{
		id: 'malt-vs-single-malt-caramel',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'Which barley-based U.S. category permits caramel coloring if disclosed?',
		options: ['American Single Malt', 'American Malt Whiskey', 'Both', 'Neither'],
		answer: 'American Single Malt',
		explanation: 'American Single Malt permits disclosed caramel coloring, while American Malt Whiskey follows bourbon\'s no-additives rule.'
	},
	{
		id: 'scenario-kentucky-aging',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'A straight bourbon is distilled in Kentucky, then aged entirely in Indiana for 3 years. Why can it not be labeled Kentucky Straight Bourbon?',
		options: [
			'It was not aged in Kentucky for at least 1 year',
			'It is younger than 4 years',
			'It was not bottled at 100° proof',
			'It can be; distillation in Kentucky is enough'
		],
		answer: 'It was not aged in Kentucky for at least 1 year',
		explanation: 'Kentucky Straight Bourbon requires both Kentucky distillation and at least 1 year of aging in Kentucky.'
	},
	{
		id: 'scenario-missing-age-statement',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'A straight bourbon aged 3 years is bottled with no age statement. What is wrong with the label?',
		options: [
			'Straight bourbon under 4 years must state its age',
			'Nothing; straight bourbon never needs an age statement',
			'Straight bourbon must be aged 4 years',
			'Only Bottled-in-Bond whiskey may omit an age statement'
		],
		answer: 'Straight bourbon under 4 years must state its age',
		explanation: 'Straight bourbon aged at least 2 years but under 4 years must carry an age statement.'
	},
	{
		id: 'scenario-high-corn-new-oak',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'A whiskey made from 85% corn is aged in new charred oak. Which label does it qualify for?',
		options: ['Bourbon', 'Corn Whiskey', 'Light Whiskey', 'Both Bourbon and Corn Whiskey'],
		answer: 'Bourbon',
		explanation: 'It meets bourbon\'s 51% corn rule, but aged Corn Whiskey must use used or uncharred new oak, not new charred oak.'
	},
	{
		id: 'scenario-malt-used-casks',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		topic: VARIETIES,
		question: 'A U.S. whiskey from 100% malted barley, distilled at one distillery to 150° proof, is aged in used sherry casks. Which category does it fit?',
		options: ['American Single Malt', 'American Malt Whiskey', 'Light Whiskey', 'Blended Whiskey'],
		answer: 'American Single Malt',
		explanation: 'American Single Malt allows used oak. American Malt Whiskey requires new charred oak, so the used sherry casks rule it out.'
	}
];
