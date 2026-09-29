import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

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
	},
	{
		id: 'india-no-unified-law',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which statement best describes how whisky is regulated in India?',
		options: [
			'There is no single unified whisky law',
			'One national whisky act, like Scotland\'s SWR 2009',
			'A registered geographical indication for all Indian whisky',
			'Industry rules only, with no government role'
		],
		answer: 'There is no single unified whisky law',
		explanation: 'Indian whisky is governed by a mix of FSSAI food rules, state excise acts, and voluntary standards. There is no binding law comparable to Scotland\'s SWR 2009.'
	},
	{
		id: 'india-fssai-regulator',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which government authority\'s Alcoholic Beverages Regulations define whisky for the Indian market?',
		options: [
			'Food Safety and Standards Authority of India (FSSAI)',
			'Indian Malt Whisky Association (IMWA)',
			'Alcohol and Tobacco Tax and Trade Bureau (TTB)',
			'Scotch Whisky Association (SWA)'
		],
		answer: 'Food Safety and Standards Authority of India (FSSAI)',
		explanation: 'FSSAI\'s Alcoholic Beverages Regulations set India\'s national whisky definition. IMWA is an industry group with a voluntary standard, not a government authority.'
	},
	{
		id: 'india-fssai-regulation-years',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'FSSAI\'s Alcoholic Beverages Regulations were issued and later amended in which years?',
		options: ['2009, amended 2014', '2014, amended 2019', '2018, amended 2023', '2021, amended 2025'],
		answer: '2018, amended 2023',
		explanation: 'The FSSAI Alcoholic Beverages Regulations date from 2018 and were amended in 2023.'
	},
	{
		id: 'india-state-excise-licensing',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'In India, who licenses whisky production?',
		options: [
			'State excise departments',
			'FSSAI',
			'The Indian Malt Whisky Association',
			'The Bureau of Indian Standards'
		],
		answer: 'State excise departments',
		explanation: 'State excise departments license production, and their rules vary from state to state. FSSAI focuses on the food safety of what is sold.'
	},
	{
		id: 'india-bis-voluntary-standards',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Alongside FSSAI and state excise departments, which Indian government body contributes voluntary standards to spirits regulation?',
		options: [
			'Bureau of Indian Standards (BIS)',
			'Japan Spirits & Liqueurs Makers Association',
			'Distilled Spirits Aotearoa',
			'Alcohol and Tobacco Tax and Trade Bureau (TTB)'
		],
		answer: 'Bureau of Indian Standards (BIS)',
		explanation: 'BIS issues voluntary standards, which sit alongside FSSAI rules and state excise licensing. None of the three forms a single binding whisky law.'
	},
	{
		id: 'india-no-official-requirements',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which summary best fits India\'s official, whisky-specific production requirements?',
		options: [
			'There are none',
			'3 years minimum aging and 40% ABV minimum',
			'2 years minimum aging and 37% ABV minimum',
			'Made from at least 51% grain'
		],
		answer: 'There are none',
		explanation: 'India has no official whisky-specific requirements for aging, strength, or grain. The only whisky-specific rules come from IMWA\'s voluntary malt whisky standard.'
	},
	{
		id: 'india-grain-not-required',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Does Indian law require whisky to be made from grain?',
		options: [
			'No, molasses and other carbohydrates are permitted',
			'Yes, at least 51% grain under FSSAI rules',
			'Yes, 100% malted barley for all categories',
			'Yes, but only for whisky sold for export'
		],
		answer: 'No, molasses and other carbohydrates are permitted',
		explanation: 'FSSAI\'s whisky definition permits neutral spirit distilled from molasses, cereals, or other agricultural carbohydrate sources.'
	},
	{
		id: 'india-ena-meaning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'In Indian whisky production, what does ENA stand for?',
		options: ['Extra neutral alcohol', 'Estate new-make alcohol', 'Export neutral aging', 'Enhanced natural aroma'],
		answer: 'Extra neutral alcohol',
		explanation: 'Extra neutral alcohol is highly rectified spirit. Most Indian whisky by volume is molasses-based ENA.'
	},
	{
		id: 'india-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Must whisky sold as "Indian" be produced entirely in India?',
		options: [
			'No, there is no such requirement',
			'Yes, at a single Indian distillery',
			'Yes, but it may be bottled abroad',
			'Only if it is made from molasses'
		],
		answer: 'No, there is no such requirement',
		explanation: 'FSSAI regulates the food safety of what is sold domestically rather than mandating domestic production. Scotland, Ireland, and Japan require production at a domestic distillery.'
	},
	{
		id: 'india-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'What national distillation ceiling does India set for whisky?',
		options: ['None', 'Less than 94.8% ABV', 'No more than 95% ABV', 'No more than 80% ABV'],
		answer: 'None',
		explanation: 'India specifies no national distillation ceiling for whisky. Scotland caps distillation below 94.8% ABV, and the U.S. at 95%.'
	},
	{
		id: 'india-bottling-strength',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'How is the minimum bottling strength of whisky set in India?',
		options: [
			'Each state\'s excise department sets its own',
			'FSSAI sets a national 40% ABV minimum',
			'FSSAI sets a national 37% ABV minimum',
			'IMWA sets one standard for all Indian whisky'
		],
		answer: 'Each state\'s excise department sets its own',
		explanation: 'India has no national bottling ABV minimum for whisky. Sale strength is left to state excise departments.'
	},
	{
		id: 'india-national-rule-matured',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which of these does India\'s national framework actually regulate?',
		options: [
			'The use of the word "matured"',
			'A distillation ceiling',
			'A maximum barrel entry proof',
			'Which fermentation agents may be used'
		],
		answer: 'The use of the word "matured"',
		explanation: 'FSSAI sets a 1-year wood requirement for a "matured" claim. India specifies no national distillation ceiling, entry proof, or fermentation restriction.'
	},
	{
		id: 'india-matured-wood-options',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which wood contact can satisfy FSSAI\'s requirement for a "matured" claim?',
		options: [
			'Oak or other suitable wood vats, barrels, or wood chips',
			'Oak casks no larger than 700 litres only',
			'New charred oak barrels of any size only',
			'Ex-bourbon or ex-sherry oak barrels only'
		],
		answer: 'Oak or other suitable wood vats, barrels, or wood chips',
		explanation: 'FSSAI allows vats, barrels, or wood chips of oak or other suitable wood. There is no national cask material or size requirement.'
	},
	{
		id: 'india-no-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'What national aging minimum does India set specifically for whisky?',
		options: ['None', '1 year', '2 years', '3 years'],
		answer: 'None',
		explanation: 'India has no whisky-specific aging minimum. FSSAI\'s 1-year rule applies only to beverages that claim to be "matured."'
	},
	{
		id: 'india-additives-permitted',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'What does FSSAI permit in Indian whisky?',
		options: [
			'Caramel coloring, flavoring, and blending with neutral or rectified spirit',
			'Caramel coloring (E150a) only, and nothing else',
			'No additives of any kind, including coloring',
			'Flavoring only, with coloring and spirit banned'
		],
		answer: 'Caramel coloring, flavoring, and blending with neutral or rectified spirit',
		explanation: 'FSSAI permits coloring, flavoring, and neutral spirit. Scotland, Ireland, and Japan allow only caramel coloring.'
	},
	{
		id: 'india-imwa-launch',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'When was the Indian Malt Whisky Association launched?',
		options: ['2018', '2021', '2023', 'March 2025'],
		answer: 'March 2025',
		explanation: 'IMWA was launched in March 2025 by Amrut, Paul John, Rampur, and Indri.'
	},
	{
		id: 'india-imwa-gi-status',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'What is the status of Indian Single Malt\'s Geographical Indication application?',
		options: [
			'Filed in February 2025 and still pending',
			'Granted in March 2025 after a fast review',
			'Rejected in 2023 and not refiled since then',
			'Never filed, as IMWA opposes a formal GI'
		],
		answer: 'Filed in February 2025 and still pending',
		explanation: 'IMWA filed for GI protection in February 2025. Until it is granted, the Indian Single Malt standard has no legal force outside IMWA\'s membership.'
	},
	{
		id: 'india-imwa-binding',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Who is bound by the IMWA standard for Indian Single Malt?',
		options: [
			'Only IMWA\'s own members',
			'Every Indian distillery',
			'Every whisky sold in India',
			'Only whisky exported from India'
		],
		answer: 'Only IMWA\'s own members',
		explanation: 'The IMWA standard is voluntary. It has no legal force outside the association\'s membership.'
	},
	{
		id: 'india-imfl-brands-not',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Which of these is NOT a mass-market IMFL whisky brand?',
		options: ['McDowell\'s No. 1', 'Officer\'s Choice', 'Royal Stag', 'Amrut'],
		answer: 'Amrut',
		explanation: 'Amrut is an Indian single malt producer and IMWA founder. McDowell\'s No. 1, Officer\'s Choice, and Royal Stag are molasses-based IMFL brands.'
	},
	{
		id: 'india-imfl-volume',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Indian IMFL whisky brands are notable worldwide for what?',
		options: [
			'Being the best-selling whiskies by volume',
			'Having the longest aging requirements',
			'Being made only from malted barley',
			'Holding an EU geographical indication'
		],
		answer: 'Being the best-selling whiskies by volume',
		explanation: 'IMFL brands such as McDowell\'s No. 1 are among the world\'s best-selling whiskies by volume, despite not qualifying as whisky in the US, UK, or EU.'
	},
	{
		id: 'india-blended-malt-label',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'What is a common problem with the labels of FSSAI blended malt or grain whisky?',
		options: [
			'They often don\'t show how much real malt they contain',
			'They must list every distillery used in the blend',
			'They are not allowed to use the word "whisky" at all',
			'They must state an age of at least 3 years on the label'
		],
		answer: 'They often don\'t show how much real malt they contain',
		explanation: 'Because the category needs as little as 2% malt or grain whisky, the label alone often cannot reveal how much real distillate is inside.'
	},
	{
		id: 'india-blended-malt-vs-scotch',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'How does India\'s FSSAI "blended malt whisky" differ from Scotch Blended Malt?',
		options: [
			'The Indian category may be up to 98% neutral spirit, while Scotch Blended Malt contains only malt whisky',
			'The Indian category must be 100% malt, while Scotch Blended Malt may include grain whisky',
			'Both may contain up to 98% neutral spirit',
			'Neither may contain any neutral spirit'
		],
		answer: 'The Indian category may be up to 98% neutral spirit, while Scotch Blended Malt contains only malt whisky',
		explanation: 'FSSAI requires as little as 2% malt or grain whisky. Scotch Blended Malt combines single malts from two or more distilleries with no grain whisky or neutral spirit.'
	},
	{
		id: 'india-blended-malt-position',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Where does FSSAI\'s blended malt or grain whisky sit in the Indian market?',
		options: [
			'Between mass-market IMFL and genuine single malt',
			'Above Indian Single Malt in malt content',
			'It is the same as Indian Pure Malt',
			'It is an export-only category'
		],
		answer: 'Between mass-market IMFL and genuine single malt',
		explanation: 'It sits between the two, but it can still be up to 98% neutral or rectified spirit.'
	},
	{
		id: 'india-single-malt-grain',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Under IMWA\'s standard, Indian Single Malt must be made from what?',
		options: ['100% malted barley', 'At least 51% malted barley', 'Molasses and malt', 'Any cereal grain'],
		answer: '100% malted barley',
		explanation: 'Indian Single Malt is made from 100% malted barley at a single Indian distillery.'
	},
	{
		id: 'india-single-malt-still',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'What type of still does IMWA\'s Indian Single Malt standard require?',
		options: ['Pot stills', 'Column stills', 'Hybrid stills', 'Any still type'],
		answer: 'Pot stills',
		explanation: 'Indian Single Malt is distilled in pot stills, like Scotch single malt.'
	},
	{
		id: 'india-single-malt-aging',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'How long must Indian Single Malt age under the IMWA standard?',
		options: ['1 year', '2 years', '3 years', '5 years'],
		answer: '3 years',
		explanation: 'IMWA requires at least 3 years, matching Scotland, although FSSAI\'s own "matured" claim needs only 1 year in wood.'
	},
	{
		id: 'india-single-malt-casks',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'What cask rule applies to Indian Single Malt under the IMWA standard?',
		options: [
			'Oak casks under 700 litres',
			'Any wood, with no size limit',
			'New charred oak only',
			'Oak vats or wood chips'
		],
		answer: 'Oak casks under 700 litres',
		explanation: 'IMWA requires oak casks under 700 litres, far stricter than FSSAI\'s rule, which allows wood chips.'
	},
	{
		id: 'india-single-malt-producer',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Which of these is an Indian single malt producer?',
		options: ['Kavalan', 'Paul John', 'Nikka', 'Glenfiddich'],
		answer: 'Paul John',
		explanation: 'Paul John is an Indian single malt producer and a founding IMWA member. Kavalan is Taiwanese, Nikka is Japanese, and Glenfiddich is Scotch.'
	},
	{
		id: 'india-pure-malt-distilleries',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Indian Pure Malt blends single malts from how many Indian distilleries?',
		options: ['Exactly one', 'Two or more', 'At least five', 'Any number, including imported malts'],
		answer: 'Two or more',
		explanation: 'Indian Pure Malt combines single malts from two or more Indian distilleries.'
	},
	{
		id: 'india-no-aging-minimum-comparison',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which of these sets no national aging minimum for whisky?',
		options: ['India', 'Scotland', 'Taiwan', 'Australia'],
		answer: 'India',
		explanation: 'India has no whisky-specific aging minimum. Scotland requires 3 years, and Taiwan and Australia require 2.'
	},
	{
		id: 'india-grain-comparison',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'Which of these does NOT require whisky to be made from grain?',
		options: ['Canada', 'Japan', 'Taiwan', 'India'],
		answer: 'India',
		explanation: 'India permits molasses and other agricultural carbohydrate sources. Canada and Taiwan allow any grain, and Japan requires malted grains.'
	},
	{
		id: 'india-scenario-blended-malt',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'An Indian bottling contains 5% malt whisky and 95% neutral spirit. Which FSSAI category can it fall under?',
		options: [
			'Blended malt whisky',
			'Indian Single Malt',
			'Indian Pure Malt',
			'None, since it has too little malt'
		],
		answer: 'Blended malt whisky',
		explanation: 'FSSAI\'s blended malt category needs as little as 2% malt whisky. Indian Single Malt and Pure Malt must be entirely malt whisky.'
	},
	{
		id: 'india-scenario-two-year-malt',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'An IMWA member pot-distills 100% malted barley at one Indian distillery and bottles it after 2 years in oak. Which claims can it make?',
		options: [
			'"Matured," but not Indian Single Malt',
			'Indian Single Malt, but not "matured"',
			'Both "matured" and Indian Single Malt',
			'Neither'
		],
		answer: '"Matured," but not Indian Single Malt',
		explanation: 'Two years in wood exceeds FSSAI\'s 1-year "matured" rule but falls short of IMWA\'s 3-year Indian Single Malt standard.'
	},
	{
		id: 'india-scenario-non-member',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		topic: LEGAL,
		question: 'A distillery that is not an IMWA member labels a 2-year-old malt "Indian Single Malt." Is it breaking the law?',
		options: [
			'No, the IMWA standard has no legal force outside its membership',
			'Yes, FSSAI enforces the 3-year standard',
			'Yes, the Geographical Indication forbids it',
			'Yes, state excise departments enforce the IMWA standard'
		],
		answer: 'No, the IMWA standard has no legal force outside its membership',
		explanation: 'The IMWA standard is voluntary, and its GI application is still pending, so it binds only IMWA members.'
	},
	{
		id: 'india-scenario-pure-malt',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		topic: VARIETIES,
		question: 'Single malts from two different Indian distilleries are blended together with no other spirit. Under IMWA\'s standard, what is the result?',
		options: ['Indian Pure Malt', 'Indian Single Malt', 'IMFL', 'Blended grain whisky'],
		answer: 'Indian Pure Malt',
		explanation: 'Indian Pure Malt blends single malts from two or more Indian distilleries. Indian Single Malt must come from one distillery.'
	}
];
