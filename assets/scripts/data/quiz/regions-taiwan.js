import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: Taiwan
export const REGIONS_TAIWAN_QUESTIONS = [
	{
		id: 'taiwan-producers',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Kavalan and Omar are whisky brands from which country?',
		options: ['Japan', 'India', 'Taiwan', 'Australia'],
		answer: 'Taiwan',
		explanation: 'Kavalan is based in Yilan, and Omar is made by Nantou Distillery.'
	},
	{
		id: 'taiwan-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What is Taiwan\'s minimum aging requirement for whisky?',
		options: ['None', '1 year', '2 years', '3 years'],
		answer: '2 years',
		explanation: 'Taiwan requires 2 years in wooden casks.'
	},
	{
		id: 'taiwan-angels-share',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Taiwan\'s climate drives an angel\'s share of roughly 12% per year. What is Scotland\'s typical rate?',
		options: ['About 2%', 'About 6%', 'About 10%', 'About 15%'],
		answer: 'About 2%',
		explanation: 'Because of this, whisky aged 4 to 6 years in Taiwan can taste comparable to a 12- to 18-year-old Scotch.'
	},
	{
		id: 'taiwan-omar-casks',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Nantou Distillery also runs a fruit winery. What does this let Omar do?',
		options: [
			'Finish whisky in casks that held lychee, plum, or orange wine',
			'Ferment its wash with added lychee and plum sugars',
			'Blend fruit brandy directly into its single malt',
			'Smoke its barley over fruit wood from local orchards'
		],
		answer: 'Finish whisky in casks that held lychee, plum, or orange wine',
		explanation: 'Taiwanese producers also favor first-fill and heavily toasted casks to stand up to fast tropical maturation.'
	},
	{
		id: 'taiwan-dominant-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Unlike most whisky-producing nations, where blends lead, which category dominates Taiwan\'s output?',
		options: ['Single Grain', 'Single Malt', 'Blended', 'Rice Whisky'],
		answer: 'Single Malt',
		explanation: 'Single Malt, led by Kavalan and Omar, dominates Taiwan\'s whisky output.'
	},
	{
		id: 'taiwan-single-grain',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Taichung Distillery\'s Grainvest line is a Taiwanese single grain distilled from which grain?',
		options: ['Rice', 'Corn', 'Wheat', 'Sorghum'],
		answer: 'Wheat',
		explanation: 'Grainvest is distilled from wheat in column stills, offering a lighter, sweeter style.'
	},
	{
		id: 'taiwan-no-origin-rule',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Why do Kavalan and Nantou voluntarily follow Scotch-style practices such as banning imported bulk spirit?',
		options: [
			'Taiwan\'s law sets no domestic-production requirement',
			'Taiwan adopted the Scotch Whisky Regulations directly',
			'It is a requirement for exporting whisky to Japan',
			'Their parent companies are Scottish whisky groups'
		],
		answer: 'Taiwan\'s law sets no domestic-production requirement',
		explanation: 'Taiwan\'s statute defines a generic tax category rather than a protected designation of origin.'
	},
	{
		id: 'compare-two-year-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which of these has a 2-year minimum aging requirement rather than 3?',
		options: ['Scotland', 'Ireland', 'Japan', 'Taiwan'],
		answer: 'Taiwan',
		explanation: 'Scotland, Ireland, and Japan require 3 years. Taiwan and Australia require 2.'
	},
	{
		id: 'taiwan-regulator',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Where is whisky defined in Taiwanese law?',
		options: [
			'Enforcement Rules of the Tobacco and Alcohol Administration Act',
			'A dedicated Taiwan Whisky Act passed by the Legislative Yuan',
			'A registered Taiwanese geographical indication for whisky',
			'Voluntary standards set jointly by Kavalan and Nantou'
		],
		answer: 'Enforcement Rules of the Tobacco and Alcohol Administration Act',
		explanation: 'Taiwan has no whisky-specific law or geographic indication. Whisky is a generic tax and labeling definition within these Enforcement Rules.'
	},
	{
		id: 'taiwan-ministry',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which Taiwanese government ministry oversees the rules that define whisky?',
		options: ['Ministry of Finance', 'Ministry of Agriculture', 'Ministry of Health and Welfare', 'Ministry of Economic Affairs'],
		answer: 'Ministry of Finance',
		explanation: 'The definition sits in the Enforcement Rules of the Tobacco and Alcohol Administration Act, under the Ministry of Finance, because it is a tax category.'
	},
	{
		id: 'taiwan-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for whisky in Taiwan?',
		options: ['37% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'Taiwan requires at least 40% (80°) ABV, the same floor as Scotland, Ireland, and Japan.'
	},
	{
		id: 'taiwan-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What maximum distillation strength does Taiwan set for whisky?',
		options: ['None specified', 'Less than 94.8% ABV', '95% ABV', '80% ABV'],
		answer: 'None specified',
		explanation: 'Taiwan\'s statute sets no distillation ceiling. Scotland and Ireland cap distillation below 94.8% ABV.'
	},
	{
		id: 'taiwan-grain-base',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which grains does Taiwanese law permit for whisky?',
		options: [
			'Any grain, malted or not',
			'Malted barley only',
			'Malted grains, with unmalted grains limited to 30%',
			'Barley and wheat only'
		],
		answer: 'Any grain, malted or not',
		explanation: 'The law allows any grain. Malted barley dominates in practice, though some producers experiment with rice, wheat, and corn.'
	},
	{
		id: 'taiwan-additives',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What does Taiwan\'s whisky statute say about additives?',
		options: [
			'It specifies no additive rules',
			'Caramel coloring (E150a) only',
			'Up to 9.09% other spirits or flavorings',
			'All additives are banned'
		],
		answer: 'It specifies no additive rules',
		explanation: 'Taiwan\'s statute is silent on additives. Scotland, Ireland, and Japan permit only caramel coloring (E150a).'
	},
	{
		id: 'taiwan-fermentation',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'What does Taiwan\'s whisky definition require for fermentation?',
		options: [
			'Saccharification and fermentation, with no enzyme restriction specified',
			'Yeast only, with added enzymes explicitly banned',
			'Natural malt enzymes only, with no added enzymes',
			'Fermentation only at a separately licensed brewery'
		],
		answer: 'Saccharification and fermentation, with no enzyme restriction specified',
		explanation: 'Taiwan requires saccharification and fermentation but does not restrict enzymes. Scotland, by contrast, allows yeast only.'
	},
	{
		id: 'taiwan-cask-rules-not',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which of these is NOT part of Taiwan\'s legal definition of whisky?',
		options: [
			'At least 2 years of aging',
			'Bottling at 40% ABV or more',
			'Aging in wooden casks',
			'A maximum cask size of 700 litres'
		],
		answer: 'A maximum cask size of 700 litres',
		explanation: 'Taiwan requires wooden casks but sets no size limit. Scotland and Japan cap casks at 700 litres.'
	},
	{
		id: 'taiwan-climate',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which conditions speed up whisky maturation in Taiwan?',
		options: [
			'Subtropical heat with large day-night temperature swings',
			'A cool, damp maritime climate with steady temperatures',
			'High altitude and thin air in mountain warehouses',
			'Long, freezing winters followed by short, mild summers'
		],
		answer: 'Subtropical heat with large day-night temperature swings',
		explanation: 'Taiwan\'s subtropical climate and large diurnal swings drive fast maturation and a high angel\'s share.'
	},
	{
		id: 'taiwan-kavalan-temperatures',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Temperatures at Kavalan can swing across roughly which daily range?',
		options: ['26°C to 42°C', '10°C to 25°C', '5°C to 18°C', '32°C to 55°C'],
		answer: '26°C to 42°C',
		explanation: 'Kavalan can see lows around 26°C at night and highs up to 42°C by day, which accelerates maturation.'
	},
	{
		id: 'taiwan-maturation-equivalence',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'A Taiwanese whisky aged 4 to 6 years can taste comparable to a Scotch of roughly what age?',
		options: ['5 to 7 years', '8 to 10 years', '12 to 18 years', '25 to 30 years'],
		answer: '12 to 18 years',
		explanation: 'Fast tropical maturation lets a 4- to 6-year-old Taiwanese whisky rival a 12- to 18-year-old Scotch.'
	},
	{
		id: 'taiwan-voluntary-onsite',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Which of these do Kavalan and Nantou practice voluntarily, since Taiwanese law does not require it?',
		options: [
			'Distilling on site',
			'Aging at least 2 years',
			'Bottling at 40% ABV or more',
			'Aging in wooden casks'
		],
		answer: 'Distilling on site',
		explanation: 'On-site distillation and a ban on imported bulk spirit are voluntary. The 2-year minimum, 40% bottling floor, and wooden casks are legal requirements.'
	},
	{
		id: 'taiwan-japan-pre-2021',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'Taiwan\'s lack of a domestic-production rule resembles Japan\'s situation before which year?',
		options: ['2009', '2014', '2021', '2024'],
		answer: '2021',
		explanation: 'Before its 2021 standards, Japan had no binding domestic rules. Taiwan still has no requirement that its whisky be produced entirely in Taiwan.'
	},
	{
		id: 'taiwan-scenario-young-rice',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'A Taiwanese spirit made from rice is aged 18 months in wooden casks and bottled at 43% ABV. Can it be called whisky under Taiwan\'s rules?',
		options: [
			'No, it is under the 2-year minimum',
			'No, rice is not a permitted grain',
			'No, 43% ABV is too strong',
			'Yes, it meets every rule'
		],
		answer: 'No, it is under the 2-year minimum',
		explanation: 'Rice is allowed and 43% ABV is above the 40% floor, but Taiwan requires 2 years in wooden casks.'
	},
	{
		id: 'taiwan-scenario-large-cask',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: LEGAL,
		question: 'A single malt is aged 3 years in a 900-litre wooden cask. Under which country\'s rules could it still be called whisky?',
		options: ['Taiwan', 'Scotland', 'Japan', 'Canada'],
		answer: 'Taiwan',
		explanation: 'Taiwan sets no cask size limit. Scotland, Japan, and Canada all cap casks at 700 litres.'
	},
	{
		id: 'taiwan-kavalan-location',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Where in Taiwan is Kavalan based?',
		options: ['Yilan', 'Nantou', 'Taichung', 'Kinmen'],
		answer: 'Yilan',
		explanation: 'Kavalan is based in Yilan. Omar comes from Nantou Distillery, and Grainvest from Taichung Distillery.'
	},
	{
		id: 'taiwan-omar-distillery',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Which distillery makes Omar single malt?',
		options: ['Nantou Distillery', 'Taichung Distillery', 'Kavalan Distillery', 'Kinmen Distillery'],
		answer: 'Nantou Distillery',
		explanation: 'Omar is made by Nantou Distillery, which also still operates as a fruit winery.'
	},
	{
		id: 'taiwan-cask-choice',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		topic: VARIETIES,
		question: 'Which casks do Taiwanese single malt producers favor to stand up to fast tropical maturation?',
		options: [
			'First-fill and heavily toasted casks',
			'Refill casks on their fourth or fifth use',
			'Large, neutral wooden vats',
			'Uncharred, well-used casks only'
		],
		answer: 'First-fill and heavily toasted casks',
		explanation: 'First-fill and heavily toasted casks give bold flavor that holds up to Taiwan\'s rapid maturation.'
	}
];
