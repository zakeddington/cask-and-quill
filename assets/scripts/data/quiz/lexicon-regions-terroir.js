import { SCOTCH_REGIONS, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

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
	},
	{
		id: 'highlands-label-meaning',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'highlands',
		question: 'A Scotch label reads "Highland Single Malt." What does "Highland" tell you?',
		options: [
			'The region where it was made',
			'The altitude of the warehouse',
			'The peat level of the malt',
			'The age of the whisky'
		],
		answer: 'The region where it was made',
		explanation: 'Highland describes whisky from the Highlands, the whisky-producing region in the northern part of Scotland.'
	},
	{
		id: 'lowlands-distilleries',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'lowlands',
		question: 'Auchentoshan and Glenkinchie are distilleries in which Scotch region?',
		options: ['Lowlands', 'Speyside', 'Islay', 'Campbeltown'],
		answer: 'Lowlands',
		explanation: 'Both are Lowland distilleries. The Lowlands are the whisky-producing region in the south of Scotland.'
	},
	{
		id: 'islands-orkney',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'islands',
		question: 'Highland Park and Scapa, part of the Islands grouping, are made on which islands?',
		options: ['Orkney', 'Skye', 'Mull', 'Arran'],
		answer: 'Orkney',
		explanation: 'Both distilleries are on Orkney. The Islands grouping covers Scotland\'s whisky-producing islands, generally excepting Islay.'
	},
	{
		id: 'speyside-distillery-share',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'speyside',
		question: 'Roughly what share of Scotland\'s malt whisky distilleries are in Speyside?',
		options: ['About a tenth', 'About a quarter', 'More than half', 'Nearly all'],
		answer: 'More than half',
		explanation: 'Speyside contains more than half of Scotland\'s malt whisky distilleries.'
	},
	{
		id: 'speyside-name-origin',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'speyside',
		question: 'The Speyside region takes its name from what?',
		options: ['The River Spey', 'The town of Spey', 'The Spey mountains', 'The Spey family'],
		answer: 'The River Spey',
		explanation: 'Speyside is the whisky-producing region alongside the River Spey.'
	},
	{
		id: 'terroir-not-factor',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'terroir',
		question: 'Which of these is NOT usually cited as a terroir influence on whisky?',
		options: ['Local climate', 'Warehouse conditions', 'Local barley', 'Bottling strength'],
		answer: 'Bottling strength',
		explanation: 'Terroir covers environmental influences such as water, barley, peat, climate, and warehouse conditions. Bottling strength is a production choice.'
	},
	{
		id: 'terroir-status',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'terroir',
		question: 'How is the idea of terroir generally regarded in whisky today?',
		options: [
			'Contested but increasingly discussed',
			'Legally defined in Scotch rules',
			'Accepted without any debate',
			'Dismissed as irrelevant to malt'
		],
		answer: 'Contested but increasingly discussed',
		explanation: 'Terroir remains contested in whisky but is increasingly relevant in craft and single malt discussions.'
	}
];
