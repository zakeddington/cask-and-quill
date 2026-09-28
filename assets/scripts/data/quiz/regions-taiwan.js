import { WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Taiwan
export const REGIONS_TAIWAN_QUESTIONS = [
	{
		id: 'taiwan-producers',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Kavalan and Omar are whisky brands from which country?',
		options: ['Japan', 'India', 'Taiwan', 'Australia'],
		answer: 'Taiwan',
		explanation: 'Kavalan is based in Yilan, and Omar is made by Nantou Distillery.'
	},
	{
		id: 'taiwan-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What is Taiwan\'s minimum aging requirement for whisky?',
		options: ['None', '1 year', '2 years', '3 years'],
		answer: '2 years',
		explanation: 'Taiwan requires 2 years in wooden casks.'
	},
	{
		id: 'taiwan-angels-share',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Taiwan\'s climate drives an angel\'s share of roughly 12% per year. What is Scotland\'s typical rate?',
		options: ['About 2%', 'About 6%', 'About 10%', 'About 15%'],
		answer: 'About 2%',
		explanation: 'Because of this, whisky aged 4 to 6 years in Taiwan can taste comparable to a 12- to 18-year-old Scotch.'
	},
	{
		id: 'taiwan-omar-casks',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Nantou Distillery also runs a fruit winery. What does this let Omar do?',
		options: [
			'Finish whisky in casks that held lychee, plum, or orange wine',
			'Ferment its wash with fruit sugars',
			'Blend fruit brandy into its single malt',
			'Use fruit wood to smoke its barley'
		],
		answer: 'Finish whisky in casks that held lychee, plum, or orange wine',
		explanation: 'Taiwanese producers also favor first-fill and heavily toasted casks to stand up to fast tropical maturation.'
	},
	{
		id: 'taiwan-dominant-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Unlike most whisky-producing nations, where blends lead, which category dominates Taiwan\'s output?',
		options: ['Single Grain', 'Single Malt', 'Blended', 'Rice Whisky'],
		answer: 'Single Malt',
		explanation: 'Single Malt, led by Kavalan and Omar, dominates Taiwan\'s whisky output.'
	},
	{
		id: 'taiwan-single-grain',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Taichung Distillery\'s Grainvest line is a Taiwanese single grain distilled from which grain?',
		options: ['Rice', 'Corn', 'Wheat', 'Sorghum'],
		answer: 'Wheat',
		explanation: 'Grainvest is distilled from wheat in column stills, offering a lighter, sweeter style.'
	},
	{
		id: 'taiwan-no-origin-rule',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Why do Kavalan and Nantou voluntarily follow Scotch-style practices such as banning imported bulk spirit?',
		options: [
			'Taiwan\'s law sets no domestic-production requirement',
			'Taiwan adopted Scotch law directly',
			'It is required for export to Japan',
			'Their parent companies are Scottish'
		],
		answer: 'Taiwan\'s law sets no domestic-production requirement',
		explanation: 'Taiwan\'s statute defines a generic tax category rather than a protected designation of origin.'
	},
	{
		id: 'compare-two-year-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which of these has a 2-year minimum aging requirement rather than 3?',
		options: ['Scotland', 'Ireland', 'Japan', 'Taiwan'],
		answer: 'Taiwan',
		explanation: 'Scotland, Ireland, and Japan require 3 years. Taiwan and Australia require 2.'
	}
];
