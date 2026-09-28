import { WORLD_WHISKY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: European Union
export const REGIONS_EUROPEAN_UNION_QUESTIONS = [
	{
		id: 'eu-regulation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which regulation defines whisky across the European Union?',
		options: [
			'Regulation (EU) 2019/787',
			'Scotch Whisky Regulations 2009',
			'Irish Whiskey Technical File 2014',
			'FSANZ Standard 2.7.5'
		],
		answer: 'Regulation (EU) 2019/787',
		explanation: 'It sets a bloc-wide floor that member states and regional GIs may build on with stricter rules.'
	},
	{
		id: 'eu-single-malt-pot-still',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'How does EU Single Malt differ from Scotch Single Malt?',
		options: [
			'The EU does not require pot still distillation',
			'The EU allows unmalted barley',
			'The EU has no minimum aging',
			'The EU allows added sweeteners'
		],
		answer: 'The EU does not require pot still distillation',
		explanation: 'A column-distilled spirit can technically qualify as "single malt" under EU rules alone.'
	},
	{
		id: 'eu-sweetening-tolerance',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What sweetening tolerance does EU law allow for whisky?',
		options: ['Zero', 'Up to 2 g/L', 'Up to 10 g/L', 'No limit'],
		answer: 'Zero',
		explanation: 'EU whisky has zero sweetening tolerance, stricter than most other EU spirit categories. Only caramel coloring is permitted.'
	},
	{
		id: 'eu-france-market',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which country is the world\'s largest whisky-consuming market and has over 120 active distilleries?',
		options: ['Germany', 'France', 'Netherlands', 'Denmark'],
		answer: 'France',
		explanation: 'France is the largest EU whisky producer by distillery count and the world\'s largest whisky-consuming market.'
	},
	{
		id: 'eu-slyrs',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Slyrs, which leads German whisky, is based in which region?',
		options: ['Bavaria', 'Saxony', 'Hesse', 'Black Forest'],
		answer: 'Bavaria',
		explanation: 'Germany has more than 20 whisky distilleries, led by Bavaria\'s Slyrs.'
	},
	{
		id: 'eu-millstone',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'The Millstone range of single malt and rye comes from which country?',
		options: ['Belgium', 'Netherlands', 'Germany', 'Denmark'],
		answer: 'Netherlands',
		explanation: 'Millstone is bottled by the Zuidam distillery in the Netherlands.'
	},
	{
		id: 'eu-french-gis',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'France holds registered EU geographical indications for whisky from which two regions?',
		options: [
			'Brittany and Alsace',
			'Normandy and Burgundy',
			'Cognac and Armagnac',
			'Provence and Champagne'
		],
		answer: 'Brittany and Alsace',
		explanation: 'Whisky Breton and Whisky Alsacien both require local water and in-region fermentation, distillation, and aging.'
	},
	{
		id: 'eu-armorik',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Armorik, the leading Whisky Breton, is made by which distillery?',
		options: ['Warenghem', 'Slyrs', 'Zuidam', 'Stauning'],
		answer: 'Warenghem',
		explanation: 'The Whisky Breton GI, created in 2015, is led by the Warenghem distillery\'s Armorik.'
	},
	{
		id: 'compare-94-8-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Scotland, Ireland, and the EU share which distillation ceiling?',
		options: ['80% ABV', '90% ABV', 'Less than 94.8% ABV', '95% ABV'],
		answer: 'Less than 94.8% ABV',
		explanation: 'All three cap distillation below 94.8% (189.6°) ABV, while the U.S. and Japan allow up to 95%.'
	}
];
