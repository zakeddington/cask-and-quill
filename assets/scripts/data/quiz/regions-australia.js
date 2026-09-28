import { WORLD_WHISKY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

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
		question: 'What sparked Australia\'s 2025 industry dispute over the term "single malt"?',
		options: [
			'Spirit matured only 10-14 days with accelerated technology was sold as single malt',
			'Imported Scotch was relabeled as Australian',
			'Producers used rum casks without disclosure',
			'Tasmanian distilleries were barred from using the term'
		],
		answer: 'Spirit matured only 10-14 days with accelerated technology was sold as single malt',
		explanation: 'Australia has no legal definition of single malt. Industry groups have pushed for a stricter standard.'
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
			'New charred American oak',
			'Mizunara oak',
			'Ex-rum casks from Queensland'
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
			'A native Australian grain',
			'A Tasmanian peat variety',
			'An Aboriginal word for whisky'
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
	}
];
