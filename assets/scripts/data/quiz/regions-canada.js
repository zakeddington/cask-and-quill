import { WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Canada
export const REGIONS_CANADA_QUESTIONS = [
	{
		id: 'canada-rye-synonym',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'In Canada, "rye whisky" is legally...',
		options: [
			'Synonymous with Canadian whisky, regardless of rye content',
			'Required to contain at least 51% rye',
			'Required to contain 100% rye',
			'Not a permitted label term'
		],
		answer: 'Synonymous with Canadian whisky, regardless of rye content',
		explanation: 'Canadian whisky was historically high in rye, but that is not required today.'
	},
	{
		id: 'canada-no-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Which of these has no distillation ceiling for whisky?',
		options: ['Scotland', 'Ireland', 'United States', 'Canada'],
		answer: 'Canada',
		explanation: 'Canada specifies no distillation ceiling. Scotland and Ireland cap at 94.8% ABV, and the U.S. at 95%.'
	},
	{
		id: 'canada-other-spirits',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Canadian whisky may include up to what percentage of other spirits, wine, or flavorings?',
		options: ['2%', '5%', '9.09%', '20%'],
		answer: '9.09%',
		explanation: 'Canada permits caramel coloring, caramel flavoring, and up to 9.09% of other spirits, wine, or flavorings.'
	},
	{
		id: 'canada-examples',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		topic: VARIETIES,
		question: 'Crown Royal and Canadian Club are examples of whisky from which country?',
		options: ['United States', 'Canada', 'Ireland', 'Scotland'],
		answer: 'Canada',
		explanation: 'Canadian whisky comes from a blending-focused tradition and is often light and smooth.'
	},
	{
		id: 'canada-mash-bill',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'What mash bill restrictions apply to Canadian whisky?',
		options: [
			'None, since any grain combination is allowed',
			'At least 51% rye',
			'At least 51% corn',
			'At least 30% malted barley'
		],
		answer: 'None, since any grain combination is allowed',
		explanation: 'Canada permits any grain or combination of grains with no specific percentages.'
	}
];
