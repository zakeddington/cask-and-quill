import { SCOTCH_REGIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES, SUB_REGIONS } from './quiz-constants.js';

// Regions: Scotland
export const REGIONS_SCOTLAND_QUESTIONS = [
	{
		id: 'islay-style',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Islay is best known for what style of whisky?',
		options: [
			'Heavily peated and maritime',
			'Light, grassy, and triple-distilled',
			'Elegant, fruity, and sweet',
			'Unaged and corn-based'
		],
		answer: 'Heavily peated and maritime',
		explanation: 'Many Islay whiskies have high phenol levels, with smoke, brine, medicinal seaweed, and coastal peat notes.'
	},
	{
		id: 'islay-distillery',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which of these is an Islay distillery?',
		options: ['Glenfiddich', 'Springbank', 'Laphroaig', 'The Macallan'],
		answer: 'Laphroaig',
		explanation: 'Laphroaig, Ardbeg, and Lagavulin are among Islay\'s defining distilleries.'
	},
	{
		id: 'speyside-concentration',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which Scotch region has the densest concentration of distilleries?',
		options: ['Islay', 'Speyside', 'Lowlands', 'Campbeltown'],
		answer: 'Speyside',
		explanation: 'Speyside, centered on the River Spey, contains more than half of Scotland\'s malt whisky distilleries.'
	},
	{
		id: 'speyside-parent-region',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Speyside is officially a sub-region of which larger Scotch region?',
		options: ['Lowlands', 'Islands', 'Highlands', 'Campbeltown'],
		answer: 'Highlands',
		explanation: 'Speyside is officially part of the Highlands but is recognized independently.'
	},
	{
		id: 'speyside-style',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Speyside malts are generally known for being...',
		options: [
			'Elegant, complex, and fruit-forward',
			'Heavily peated and medicinal',
			'Briny and oily',
			'Grassy and triple-distilled'
		],
		answer: 'Elegant, complex, and fruit-forward',
		explanation: 'Speyside, home to Glenfiddich, The Macallan, and Glenlivet, is known for refined, often sweet, fruit-forward malts.'
	},
	{
		id: 'highlands-largest',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which is Scotland\'s largest whisky region?',
		options: ['Speyside', 'Highlands', 'Lowlands', 'Islands'],
		answer: 'Highlands',
		explanation: 'Because of its size, the Highlands have no single flavor profile, ranging from light and floral to rich and peated.'
	},
	{
		id: 'highland-line',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'The Highlands stretch north of a line drawn between which two places?',
		options: ['Glasgow and Edinburgh', 'Greenock and Dundee', 'Oban and Aberdeen', 'Inverness and Perth'],
		answer: 'Greenock and Dundee',
		explanation: 'The Highland region lies north of the line from Greenock to Dundee.'
	},
	{
		id: 'lowlands-style',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Lowland whiskies have historically been associated with which characteristics?',
		options: [
			'Lighter, grassier, and gentler',
			'Heavily peated and smoky',
			'Briny, oily, and robust',
			'Rich and sherried'
		],
		answer: 'Lighter, grassier, and gentler',
		explanation: 'The Lowlands have a tradition of triple distillation and were once a heartland of grain whisky production.'
	},
	{
		id: 'campbeltown-distillery',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which of these is a Campbeltown distillery?',
		options: ['Ardbeg', 'Springbank', 'Glenlivet', 'Cameronbridge'],
		answer: 'Springbank',
		explanation: 'Springbank, Glen Scotia, and Glengyle make Campbeltown\'s briny, oily, sometimes lightly peated whiskies.'
	},
	{
		id: 'campbeltown-location',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Campbeltown sits on which peninsula?',
		options: ['Kintyre', 'Black Isle', 'Fife', 'Ardnamurchan'],
		answer: 'Kintyre',
		explanation: 'Campbeltown is on the Kintyre peninsula on Scotland\'s west coast.'
	},
	{
		id: 'islands-exclusion',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which island is NOT part of the "Islands" whisky grouping?',
		options: ['Orkney', 'Skye', 'Islay', 'Arran'],
		answer: 'Islay',
		explanation: 'Islay is treated as its own region. The Islands include Orkney, Skye, Mull, Jura, and Arran.'
	},
	{
		id: 'scotch-regulation',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Which regulation governs Scotch whisky today?',
		options: [
			'Scotch Whisky Regulations 2009',
			'Irish Whiskey Technical File 2014',
			'Regulation (EU) 2019/787',
			'Bottled-in-Bond Act 1897'
		],
		answer: 'Scotch Whisky Regulations 2009',
		explanation: 'Scotch is regulated by the Scotch Whisky Regulations 2009 (SWR 2009).'
	},
	{
		id: 'scotch-cask-limit',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'What is the maximum cask size permitted for maturing Scotch?',
		options: ['200 liters', '500 liters', '700 liters', 'No limit'],
		answer: '700 liters',
		explanation: 'Scotch must mature in oak casks not exceeding 700 liters.'
	},
	{
		id: 'scotch-oak-required',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Which of these requires oak casks specifically, rather than any wooden cask?',
		options: ['Ireland', 'Japan', 'Canada', 'Scotland'],
		answer: 'Scotland',
		explanation: 'Scotland requires oak casks up to 700 liters. Ireland, Japan, and Canada only specify wooden casks.'
	},
	{
		id: 'scotch-fermentation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'What do Scotch regulations permit for fermentation?',
		options: ['Yeast only', 'Yeast and commercial enzymes', 'Any fermenting agent', 'Natural enzymes only'],
		answer: 'Yeast only',
		explanation: 'Scotch allows yeast only. Ireland permits natural enzymes, and the U.S., Japan, and Canada permit enzymes.'
	},
	{
		id: 'blended-malt-former-name',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Blended Malt Scotch was formerly known by which names?',
		options: [
			'Vatted malt or pure malt',
			'Single blend or house malt',
			'Double malt or twin malt',
			'Grain malt or mixed malt'
		],
		answer: 'Vatted malt or pure malt',
		explanation: 'Blended Malt combines single malts from two or more distilleries without any grain whisky.'
	},
	{
		id: 'scotch-largest-category',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Which is the largest Scotch category by volume?',
		options: ['Single Malt', 'Blended Malt', 'Blended Scotch', 'Single Grain'],
		answer: 'Blended Scotch',
		explanation: 'Blended Scotch combines malts and grains. Johnnie Walker and Chivas Regal are major examples.'
	},
	{
		id: 'scotch-uncommon-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Which Scotch category is described as relatively uncommon?',
		options: ['Blended Grain', 'Blended Scotch', 'Single Malt', 'Blended Malt'],
		answer: 'Blended Grain',
		explanation: 'Blended Grain combines single grains from two or more distilleries without any malt whisky.'
	},
	{
		id: 'scotch-single-grain-producers',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Cameronbridge and Girvan are major producers of which Scotch category?',
		options: ['Single Malt', 'Single Grain', 'Blended Malt', 'Peated Scotch'],
		answer: 'Single Grain',
		explanation: 'Single Grain Scotch is typically column-distilled and lighter than malt whisky.'
	},
	{
		id: 'blended-scotch-companies',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Which two companies dominate the Blended Scotch category?',
		options: [
			'Suntory and Nikka',
			'Diageo and Pernod Ricard',
			'Brown-Forman and Sazerac',
			'Beam and Heaven Hill'
		],
		answer: 'Diageo and Pernod Ricard',
		explanation: 'Diageo and Pernod Ricard dominate Blended Scotch.'
	}
];
