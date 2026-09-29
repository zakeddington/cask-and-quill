import { STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

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
			'A term requiring a mash of at least 51% rye',
			'A term reserved for whisky made from 100% rye',
			'A term banned from Canadian whisky labels'
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
			'At least 51% rye, as the name "rye" suggests',
			'At least 51% corn, following the bourbon model',
			'At least 30% malted barley for enzyme conversion'
		],
		answer: 'None, since any grain combination is allowed',
		explanation: 'Canada permits any grain or combination of grains with no specific percentages.'
	},
	{
		id: 'canada-regulator',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Which regulations define Canadian whisky?',
		options: [
			'Canada\'s Food and Drug Regulations',
			'The Scotch Whisky Regulations 2009',
			'The TTB Standards of Identity',
			'Regulation (EU) 2019/787'
		],
		answer: 'Canada\'s Food and Drug Regulations',
		explanation: 'Canadian whisky is defined in Division 2 of Canada\'s Food and Drug Regulations, at section B.02.020.'
	},
	{
		id: 'canada-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'What is the minimum aging period for Canadian whisky?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: '3 years',
		explanation: 'Canadian whisky must age at least 3 years, the same minimum as Scotch and Irish whisky.'
	},
	{
		id: 'canada-barrels',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'What cask rule applies to Canadian whisky?',
		options: [
			'Wooden casks not exceeding 700 litres',
			'New charred oak barrels only',
			'Any wooden cask, with no size limit',
			'Ex-bourbon barrels only'
		],
		answer: 'Wooden casks not exceeding 700 litres',
		explanation: 'Canada requires wooden casks no larger than 700 litres. Scotland adds the requirement that the casks be oak.'
	},
	{
		id: 'canada-blending-tradition',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		topic: VARIETIES,
		question: 'Canadian whisky comes from a tradition focused on what?',
		options: ['Blending', 'Heavy peating', 'Single-cask bottling', 'Triple pot distillation'],
		answer: 'Blending',
		explanation: 'Canadian whisky comes from a blending-focused tradition and is often light and smooth.'
	},
	{
		id: 'canada-caramel-flavoring-comparison',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Which of these permits caramel flavoring in whisky, not just caramel coloring?',
		options: ['Scotland', 'Ireland', 'Japan', 'Canada'],
		answer: 'Canada',
		explanation: 'Canada permits caramel coloring and caramel flavoring. Scotland, Ireland, and Japan allow only caramel coloring (E150a).'
	},
	{
		id: 'canada-not-permitted',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Which of these is NOT permitted for Canadian whisky?',
		options: [
			'Adding caramel coloring',
			'Adding a small share of wine',
			'Using a mash of mostly corn',
			'Aging in 1,000-litre casks'
		],
		answer: 'Aging in 1,000-litre casks',
		explanation: 'Canadian whisky must age in wooden casks no larger than 700 litres. Caramel coloring, a limited share of wine, and any grain mix are all allowed.'
	},
	{
		id: 'canada-aging-comparison',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Canada\'s whisky aging minimum matches which of these?',
		options: ['Scotland', 'United States', 'Taiwan', 'Australia'],
		answer: 'Scotland',
		explanation: 'Canada and Scotland both require 3 years. Taiwan and Australia require 2, and the U.S. has no universal minimum.'
	},
	{
		id: 'canada-india-no-ceiling',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'Which pair of countries both specify no distillation ceiling for whisky?',
		options: [
			'Canada and India',
			'Canada and Scotland',
			'India and the United States',
			'Ireland and Japan'
		],
		answer: 'Canada and India',
		explanation: 'Neither Canada nor India sets a distillation ceiling. Scotland and Ireland cap distillation below 94.8% ABV, and the U.S. and Japan at 95%.'
	},
	{
		id: 'canada-scenario-two-year-rye',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'A Canadian distillery ages a mostly corn whisky for 2 years in wooden casks. Can it be sold as Canadian rye whisky?',
		options: [
			'No, because it is aged less than 3 years',
			'No, because it contains too little rye',
			'Yes, because rye is synonymous with Canadian whisky',
			'Yes, because Canada has no aging minimum'
		],
		answer: 'No, because it is aged less than 3 years',
		explanation: 'The low rye content is not a problem, since "rye whisky" is synonymous with Canadian whisky. The 2-year age falls short of Canada\'s 3-year minimum.'
	},
	{
		id: 'canada-scenario-added-wine',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'canada',
		topic: LEGAL,
		question: 'A 4-year-old Canadian whisky has 5% wine blended in for flavor. Can it still be sold as Canadian whisky?',
		options: [
			'Yes, because it is within the 9.09% allowance',
			'No, because only caramel coloring may be added',
			'No, because wine may never be added',
			'Only if it is relabeled as a liqueur'
		],
		answer: 'Yes, because it is within the 9.09% allowance',
		explanation: 'Canada permits up to 9.09% of other spirits, wine, or flavorings. Scotch and Irish whisky would not allow this.'
	}
];
