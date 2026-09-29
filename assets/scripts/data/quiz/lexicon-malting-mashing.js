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
		options: ['1-3%', '6-10%', '20-35%', '40-45%'],
		answer: '6-10%',
		explanation: 'Wash is essentially an unhopped beer, usually around 6-10% ABV, ready for distillation.'
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
			'Spent grain left in the mash tun',
			'Residue left in the still after low wines',
			'Charred wood scraped from old casks',
			'Spent yeast from the washback'
		],
		answer: 'Spent grain left in the mash tun',
		explanation: 'Draff is the spent grain left once the wort is drawn off, before fermentation. The liquid residue left in the still is pot ale.'
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
	},
	{
		id: 'backset-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'backset',
		question: 'In American whiskey-making, what is backset?',
		options: [
			'Acidic liquid strained from the mash after distillation',
			'Sweet wort held back from the first mash for later',
			'Spent grain returned to local farms as animal feed',
			'Low wines saved and added to the next spirit run'
		],
		answer: 'Acidic liquid strained from the mash after distillation',
		explanation: 'Backset is the acidic liquid left after primary distillation. It is added to a new mash or fermenter.'
	},
	{
		id: 'backset-contamination',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'backset',
		question: 'Besides supporting fermentation, why do American distillers add backset to a new mash?',
		options: [
			'To discourage bacterial contamination',
			'To raise the alcohol content of the wash',
			'To add color before the spirit is barreled',
			'To replace the need for fresh yeast'
		],
		answer: 'To discourage bacterial contamination',
		explanation: 'Backset\'s acidity helps protect the new mash from unwanted bacteria while fermentation gets going.'
	},
	{
		id: 'sour-mash-tradition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'sour-mash',
		question: 'The sour mash process is associated with which whisky tradition?',
		options: ['American whiskey', 'Scotch malt whisky', 'Japanese whisky', 'Irish pot still whiskey'],
		answer: 'American whiskey',
		explanation: 'Sour mash is an American whiskey process that uses acidic backset from a previous batch.'
	},
	{
		id: 'malt-why-germinate',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'malt',
		question: 'Why do maltsters let barley germinate before kilning it?',
		options: [
			'To develop enzymes that turn starch into sugar',
			'To add smoky flavor to the grain',
			'To dry the grain out for long storage',
			'To strip the husks off before milling'
		],
		answer: 'To develop enzymes that turn starch into sugar',
		explanation: 'Germination develops amylase enzymes, which later convert the grain\'s starches into fermentable sugars during mashing.'
	},
	{
		id: 'malt-whisky-meaning',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'malt',
		question: 'Besides the grain itself, the word "malt" is also used to describe what?',
		options: [
			'Whisky made from malted barley',
			'Any whisky aged in oak casks',
			'Whisky blended from many distilleries',
			'The sugar left in a finished whisky'
		],
		answer: 'Whisky made from malted barley',
		explanation: '"Malt" can mean the germinated, kiln-dried grain or the whisky made from malted barley.'
	},
	{
		id: 'malted-rye-scenario',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'malted',
		question: 'A whisky\'s recipe lists "malted rye." What has been done to that rye?',
		options: [
			'It was germinated, then heated to stop growth',
			'It was milled into a rough flour for mashing',
			'It was smoked over peat and then fermented',
			'It was soaked in sherry before being distilled'
		],
		answer: 'It was germinated, then heated to stop growth',
		explanation: 'Malted grain has been germinated and heated. Barley is the usual malted grain, but other grains can be malted too.'
	},
	{
		id: 'mash-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'mash',
		question: 'In whisky-making, what is a mash?',
		options: [
			'A mix of grist and hot water',
			'A mix of new make and water',
			'A blend of low wines and feints',
			'A mix of spent grain and pot ale'
		],
		answer: 'A mix of grist and hot water',
		explanation: 'In the mash, starches convert into fermentable sugars. Once strained, the sweet liquid is wort.'
	},
	{
		id: 'mash-bill-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'mash-bill',
		question: 'What is a whiskey\'s mash bill?',
		options: [
			'The recipe or ratio of grains used',
			'The tax paid on each batch of mash',
			'The record of each cask\'s fill date',
			'The schedule of mashing temperatures'
		],
		answer: 'The recipe or ratio of grains used',
		explanation: 'The mash bill, also written mashbill, is the grain recipe. A bourbon mash bill always includes at least 51% corn.'
	},
	{
		id: 'mashing-step-order',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'mashing',
		question: 'Which production step comes directly between milling the grain and fermentation?',
		options: ['Mashing', 'Malting', 'Distillation', 'Maturation'],
		answer: 'Mashing',
		explanation: 'Milled grain is mixed with hot water during mashing, producing wort that is then fermented.'
	},
	{
		id: 'underback-multiple-mashes',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'underback',
		question: 'Why might a distillery mash the same grain several times with progressively hotter water?',
		options: [
			'To extract as much sugar as possible',
			'To sterilize the grain before fermenting',
			'To darken the color of the wort',
			'To remove fusel oils from the mash'
		],
		answer: 'To extract as much sugar as possible',
		explanation: 'Each batch of wort drains into the underback between mashes, and hotter water pulls out more of the remaining sugar.'
	},
	{
		id: 'steep-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'steep',
		question: 'What is the term for the first stage of malting, where barley is soaked in water?',
		options: ['Steep', 'Kiln', 'Mash', 'Draff'],
		answer: 'Steep',
		explanation: 'Steeping soaks the barley to start germination, the first step in the malting process.'
	},
	{
		id: 'steep-vessel',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'steep',
		question: 'Besides the soaking stage of malting, what else does the word "steep" refer to?',
		options: [
			'The vessel used for soaking',
			'The floor where grain germinates',
			'The chimney of a malt kiln',
			'The pipe feeding the underback'
		],
		answer: 'The vessel used for soaking',
		explanation: 'A steep is both the first stage of malting and the vessel in which the barley is soaked.'
	},
	{
		id: 'saladin-box-era',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'saladin-box',
		question: 'When was the Saladin box invented?',
		options: ['Early 18th century', 'Late 19th century', 'Mid 20th century', 'Early 21st century'],
		answer: 'Late 19th century',
		explanation: 'The Saladin box was invented in the late 19th century as a mechanical alternative to turning malt by hand.'
	},
	{
		id: 'exogenous-enzymes-unmalted',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'exogenous-enzymes',
		question: 'A distiller mashes a recipe of mostly unmalted grain. What might they add to help convert its starches?',
		options: ['Exogenous enzymes', 'Backset', 'Caramel coloring', 'Extra yeast'],
		answer: 'Exogenous enzymes',
		explanation: 'Commercial enzymes are added when natural malt enzymes are insufficient, as in high-adjunct or unmalted grain recipes.'
	},
	{
		id: 'wort-cooling',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'wort',
		question: 'Why is wort cooled before it goes to fermentation?',
		options: [
			'Hot wort would kill the yeast',
			'Cooling makes the wort sweeter',
			'Cooling separates out the husks',
			'Cold wort distills more quickly'
		],
		answer: 'Hot wort would kill the yeast',
		explanation: 'Wort leaves the mash tun hot, so it is cooled to a temperature yeast can survive before fermentation begins.'
	}
];
