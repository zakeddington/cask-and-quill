import { INGREDIENTS_FERMENTATION, STYLES_REGULATIONS, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Ingredients & Grain
export const LEXICON_INGREDIENTS_GRAIN_QUESTIONS = [
	{
		id: 'green-malt-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'green-malt',
		question: 'What is green malt?',
		options: [
			'Barley grown without pesticides',
			'Germinated barley that has not yet been dried',
			'Malt that has been lightly peated',
			'Unripe barley harvested early'
		],
		answer: 'Germinated barley that has not yet been dried',
		explanation: 'Green malt is germinated barley before kilning.'
	},
	{
		id: 'chocolate-malt-flavor',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'chocolate-malt',
		question: 'Chocolate malt is barley dried at higher temperatures. What flavors does this release?',
		options: ['Cocoa', 'Smoke and iodine', 'Green apple', 'Coconut'],
		answer: 'Cocoa',
		explanation: 'The higher drying temperature darkens the malt and releases cocoa flavors.'
	},
	{
		id: 'bere-barley-origin',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'bere-barley',
		question: 'Bere barley, one of Britain\'s oldest barley varieties, is grown mainly where today?',
		options: [
			'In the north of Scotland, including Orkney and Shetland',
			'In Kentucky\'s Bluegrass region',
			'In County Cork, Ireland',
			'On the Kintyre peninsula'
		],
		answer: 'In the north of Scotland, including Orkney and Shetland',
		explanation: 'Bere barley is occasionally used for malt whisky and is grown mainly in the north of Scotland.'
	},
	{
		id: 'flavoring-grain-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'flavoring-grain',
		question: 'In bourbon, what is the secondary grain, such as rye or wheat, called?',
		options: ['Base grain', 'Flavoring grain', 'Adjunct malt', 'Backset grain'],
		answer: 'Flavoring grain',
		explanation: 'The flavoring grain shapes the bourbon\'s profile when present in a large amount.'
	},
	{
		id: 'peat-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'peat',
		question: 'What is peat?',
		options: [
			'Partially decomposed vegetation compressed in bogs',
			'A type of charcoal made from oak',
			'Dried seaweed burned for fuel',
			'Coal mined from the Scottish Highlands'
		],
		answer: 'Partially decomposed vegetation compressed in bogs',
		explanation: 'Peat is dried and burned during malting. Its smoke gives barley smoky, medicinal, earthy, or iodine-like flavors.'
	},
	{
		id: 'oak-bourbon-species',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'oak',
		question: 'Which oak species dominates bourbon production?',
		options: [
			'European oak (Quercus robur)',
			'Sessile oak (Quercus petraea)',
			'American white oak (Quercus alba)',
			'Mizunara (Quercus mongolica)'
		],
		answer: 'American white oak (Quercus alba)',
		explanation: 'American white oak dominates bourbon, European oak is common in Scotch, and Mizunara is a Japanese specialty.'
	},
	{
		id: 'mizunara-origin',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'mizunara',
		question: 'Mizunara is a rare oak species native to which country?',
		options: ['Scotland', 'Japan', 'Spain', 'United States'],
		answer: 'Japan',
		explanation: 'Mizunara (Quercus mongolica) is a Japanese oak that is porous, hard to cooper, rare, and expensive.'
	},
	{
		id: 'mizunara-notes',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'mizunara',
		question: 'Which notes are most associated with Mizunara oak?',
		options: [
			'Incense, sandalwood, and coconut',
			'Smoke, brine, and iodine',
			'Dried fruit, nuts, and sherry',
			'Grass, hay, and green apple'
		],
		answer: 'Incense, sandalwood, and coconut',
		explanation: 'Mizunara imparts distinctive incense, sandalwood, and coconut notes.'
	},
	{
		id: 'sherry-region',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'sherry',
		question: '"Sherry" is the anglicized name of which Spanish region?',
		options: ['Rioja', 'Jerez', 'Porto', 'Montilla'],
		answer: 'Jerez',
		explanation: 'Sherry is a fortified wine from Jerez in southern Spain, and sherry casks are widely used for whisky maturation.'
	},
	{
		id: 'caramel-coloring-not-permitted',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'caramel-coloring-e150a',
		question: 'Caramel coloring (E150a) is NOT permitted in which of these?',
		options: ['Scotch', 'Irish whiskey', 'Bourbon', 'Canadian whisky'],
		answer: 'Bourbon',
		explanation: 'Caramel coloring is allowed in Scotch, Irish, Canadian, and many other whiskies, but not in bourbon or straight American whiskey.'
	},
	{
		id: 'rye-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'rye',
		question: 'U.S. rye whiskey must be made from at least what percentage rye?',
		options: ['20%', '30%', '51%', '80%'],
		answer: '51%',
		explanation: 'U.S. rye whiskey follows bourbon-style rules with at least 51% rye.'
	}
];
