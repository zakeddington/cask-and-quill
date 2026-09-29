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
			'Barley grown organically without pesticides',
			'Germinated barley that has not yet been dried',
			'Malt that has been lightly smoked over peat',
			'Unripe barley harvested early in the season'
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
			'In southern England, including Kent and Sussex',
			'In central Kentucky, including the Bluegrass region',
			'In the Canadian Prairies, including Alberta'
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
			'Charcoal made by slowly burning oak offcuts',
			'Seaweed dried on the shore and burned as fuel',
			'Soft coal mined from the Scottish Highlands'
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
	},
	{
		id: 'barley-malt-whisky',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'barley',
		question: 'Which form of barley is required to make malt whisky?',
		options: ['Malted barley', 'Unmalted barley', 'Roasted barley', 'Pearl barley'],
		answer: 'Malted barley',
		explanation: 'Malt whisky requires malted barley, though unmalted barley can be used in other types of whisky.'
	},
	{
		id: 'barley-unmalted-use',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'barley',
		question: 'Which statement about barley in whisky-making is true?',
		options: [
			'Unmalted barley can be used in some whisky types',
			'Only malted barley may be used in any whisky',
			'Barley is banned from bourbon mash bills',
			'Barley must make up half of every mash bill'
		],
		answer: 'Unmalted barley can be used in some whisky types',
		explanation: 'Malted barley is required for malt whisky, but unmalted barley can go into other types of whisky.'
	},
	{
		id: 'unmalted-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'unmalted',
		question: 'What does "unmalted" mean when describing barley?',
		options: [
			'It has not gone through malting',
			'It was malted but not peated',
			'It was grown without fertilizer',
			'It was milled before kilning'
		],
		answer: 'It has not gone through malting',
		explanation: 'Unmalted grain skips steeping, germination, and kilning. Irish whiskeys sometimes combine malted and unmalted barley.'
	},
	{
		id: 'corn-bourbon-primary',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'corn',
		question: 'Which grain is the primary grain in bourbon?',
		options: ['Corn', 'Rye', 'Wheat', 'Malted barley'],
		answer: 'Corn',
		explanation: 'Corn must make up at least 51% of a bourbon mash bill, with other grains playing a secondary role.'
	},
	{
		id: 'flavoring-grain-scenario',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'flavoring-grain',
		question: 'A bourbon\'s mash bill is 70% corn, 20% rye, and 10% malted barley. Which is its flavoring grain?',
		options: ['Corn', 'Rye', 'Malted barley', 'It has none'],
		answer: 'Rye',
		explanation: 'The flavoring grain is the secondary grain, such as rye or wheat, that shapes the flavor when present in a large amount.'
	},
	{
		id: 'yeast-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'yeast',
		question: 'What is yeast?',
		options: [
			'The microorganism that drives fermentation',
			'The enzyme that converts starch to sugar',
			'The grain residue left after mashing',
			'The mineral deposit inside a washback'
		],
		answer: 'The microorganism that drives fermentation',
		explanation: 'Yeast consumes sugars and produces ethanol, CO₂, and flavor-active compounds.'
	},
	{
		id: 'yeast-strains',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'yeast',
		question: 'Why might a distillery care which yeast strain it uses?',
		options: [
			'Strains can change the whisky\'s character',
			'Only one strain is legal for malt whisky',
			'The strain decides which casks are used',
			'The strain sets the final bottling strength'
		],
		answer: 'Strains can change the whisky\'s character',
		explanation: 'Different yeast strains produce different flavor-active compounds, which can meaningfully affect a whisky\'s character.'
	},
	{
		id: 'peat-flavor-not',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'peat',
		question: 'Which of these flavors is NOT typically attributed to peat smoke?',
		options: ['Medicinal', 'Earthy', 'Iodine', 'Coconut'],
		answer: 'Coconut',
		explanation: 'Peat smoke gives smoky, medicinal, earthy, or iodine-like flavors. Coconut is more often linked to oak.'
	},
	{
		id: 'oak-quercus-alba',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'oak',
		question: 'Quercus alba is the botanical name for which oak?',
		options: ['American white oak', 'European oak', 'Japanese Mizunara oak', 'Spanish cork oak'],
		answer: 'American white oak',
		explanation: 'Quercus alba, American white oak, dominates bourbon production. European oaks are Quercus robur and Quercus petraea.'
	},
	{
		id: 'sherry-fortified-wine',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'sherry',
		question: 'What type of drink is sherry?',
		options: ['A fortified wine', 'A sparkling wine', 'A grape brandy', 'A fruit liqueur'],
		answer: 'A fortified wine',
		explanation: 'Sherry is a fortified wine from Jerez. Casks that held it pass some of the wine\'s character into whisky.'
	},
	{
		id: 'caramel-coloring-purpose',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'caramel-coloring-e150a',
		question: 'Why do producers add caramel coloring (E150a) to whisky?',
		options: [
			'To standardize color between batches',
			'To add sweetness to the palate',
			'To give a toffee-like aroma',
			'To extend the whisky\'s shelf life'
		],
		answer: 'To standardize color between batches',
		explanation: 'E150a is a flavorless, odorless colorant used to keep whisky color consistent.'
	}
];
