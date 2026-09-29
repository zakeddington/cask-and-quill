import { INGREDIENTS_FERMENTATION, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Fermentation & Chemistry
export const LEXICON_FERMENTATION_CHEMISTRY_QUESTIONS = [
	{
		id: 'fermentation-byproducts',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'fermentation',
		question: 'During fermentation, yeast converts sugars into alcohol and which gas?',
		options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Methane'],
		answer: 'Carbon dioxide',
		explanation: 'Yeast consumes sugars and produces ethanol, CO₂, and flavor-active compounds.'
	},
	{
		id: 'ester-flavors',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'ester',
		question: 'Esters in whisky are most associated with which flavor notes?',
		options: [
			'Smoky notes like iodine and tar',
			'Fruity notes like apple and pear',
			'Sweet notes like vanilla and caramel',
			'Dry notes like tannin and oak'
		],
		answer: 'Fruity notes like apple and pear',
		explanation: 'Esters form when alcohols react with acids during fermentation and distillation, producing fruity aromas.'
	},
	{
		id: 'congeners-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'congeners',
		question: 'What are congeners?',
		options: [
			'Flavor-active compounds other than ethanol',
			'Mineral deposits that build up inside stills',
			'Proteins removed during chill filtration',
			'Grain husks left over after mashing'
		],
		answer: 'Flavor-active compounds other than ethanol',
		explanation: 'Congeners include esters, aldehydes, acids, fusel oils, and phenols that shape aroma, texture, and taste.'
	},
	{
		id: 'fusel-oils-reduction',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'fusel-oils-fusel-alcohols',
		question: 'What reduces fusel oils during production?',
		options: ['Chill filtration', 'Copper contact', 'Caramel coloring', 'Longer fermentation'],
		answer: 'Copper contact',
		explanation: 'Fusel oils add body at moderate levels but taste harsh and oily in excess. Contact with copper reduces them.'
	},
	{
		id: 'phenol-measurement',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'phenol-phenolic-ppm',
		question: 'Peat influence in malted barley is measured by phenol content in which unit?',
		options: ['Parts per million (PPM)', 'Proof degrees', 'Liters of pure alcohol', 'International Bitterness Units'],
		answer: 'Parts per million (PPM)',
		explanation: 'Phenols are absorbed from peat smoke during drying, and their concentration is measured in PPM.'
	},
	{
		id: 'tannins-contribution',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'tannins',
		question: 'What do tannins extracted from oak contribute to whisky?',
		options: ['Fruitiness and aroma', 'Astringency and structure', 'Smokiness and peat', 'Sweetness and viscosity'],
		answer: 'Astringency and structure',
		explanation: 'Tannins are polyphenolic compounds that add astringency, structure, and drying qualities.'
	},
	{
		id: 'vanillin-source',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'vanillin',
		question: 'Vanillin, a main source of bourbon\'s vanilla flavor, is extracted from what?',
		options: ['Malted barley', 'Charred American white oak', 'Corn husks', 'Sugar maple charcoal'],
		answer: 'Charred American white oak',
		explanation: 'Vanillin is a naturally occurring aromatic compound extracted from charred American white oak during maturation.'
	},
	{
		id: 'yield-measurement',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'yield',
		question: 'How is a distillery\'s yield typically measured?',
		options: [
			'Liters of pure alcohol per tonne of grain',
			'Bottles filled per day of production',
			'Proof gallons stored per warehouse',
			'Casks filled per distilling season'
		],
		answer: 'Liters of pure alcohol per tonne of grain',
		explanation: 'Yield is measured in liters of pure alcohol (LPA) per tonne of grain. Craft distilleries sometimes trade yield for flavor.'
	},
	{
		id: 'distiller-s-beer-synonym',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'distiller-s-beer',
		question: 'Distiller\'s beer is another name for which liquid?',
		options: ['Wash', 'Wort', 'Low wines', 'Backset'],
		answer: 'Wash',
		explanation: 'Distiller\'s beer, or wash, is the alcoholic liquid produced by fermentation before distillation.'
	},
	{
		id: 'ethanol-ethyl-alcohol',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'ethanol',
		question: 'Ethanol, the potable alcohol in whisky, is also known as what?',
		options: ['Ethyl alcohol', 'Methyl alcohol', 'Fusel alcohol', 'Isopropyl alcohol'],
		answer: 'Ethyl alcohol',
		explanation: 'Ethanol, or ethyl alcohol, is produced when yeast ferments sugar.'
	},
	{
		id: 'fermenter-in-out',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'fermenter',
		question: 'What goes into a fermenter, and what comes out?',
		options: [
			'Wort goes in, wash comes out',
			'Wash goes in, low wines come out',
			'Grist goes in, wort comes out',
			'Low wines go in, new make comes out'
		],
		answer: 'Wort goes in, wash comes out',
		explanation: 'In the fermenter, yeast turns mash or wort into an alcoholic wash ready for distillation.'
	},
	{
		id: 'congeners-not',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'congeners',
		question: 'Which of these is NOT a congener?',
		options: ['Ethanol', 'Esters', 'Aldehydes', 'Fusel oils'],
		answer: 'Ethanol',
		explanation: 'Congeners are flavor-active compounds other than ethanol, including esters, aldehydes, acids, fusel oils, and phenols.'
	},
	{
		id: 'ester-formation',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'ester',
		question: 'Esters form when alcohols react with which compounds?',
		options: ['Acids', 'Tannins', 'Phenols', 'Sugars'],
		answer: 'Acids',
		explanation: 'Esters form from reactions between alcohols and acids during fermentation and distillation.'
	},
	{
		id: 'fusel-oils-moderate',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'fusel-oils-fusel-alcohols',
		question: 'At moderate levels, what do fusel oils contribute to whisky?',
		options: ['Body and complexity', 'Smoke and iodine', 'Color and sweetness', 'Vanilla and caramel'],
		answer: 'Body and complexity',
		explanation: 'Fusel oils are higher-weight alcohols from fermentation. In excess they taste harsh and oily, but moderate levels add body.'
	},
	{
		id: 'phenol-ppm-comparison',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'phenol-phenolic-ppm',
		question: 'One malted barley is rated at 50 PPM and another at 5 PPM. What does this tell you?',
		options: [
			'The first has far more peat influence',
			'The first has a higher alcohol content',
			'The second has been aged for longer',
			'The second was dried at higher heat'
		],
		answer: 'The first has far more peat influence',
		explanation: 'Phenolic PPM measures phenol concentration, so a higher figure indicates more peat influence.'
	},
	{
		id: 'tannins-polyphenols',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'tannins',
		question: 'Chemically, what kind of compounds are tannins?',
		options: ['Polyphenols', 'Esters', 'Aldehydes', 'Fusel alcohols'],
		answer: 'Polyphenols',
		explanation: 'Tannins are polyphenolic compounds from oak that are essential for complexity and aging potential.'
	},
	{
		id: 'yield-craft',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'yield',
		question: 'Why might a craft distillery accept a lower yield than a commercial one?',
		options: [
			'To prioritize flavor over output',
			'To meet a legal maximum yield',
			'To shorten the aging time needed',
			'To raise the bottling strength'
		],
		answer: 'To prioritize flavor over output',
		explanation: 'Commercial distilleries optimize for yield, while craft distilleries sometimes sacrifice yield for flavor.'
	}
];
