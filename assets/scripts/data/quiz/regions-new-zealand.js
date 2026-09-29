import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: New Zealand
export const REGIONS_NEW_ZEALAND_QUESTIONS = [
	{
		id: 'nz-standard-body',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Who set New Zealand\'s voluntary whisky definition in 2021?',
		options: [
			'Distilled Spirits Aotearoa',
			'Food Standards Australia New Zealand',
			'The New Zealand Ministry of Primary Industries',
			'The Scotch Whisky Association'
		],
		answer: 'Distilled Spirits Aotearoa',
		explanation: 'The standard is non-binding and enforced only through peer pressure.'
	},
	{
		id: 'nz-enzymes-single-malt',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Under New Zealand\'s voluntary standard, enzymes are...',
		options: [
			'Banned for single malt, allowed for blends',
			'Permitted for every whisky category',
			'Banned for every whisky category',
			'Required for blended whisky only'
		],
		answer: 'Banned for single malt, allowed for blends',
		explanation: 'The standard also bans liquid malt extract, added flavorings, and wood chips during maturation.'
	},
	{
		id: 'nz-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Which production steps must take place in New Zealand under the DSA standard?',
		options: [
			'Every step from mashing to bottling',
			'Distillation only, at any distillery',
			'Maturation and bottling only',
			'Bottling and labeling only'
		],
		answer: 'Every step from mashing to bottling',
		explanation: 'That is a stricter production-location test than most whisky nations use, though it has no legal force.'
	},
	{
		id: 'nz-thomson-manuka',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Thomson Whisky in Auckland smokes its barley over peat and which native wood?',
		options: ['Kauri', 'Manuka', 'Rimu', 'Totara'],
		answer: 'Manuka',
		explanation: 'Thomson uses South Island barley smoked over native manuka wood and peat.'
	},
	{
		id: 'nz-cardrona-climate',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Central Otago distilleries such as Cardrona report seasonal temperature swings of roughly how much?',
		options: ['10°C', '20°C', '40°C', '60°C'],
		answer: '40°C',
		explanation: 'Swings of roughly 40°C accelerate maturation.'
	},
	{
		id: 'nz-willowbank',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Which Dunedin distillery was once the world\'s southernmost whisky distillery?',
		options: ['Cardrona', 'Thomson', 'Willowbank', 'Lammerlaw'],
		answer: 'Willowbank',
		explanation: 'Willowbank produced Wilson\'s, 45 South, and Lammerlaw. Its surviving casks are still bottled by the New Zealand Whisky Collection.'
	},
	{
		id: 'nz-standard-voluntary',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Is New Zealand\'s whisky definition legally binding?',
		options: [
			'No; it is a voluntary industry standard',
			'Yes; it is set by an act of Parliament',
			'Yes; it is part of FSANZ Standard 2.7.5',
			'Only for whisky that is exported'
		],
		answer: 'No; it is a voluntary industry standard',
		explanation: 'New Zealand has no government whisky law. The Distilled Spirits Aotearoa definition is explicitly non-binding.'
	},
	{
		id: 'nz-standard-adoption',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'How was the Distilled Spirits Aotearoa whisky standard adopted?',
		options: [
			'By member consensus in February 2021',
			'By an act of Parliament in 2021',
			'By an FSANZ ruling in 2019',
			'By ministerial decree in 2010'
		],
		answer: 'By member consensus in February 2021',
		explanation: 'DSA members adopted the New Zealand Whisky Definition by consensus in February 2021.'
	},
	{
		id: 'nz-place-names',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Under the DSA standard, what may non-compliant products not use?',
		options: [
			'New Zealand place names or imagery',
			'The word "whisky" or "whiskey"',
			'Images of copper pot stills',
			'Caramel coloring or E150a'
		],
		answer: 'New Zealand place names or imagery',
		explanation: 'The standard is enforced only through peer pressure, including a prohibition on non-compliant products using New Zealand place names or imagery.'
	},
	{
		id: 'nz-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'What minimum aging period does New Zealand\'s DSA standard set for whisky?',
		options: ['None', '2 years', '3 years', '5 years'],
		answer: '2 years',
		explanation: 'The DSA standard sets a 2-year minimum. No government-mandated minimum exists.'
	},
	{
		id: 'nz-bottling-vs-fsanz',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'How does the DSA bottling minimum compare with the FSANZ general spirits floor?',
		options: [
			'Higher: 40% vs. 37% ABV',
			'Lower: 37% vs. 40% ABV',
			'The same: 40% ABV',
			'The same: 37% ABV'
		],
		answer: 'Higher: 40% vs. 37% ABV',
		explanation: 'The DSA standard requires 40% (80°) ABV, above the 37% spirits floor New Zealand shares with Australia under FSANZ Standard 2.7.5.'
	},
	{
		id: 'nz-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'What distillation ceiling does New Zealand\'s DSA standard set?',
		options: ['80% ABV', '90% ABV', 'Less than 94.8% ABV', '95% ABV'],
		answer: 'Less than 94.8% ABV',
		explanation: 'The DSA standard caps distillation below 94.8% (189.6°) ABV, matching Scotland. Australia has no statutory ceiling.'
	},
	{
		id: 'nz-pot-still',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Which distillation method does New Zealand\'s DSA standard require?',
		options: [
			'Batch distillation in copper pot stills',
			'Continuous distillation in column stills',
			'Any still type, provided it is copper',
			'Hybrid pot and column stills only'
		],
		answer: 'Batch distillation in copper pot stills',
		explanation: 'The DSA standard requires batch distillation in copper pot stills.'
	},
	{
		id: 'nz-not-banned',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Which of these is NOT banned under New Zealand\'s DSA standard?',
		options: [
			'Natural caramel coloring (E150a)',
			'Wood chips during maturation',
			'Commercially produced liquid malt extract',
			'Added flavoring ingredients'
		],
		answer: 'Natural caramel coloring (E150a)',
		explanation: 'Natural caramel coloring is the only permitted additive, used for consistency. Wood chips, liquid malt extract, and flavorings are banned.'
	},
	{
		id: 'nz-single-malt-ingredients',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'What must New Zealand single malt be made from under the DSA standard?',
		options: [
			'100% malted cereal grain, water, and yeast',
			'At least 51% malted barley, water, and yeast',
			'Any cereal grain, malted or not, and water',
			'Malted barley, water, yeast, and enzymes'
		],
		answer: '100% malted cereal grain, water, and yeast',
		explanation: 'Single malt requires 100% malted cereal grain, water, and yeast. Blended New Zealand whisky has broader grain rules.'
	},
	{
		id: 'nz-blended-grain',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'How do the DSA standard\'s grain rules for blended New Zealand whisky differ from single malt?',
		options: [
			'Blends may use fermentable sugars from cereal grain more broadly',
			'Blends may use molasses as well as grain',
			'Blends must use at least 51% corn',
			'There is no difference; both require 100% malted grain'
		],
		answer: 'Blends may use fermentable sugars from cereal grain more broadly',
		explanation: 'Single malt needs 100% malted cereal grain, while blended New Zealand whisky may draw on cereal grain sugars more broadly and may use enzymes.'
	},
	{
		id: 'compare-australia-nz-aging',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'Australia and New Zealand both have a 2-year aging minimum. What is the key difference?',
		options: [
			'Australia\'s is set in law; New Zealand\'s is voluntary',
			'New Zealand\'s is set in law; Australia\'s is voluntary',
			'Australia\'s applies only to single malt',
			'New Zealand\'s applies only to exports'
		],
		answer: 'Australia\'s is set in law; New Zealand\'s is voluntary',
		explanation: 'Australia\'s 2 years come from the Excise and Customs Acts. New Zealand\'s come from the non-binding DSA standard.'
	},
	{
		id: 'nz-dominant-category',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Which is effectively New Zealand\'s only active whisky category?',
		options: ['Single Malt', 'Blended', 'Rye', 'Grain'],
		answer: 'Single Malt',
		explanation: 'New Zealand single malt, made from 100% malted barley without enzymes, is effectively the only category in active production.'
	},
	{
		id: 'nz-thomson-barley',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Where does Auckland\'s Thomson Whisky source its barley?',
		options: ['The South Island', 'Scotland', 'Australia', 'The North Island'],
		answer: 'The South Island',
		explanation: 'Thomson uses South Island barley, smoked over manuka wood and peat.'
	},
	{
		id: 'nz-willowbank-labels-not',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Which of these was NOT a Willowbank Distillery label?',
		options: ['Wilson\'s', '45 South', 'Lammerlaw', 'Cardrona'],
		answer: 'Cardrona',
		explanation: 'Willowbank produced Wilson\'s, 45 South, and Lammerlaw. Cardrona is a modern Central Otago distillery.'
	},
	{
		id: 'nz-willowbank-years',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'During which years did Dunedin\'s Willowbank Distillery produce whisky?',
		options: ['1920-1950', '1974-1997', '1987-1994', '1997-2010'],
		answer: '1974-1997',
		explanation: 'Willowbank produced whisky from 1974 until its closure in 1997.'
	},
	{
		id: 'nz-collection-acquired',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'In which year did the New Zealand Whisky Collection acquire Willowbank\'s surviving casks?',
		options: ['1997', '2001', '2010', '2021'],
		answer: '2010',
		explanation: 'The New Zealand Whisky Collection acquired the casks in 2010, more than a decade after the distillery closed.'
	},
	{
		id: 'nz-willowbank-cask-vintages',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Willowbank\'s surviving casks were distilled during which period?',
		options: ['1974-1980', '1987-1994', '1995-1997', '2000-2010'],
		answer: '1987-1994',
		explanation: 'The surviving malt and grain casks were distilled between 1987 and 1994, so the whisky is now well over 30 years old.'
	},
	{
		id: 'nz-south-island-single-malt',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'The New Zealand Whisky Collection bottles Willowbank\'s malt stock under which name?',
		options: ['South Island Single Malt', 'Thomson Single Malt', 'Otago Reserve', 'Aotearoa Malt'],
		answer: 'South Island Single Malt',
		explanation: 'The malt stock is bottled as South Island Single Malt, while the grain whisky goes into blended releases.'
	},
	{
		id: 'nz-doublewood',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: VARIETIES,
		question: 'Doublewood, a New Zealand Whisky Collection release, is built on which Willowbank stock?',
		options: ['Grain whisky', 'Peated malt', 'Rye whisky', 'Wine-finished malt'],
		answer: 'Grain whisky',
		explanation: 'Willowbank\'s surviving grain whisky is used in blended releases such as Doublewood.'
	},
	{
		id: 'scenario-nz-liquid-malt-extract',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'A New Zealand distillery ferments commercial liquid malt extract, pot distills it, and ages it 3 years. Does it meet the DSA standard?',
		options: [
			'No; liquid malt extract is not permitted',
			'Yes; it meets the 2-year aging minimum',
			'Yes, but only if sold as blended whisky',
			'No; it must be aged at least 5 years'
		],
		answer: 'No; liquid malt extract is not permitted',
		explanation: 'The DSA standard bans commercially produced liquid malt extract for all New Zealand whisky, regardless of aging.'
	},
	{
		id: 'scenario-nz-bottled-abroad',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'A whisky is mashed, distilled, and aged in New Zealand, then bottled in Australia. Does it meet the DSA standard?',
		options: [
			'No; bottling must also take place in New Zealand',
			'Yes; distillation in New Zealand is enough',
			'Yes; FSANZ treats both countries as one',
			'Only if bottled at 40% ABV or higher'
		],
		answer: 'No; bottling must also take place in New Zealand',
		explanation: 'Mashing, fermentation, distillation, maturation, and bottling must all happen in New Zealand under the DSA standard.'
	},
	{
		id: 'scenario-nz-large-casks',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
		question: 'A New Zealand single malt is matured for 3 years in 900-liter casks. Does it meet the DSA standard?',
		options: [
			'No; casks may not exceed 700 liters',
			'Yes; the standard sets no cask size limit',
			'Yes; only the 2-year minimum matters',
			'No; casks may not exceed 500 liters'
		],
		answer: 'No; casks may not exceed 700 liters',
		explanation: 'The DSA standard requires wooden casks of no more than 700 liters. Australian law sets no cask size limit.'
	}
];
