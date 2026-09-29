import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Denmark
export const REGIONS_DENMARK_QUESTIONS = [
	{
		id: 'denmark-manifesto',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What did ten Danish distilleries launch in April 2025?',
		options: [
			'The Danish Whisky Manifesto',
			'A binding national whisky law',
			'A registered EU geographical indication',
			'The Nordic Whisky Association'
		],
		answer: 'The Danish Whisky Manifesto',
		explanation: 'The voluntary Manifesto defines national categories ahead of a hoped-for EU GI.'
	},
	{
		id: 'denmark-stauning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Which Danish distillery markets its rye as "The Original Rye Whisky"?',
		options: ['Stauning', 'Slyrs', 'Warenghem', 'Zuidam'],
		answer: 'Stauning',
		explanation: 'Stauning, in West Jutland since 2005, uses locally grown rye and barley and direct-fired stills.'
	},
	{
		id: 'denmark-direct-fire',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Stauning heats its stills using which rarer method?',
		options: ['Direct fire', 'Steam coils', 'Electric elements', 'Solar thermal'],
		answer: 'Direct fire',
		explanation: 'Direct firing is rarer than steam coils and is part of Stauning\'s house style.'
	},
	{
		id: 'denmark-categories',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Which of these is NOT one of the four whisky styles defined by the Danish Whisky Manifesto?',
		options: ['Single Malt', 'Rye', 'Oat', 'Corn'],
		answer: 'Corn',
		explanation: 'The Manifesto defines Single Malt, Rye, Wheat, and Oat whisky.'
	},
	{
		id: 'denmark-governing-law',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Which binding law governs whisky made in Denmark?',
		options: [
			'Regulation (EU) 2019/787',
			'The Danish Whisky Manifesto',
			'The Scotch Whisky Regulations 2009',
			'A Danish national whisky act'
		],
		answer: 'Regulation (EU) 2019/787',
		explanation: 'Denmark has no binding national whisky law, so the EU regulation applies. The Manifesto is voluntary.'
	},
	{
		id: 'denmark-manifesto-status',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What is the legal status of the Danish Whisky Manifesto?',
		options: [
			'A voluntary pledge that binds only its signatories',
			'A law that binds every Danish distillery',
			'A registered EU geographical indication',
			'An amendment to EU spirit drinks law'
		],
		answer: 'A voluntary pledge that binds only its signatories',
		explanation: 'The Manifesto is an industry agreement, not a law or a geographic designation.'
	},
	{
		id: 'denmark-founding-count',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'How many distilleries founded the Danish Whisky Manifesto?',
		options: ['3', '10', '25', '50'],
		answer: '10',
		explanation: 'Ten Danish distilleries, including Stauning, founded the Manifesto in 2025.'
	},
	{
		id: 'denmark-gi-goal',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What do the Manifesto\'s signatories hope to secure in the future?',
		options: [
			'An EU geographical indication',
			'Exemption from the EU 3-year minimum',
			'Permission to add sweeteners',
			'Membership of the Scotch Whisky Association'
		],
		answer: 'An EU geographical indication',
		explanation: 'The Manifesto defines national categories ahead of a hoped-for EU GI, which would give them legal force.'
	},
	{
		id: 'denmark-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What is the minimum aging for whisky made in Denmark?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: '3 years',
		explanation: 'Danish whisky follows the EU floor of 3 years.'
	},
	{
		id: 'denmark-manifesto-aging',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What aging rule does the Danish Whisky Manifesto add to the EU floor?',
		options: [
			'None; it sets no stricter minimum',
			'A 4-year minimum for all categories',
			'A 5-year minimum for single malt',
			'A 2-year minimum for rye'
		],
		answer: 'None; it sets no stricter minimum',
		explanation: 'The Manifesto defines mash bills but leaves aging at the EU\'s 3-year minimum.'
	},
	{
		id: 'denmark-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for Danish whisky?',
		options: ['37% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'Danish whisky must be bottled at no less than 40% (80°) ABV, per the EU floor.'
	},
	{
		id: 'denmark-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What is the maximum distillation strength for Danish whisky?',
		options: ['80% ABV', '90% ABV', 'Less than 94.8% ABV', '95% ABV'],
		answer: 'Less than 94.8% ABV',
		explanation: 'Denmark follows the EU ceiling of less than 94.8% (189.6°) ABV.'
	},
	{
		id: 'denmark-cask-size',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'What is the largest cask Danish whisky may be matured in?',
		options: ['200 litres', '500 litres', '700 litres', 'No limit'],
		answer: '700 litres',
		explanation: 'Under the EU floor, Danish whisky matures in wooden casks of no more than 700 litres.'
	},
	{
		id: 'denmark-additives',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Which additive may Danish whisky contain?',
		options: [
			'Caramel coloring (E150a)',
			'Honey or sugar syrup',
			'Natural flavorings only',
			'Oak extract up to 2%'
		],
		answer: 'Caramel coloring (E150a)',
		explanation: 'Only caramel coloring is permitted, per the EU floor.'
	},
	{
		id: 'denmark-legal-requirement',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Which of these is a legal requirement for all Danish whisky, not just a house style?',
		options: [
			'At least 3 years of aging',
			'Floor-malted grain',
			'Grain grown within 15-20 km of the distillery',
			'Direct-fired stills'
		],
		answer: 'At least 3 years of aging',
		explanation: 'The 3-year minimum comes from EU law. Floor malting, local grain, and direct firing are practices of some signatories, not rules.'
	},
	{
		id: 'denmark-grain-radius',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Several Manifesto signatories source their grain from within roughly what distance of the distillery?',
		options: ['1-2 km', '15-20 km', '100-150 km', '500 km'],
		answer: '15-20 km',
		explanation: 'Some signatories source grain within roughly 15-20 km (9-12 miles), a house style rather than a legal rule.'
	},
	{
		id: 'denmark-single-malt-mash',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'What mash does the Manifesto require for Danish Single Malt?',
		options: ['100% malted barley', 'At least 51% malted barley', 'Any malted cereal', 'Malted barley and rye'],
		answer: '100% malted barley',
		explanation: 'Danish Single Malt must be distilled from a mash of 100% malted barley.'
	},
	{
		id: 'denmark-rye-minimum',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Danish Rye Whisky requires a mash of at least what share of rye?',
		options: ['25%', '51%', '75%', '100%'],
		answer: '51%',
		explanation: 'The Manifesto requires at least 51% rye for Danish Rye Whisky.'
	},
	{
		id: 'denmark-oat-minimum',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Danish Oat Whisky requires a mash of at least what share of oats?',
		options: ['25%', '40%', '51%', '100%'],
		answer: '51%',
		explanation: 'Danish Wheat and Oat Whisky each need at least 51% of the named grain, the same rule as Danish Rye.'
	},
	{
		id: 'denmark-rye-compare',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Danish Rye\'s 51% rye minimum matches the rye rule of which country?',
		options: ['United States', 'Canada', 'Australia', 'Japan'],
		answer: 'United States',
		explanation: 'U.S. rye whiskey also needs at least 51% rye. In Canada, "rye whisky" is a legal synonym for Canadian whisky, whatever the rye content.'
	},
	{
		id: 'denmark-stauning-location',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'In which part of Denmark is Stauning based?',
		options: ['West Jutland', 'Copenhagen', 'Funen', 'Bornholm'],
		answer: 'West Jutland',
		explanation: 'Stauning has made whisky in West Jutland since 2005.'
	},
	{
		id: 'denmark-stauning-founded',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Since what year has Stauning been making whisky in West Jutland?',
		options: ['1985', '2005', '2015', '2025'],
		answer: '2005',
		explanation: 'Stauning began in 2005, two decades before it helped found the Danish Whisky Manifesto.'
	},
	{
		id: 'denmark-grain-to-glass',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'Stauning pioneered which approach that many Danish single malt makers now follow?',
		options: [
			'Grain-to-glass production with local barley',
			'Blending imported Scotch malt with local rye',
			'Continuous column distillation of local grain',
			'Solera aging in imported ex-sherry casks'
		],
		answer: 'Grain-to-glass production with local barley',
		explanation: 'Signatories often floor-malt Danish-grown barley on site, then ferment and distill it locally.'
	},
	{
		id: 'denmark-scenario-mixed-mash',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'A Manifesto distillery makes whisky from 90% malted barley and 10% malted rye, aged 3 years. How can it be labeled?',
		options: [
			'As whisky, but not as Danish Single Malt',
			'As Danish Single Malt',
			'As Danish Rye Whisky',
			'It cannot be sold as whisky at all'
		],
		answer: 'As whisky, but not as Danish Single Malt',
		explanation: 'It meets the EU floor, but Danish Single Malt needs 100% malted barley and Danish Rye needs at least 51% rye.'
	},
	{
		id: 'denmark-scenario-oat',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		topic: VARIETIES,
		question: 'A signatory distills a mash of 60% oats and 40% malted barley and ages it 3 years. Which Manifesto category fits?',
		options: ['Danish Oat Whisky', 'Danish Single Malt', 'Danish Wheat Whisky', 'Danish Rye Whisky'],
		answer: 'Danish Oat Whisky',
		explanation: 'At least 51% of the named grain qualifies it as Danish Oat Whisky.'
	},
	{
		id: 'denmark-scenario-non-signatory',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'A Danish distillery that did not sign the Manifesto sells a 3-year-old whisky from a 30% rye mash as "rye whisky". Which rules does it break?',
		options: [
			'None, since the Manifesto binds only its signatories',
			'Danish national whisky law on labeling',
			'The EU 3-year minimum and the Manifesto',
			'The Danish Whisky GI registered in Brussels'
		],
		answer: 'None, since the Manifesto binds only its signatories',
		explanation: 'The 51% rye rule is voluntary. A non-signatory only has to meet the EU floor, which this whisky does.'
	},
	{
		id: 'denmark-voluntary-compare',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		topic: LEGAL,
		question: 'Like Denmark in 2025, which country also gained a voluntary industry whisky standard that year?',
		options: ['India', 'Ireland', 'Scotland', 'United States'],
		answer: 'India',
		explanation: 'The Indian Malt Whisky Association set a voluntary standard in 2025. Ireland, Scotland, and the U.S. have binding whisky laws.'
	}
];
