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
			'A company that buys whisky from other distilleries and bottles it',
			'A distillery that bottles only its own whisky',
			'A regulator that inspects bottling lines',
			'A glassmaker that produces custom bottles'
		],
		answer: 'A company that buys whisky from other distilleries and bottles it',
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
			'Chooses which casks go into a batch to achieve a flavor profile',
			'Operates the column still',
			'Inspects casks for the government',
			'Grows and malts barley'
		],
		answer: 'Chooses which casks go into a batch to achieve a flavor profile',
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
			'Exists intact but is no longer operating',
			'Has been fully demolished',
			'Produces unpeated whisky only',
			'Does not offer public tours'
		],
		answer: 'Exists intact but is no longer operating',
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
			'Resting blended whisky, often in a neutral vat, before bottling',
			'Pairing a whisky with food at a tasting',
			'Joining two distilleries under one owner',
			'Combining the heads and tails for redistillation'
		],
		answer: 'Resting blended whisky, often in a neutral vat, before bottling',
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
			'A producer that buys base spirit and processes or blends it',
			'A device that corrects proof readings',
			'An inspector who certifies age statements',
			'A still that removes methanol'
		],
		answer: 'A producer that buys base spirit and processes or blends it',
		explanation: 'A rectifier works with purchased spirit rather than making it from grain, and the distinction matters legally for labeling.'
	}
];
