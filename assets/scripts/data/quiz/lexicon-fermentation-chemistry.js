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
		options: ['Smoke and iodine', 'Fruity notes like apple and pear', 'Vanilla and caramel', 'Dry, astringent tannin'],
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
		options: ['Fruity esters', 'Astringency and structure', 'Smoky phenols', 'Sweetness'],
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
			'Bottles filled per day',
			'Proof gallons per barrel',
			'Casks filled per season'
		],
		answer: 'Liters of pure alcohol per tonne of grain',
		explanation: 'Yield is measured in liters of pure alcohol (LPA) per tonne of grain. Craft distilleries sometimes trade yield for flavor.'
	}
];
