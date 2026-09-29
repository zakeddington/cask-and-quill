import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Japan
export const REGIONS_JAPAN_QUESTIONS = [
	{
		id: 'japan-standards-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'In what year did Japan adopt its current whisky standards?',
		options: ['1923', '1989', '2009', '2021'],
		answer: '2021',
		explanation: 'The Japan Spirits & Liqueurs Makers Association standards were adopted in 2021.'
	},
	{
		id: 'japan-pre-2021-gap',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What gap did Japan\'s 2021 whisky standards close?',
		options: [
			'Imported foreign whisky could be bottled as "Japanese whisky"',
			'Whisky could be sold before it had aged a single year',
			'Distilleries could mature spirit in casks of any size',
			'Caramel coloring could be added without any disclosure'
		],
		answer: 'Imported foreign whisky could be bottled as "Japanese whisky"',
		explanation: 'Before 2021 there were no binding domestic rules, so imported whisky could be labeled Japanese.'
	},
	{
		id: 'japan-water-requirement',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which unusual requirement do Japan\'s whisky standards include?',
		options: [
			'Water must be extracted in Japan',
			'Casks must be made of Mizunara oak',
			'Barley must be grown in Japan',
			'Bottles must list the still shape'
		],
		answer: 'Water must be extracted in Japan',
		explanation: 'Japanese whisky must use water extracted in Japan.'
	},
	{
		id: 'japan-dominant-companies',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Which two companies dominate Blended Japanese Whisky?',
		options: [
			'Diageo and Pernod Ricard',
			'Suntory and Nikka',
			'Kavalan and Omar',
			'Amrut and Paul John'
		],
		answer: 'Suntory and Nikka',
		explanation: 'Suntory and Nikka dominate the category.'
	},
	{
		id: 'japan-blending-diversity',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Cross-company barrel exchange is rare in Japan. How do Japanese distilleries create blending diversity instead?',
		options: [
			'By running multiple still shapes in-house',
			'By importing Scotch for blending',
			'By aging only in Mizunara oak',
			'By using a single standard yeast strain'
		],
		answer: 'By running multiple still shapes in-house',
		explanation: 'Japanese distilleries commonly run multiple still shapes and diverse casks to produce varied components on site.'
	},
	{
		id: 'japan-standards-body',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which organization set Japan\'s whisky standards?',
		options: [
			'Japan Spirits & Liqueurs Makers Association',
			'Japan\'s Ministry of Agriculture and Fisheries',
			'The Japan Whisky Producers\' Guild of Osaka',
			'Suntory and Nikka under a joint agreement'
		],
		answer: 'Japan Spirits & Liqueurs Makers Association',
		explanation: 'The Japan Spirits & Liqueurs Makers Association adopted Japan\'s whisky standards in 2021.'
	},
	{
		id: 'japan-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What is the minimum aging requirement for Japanese whisky?',
		options: ['None', '2 years', '3 years', '5 years'],
		answer: '3 years',
		explanation: 'Japanese whisky must be aged at least 3 years, matching Scotland and Ireland.'
	},
	{
		id: 'japan-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for Japanese whisky?',
		options: ['37% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'Japanese whisky must be bottled at 40% (80°) ABV or higher.'
	},
	{
		id: 'japan-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What is the maximum distillation strength for Japanese whisky?',
		options: ['Less than 94.8% ABV', 'Less than 95% ABV', 'Less than 80% ABV', 'No ceiling'],
		answer: 'Less than 95% ABV',
		explanation: 'Japan caps distillation below 95% (190°) ABV, slightly above Scotland\'s 94.8% ceiling.'
	},
	{
		id: 'japan-cask-rule',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What casks do Japan\'s standards require for maturation?',
		options: [
			'Wooden casks not exceeding 700 litres',
			'Oak casks of any size, new or used',
			'Mizunara oak casks, at least 250 litres',
			'New charred oak barrels of 200 litres'
		],
		answer: 'Wooden casks not exceeding 700 litres',
		explanation: 'Japan requires wooden casks up to 700 litres. Mizunara is a popular choice, not a requirement.'
	},
	{
		id: 'japan-grain-base',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'What grain base do Japan\'s whisky standards require?',
		options: [
			'Malted grains, with unmalted grains also permitted',
			'100% malted barley for every category',
			'Any grain or sugar source, malted or not',
			'Rice and malted barley in equal shares'
		],
		answer: 'Malted grains, with unmalted grains also permitted',
		explanation: 'Japanese whisky must include malted grains and may add unmalted grains, much like Irish rules.'
	},
	{
		id: 'japan-additives',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which additive may be used in Japanese whisky?',
		options: [
			'Caramel coloring (E150a) only',
			'Caramel coloring and flavorings',
			'Neutral spirit up to 10%',
			'No additives of any kind'
		],
		answer: 'Caramel coloring (E150a) only',
		explanation: 'Japan permits only caramel coloring, the same rule as Scotland and Ireland.'
	},
	{
		id: 'japan-scotland-shared-rule',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which of these rules is identical in Japan and Scotland?',
		options: ['Maximum cask size', 'Distillation ceiling', 'Type of wood for casks', 'Use of enzymes'],
		answer: 'Maximum cask size',
		explanation: 'Both cap casks at 700 litres. Scotland requires oak, yeast only, and distillation below 94.8%, while Japan allows any wood, enzymes, and up to 95%.'
	},
	{
		id: 'japan-taiwan-origin',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'Which requirement do Japan\'s whisky standards have that Taiwan\'s law does not?',
		options: [
			'Production entirely in the country',
			'Bottling at 40% ABV or more',
			'Aging in wooden casks',
			'A minimum aging period'
		],
		answer: 'Production entirely in the country',
		explanation: 'Japanese whisky must be produced entirely in Japan. Taiwan sets aging, cask, and strength rules but no domestic-production requirement.'
	},
	{
		id: 'japan-scenario-aged-abroad',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: LEGAL,
		question: 'A Japanese distillery ships its new-make spirit to Scotland to age for 3 years, then bottles it in Japan. Can it be labeled Japanese whisky?',
		options: [
			'No, it must be produced and aged entirely in Japan',
			'Yes, because it was distilled at a Japanese distillery',
			'Yes, because it was bottled and labeled in Japan',
			'Only if it is aged at least 5 years before import'
		],
		answer: 'No, it must be produced and aged entirely in Japan',
		explanation: 'Under the 2021 standards, Japanese whisky must be produced entirely at a distillery in Japan, including aging.'
	},
	{
		id: 'japan-scenario-imported-grain',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'A blend of Japanese malt whisky and imported Canadian grain whisky is bottled in Japan. Can it be labeled Blended Japanese Whisky?',
		options: [
			'No, every component must be produced and aged in Japan',
			'Yes, as long as all of the malt whisky is Japanese',
			'Yes, if the imported share stays under 10% of the blend',
			'Yes, because the blend was assembled and bottled in Japan'
		],
		answer: 'No, every component must be produced and aged in Japan',
		explanation: 'Under the 2021 standards, all blend components must be Japanese. Historically, some blends included imported spirit.'
	},
	{
		id: 'japan-scenario-caramel',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'A Japanese single malt is aged 4 years in Japan in ex-sherry casks, colored with caramel (E150a), and bottled at 43% ABV. Does it meet the standards?',
		options: [
			'Yes, it meets every rule',
			'No, caramel coloring is banned',
			'No, ex-sherry casks are not allowed',
			'No, single malt must be bottled at 46% ABV'
		],
		answer: 'Yes, it meets every rule',
		explanation: 'Caramel coloring is permitted, ex-sherry casks are common, and 4 years and 43% ABV exceed the minimums.'
	},
	{
		id: 'japan-single-malt-not',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Which of these is NOT a feature of Japanese Single Malt?',
		options: [
			'Made from 100% malted barley',
			'Made at a single distillery',
			'Distilled in pot stills',
			'Aged only in Mizunara oak'
		],
		answer: 'Aged only in Mizunara oak',
		explanation: 'Japanese single malt producers use diverse casks, including Mizunara, ex-sherry, and ex-bourbon.'
	},
	{
		id: 'japan-grain-still',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'Japanese Grain Whisky is typically distilled in which type of still?',
		options: ['Column stills', 'Pot stills', 'Hybrid pot stills only', 'Alembic stills'],
		answer: 'Column stills',
		explanation: 'Japanese grain whisky is typically column-distilled, giving a lighter, cleaner character.'
	},
	{
		id: 'japan-grain-role',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'japan',
		topic: VARIETIES,
		question: 'How is Japanese Grain Whisky most often used?',
		options: [
			'As a blending component',
			'As a peated single cask release',
			'As a base for finishing in Mizunara',
			'As unaged new-make spirit'
		],
		answer: 'As a blending component',
		explanation: 'Its lighter, cleaner character makes grain whisky a common component of Japanese blends.'
	}
];
