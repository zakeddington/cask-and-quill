import { WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

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
			'Only in the Republic of Ireland',
			'Anywhere in the UK or Ireland',
			'Only in County Cork'
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
	}
];
