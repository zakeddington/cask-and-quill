import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Australia
export const REGIONS_AUSTRALIA_QUESTIONS = [
	{
		id: 'australia-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which of these has the lowest minimum bottling strength for whisky?',
		options: ['Scotland', 'Japan', 'United States', 'Australia'],
		answer: 'Australia',
		explanation: 'Australia\'s floor is 37% ABV, the general spirits minimum under FSANZ Standard 2.7.5. The others require 40%.'
	},
	{
		id: 'australia-aging-law',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Australia\'s 2-year minimum aging for whisky comes from which laws?',
		options: [
			'The Excise Act 1901 and Customs Act 1901',
			'FSANZ Standard 2.7.5',
			'The Australian Whisky Regulations 2009',
			'The Tasmanian Spirits Act 1992'
		],
		answer: 'The Excise Act 1901 and Customs Act 1901',
		explanation: 'The Excise Act covers domestic release and the Customs Act covers imports.'
	},
	{
		id: 'australia-bill-lark',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Bill Lark reopened small-batch distilling in 1992 in which Australian state?',
		options: ['Victoria', 'New South Wales', 'Tasmania', 'South Australia'],
		answer: 'Tasmania',
		explanation: 'Tasmania\'s cooler climate made it the reputational and historical center of Australian single malt.'
	},
	{
		id: 'australia-tasmania-producers',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Which of these is a mainland producer rather than a Tasmanian one?',
		options: ['Lark', 'Sullivans Cove', 'Archie Rose', 'Overeem'],
		answer: 'Archie Rose',
		explanation: 'Lark, Sullivans Cove, Overeem, and Hellyers Road are Tasmanian. Archie Rose matures in a hotter mainland climate.'
	},
	{
		id: 'australia-single-malt-dispute',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Why could Mountain Distilling sell its Red Gum Single Malt, force-aged for about 15 days, as "single malt"?',
		options: [
			'It wasn\'t sold as "whisky", so the 2-year rule didn\'t apply',
			'It met the 2-year rule by counting time in used casks',
			'Tasmania exempts all single malt spirit from the 2-year rule',
			'FSANZ lets red gum wood count double toward the 2-year rule'
		],
		answer: 'It wasn\'t sold as "whisky", so the 2-year rule didn\'t apply',
		explanation: 'Australia\'s 2-year wood rule applies only to spirit sold as "whisky", and "single malt" has no legal definition. Industry groups have pushed for a stricter standard.'
	},
	{
		id: 'australia-starward',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Starward matures its entire range in which type of cask?',
		options: [
			'Ex-wine casks from the Barossa region',
			'New charred American oak from Kentucky',
			'Mizunara oak imported from Hokkaido',
			'Ex-rum casks from Queensland distilleries'
		],
		answer: 'Ex-wine casks from the Barossa region',
		explanation: 'Wine-cask maturation is a distinctly Australian style, built on the country\'s wine industry.'
	},
	{
		id: 'australia-apera',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'In Australia, what is "apera"?',
		options: [
			'The post-2010 term for sherry-style fortified wine',
			'A native Australian grain used in mash bills',
			'A Tasmanian peat variety used to dry barley',
			'An Aboriginal word for aged grain spirit'
		],
		answer: 'The post-2010 term for sherry-style fortified wine',
		explanation: 'Australian producers season casks with port, apera, and red wine.'
	},
	{
		id: 'australia-blended-period',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Australia\'s British-owned "Blended Whisky Period" spanned which years?',
		options: ['1850-1900', '1900-1920', '1930-1980', '1992-2010'],
		answer: '1930-1980',
		explanation: 'Blends dominated until tariff protections ended and the era\'s major distilleries closed.'
	},
	{
		id: 'compare-no-single-malt-definition',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which of these countries has no legal definition of "single malt"?',
		options: ['Scotland', 'Ireland', 'United States', 'Australia'],
		answer: 'Australia',
		explanation: 'Scotland, Ireland, and the U.S. all define single malt in law. Australia does not.'
	},
	{
		id: 'australia-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'What is the minimum aging period for Australian whisky?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: '2 years',
		explanation: 'Australian whisky must spend at least 2 years in wood. Scotland, Ireland, and Japan require 3.'
	},
	{
		id: 'australia-no-whisky-law',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which statement best describes how Australian whisky is regulated?',
		options: [
			'No whisky-specific definition; general food, excise, and customs laws apply',
			'A dedicated Australian Whisky Regulations act, similar to Scotland\'s',
			'A binding geographic indication registered in 2014',
			'A voluntary industry standard with no government rules at all'
		],
		answer: 'No whisky-specific definition; general food, excise, and customs laws apply',
		explanation: 'Australia relies on FSANZ Standard 2.7.5, the Excise Act 1901, and the Customs Act 1901 rather than a whisky-specific law.'
	},
	{
		id: 'australia-fsanz-partner',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'FSANZ Standard 2.7.5 is a food standard Australia shares with which country?',
		options: ['New Zealand', 'Canada', 'South Africa', 'Singapore'],
		answer: 'New Zealand',
		explanation: 'FSANZ stands for Food Standards Australia New Zealand. Both countries share its 37% general spirits floor.'
	},
	{
		id: 'australia-bottling-source',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Australia\'s 37% ABV bottling minimum for whisky comes from which rule?',
		options: [
			'FSANZ Standard 2.7.5',
			'The Excise Act 1901',
			'The Customs Act 1901',
			'An Australian Distillers Association standard'
		],
		answer: 'FSANZ Standard 2.7.5',
		explanation: 'The 37% floor is the general spirits minimum set by FSANZ Standard 2.7.5. The Excise and Customs Acts set the 2-year aging rule.'
	},
	{
		id: 'australia-bottling-proof',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Australia\'s 37% ABV bottling minimum equals how many degrees proof?',
		options: ['37°', '70°', '74°', '80°'],
		answer: '74°',
		explanation: 'Proof is double the ABV, so 37% ABV is 74°. The 40% minimum used by most other countries is 80°.'
	},
	{
		id: 'australia-grain-base',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which grains may Australian whisky be made from?',
		options: [
			'Any cereal grain',
			'Malted barley only',
			'At least 51% malted barley',
			'Barley and wheat only'
		],
		answer: 'Any cereal grain',
		explanation: 'Australian law permits any cereal grain and has no malted barley requirement, so multi-grain mash bills are legally whisky.'
	},
	{
		id: 'australia-brewery-wash',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which fermentation practice does Australian law permit, and several early producers relied on?',
		options: [
			'Using wash or wort sourced from breweries',
			'Fermenting with added fruit sugars',
			'Using liquid malt extract as the only fermentable',
			'Fermenting inside the maturation cask'
		],
		answer: 'Using wash or wort sourced from breweries',
		explanation: 'Australia sets no fermentation restrictions, so externally sourced wash or wort is allowed. New Zealand\'s voluntary standard is stricter about fermentation inputs.'
	},
	{
		id: 'compare-no-statutory-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which of these sets no statutory distillation ceiling for whisky?',
		options: ['Scotland', 'Ireland', 'New Zealand', 'Australia'],
		answer: 'Australia',
		explanation: 'Australian law sets no distillation ceiling. Scotland, Ireland, and New Zealand\'s standard all cap distillation below 94.8% ABV.'
	},
	{
		id: 'australia-ato-ceiling',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which body administratively recognizes distillation up to roughly 95% ABV as consistent with Australian whisky?',
		options: [
			'The Australian Taxation Office',
			'Food Standards Australia New Zealand',
			'The Australian Distillers Association',
			'The Tasmanian Whisky and Spirits Producers Association'
		],
		answer: 'The Australian Taxation Office',
		explanation: 'There is no statutory ceiling, but the Australian Taxation Office recognizes distillation up to roughly 95% (190°) ABV as consistent with whisky character.'
	},
	{
		id: 'australia-not-specified',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which of these does Australian law NOT specify for whisky?',
		options: [
			'A barrel entry proof',
			'A 2-year aging minimum',
			'A 37% ABV bottling minimum',
			'Maturation in oak casks'
		],
		answer: 'A barrel entry proof',
		explanation: 'Australia specifies no entry proof. It does require oak casks, 2 years of aging, and a 37% ABV bottling strength.'
	},
	{
		id: 'australia-cask-rule',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'What cask rule applies to Australian whisky?',
		options: [
			'Oak casks, with no size limit codified in law',
			'Oak casks not exceeding 700 liters',
			'Any wooden cask not exceeding 700 liters',
			'New charred oak only'
		],
		answer: 'Oak casks, with no size limit codified in law',
		explanation: 'Australian whisky must mature in oak, but the law sets no cask size limit.'
	},
	{
		id: 'compare-oak-no-size-limit',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which of these requires oak casks but sets no cask size limit?',
		options: ['Scotland', 'Japan', 'New Zealand', 'Australia'],
		answer: 'Australia',
		explanation: 'Australia requires oak with no codified size limit. Scotland caps oak casks at 700 liters, and Japan and New Zealand\'s standard cap wooden casks at 700 liters.'
	},
	{
		id: 'australia-additives',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which statement about additives in Australian whisky is true?',
		options: [
			'Caramel coloring is allowed, with no formal ban on others',
			'Caramel coloring is the only permitted additive',
			'No additives of any kind are permitted in whisky',
			'Flavorings are permitted up to 9.09% of the blend'
		],
		answer: 'Caramel coloring is allowed, with no formal ban on others',
		explanation: 'Australia permits caramel coloring (E150a) and has no formal prohibition on other flavoring agents or wood chips.'
	},
	{
		id: 'compare-australia-nz-wood-chips',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'How do Australia and New Zealand\'s rules differ on wood chips during maturation?',
		options: [
			'Australia has no formal ban; New Zealand\'s standard prohibits them',
			'Both prohibit them',
			'Both permit them',
			'Australia prohibits them; New Zealand\'s standard permits them'
		],
		answer: 'Australia has no formal ban; New Zealand\'s standard prohibits them',
		explanation: 'Australian law has no formal prohibition on wood chips. New Zealand\'s voluntary DSA standard bans them during maturation.'
	},
	{
		id: 'australia-origin-labeling',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'What governs claims that a whisky is Australian?',
		options: [
			'General country-of-origin food labeling law',
			'A registered Australian Whisky geographic indication',
			'The Excise Act 1901',
			'A voluntary distillers association standard'
		],
		answer: 'General country-of-origin food labeling law',
		explanation: 'Australia has no dedicated whisky appellation, so origin claims fall under general country-of-origin food labeling law.'
	},
	{
		id: 'australia-dominant-category',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Which is the dominant category of Australian whisky today?',
		options: ['Single Malt', 'Blended', 'Rye', 'Wheat'],
		answer: 'Single Malt',
		explanation: 'Single malt leads the Australian market. Blended whisky, once dominant, is now a minority category.'
	},
	{
		id: 'australia-single-malt-stills',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Australian single malt is typically distilled in which type of still?',
		options: [
			'Copper pot stills',
			'Continuous column stills',
			'Stainless steel reflux stills',
			'Lomond stills'
		],
		answer: 'Copper pot stills',
		explanation: 'Australian single malt is made from malted barley in copper pot stills, largely following Scotch conventions.'
	},
	{
		id: 'australia-mainland-climate',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'How does the hotter mainland Australian climate affect maturation compared with Tasmania?',
		options: [
			'It accelerates evaporation and flavor extraction',
			'It slows evaporation and flavor extraction',
			'It has no measurable effect',
			'It prevents the use of wine casks'
		],
		answer: 'It accelerates evaporation and flavor extraction',
		explanation: 'Mainland producers such as Archie Rose mature in a hotter climate than cooler Tasmania, which speeds evaporation and extraction.'
	},
	{
		id: 'australia-archie-rose-rye',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Archie Rose\'s Rye Malt Whisky, made from malted rye, won which award in 2020?',
		options: [
			'World\'s Best Rye Whisky',
			'World\'s Best Single Malt',
			'World\'s Best Blended Whisky',
			'World\'s Best New Distillery'
		],
		answer: 'World\'s Best Rye Whisky',
		explanation: 'Archie Rose\'s Rye Malt Whisky won World\'s Best Rye Whisky in 2020, showing the grain range Australian law allows.'
	},
	{
		id: 'australia-wine-cask-category',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Is wine-cask-matured whisky a legal category in Australia?',
		options: [
			'No, it is a stylistic tradition, not a legal category',
			'Yes, it must use Australian wine casks only',
			'Yes, it requires at least 2 years in ex-wine casks',
			'Yes, but only for Tasmanian whisky'
		],
		answer: 'No, it is a stylistic tradition, not a legal category',
		explanation: 'Wine-cask maturation is a distinctly Australian style built on the country\'s wine industry, not a separate legal category.'
	},
	{
		id: 'australia-cask-seasoning-not',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Which of these is NOT a wine used to season casks for Australian wine-cask whisky?',
		options: ['Port', 'Apera', 'Australian red wine', 'Mezcal'],
		answer: 'Mezcal',
		explanation: 'Australian producers season casks with port, apera, and red wine. Mezcal is an agave spirit, not a wine.'
	},
	{
		id: 'australia-starward-style',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'What house style does Starward aim for with its ex-wine cask maturation?',
		options: ['Fruit-forward', 'Heavily peated', 'Light and grassy', 'Sweet and corn-driven'],
		answer: 'Fruit-forward',
		explanation: 'Starward uses ex-wine casks from the Barossa region for a deliberately fruit-forward house style.'
	},
	{
		id: 'australia-blended-decline',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
		topic: VARIETIES,
		question: 'Why did blended whisky fall from majority to minority status in Australia?',
		options: [
			'Tariff protections ended and the era\'s major distilleries closed',
			'A 1980 federal law banned grain whisky production',
			'Blends lost the legal right to use the word whisky',
			'Tasmania banned blended whisky production outright'
		],
		answer: 'Tariff protections ended and the era\'s major distilleries closed',
		explanation: 'Blends dominated during the 1930-1980 Blended Whisky Period, then declined when tariff protections ended and major distilleries closed.'
	},
	{
		id: 'australia-single-malt-standard-groups',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'Which groups have pushed for a stricter Australian single malt standard?',
		options: [
			'The Australian Distillers Association and Tasmanian producers\' association',
			'Distilled Spirits Aotearoa and Food Standards Australia New Zealand',
			'The Scotch Whisky Association and the Australian Taxation Office',
			'The Australian Taxation Office and Food Standards Australia New Zealand'
		],
		answer: 'The Australian Distillers Association and Tasmanian producers\' association',
		explanation: 'Both industry groups pushed for a stricter standard after the 2025 dispute over fast-matured spirit sold as single malt.'
	},
	{
		id: 'scenario-australia-18-months',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'An Australian malt spirit is aged 18 months in oak and bottled at 40% ABV. Can it be released as whisky in Australia?',
		options: [
			'No; it has not met the 2-year aging minimum',
			'Yes; Australia has no aging minimum',
			'Yes; 18 months is enough if bottled at 40%',
			'No; it must be bottled at 43% ABV'
		],
		answer: 'No; it has not met the 2-year aging minimum',
		explanation: 'The Excise Act 1901 requires 2 years in wood before domestic release as whisky. The 40% bottling strength is above the 37% floor.'
	},
	{
		id: 'scenario-australia-brewery-wort',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'An Australian distiller distills wort bought from a brewery, ages it 2 years in oak, and bottles it at 37% ABV. Is it legally whisky?',
		options: [
			'Yes; sourced wort and a 37% bottling strength are both permitted',
			'No; fermentation must take place at the distillery',
			'No; whisky must be bottled at 40% ABV',
			'Only if it is labeled as blended whisky'
		],
		answer: 'Yes; sourced wort and a 37% bottling strength are both permitted',
		explanation: 'Australia places no restrictions on fermentation and sets its bottling floor at 37% ABV. The spirit also meets the 2-year oak rule.'
	},
	{
		id: 'scenario-australia-two-distillery-malt',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		topic: LEGAL,
		question: 'An Australian whisky blends pot-still malt from two distilleries and is labeled "single malt." Does it break Australian law?',
		options: [
			'No; Australia has no legal definition of single malt',
			'Yes; single malt must come from one distillery',
			'Yes; single malt must be aged in Tasmania',
			'No, but only because it was made in pot stills'
		],
		answer: 'No; Australia has no legal definition of single malt',
		explanation: 'Scotch single malt must come from one distillery, but Australian law does not define the term at all.'
	}
];
