import { LABELING_PRODUCERS, STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: European Union
export const REGIONS_EUROPEAN_UNION_QUESTIONS = [
	{
		id: 'eu-regulation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which regulation defines whisky across the European Union?',
		options: [
			'Regulation (EU) 2019/787',
			'Scotch Whisky Regulations 2009',
			'Irish Whiskey Technical File 2014',
			'FSANZ Standard 2.7.5'
		],
		answer: 'Regulation (EU) 2019/787',
		explanation: 'It sets a bloc-wide floor that member states and regional GIs may build on with stricter rules.'
	},
	{
		id: 'eu-single-malt-pot-still',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'How does EU Single Malt differ from Scotch Single Malt?',
		options: [
			'The EU does not require pot still distillation',
			'The EU allows unmalted barley in single malt',
			'The EU sets no minimum aging for whisky',
			'The EU allows sweeteners to round flavor'
		],
		answer: 'The EU does not require pot still distillation',
		explanation: 'A column-distilled spirit can technically qualify as "single malt" under EU rules alone.'
	},
	{
		id: 'eu-sweetening-tolerance',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What sweetening tolerance does EU law allow for whisky?',
		options: ['Zero', 'Up to 2 g/L', 'Up to 10 g/L', 'No limit'],
		answer: 'Zero',
		explanation: 'EU whisky has zero sweetening tolerance, stricter than most other EU spirit categories. Only caramel coloring is permitted.'
	},
	{
		id: 'eu-france-market',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which country is the world\'s largest whisky-consuming market and has over 120 active distilleries?',
		options: ['Germany', 'France', 'Netherlands', 'Denmark'],
		answer: 'France',
		explanation: 'France is the largest EU whisky producer by distillery count and the world\'s largest whisky-consuming market.'
	},
	{
		id: 'eu-slyrs',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Slyrs, which leads German whisky, is based in which region?',
		options: ['Bavaria', 'Saxony', 'Hesse', 'Black Forest'],
		answer: 'Bavaria',
		explanation: 'Germany has more than 20 whisky distilleries, led by Bavaria\'s Slyrs.'
	},
	{
		id: 'eu-millstone',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'The Millstone range of single malt and rye comes from which country?',
		options: ['Belgium', 'Netherlands', 'Germany', 'Denmark'],
		answer: 'Netherlands',
		explanation: 'Millstone is bottled by the Zuidam distillery in the Netherlands.'
	},
	{
		id: 'eu-french-gis',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'France holds registered EU geographical indications for whisky from which two regions?',
		options: [
			'Brittany and Alsace',
			'Normandy and Burgundy',
			'Cognac and Armagnac',
			'Provence and Champagne'
		],
		answer: 'Brittany and Alsace',
		explanation: 'Whisky Breton and Whisky Alsacien both require local water and in-region fermentation, distillation, and aging.'
	},
	{
		id: 'eu-armorik',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Armorik, the leading Whisky Breton, is made by which distillery?',
		options: ['Warenghem', 'Slyrs', 'Zuidam', 'Stauning'],
		answer: 'Warenghem',
		explanation: 'The Whisky Breton GI, created in 2015, is led by the Warenghem distillery\'s Armorik.'
	},
	{
		id: 'compare-94-8-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Scotland, Ireland, and the EU share which distillation ceiling?',
		options: ['80% ABV', '90% ABV', 'Less than 94.8% ABV', '95% ABV'],
		answer: 'Less than 94.8% ABV',
		explanation: 'All three cap distillation below 94.8% (189.6°) ABV, while the U.S. and Japan allow up to 95%.'
	},
	{
		id: 'eu-aging-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What is the minimum aging period for whisky under EU law?',
		options: ['None', '2 years', '3 years', '5 years'],
		answer: '3 years',
		explanation: 'EU whisky must mature for at least 3 years, the same minimum as Scotch and Irish whiskey.'
	},
	{
		id: 'eu-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What is the minimum bottling strength for whisky sold under EU rules?',
		options: ['37% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'EU whisky must be bottled at no less than 40% (80°) ABV.'
	},
	{
		id: 'eu-cask-rule',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What kind of cask does EU law require for maturing whisky?',
		options: [
			'Wooden casks not exceeding 700 litres',
			'Oak casks not exceeding 700 litres',
			'Wooden casks of any size',
			'New charred oak barrels'
		],
		answer: 'Wooden casks not exceeding 700 litres',
		explanation: 'The EU allows any wood up to 700 litres. Scotland adds the stricter requirement that the casks be oak.'
	},
	{
		id: 'eu-grain-base',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What grain base does EU law require for whisky?',
		options: [
			'Malted cereals, with or without whole unmalted grains',
			'Malted barley only, with no other cereals',
			'At least 51% corn, as with bourbon',
			'Any grain or sugar source, malted or not'
		],
		answer: 'Malted cereals, with or without whole unmalted grains',
		explanation: 'Some malted cereal must be in the mash, but unmalted whole grains may be added. Only single malt is limited to malted barley.'
	},
	{
		id: 'eu-entry-proof',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'What maximum barrel entry proof does EU law set for whisky?',
		options: ['None specified', '62.5% ABV', '70% ABV', '80% ABV'],
		answer: 'None specified',
		explanation: 'The EU sets no entry proof. The U.S. is the notable exception, capping barrel entry at 62.5% (125°) ABV.'
	},
	{
		id: 'eu-each-distillation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'How does the EU apply its 94.8% ABV distillation ceiling?',
		options: [
			'To each and every distillation',
			'To the final distillation only',
			'To the average strength across all distillations',
			'To grain whisky only'
		],
		answer: 'To each and every distillation',
		explanation: 'Every distillation run must stay below 94.8% (189.6°) ABV, not just the last one.'
	},
	{
		id: 'eu-permitted-additive',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which additive does EU law permit in whisky?',
		options: [
			'Caramel coloring (E150a)',
			'Sugar syrup up to 2%',
			'Oak chips or extract',
			'Glycerol for texture'
		],
		answer: 'Caramel coloring (E150a)',
		explanation: 'Plain caramel coloring is the only permitted additive, and only for adjusting color.'
	},
	{
		id: 'eu-regulation-scope',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Regulation (EU) 2019/787 covers the definition, description, presentation, and labelling of what?',
		options: ['Spirit drinks', 'Whisky only', 'All alcoholic beverages', 'Wines and aromatised wines'],
		answer: 'Spirit drinks',
		explanation: 'The regulation covers all spirit drinks, and whisky is one of the categories it defines.'
	},
	{
		id: 'eu-floor-role',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'How do the EU whisky rules relate to national and regional rules?',
		options: [
			'They are a floor that countries and GIs may make stricter',
			'They are a ceiling that countries may relax',
			'They replace all national whisky rules',
			'They apply only to countries without their own rules'
		],
		answer: 'They are a floor that countries and GIs may make stricter',
		explanation: 'The EU rules are a bloc-wide minimum. Ireland and France\'s Brittany and Alsace GIs add stricter rules on top.'
	},
	{
		id: 'eu-stricter-rules',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which of these must meet binding rules stricter than the EU whisky floor?',
		options: ['Irish whiskey', 'Slyrs from Germany', 'Millstone from the Netherlands', 'Danish whisky'],
		answer: 'Irish whiskey',
		explanation: 'Ireland has its own binding rules on top of the EU floor. Germany and the Netherlands have none, and Denmark\'s Manifesto is voluntary.'
	},
	{
		id: 'eu-producing-states',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Roughly how many EU member states produce whisky commercially?',
		options: ['5', '10', '20', 'All 27'],
		answer: '20',
		explanation: 'Roughly 20 EU member states now produce whisky commercially.'
	},
	{
		id: 'eu-germany-distilleries',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Roughly how many whisky distilleries does Germany have?',
		options: ['Fewer than 5', 'More than 20', 'More than 120', 'More than 500'],
		answer: 'More than 20',
		explanation: 'Germany has more than 20 whisky distilleries. France, with over 120, has far more.'
	},
	{
		id: 'eu-single-malt-definition',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'What does EU law require for a whisky to be called single malt?',
		options: [
			'100% malted barley, distilled at one distillery',
			'100% malted barley, from any number of distilleries',
			'Any malted cereal, distilled at one distillery',
			'At least 51% malted barley, distilled at one distillery'
		],
		answer: '100% malted barley, distilled at one distillery',
		explanation: 'EU single malt must be distilled exclusively from malted barley at a single distillery.'
	},
	{
		id: 'eu-single-malt-protection',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Where is the term "single malt" protected under EU whisky rules?',
		options: [
			'Across the whole EU',
			'Only in Scotland and Ireland',
			'Only in countries that opt in',
			'Only within registered GIs'
		],
		answer: 'Across the whole EU',
		explanation: 'The single malt term is protected EU-wide, so it means the same thing in every member state.'
	},
	{
		id: 'eu-baseline-producers',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Slyrs and Zuidam make whisky under which set of rules?',
		options: [
			'The EU floor alone',
			'Their own national whisky laws',
			'Registered French GIs',
			'The Scotch Whisky Regulations'
		],
		answer: 'The EU floor alone',
		explanation: 'Germany and the Netherlands have no whisky rules of their own, so their distilleries follow only Regulation (EU) 2019/787.'
	},
	{
		id: 'eu-armorik-region',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Armorik whisky comes from which French region?',
		options: ['Brittany', 'Alsace', 'Normandy', 'Burgundy'],
		answer: 'Brittany',
		explanation: 'Armorik is made by the Warenghem distillery in Brittany and leads the Whisky Breton GI.'
	},
	{
		id: 'eu-whisky-breton-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'In what year was the Whisky Breton geographical indication created?',
		options: ['1995', '2005', '2015', '2021'],
		answer: '2015',
		explanation: 'Whisky Breton, also called Whisky de Bretagne, became a GI in 2015.'
	},
	{
		id: 'eu-french-gi-alt-name',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Which of these is the name of a registered French whisky GI?',
		options: ['Whisky d\'Alsace', 'Whisky de Normandie', 'Whisky de Cognac', 'Whisky de Provence'],
		answer: 'Whisky d\'Alsace',
		explanation: 'Whisky d\'Alsace, or Whisky Alsacien, is one of France\'s two whisky GIs. The other is Whisky Breton, or Whisky de Bretagne.'
	},
	{
		id: 'eu-french-gi-requirements',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Beyond the EU floor, what do both French whisky GIs require?',
		options: [
			'Local water and in-region production',
			'At least 5 years in French oak',
			'Bottling at 46% ABV or more',
			'Maturation in ex-Cognac casks'
		],
		answer: 'Local water and in-region production',
		explanation: 'Whisky Breton and Whisky Alsacien tie the water and each main production step to the named region.'
	},
	{
		id: 'eu-no-max-distillation-compare',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which of these sets no maximum distillation strength, unlike the EU\'s 94.8% ceiling?',
		options: ['Canada', 'Scotland', 'Ireland', 'Japan'],
		answer: 'Canada',
		explanation: 'Canada has no maximum distillation strength. Scotland and Ireland match the EU\'s 94.8%, and Japan allows up to 95%.'
	},
	{
		id: 'eu-bottling-compare',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Which of these allows whisky to be bottled below the EU\'s 40% ABV minimum?',
		options: ['Australia', 'Scotland', 'Japan', 'Ireland'],
		answer: 'Australia',
		explanation: 'Australia\'s general spirits floor is 37% ABV. Scotland, Japan, and Ireland all require 40%, like the EU.'
	},
	{
		id: 'eu-scenario-two-years',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'A German distillery ages a malt spirit for 2 years in oak and bottles it at 40% ABV. Can it be sold as whisky in the EU?',
		options: [
			'No, it has not reached the 3-year minimum',
			'Yes, because Germany has no national rules',
			'Yes, because it was aged in oak',
			'No, because it must be bottled at 46% ABV'
		],
		answer: 'No, it has not reached the 3-year minimum',
		explanation: 'Every EU whisky needs at least 3 years in wood. Germany\'s lack of national rules does not lower the EU floor.'
	},
	{
		id: 'eu-scenario-large-vat',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'A Dutch malt spirit is aged 4 years in a 1,000-litre wooden vat and bottled at 43% ABV. Can it be sold as whisky in the EU?',
		options: [
			'No, the vat is larger than 700 litres',
			'Yes, it meets every EU requirement',
			'No, it must be aged in oak',
			'Yes, but only if labeled single malt'
		],
		answer: 'No, the vat is larger than 700 litres',
		explanation: 'The age and strength are fine, but EU whisky must mature in wooden casks of no more than 700 litres.'
	},
	{
		id: 'eu-scenario-sweetened',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'A French whisky aged 3 years has a small amount of sugar added before bottling. Can it still be sold as whisky in the EU?',
		options: [
			'No, whisky has zero sweetening tolerance',
			'Yes, if the sugar stays under 10 g/L',
			'Yes, if the sugar is disclosed on the label',
			'Yes, because France has no national whisky law'
		],
		answer: 'No, whisky has zero sweetening tolerance',
		explanation: 'EU whisky may not be sweetened at all. Only caramel coloring may be added, and only for color.'
	},
	{
		id: 'eu-scenario-mixed-malt',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'An EU distillery makes whisky from malted barley and malted rye, all distilled on site and aged 3 years. Can it be labeled single malt?',
		options: [
			'No, single malt must be made only from malted barley',
			'Yes, because every grain is malted',
			'Yes, because it comes from one distillery',
			'No, because single malt must be pot distilled'
		],
		answer: 'No, single malt must be made only from malted barley',
		explanation: 'It qualifies as EU whisky, but the single malt term requires malted barley alone. EU law has no pot still rule.'
	},
	{
		id: 'eu-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Must whisky sold as "whisky" in the EU be produced in an EU member state?',
		options: [
			'No, it only has to meet the regulation\'s production rules',
			'Yes, it must be distilled and aged in a member state',
			'Yes, unless it carries a registered GI from outside the EU',
			'Only if it is sold under the single malt designation'
		],
		answer: 'No, it only has to meet the regulation\'s production rules',
		explanation: 'Regulation (EU) 2019/787 sets no EU-wide location requirement. Whisky made anywhere may be sold as whisky if it meets the production rules.'
	},
	{
		id: 'eu-location-requirement-source',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'Within the EU, where do whisky production-location requirements come from?',
		options: [
			'Registered GIs and stricter national rules',
			'Regulation (EU) 2019/787 itself',
			'Voluntary producer manifestos only',
			'Customs rules on imported spirits'
		],
		answer: 'Registered GIs and stricter national rules',
		explanation: 'GIs such as Irish Whiskey and Whisky Breton, or national rules for whisky made on a member state\'s territory, set location requirements. The EU regulation does not.'
	},
	{
		id: 'eu-scenario-imported',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'A malt whisky distilled and aged 4 years in Japan meets every production rule in Regulation (EU) 2019/787. Can it be sold as whisky in the EU?',
		options: [
			'Yes, the regulation sets no origin requirement',
			'No, EU whisky must be distilled in a member state',
			'No, imported whisky must be aged again in the EU',
			'Only if it is bottled inside a member state'
		],
		answer: 'Yes, the regulation sets no origin requirement',
		explanation: 'EU whisky rules govern how whisky is made, not where. Imports that meet them may be sold as whisky.'
	},
	{
		id: 'eu-fermentation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: LEGAL,
		question: 'How must the mash be converted and fermented for EU whisky?',
		options: [
			'By the malt\'s own diastase, optionally other natural enzymes, and yeast',
			'By yeast alone, with every kind of enzyme banned from the mash',
			'By any enzymes, synthetic or natural, and any fermenting agent',
			'By wild fermentation only, with no cultured yeast added at all'
		],
		answer: 'By the malt\'s own diastase, optionally other natural enzymes, and yeast',
		explanation: 'EU whisky must be saccharified by the malt\'s diastase, with or without other natural enzymes, and fermented by yeast.'
	},
	{
		id: 'eu-french-gi-vs-scotland',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
		topic: VARIETIES,
		question: 'Like Scotland\'s protected regional names, France\'s whisky GIs are reserved for whisky made there. How do the French GIs go further?',
		options: [
			'They also require locally sourced water',
			'They allow bottling below 40% ABV',
			'They permit aging outside the region',
			'They are voluntary rather than binding'
		],
		answer: 'They also require locally sourced water',
		explanation: 'Whisky Breton and Whisky Alsacien require local water as well as in-region fermentation, distillation, and aging.'
	}
];
