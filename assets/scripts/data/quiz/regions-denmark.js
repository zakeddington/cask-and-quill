import { WORLD_WHISKY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Denmark
export const REGIONS_DENMARK_QUESTIONS = [
	{
		id: 'denmark-manifesto',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What did ten Danish distilleries launch in April 2025?',
		options: [
			'The Danish Whisky Manifesto',
			'A binding national whisky law',
			'A registered EU geographical indication',
			'The Nordic Whisky Association'
		],
		answer: 'The Danish Whisky Manifesto',
		explanation: 'The voluntary Manifesto defines national categories ahead of a hoped-for EU GI.'
	},
	{
		id: 'denmark-stauning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Which Danish distillery markets its rye as "The Original Rye Whisky"?',
		options: ['Stauning', 'Slyrs', 'Warenghem', 'Zuidam'],
		answer: 'Stauning',
		explanation: 'Stauning, in West Jutland since 2005, uses locally grown rye and barley and direct-fired stills.'
	},
	{
		id: 'denmark-direct-fire',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Stauning heats its stills using which rarer method?',
		options: ['Direct fire', 'Steam coils', 'Electric elements', 'Solar thermal'],
		answer: 'Direct fire',
		explanation: 'Direct firing is rarer than steam coils and is part of Stauning\'s house style.'
	},
	{
		id: 'denmark-categories',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Which of these is NOT one of the four whisky styles defined by the Danish Whisky Manifesto?',
		options: ['Single Malt', 'Rye', 'Oat', 'Corn'],
		answer: 'Corn',
		explanation: 'The Manifesto defines Single Malt, Rye, Wheat, and Oat whisky.'
	}
];
