import { STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Ireland
export const REGIONS_IRELAND_QUESTIONS = [
	{
		id: 'irish-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'Where may Irish whiskey be produced?',
		options: [
			'Anywhere on the island of Ireland, including Northern Ireland',
			'Only in the Republic of Ireland, excluding the North',
			'Anywhere in the UK or Ireland, if bottled in Dublin',
			'Only in County Cork, Dublin, or other historic sites'
		],
		answer: 'Anywhere on the island of Ireland, including Northern Ireland',
		explanation: 'Irish whiskey must be produced on the island of Ireland, covering both the Republic and Northern Ireland.'
	},
	{
		id: 'irish-regulation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'Irish whiskey is regulated by the Irish Whiskey Technical File from which year?',
		options: ['1880', '1980', '2009', '2014'],
		answer: '2014',
		explanation: 'Irish whiskey is regulated by the Irish Whiskey Technical File (2014) and EU Geographic Indication.'
	},
	{
		id: 'irish-peated-exception',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Irish Single Malt is typically unpeated. Which brand is a notable peated exception?',
		options: ['Jameson', 'Connemara', 'Redbreast', 'Tullamore D.E.W.'],
		answer: 'Connemara',
		explanation: 'Connemara is the notable peated exception in Irish Single Malt.'
	},
	{
		id: 'single-pot-still-character',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Single Pot Still Irish whiskey is known for which characteristics?',
		options: [
			'Creamy texture, grassy notes, spice, and oiliness',
			'Heavy peat smoke and brine',
			'Light, neutral, and sweet',
			'Vanilla and caramel from new charred oak'
		],
		answer: 'Creamy texture, grassy notes, spice, and oiliness',
		explanation: 'Distilling a mix of malted and unmalted barley in pot stills gives Single Pot Still its distinctive profile.'
	},
	{
		id: 'single-pot-still-history',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Single Pot Still was historically dominant until which event damaged its export markets?',
		options: ['The Great Famine', 'World War II', 'American Prohibition', 'The 2008 financial crisis'],
		answer: 'American Prohibition',
		explanation: 'Single Pot Still was Ireland\'s dominant style before Prohibition damaged its export markets.'
	},
	{
		id: 'irish-blended-examples',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Jameson, Bushmills Black Bush, and Tullamore D.E.W. are examples of which Irish category?',
		options: ['Single Pot Still', 'Single Malt', 'Blended', 'Single Grain'],
		answer: 'Blended',
		explanation: 'Blended Irish whiskey combines two or more Irish categories and is the most widely sold Irish style.'
	},
	{
		id: 'irish-eu-gi',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'Alongside the Irish Whiskey Technical File, what protects Irish whiskey as a name?',
		options: [
			'An EU Geographic Indication',
			'The Scotch Whisky Regulations 2009',
			'A U.S. federal standard of identity',
			'Voluntary producer pledges only'
		],
		answer: 'An EU Geographic Indication',
		explanation: 'Irish whiskey is protected by an EU Geographic Indication, backed by the 2014 Technical File.'
	},
	{
		id: 'irish-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'What is the minimum aging requirement for Irish whiskey?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: '3 years',
		explanation: 'Irish whiskey must be aged at least 3 years, the same as Scotch and Japanese whisky.'
	},
	{
		id: 'irish-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for Irish whiskey?',
		options: ['37% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'Irish whiskey must be bottled at 40% (80°) ABV or higher.'
	},
	{
		id: 'irish-grain-base',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'What grain base does Irish whiskey law require?',
		options: [
			'Malted grains, with or without unmalted whole grains',
			'100% malted barley for every Irish category',
			'At least 51% barley, the rest any cereal',
			'Any grain or sugar source, malted or not'
		],
		answer: 'Malted grains, with or without unmalted whole grains',
		explanation: 'Irish whiskey needs malted grains and may add unmalted whole grains. Only certain categories, such as Single Malt, require 100% malted barley.'
	},
	{
		id: 'irish-fermentation-not',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'Which of these is NOT a legal requirement for Irish whiskey?',
		options: [
			'Aged at least 3 years',
			'Bottled at 40% ABV or more',
			'Distilled below 94.8% ABV',
			'Fermented with yeast only'
		],
		answer: 'Fermented with yeast only',
		explanation: 'Irish law permits natural (non-synthetic) enzymes in fermentation. Scotch is the one that allows yeast only.'
	},
	{
		id: 'irish-additives',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'Which additive may be used in Irish whiskey?',
		options: [
			'Caramel coloring (E150a) only',
			'Caramel coloring and up to 9.09% other spirits or wine',
			'Sugar and natural flavorings',
			'No additives of any kind'
		],
		answer: 'Caramel coloring (E150a) only',
		explanation: 'Irish whiskey allows only caramel coloring, as Scotch does. Canada permits caramel plus up to 9.09% other spirits, wine, or flavorings.'
	},
	{
		id: 'irish-scenario-low-strength',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'A whiskey is distilled in Northern Ireland, aged 3 years in wooden casks, and bottled at 38% ABV. Can it be sold as Irish whiskey?',
		options: [
			'No, it is below the 40% ABV bottling minimum',
			'No, Northern Ireland is outside the Irish whiskey area',
			'No, it must be aged 4 years',
			'Yes, it meets every rule'
		],
		answer: 'No, it is below the 40% ABV bottling minimum',
		explanation: 'Northern Ireland is inside the production area and 3 years meets the aging minimum, but Irish whiskey must be bottled at 40% ABV or more.'
	},
	{
		id: 'irish-single-malt-grain',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Irish Single Malt must be made from what?',
		options: [
			'100% malted barley',
			'At least 30% malted and 30% unmalted barley',
			'At least 51% malted barley',
			'Any malted grain'
		],
		answer: '100% malted barley',
		explanation: 'Irish Single Malt is 100% malted barley from one distillery, distilled in pot stills. Single Pot Still mixes malted and unmalted barley.'
	},
	{
		id: 'irish-most-distinctive',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Which category is considered Ireland\'s most distinctive whiskey style?',
		options: ['Single Pot Still', 'Single Malt', 'Single Grain', 'Blended'],
		answer: 'Single Pot Still',
		explanation: 'Single Pot Still, made from malted and unmalted barley in pot stills, is uniquely Irish.'
	},
	{
		id: 'irish-single-grain-still',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Single Grain Irish whiskey is typically distilled in which type of still, giving what character?',
		options: [
			'Column stills, for a lighter and sweeter style',
			'Pot stills, for a creamy and oily style',
			'Column stills, for a heavy and smoky style',
			'Pot stills, for a light and floral style'
		],
		answer: 'Column stills, for a lighter and sweeter style',
		explanation: 'Single Grain Irish comes from one distillery, may use grains beyond malted barley, and is typically column-distilled.'
	},
	{
		id: 'irish-scenario-blend',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'A whiskey combines Single Pot Still and Single Grain Irish whiskeys. Which category is it?',
		options: ['Blended', 'Single Pot Still', 'Single Grain', 'Single Malt'],
		answer: 'Blended',
		explanation: 'Blended Irish whiskey is any combination of two or more Irish whiskey categories.'
	},
	{
		id: 'irish-scotch-largest-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'In both Ireland and Scotland, which type of whisky is the largest category?',
		options: ['Blended', 'Single Malt', 'Single Grain', 'Single Pot Still'],
		answer: 'Blended',
		explanation: 'Blended Irish whiskey is the most widely sold Irish style, and Blended Scotch is the largest Scotch category by volume.'
	},
	{
		id: 'irish-scenario-single-pot-still',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'An Irish distillery makes a whiskey from 60% malted and 40% unmalted barley, distilled in pot stills and aged 3 years. Which category is it?',
		options: ['Single Pot Still', 'Single Malt', 'Single Grain', 'Blended'],
		answer: 'Single Pot Still',
		explanation: 'It has at least 30% each of malted and unmalted barley from one distillery\'s pot stills. The unmalted barley rules out Single Malt.'
	},
	{
		id: 'irish-scenario-single-malt',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'A whiskey from 100% malted barley is pot-distilled at one Irish distillery and aged 3 years. Why is it not Single Pot Still?',
		options: [
			'It contains no unmalted barley',
			'It was not triple-distilled',
			'It is too young',
			'It was made at only one distillery'
		],
		answer: 'It contains no unmalted barley',
		explanation: 'Single Pot Still needs at least 30% unmalted barley. This whiskey qualifies as Irish Single Malt instead.'
	},
	{
		id: 'irish-single-pot-still-not',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		topic: VARIETIES,
		question: 'Which of these is NOT a requirement for Single Pot Still Irish whiskey?',
		options: [
			'Made at one distillery',
			'Distilled only in pot stills',
			'At least 30% unmalted barley',
			'Triple distillation'
		],
		answer: 'Triple distillation',
		explanation: 'Single Pot Still requires one distillery, pot stills, and at least 30% each of malted and unmalted barley. Triple distillation is common in Ireland but not required.'
	},
	{
		id: 'irish-cask-limit',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		topic: LEGAL,
		question: 'What cask rule applies to maturing Irish whiskey?',
		options: [
			'Wooden casks of no more than 700 litres',
			'Oak casks of any size, new or used',
			'New charred oak barrels of 200 litres',
			'Wooden casks of any size or shape'
		],
		answer: 'Wooden casks of no more than 700 litres',
		explanation: 'Irish whiskey matures in wooden casks, such as oak, no larger than 700 litres, the same limit as Scotland and the EU.'
	}
];
