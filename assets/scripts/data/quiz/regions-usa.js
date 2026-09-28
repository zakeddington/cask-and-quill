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
			'New charred oak only',
			'Used oak only',
			'Ex-sherry casks only'
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
			'Kentucky (lighter) and Tennessee (heavier)',
			'Virginia (lighter) and New York (heavier)',
			'Indiana (lighter) and Ohio (heavier)'
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
	}
];
