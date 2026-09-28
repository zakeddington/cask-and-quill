import { SCOTCH_REGIONS, EASY, MEDIUM, LEXICON } from './quiz-constants.js';

// Lexicon: Regions & Terroir
export const LEXICON_REGIONS_TERROIR_QUESTIONS = [
	{
		id: 'islay-pronunciation',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'islay',
		question: 'How is Islay pronounced?',
		options: ['IZ-lay', 'EYE-luh', 'ISS-lee', 'EE-lay'],
		answer: 'EYE-luh',
		explanation: 'Islay is pronounced "EYE-luh."'
	},
	{
		id: 'campbeltown-distillery-count',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'campbeltown',
		question: 'Campbeltown, once called Scotland\'s whisky capital, now has how many working distilleries?',
		options: ['One', 'Three', 'Nine', 'Over twenty'],
		answer: 'Three',
		explanation: 'Campbeltown\'s three operating distilleries are Springbank, Glen Scotia, and Glengyle.'
	},
	{
		id: 'terroir-origin',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'terroir',
		question: 'The concept of terroir in whisky was borrowed from which industry?',
		options: ['Beer', 'Wine', 'Coffee', 'Tea'],
		answer: 'Wine',
		explanation: 'Terroir describes environmental influence (water, barley, peat, climate, warehouse conditions) and remains contested in whisky.'
	}
];
