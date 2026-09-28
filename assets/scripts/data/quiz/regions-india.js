import { WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: India
export const REGIONS_INDIA_QUESTIONS = [
	{
		id: 'india-imfl-meaning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'What does IMFL stand for in the Indian spirits market?',
		options: [
			'Indian Made Foreign Liquor',
			'Indian Malt and Fine Liquor',
			'International Malt Framework License',
			'Indian Molasses Fermented Liquor'
		],
		answer: 'Indian Made Foreign Liquor',
		explanation: 'IMFL accounts for the large majority of Indian whisky by volume.'
	},
	{
		id: 'india-molasses-base',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Most Indian whisky by volume is built on extra neutral alcohol made from what?',
		options: ['Malted barley', 'Rice', 'Molasses', 'Corn'],
		answer: 'Molasses',
		explanation: 'Brands like McDowell\'s No. 1 and Royal Stag use molasses-based ENA, often with only a small fraction of real malt or grain whisky.'
	},
	{
		id: 'india-imfl-export',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Why can most IMFL whisky not be sold as "whisky" in the US, UK, or EU?',
		options: [
			'It is not grain-based',
			'It is bottled below 40% ABV',
			'It is aged in steel tanks',
			'It uses imported water'
		],
		answer: 'It is not grain-based',
		explanation: 'Because IMFL is built on molasses-based spirit rather than grain, it does not meet those markets\' whisky definitions.'
	},
	{
		id: 'india-blended-malt-minimum',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'FSSAI\'s blended malt/grain whisky category requires as little as what percentage of actual malt or grain whisky?',
		options: ['2%', '10%', '20%', '51%'],
		answer: '2%',
		explanation: 'The rest can be neutral or rectified spirit, and the label often cannot show how much real malt a bottle contains.'
	},
	{
		id: 'india-imwa-founders',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Which of these is NOT a founding member of the Indian Malt Whisky Association?',
		options: ['Amrut', 'Paul John', 'McDowell\'s', 'Rampur'],
		answer: 'McDowell\'s',
		explanation: 'IMWA was launched in March 2025 by Amrut, Paul John, Rampur, and Indri. McDowell\'s is a mass-market IMFL brand.'
	},
	{
		id: 'india-tropical-maturation',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Tropical heat matures Indian single malt roughly how much faster than in Scotland?',
		options: ['About the same', '1.5 times faster', '3 to 4 times faster', '10 times faster'],
		answer: '3 to 4 times faster',
		explanation: 'A young Indian single malt can taste comparable to a much older Scotch.'
	},
	{
		id: 'india-matured-claim',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Under FSSAI rules, how long must a beverage spend in wood to be labeled "matured"?',
		options: ['6 months', '1 year', '2 years', '3 years'],
		answer: '1 year',
		explanation: 'FSSAI\'s general "matured" claim requires at least 1 year in wood and applies to all alcoholic beverages, not just whisky.'
	},
	{
		id: 'india-pure-malt-equivalent',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Indian Pure Malt is similar in concept to which Scotch category?',
		options: ['Single Malt', 'Blended Malt', 'Single Grain', 'Blended Scotch'],
		answer: 'Blended Malt',
		explanation: 'Indian Pure Malt blends single malts from two or more Indian distilleries under IMWA\'s voluntary standard.'
	}
];
