import { LABELING_PRODUCERS, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: People & Producers
export const LEXICON_PEOPLE_PRODUCERS_QUESTIONS = [
	{
		id: 'cooper-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cooper',
		question: 'What does a cooper do?',
		options: ['Makes barrels and casks', 'Operates the spirit still', 'Malts barley', 'Blends whisky'],
		answer: 'Makes barrels and casks',
		explanation: 'A cooper makes and repairs barrels and casks. The craft and the workshop are both called cooperage.'
	},
	{
		id: 'independent-bottler-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'independent-bottler',
		question: 'What is an independent bottler?',
		options: [
			'A company that buys and bottles other distilleries\' whisky',
			'A distillery that bottles only the whisky it makes',
			'A regulator that inspects distillery bottling lines',
			'A glassmaker that produces custom whisky bottles'
		],
		answer: 'A company that buys and bottles other distilleries\' whisky',
		explanation: 'Many Scottish independent bottlers sell whisky under the original distillery\'s name, with their own name noted.'
	},
	{
		id: 'ndp-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'ndp-non-distiller-producer',
		question: 'What does NDP stand for in the whiskey industry?',
		options: ['Non-Distiller Producer', 'New Distillery Permit', 'National Distillers Program', 'Natural Distilled Product'],
		answer: 'Non-Distiller Producer',
		explanation: 'An NDP buys whisky from a distillery to sell under its own brand name rather than distilling it.'
	},
	{
		id: 'master-blender-role',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'master-blender',
		question: 'What does a master blender do?',
		options: [
			'Chooses which casks go into a batch for a flavor profile',
			'Runs the column still during each distillation',
			'Inspects and certifies casks for the government',
			'Grows and malts the barley used in the mash'
		],
		answer: 'Chooses which casks go into a batch for a flavor profile',
		explanation: 'The master blender selects casks or lots to hit a specific profile. The title is not regulated.'
	},
	{
		id: 'silent-distillery',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'silent',
		question: 'A "silent" distillery is one that...',
		options: [
			'Is intact but no longer operating',
			'Has been fully demolished',
			'Produces only unpeated whisky',
			'Offers no public tours'
		],
		answer: 'Is intact but no longer operating',
		explanation: 'A silent distillery is also called mothballed.'
	},
	{
		id: 'silent-season',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'silent-season',
		question: 'What is a distillery\'s "silent season"?',
		options: [
			'An annual production pause for maintenance and repairs',
			'The months when whisky cannot legally be sold',
			'The period when casks rest untouched after filling',
			'The winter months when warehouses are sealed'
		],
		answer: 'An annual production pause for maintenance and repairs',
		explanation: 'The silent season is when a distillery stops production each year, generally for maintenance.'
	},
	{
		id: 'marrying-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'marrying',
		question: 'In whisky production, what is "marrying"?',
		options: [
			'Resting blended whisky in a vat before bottling',
			'Pairing a whisky with food at a formal tasting',
			'Joining two distilleries under a single owner',
			'Combining heads and tails for redistillation'
		],
		answer: 'Resting blended whisky in a vat before bottling',
		explanation: 'Marrying is not required, but some producers believe it gives a better-integrated whisky.'
	},
	{
		id: 'expression-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'expression',
		question: 'In whisky, what is an "expression"?',
		options: [
			'A specific bottling or variant from a distillery',
			'The aroma released when water is added',
			'A tasting note written by a critic',
			'The shape of a pot still'
		],
		answer: 'A specific bottling or variant from a distillery',
		explanation: 'Expressions from one distillery can differ by age, cask type, strength, or release series.'
	},
	{
		id: 'rectifier-definition',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'rectifier',
		question: 'In the whiskey trade, what is a rectifier?',
		options: [
			'A producer that buys spirit and processes or blends it',
			'A device that corrects hydrometer proof readings',
			'An inspector who certifies label age statements',
			'A still designed to remove methanol from spirit'
		],
		answer: 'A producer that buys spirit and processes or blends it',
		explanation: 'A rectifier works with purchased spirit rather than making it from grain, and the distinction matters legally for labeling.'
	},
	{
		id: 'blending-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'blending',
		question: 'What is blending in whisky production?',
		options: [
			'Combining whiskies of different ages, casks, or types',
			'Adding water to lower the bottling strength',
			'Mixing several grains before mashing',
			'Moving whisky into a second cask to finish it'
		],
		answer: 'Combining whiskies of different ages, casks, or types',
		explanation: 'Blending combines whiskies of different ages, casks, distilleries, or types to achieve a desired flavor profile.'
	},
	{
		id: 'blending-components',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'blending',
		question: 'Blending can combine which kinds of whisky?',
		options: ['Malts, grains, or both', 'Only malts from one distillery', 'Only grain whiskies', 'Only whiskies of the same age'],
		answer: 'Malts, grains, or both',
		explanation: 'Blending can be done with malt whiskies, grain whiskies, or a combination of the two.'
	},
	{
		id: 'cooperage-meanings',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'cooperage',
		question: 'Which of these is NOT a meaning of "cooperage"?',
		options: [
			'The craft of making and repairing casks',
			'A business that produces casks',
			'Casks themselves, as in "new cooperage"',
			'The warehouse where casks mature'
		],
		answer: 'The warehouse where casks mature',
		explanation: 'Cooperage can mean the craft, the premises that makes casks, or the casks themselves. A maturation warehouse is something else.'
	},
	{
		id: 'cooperage-flavor',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'cooperage',
		question: 'Why does cooperage matter so much to whisky?',
		options: [
			'Cask quality strongly shapes final flavor',
			'It sets the legal bottling strength',
			'It decides which grain goes in the mash',
			'It controls the fermentation temperature'
		],
		answer: 'Cask quality strongly shapes final flavor',
		explanation: 'The quality and preparation of the cask is one of the most significant influences on a whisky\'s final flavor.'
	},
	{
		id: 'master-distiller-role',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'master-distiller',
		question: 'What is a master distiller mainly responsible for?',
		options: [
			'Overseeing production and spirit character',
			'Selecting casks for a blended batch',
			'Enforcing federal labeling rules',
			'Building and repairing casks'
		],
		answer: 'Overseeing production and spirit character',
		explanation: 'A master distiller oversees distillation and maintains the spirit\'s character, often guiding fermentation and maturation too.'
	},
	{
		id: 'master-distiller-title',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'master-distiller',
		question: 'Which is true of the titles "master distiller" and "master blender"?',
		options: [
			'Neither title is legally regulated',
			'Both require a government license',
			'Only master distiller is regulated',
			'Only master blender is regulated'
		],
		answer: 'Neither title is legally regulated',
		explanation: 'Both titles are unregulated, though master distiller usually refers to an experienced production leader.'
	},
	{
		id: 'sourced-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'sourced',
		question: 'What does it mean when a whiskey is "sourced"?',
		options: [
			'It was bought from a distiller and sold as another brand',
			'It was made only from locally grown grain',
			'It was aged in casks from another distillery',
			'It was drawn from one distillery\'s best casks'
		],
		answer: 'It was bought from a distiller and sold as another brand',
		explanation: 'Sourced whiskey is bought from a distiller by a third party and bottled as a distinct brand, sometimes blended with other whiskies.'
	},
	{
		id: 'ndp-scenario',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'ndp-non-distiller-producer',
		question: 'A company owns no stills but sells whiskey bought from a distillery under its own brand. What is it?',
		options: ['A non-distiller producer', 'A master distiller', 'A silent distillery', 'A cooperage'],
		answer: 'A non-distiller producer',
		explanation: 'A non-distiller producer (NDP) does not distill but buys whisky from a distillery to sell under its own brand name.'
	},
	{
		id: 'vatting-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'vatting',
		question: 'What is vatting?',
		options: [
			'Combining whiskies in a large vessel before bottling',
			'Aging whisky in a large wooden tun',
			'Steeping barley in water before malting',
			'Holding new make in steel before casking'
		],
		answer: 'Combining whiskies in a large vessel before bottling',
		explanation: 'Vatting combines multiple whiskies in a vat before bottling. In some contexts it is synonymous with blending.'
	},
	{
		id: 'vatting-blended-malt',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'vatting',
		question: 'Vatting is specifically associated with which style of Scotch?',
		options: ['Blended Malt', 'Single Grain', 'Single Cask', 'Cask Strength'],
		answer: 'Blended Malt',
		explanation: 'Vatting is specifically associated with Blended Malt Scotch, which combines malt whiskies from more than one distillery.'
	},
	{
		id: 'marrying-required',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'marrying',
		question: 'Is a marrying period required before a blended whisky is bottled?',
		options: ['No, it is optional', 'Yes, for all Scotch', 'Yes, for blends only', 'Only at cask strength'],
		answer: 'No, it is optional',
		explanation: 'Marrying is not a requirement, but some producers believe the rest gives a better-integrated whisky.'
	},
	{
		id: 'rectifier-vs-distiller',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'rectifier',
		question: 'What sets a rectifier apart from a distiller?',
		options: [
			'It does not make spirit from grain',
			'It uses only column stills',
			'It bottles only at barrel proof',
			'It must age spirit in new oak'
		],
		answer: 'It does not make spirit from grain',
		explanation: 'A rectifier buys base spirit and processes or blends it instead of producing spirit from grain, which matters legally for labeling.'
	}
];
