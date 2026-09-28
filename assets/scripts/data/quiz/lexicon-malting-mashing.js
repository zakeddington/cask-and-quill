import { INGREDIENTS_FERMENTATION, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Malting & Mashing
export const LEXICON_MALTING_MASHING_QUESTIONS = [
	{
		id: 'wash-abv',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'wash',
		question: 'The fermented wash, or distiller\'s beer, is typically around what ABV?',
		options: ['1-3%', '5-10%', '20-35%', '40-45%'],
		answer: '5-10%',
		explanation: 'Wash is essentially an unhopped beer, usually around 5-10% ABV, ready for distillation.'
	},
	{
		id: 'wash-unhopped-beer',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'wash',
		question: 'The wash that goes into the still is essentially what?',
		options: ['An unhopped beer', 'A fortified wine', 'A sweet grain syrup', 'A diluted spirit'],
		answer: 'An unhopped beer',
		explanation: 'Wash is produced by fermenting wort with yeast and is essentially an unhopped beer.'
	},
	{
		id: 'wort-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'wort',
		question: 'What is the sweet liquid produced during mashing called?',
		options: ['Wash', 'Wort', 'Backset', 'Draff'],
		answer: 'Wort',
		explanation: 'Wort is the sugar-rich liquid extracted from grist during mashing. It is cooled and sent to fermentation.'
	},
	{
		id: 'grist-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'grist',
		question: 'What is grist?',
		options: [
			'Spent grain left after mashing',
			'A rough flour made by milling grain',
			'Sediment collected at the bottom of a cask',
			'The foam that forms during fermentation'
		],
		answer: 'A rough flour made by milling grain',
		explanation: 'Grist is milled grain. Hot water is added to it in the mash tun to form the wort.'
	},
	{
		id: 'mash-tun-role',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'mash-tub-tun',
		question: 'In which vessel is grist combined with hot water to convert starches into sugars?',
		options: ['Washback', 'Mash Tun', 'Underback', 'Spirit Safe'],
		answer: 'Mash Tun',
		explanation: 'The mash tun (or mash tub) is where grist and hot water are combined to produce wort.'
	},
	{
		id: 'washback-role',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'washback',
		question: 'What is a washback?',
		options: [
			'The vessel in which wort ferments with yeast',
			'The still that produces low wines',
			'A tool for drawing samples from a cask',
			'The drain that removes draff from the mash tun'
		],
		answer: 'The vessel in which wort ferments with yeast',
		explanation: 'A washback, or fermenter, is where wort or mash ferments into an alcoholic wash before distillation.'
	},
	{
		id: 'underback-role',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'underback',
		question: 'What is an underback used for?',
		options: [
			'Storing wort between the mash tun and the washbacks',
			'Collecting feints for redistillation',
			'Cooling spirit vapor into liquid',
			'Holding peat before it is burned in the kiln'
		],
		answer: 'Storing wort between the mash tun and the washbacks',
		explanation: 'The underback holds wort drained from the mash tun, including between successive mashes, before it moves to the washbacks.'
	},
	{
		id: 'draff-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'draff',
		question: 'What is draff, a byproduct often used as animal feed?',
		options: [
			'Grain remnants drained from the wash',
			'Residue left in the still after low wines',
			'Charred wood scraped from old casks',
			'Spent yeast from the washback'
		],
		answer: 'Grain remnants drained from the wash',
		explanation: 'Draff is the Scottish term for spent grain remnants. The liquid residue left in the still is pot ale.'
	},
	{
		id: 'saccharification-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'saccharification',
		question: 'What is saccharification?',
		options: [
			'The conversion of starches into fermentable sugars',
			'The conversion of sugars into alcohol',
			'Adding sugar to whisky before bottling',
			'The crystallization of sugars in the cask'
		],
		answer: 'The conversion of starches into fermentable sugars',
		explanation: 'During mashing, amylase enzymes from malted grain, or added exogenous enzymes, convert starches into sugars yeast can ferment.'
	},
	{
		id: 'exogenous-enzymes-scotland',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'exogenous-enzymes',
		question: 'Commercial exogenous enzymes are prohibited in which of these?',
		options: ['Bourbon', 'Canadian whisky', 'Japanese grain whisky', 'Scotch single malt'],
		answer: 'Scotch single malt',
		explanation: 'Scotch regulations allow yeast only for fermentation. The U.S., Canada, and Japan all permit enzymes.'
	},
	{
		id: 'malting-stages',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'malting',
		question: 'Which three stages make up the malting process?',
		options: [
			'Mashing, fermenting, and distilling',
			'Milling, mashing, and lautering',
			'Steeping, germinating, and kilning',
			'Charring, filling, and aging'
		],
		answer: 'Steeping, germinating, and kilning',
		explanation: 'Grain is soaked (steeped), allowed to germinate, and then kiln-dried to halt germination.'
	},
	{
		id: 'kiln-purpose',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'kiln',
		question: 'What is a kiln used for in malting?',
		options: [
			'Drying green malt to stop germination',
			'Soaking barley to start germination',
			'Charring the inside of new barrels',
			'Heating the wash still'
		],
		answer: 'Drying green malt to stop germination',
		explanation: 'A kiln is an oven that dries green malt, halting the germination started during malting.'
	},
	{
		id: 'floor-malting-replacement',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'floor-malting',
		question: 'Traditional hand-turned floor malting has mostly been replaced by which process?',
		options: ['Drum malting', 'Solera malting', 'Continuous malting', 'Column malting'],
		answer: 'Drum malting',
		explanation: 'Floor malting has mostly given way to more efficient modern processes such as drum malting.'
	},
	{
		id: 'saladin-box-purpose',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'saladin-box',
		question: 'What is a Saladin box?',
		options: [
			'A vessel that germinates barley using turning screws',
			'A locked cabinet for storing new make spirit',
			'A crate used to ship casks overseas',
			'A small still used for experimental batches'
		],
		answer: 'A vessel that germinates barley using turning screws',
		explanation: 'Invented in the late 19th century, the Saladin box mechanically agitates germinating grain as an alternative to hand turning.'
	},
	{
		id: 'sour-mash-backset',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'sour-mash',
		question: 'The sour mash process adds what to a new mash to help start fermentation?',
		options: [
			'Acidic backset from a previous batch',
			'Lactic acid bacteria cultured on site',
			'Vinegar to lower the pH',
			'Unfermented wort from a previous batch'
		],
		answer: 'Acidic backset from a previous batch',
		explanation: 'Backset is the acidic liquid strained from the mash after distillation. It stabilizes pH and discourages bacterial contamination.'
	},
	{
		id: 'sweet-mash-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'sweet-mash',
		question: 'What distinguishes a sweet mash from a sour mash?',
		options: [
			'It uses only fresh yeast, with no backset',
			'It has sugar added to the mash',
			'It uses at least 51% corn',
			'It is fermented for a shorter time'
		],
		answer: 'It uses only fresh yeast, with no backset',
		explanation: 'A sweet mash is started without backset, using only fresh yeast.'
	}
];
