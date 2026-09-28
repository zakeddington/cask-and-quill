import { WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Japan
export const REGIONS_JAPAN_QUESTIONS = [
	{
		id: 'japan-standards-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'In what year did Japan adopt its current whisky standards?',
		options: ['1923', '1989', '2009', '2021'],
		answer: '2021',
		explanation: 'The Japan Spirits & Liqueurs Makers Association standards were adopted in 2021.'
	},
	{
		id: 'japan-pre-2021-gap',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What gap did Japan\'s 2021 whisky standards close?',
		options: [
			'Imported foreign whisky could be bottled as "Japanese whisky"',
			'Whisky could be sold before aging 1 year',
			'Distilleries could use any cask size',
			'Caramel coloring was undisclosed'
		],
		answer: 'Imported foreign whisky could be bottled as "Japanese whisky"',
		explanation: 'Before 2021 there were no binding domestic rules, so imported whisky could be labeled Japanese.'
	},
	{
		id: 'japan-water-requirement',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which unusual requirement do Japan\'s whisky standards include?',
		options: [
			'Water must be extracted in Japan',
			'Casks must be made of Mizunara oak',
			'Barley must be grown in Japan',
			'Bottles must list the still shape'
		],
		answer: 'Water must be extracted in Japan',
		explanation: 'Japanese whisky must use water extracted in Japan.'
	},
	{
		id: 'japan-dominant-companies',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Which two companies dominate Blended Japanese Whisky?',
		options: [
			'Diageo and Pernod Ricard',
			'Suntory and Nikka',
			'Kavalan and Omar',
			'Amrut and Paul John'
		],
		answer: 'Suntory and Nikka',
		explanation: 'Suntory and Nikka dominate the category.'
	},
	{
		id: 'japan-blending-diversity',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Cross-company barrel exchange is rare in Japan. How do Japanese distilleries create blending diversity instead?',
		options: [
			'By running multiple still shapes in-house',
			'By importing Scotch for blending',
			'By aging only in Mizunara oak',
			'By using a single standard yeast strain'
		],
		answer: 'By running multiple still shapes in-house',
		explanation: 'Japanese distilleries commonly run multiple still shapes and diverse casks to produce varied components on site.'
	}
];
