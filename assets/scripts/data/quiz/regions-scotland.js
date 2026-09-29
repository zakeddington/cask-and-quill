import { LABELING_PRODUCERS, SCOTCH_REGIONS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES, SUB_REGIONS } from './quiz-constants.js';

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
	},
	{
		id: 'scotland-production-location',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Where must Scotch whisky be produced?',
		options: [
			'Entirely at a distillery in Scotland',
			'Distilled in Scotland, then matured anywhere in the UK',
			'Anywhere in the United Kingdom',
			'Distilled anywhere, then matured in Scotland'
		],
		answer: 'Entirely at a distillery in Scotland',
		explanation: 'Scotch must be produced entirely at a distillery in Scotland. Distilling or maturing it elsewhere disqualifies it.'
	},
	{
		id: 'scotland-grain-base',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Which statement about Scotch\'s grain rules is true?',
		options: [
			'Malted barley for single malt; other whole grains by category',
			'100% malted barley for every category of Scotch whisky',
			'At least 51% barley, with the rest any grain or sugar',
			'Any grain or sugar source, as long as it is fermented'
		],
		answer: 'Malted barley for single malt; other whole grains by category',
		explanation: 'Single malt must use malted barley, while grain categories may use other whole cereals.'
	},
	{
		id: 'scotland-only-additive',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Which is the only additive permitted in Scotch whisky?',
		options: [
			'Caramel coloring (E150a)',
			'Caramel flavoring or syrup',
			'Oak extract or wood essence',
			'Sugar syrup up to 2%'
		],
		answer: 'Caramel coloring (E150a)',
		explanation: 'Scotch permits caramel coloring (E150a) and no other additives. Canada, by contrast, also allows caramel flavoring.'
	},
	{
		id: 'scotland-wine-not-permitted',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'Which of these is NOT permitted in Scotch whisky?',
		options: [
			'Adding caramel coloring (E150a)',
			'Maturing in 250-litre oak casks',
			'Bottling at 43% ABV',
			'Adding a small share of wine'
		],
		answer: 'Adding a small share of wine',
		explanation: 'Scotch allows no additives beyond caramel coloring. Canada permits up to 9.09% of other spirits, wine, or flavorings.'
	},
	{
		id: 'scotland-scenario-two-years',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'A malt spirit is distilled in Scotland, aged 2 years in oak casks, and bottled at 46% ABV. Can it be sold as Scotch whisky?',
		options: [
			'No, it needs at least 3 years in cask',
			'Yes, because it is bottled above 40% ABV',
			'Yes, if the label states its age',
			'No, because Scotch must be bottled at exactly 40% ABV'
		],
		answer: 'No, it needs at least 3 years in cask',
		explanation: 'Scotch must age at least 3 years. Taiwan and Australia would accept 2 years, but Scotland does not.'
	},
	{
		id: 'scotland-scenario-bottling-strength',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'A whisky made in Scotland is aged 5 years in 500-litre oak casks and bottled at 38% ABV. Can it be sold as Scotch?',
		options: [
			'No, the minimum bottling strength is 40% ABV',
			'Yes, it meets every requirement',
			'No, the casks are too large',
			'No, it must be aged at least 8 years'
		],
		answer: 'No, the minimum bottling strength is 40% ABV',
		explanation: 'Scotch must be bottled at no less than 40% (80°) ABV. The cask size and age are within the rules.'
	},
	{
		id: 'scotland-scenario-distillation-ceiling',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: LEGAL,
		question: 'A Scottish grain distillery runs its column still to 95% ABV. Can that spirit become Scotch whisky?',
		options: [
			'Yes, grain whisky has no distillation ceiling',
			'Yes, as long as it is aged at least 3 years',
			'No, Scotch must be distilled to less than 94.8% ABV',
			'No, Scotch grain must be distilled below 90% ABV'
		],
		answer: 'No, Scotch must be distilled to less than 94.8% ABV',
		explanation: 'The Scotch ceiling of less than 94.8% (189.6°) ABV applies to every category. 95% would be allowed in the U.S. but not in Scotland.'
	},
	{
		id: 'scotch-single-malt-definition',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Which Scotch category is made from 100% malted barley at a single distillery?',
		options: ['Single Malt', 'Single Grain', 'Blended Malt', 'Blended Scotch'],
		answer: 'Single Malt',
		explanation: 'Single Malt Scotch uses only malted barley from one distillery, so each distillery\'s make remains distinct.'
	},
	{
		id: 'scotch-single-malt-still',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Single Malt Scotch must be distilled in which type of still?',
		options: ['Copper pot stills', 'Column stills', 'Hybrid stills', 'Any type of still'],
		answer: 'Copper pot stills',
		explanation: 'Single Malt Scotch is batch distilled in copper pot stills. EU single malt rules impose no pot still requirement.'
	},
	{
		id: 'scotch-single-malt-not-required',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Which of these is NOT a requirement for Single Malt Scotch?',
		options: [
			'Made from 100% malted barley',
			'Made at one distillery',
			'Batch distilled in pot stills',
			'Made with peated malt'
		],
		answer: 'Made with peated malt',
		explanation: 'Peat is a style choice, not a rule. Single Malt Scotch must be 100% malted barley, pot distilled at one distillery.'
	},
	{
		id: 'scotch-single-grain-meaning',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'In "Single Grain Scotch," what does "single" refer to?',
		options: [
			'It is made at one distillery',
			'It is made from one type of grain',
			'It is drawn from one cask',
			'It is distilled only once'
		],
		answer: 'It is made at one distillery',
		explanation: 'Single Grain Scotch comes from one distillery and may use cereals other than, or in addition to, malted barley.'
	},
	{
		id: 'scotch-scenario-single-grain',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'A Scottish distillery column-distills a mash of wheat and malted barley, matures it 3 years, and bottles it on its own. Which category is it?',
		options: ['Single Malt', 'Single Grain', 'Blended Grain', 'Blended Malt'],
		answer: 'Single Grain',
		explanation: 'Using grains in addition to malted barley at one distillery makes it Single Grain. The wheat and the column still rule out Single Malt.'
	},
	{
		id: 'scotch-scenario-blended-malt',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'A bottling combines single malts from three Speyside distilleries, with no grain whisky. Which category is it?',
		options: ['Single Malt', 'Blended Malt', 'Blended Scotch', 'Blended Grain'],
		answer: 'Blended Malt',
		explanation: 'Single malts from two or more distilleries, with no grain whisky, make a Blended Malt.'
	},
	{
		id: 'scotch-scenario-blended-grain',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Single grains from Cameronbridge and Girvan are combined with no malt whisky. Which category is the result?',
		options: ['Single Grain', 'Blended Grain', 'Blended Scotch', 'Blended Malt'],
		answer: 'Blended Grain',
		explanation: 'Single grains from two or more distilleries, with no malt, make a Blended Grain Scotch.'
	},
	{
		id: 'scotch-scenario-blended-scotch',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Single grains from two distilleries are combined with a single malt from a third. Which category is the result?',
		options: ['Blended Grain', 'Blended Malt', 'Blended Scotch', 'Single Grain'],
		answer: 'Blended Scotch',
		explanation: 'Adding any single malt to single grains makes it Blended Scotch. Blended Grain must contain no malt whisky.'
	},
	{
		id: 'scotch-blended-composition',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Blended Scotch Whisky combines...',
		options: [
			'One or more single malts with one or more single grains',
			'Single malts from two or more distilleries only',
			'Single grains from two or more distilleries only',
			'Malt whisky with neutral grain spirit'
		],
		answer: 'One or more single malts with one or more single grains',
		explanation: 'Blended Scotch mixes malt and grain whiskies. Blends that use neutral grain spirit are allowed in the U.S., not in Scotland.'
	},
	{
		id: 'scotch-blended-examples',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'Johnnie Walker and Chivas Regal are examples of which Scotch category?',
		options: ['Single Malt', 'Blended Malt', 'Blended Scotch', 'Single Grain'],
		answer: 'Blended Scotch',
		explanation: 'Johnnie Walker and Chivas Regal are major Blended Scotch brands, the largest category by volume.'
	},
	{
		id: 'scotch-scenario-blend-age',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: VARIETIES,
		question: 'A Blended Scotch contains a 12-year-old single malt and a 5-year-old single grain. What age can its label state?',
		options: ['5 years', '8 years', '12 years', 'No age may be stated'],
		answer: '5 years',
		explanation: 'A Blended Scotch age statement reflects its youngest component, here the 5-year-old grain.'
	},
	{
		id: 'speyside-distillery',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which of these is a Speyside distillery?',
		options: ['Lagavulin', 'Glenlivet', 'Springbank', 'Glen Scotia'],
		answer: 'Glenlivet',
		explanation: 'Glenlivet, Glenfiddich, and The Macallan are in Speyside. Lagavulin is on Islay, and Springbank and Glen Scotia are in Campbeltown.'
	},
	{
		id: 'islay-location',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Islay is an island off which coast of Scotland?',
		options: ['West', 'East', 'North', 'South'],
		answer: 'West',
		explanation: 'Islay lies off Scotland\'s west coast, which shapes its maritime character.'
	},
	{
		id: 'islay-not-distillery',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which of these is NOT an Islay distillery?',
		options: ['Ardbeg', 'Lagavulin', 'Glen Scotia', 'Laphroaig'],
		answer: 'Glen Scotia',
		explanation: 'Glen Scotia is in Campbeltown. Ardbeg, Lagavulin, and Laphroaig are among Islay\'s defining distilleries.'
	},
	{
		id: 'islay-phenols',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Islay\'s smoky, medicinal character reflects high levels of which compounds?',
		options: ['Esters', 'Phenols', 'Lactones', 'Tannins'],
		answer: 'Phenols',
		explanation: 'Many Islay whiskies carry high phenol levels from peat, giving smoke and medicinal notes.'
	},
	{
		id: 'highlands-flavor-range',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which best describes the Highlands\' flavor profile?',
		options: [
			'It ranges widely, from light and floral to rich and peated',
			'It is uniformly heavy, peated, and maritime in style',
			'It is consistently light, grassy, and gently floral',
			'It is defined by triple-distilled, unpeated malts'
		],
		answer: 'It ranges widely, from light and floral to rich and peated',
		explanation: 'The Highlands are too large for a single house style. Their malts range from light and floral to robust and peated.'
	},
	{
		id: 'highlands-grouped-regions',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which two whisky areas are formally or commonly grouped within the Highlands?',
		options: [
			'Speyside and the Islands',
			'Islay and Campbeltown',
			'Lowlands and Speyside',
			'Islay and the Islands'
		],
		answer: 'Speyside and the Islands',
		explanation: 'Speyside is formally a Highland sub-region, and the Islands are often treated as part of the Highlands. Islay is its own region.'
	},
	{
		id: 'lowlands-location',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Where do the Lowlands sit relative to the Highland line?',
		options: ['South of it', 'North of it', 'West of it, on the islands', 'It straddles the line'],
		answer: 'South of it',
		explanation: 'The Lowlands lie south of the line from Greenock to Dundee, and the Highlands lie north of it.'
	},
	{
		id: 'lowlands-grain-heartland',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Besides triple distillation, the Lowlands were once an important heartland for what?',
		options: [
			'Grain whisky production',
			'Peated malt production',
			'Sherry cask cooperage',
			'Floor malting on the islands'
		],
		answer: 'Grain whisky production',
		explanation: 'The Lowlands were once a heartland of grain whisky production and have a tradition of triple distillation.'
	},
	{
		id: 'campbeltown-whisky-capital',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Which Scotch region was once known as Scotland\'s whisky capital?',
		options: ['Speyside', 'Islay', 'Campbeltown', 'Lowlands'],
		answer: 'Campbeltown',
		explanation: 'Campbeltown was once called Scotland\'s whisky capital. Today it is a small region with only three operating distilleries.'
	},
	{
		id: 'campbeltown-style',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Campbeltown whiskies are known for being...',
		options: [
			'Briny, oily, and robust, sometimes lightly peated',
			'Light, grassy, and gentle, usually triple-distilled',
			'Elegant, sweet, and fruit-forward, rarely peated',
			'Heavily medicinal, with intense seaweed and iodine'
		],
		answer: 'Briny, oily, and robust, sometimes lightly peated',
		explanation: 'Campbeltown malts from Springbank, Glen Scotia, and Glengyle are briny, oily, and robust.'
	},
	{
		id: 'islands-character',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Island malts vary widely, but commonly show which character?',
		options: [
			'Coastal, mineral, smoky, or maritime',
			'Grassy and delicate from triple distillation',
			'Sweet corn and vanilla',
			'Spicy rye and dill'
		],
		answer: 'Coastal, mineral, smoky, or maritime',
		explanation: 'Malts from islands such as Orkney, Skye, and Arran vary, but coastal and maritime notes are common.'
	},
	{
		id: 'islands-jura',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		topic: SUB_REGIONS,
		question: 'Whisky made on the isle of Jura belongs to which regional grouping?',
		options: ['Islay', 'Islands', 'Campbeltown', 'Lowlands'],
		answer: 'Islands',
		explanation: 'Jura is part of the Islands grouping, along with Orkney, Skye, Mull, and Arran. Islay is counted separately.'
	}
];
