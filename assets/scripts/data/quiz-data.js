const DISTILLATION = 'Distillation';
const INGREDIENTS_FERMENTATION = 'Ingredients & Fermentation';
const MATURATION_WOOD = 'Maturation & Wood';
const LABELING_PRODUCERS = 'Labeling & Producers';
const TASTING_SERVICE = 'Tasting & Service';
const STYLES_REGULATIONS = 'Styles & Regulations';
const SCOTCH_REGIONS = 'Scotch Regions';
const WORLD_WHISKY = 'World Whisky';

const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';

const LEXICON = 'lexicon';
const REGIONS = 'regions';

export const QUIZ_CATEGORIES = [
	DISTILLATION,
	INGREDIENTS_FERMENTATION,
	MATURATION_WOOD,
	LABELING_PRODUCERS,
	TASTING_SERVICE,
	STYLES_REGULATIONS,
	SCOTCH_REGIONS,
	WORLD_WHISKY
];

export const QUIZ_DIFFICULTIES = [EASY, MEDIUM, HARD];

export const QUIZ_SOURCES = [LEXICON, REGIONS];

// Quiz data
// `answer` must exactly match one entry in `options`, so options can be shuffled freely.
// `sourceId` references a LEXICON_TERMS id (source: 'lexicon') or a REGIONS_DATA id (source: 'regions').
export const QUIZ_QUESTIONS = [
	// Distillation
	{
		id: 'foreshots-first-off-still',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'foreshots',
		question: 'What is the first portion of spirit to come off the still, high in methanol and usually discarded or redistilled?',
		options: ['Heart', 'Foreshots', 'Feints', 'Low Wines'],
		answer: 'Foreshots',
		explanation: 'Foreshots are the first spirit off the still. They are high in methanol and other volatile compounds, so they are discarded or redistilled rather than aged.'
	},
	{
		id: 'heart-collected-for-aging',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'heart',
		question: 'Which portion of a distillation run is collected and sent to the cask for aging?',
		options: ['Heads', 'Tails', 'Heart', 'Foreshots'],
		answer: 'Heart',
		explanation: 'The heart, also called the middle cut, is the desirable portion collected between the foreshots/heads and the feints/tails.'
	},
	{
		id: 'queens-run-meaning',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'queens-run',
		question: '"Queen\'s Run" is a traditional term for which part of a distillation run?',
		options: ['The foreshots', 'The heart, or middle cut', 'The final tails', 'The residue left in the still'],
		answer: 'The heart, or middle cut',
		explanation: 'Queen\'s Run refers to the clean, desirable portion collected after the foreshots/heads and before the feints/tails.'
	},
	{
		id: 'cut-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cut',
		question: 'In distillation, what does "making the cut" refer to?',
		options: [
			'Diluting spirit with water before bottling',
			'Deciding which portion of the spirit run to collect',
			'Trimming staves to assemble a cask',
			'Milling grain into grist'
		],
		answer: 'Deciding which portion of the spirit run to collect',
		explanation: 'The stillman separates foreshots, heads, heart, and tails. Where the cut points fall dramatically affects flavor.'
	},
	{
		id: 'tails-fate',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'tails',
		question: 'What usually happens to the tails (feints) at the end of a distillation run?',
		options: [
			'They are bottled as a separate expression',
			'They are blended back into the heart',
			'They are discarded or redistilled',
			'They are used to season new casks'
		],
		answer: 'They are discarded or redistilled',
		explanation: 'Tails are lower in alcohol and can contain oily, musty, or harsh notes, so they are usually discarded or recycled into a later distillation.'
	},
	{
		id: 'low-wines-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'low-wines',
		question: 'What is the spirit produced by the first distillation of the wash called?',
		options: ['High Wines', 'New Make Spirit', 'Low Wines', 'Pot Ale'],
		answer: 'Low Wines',
		explanation: 'Low wines come off the wash still and are sent to the spirit still for a second distillation.'
	},
	{
		id: 'low-wines-abv',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'low-wines',
		question: 'Low wines typically fall within which ABV range?',
		options: ['5-10%', '20-35%', '40-50%', '60-80%'],
		answer: '20-35%',
		explanation: 'Low wines typically sit around 20-35% ABV, too weak to be a finished spirit, so they require another distillation.'
	},
	{
		id: 'high-wines-abv',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'high-wines',
		question: 'High wines from the spirit still typically fall within which ABV range before the cut?',
		options: ['20-35%', '40-50%', '60-80%', '94-95%'],
		answer: '60-80%',
		explanation: 'High wines, produced in the second distillation of Scotch whisky, are typically 60-80% ABV before cut separation.'
	},
	{
		id: 'wash-still-larger',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'wash-still',
		question: 'In a Scottish double-distillation setup, which still is typically the larger of the two?',
		options: ['Spirit Still', 'Wash Still', 'Intermediate Still', 'Doubler'],
		answer: 'Wash Still',
		explanation: 'The wash still distills the fermented wash into low wines and is typically the larger of the pair.'
	},
	{
		id: 'spirit-still-role',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'spirit-still',
		question: 'Which still redistills the low wines to produce new make spirit?',
		options: ['Wash Still', 'Beer Still', 'Coffey Still', 'Spirit Still'],
		answer: 'Spirit Still',
		explanation: 'In pot still double distillation, the spirit still redistills low wines from the wash still into new make spirit.'
	},
	{
		id: 'beer-still-aliases',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'beer-still',
		question: 'The first still in a double-distillation process goes by several names. Which of these is NOT one of them?',
		options: ['Beer Still', 'Wash Still', 'Strip Still', 'Spirit Still'],
		answer: 'Spirit Still',
		explanation: 'The first still is called a beer still, wash still, or strip still. The spirit still is the second still.'
	},
	{
		id: 'intermediate-still-position',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'intermediate-still',
		question: 'In pot still triple distillation, which still sits between the wash still and the spirit still?',
		options: ['Thumper', 'Intermediate Still', 'Doubler', 'Column Still'],
		answer: 'Intermediate Still',
		explanation: 'The intermediate still takes spirit from the wash still before it goes into the spirit still.'
	},
	{
		id: 'thumper-vs-doubler',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'thumper',
		question: 'In American distilling, what distinguishes a thumper from a doubler?',
		options: [
			'A thumper receives alcohol vapor; a doubler receives liquid spirit',
			'A thumper receives liquid spirit; a doubler receives alcohol vapor',
			'A thumper is a column still; a doubler is a pot still',
			'A thumper is used only for rye; a doubler only for bourbon'
		],
		answer: 'A thumper receives alcohol vapor; a doubler receives liquid spirit',
		explanation: 'Both are pot stills used for the second distillation. A thumper takes vapor, while a doubler takes spirit that has already been condensed into liquid.'
	},
	{
		id: 'triple-distillation-traditions',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'triple-distillation',
		question: 'Triple distillation is most closely associated with which whisky traditions?',
		options: [
			'Islay and Campbeltown Scotch',
			'Bourbon and Tennessee whiskey',
			'Irish whiskey and Lowland Scotch',
			'Canadian and Japanese whisky'
		],
		answer: 'Irish whiskey and Lowland Scotch',
		explanation: 'Triple distillation, notably at Midleton, is associated with Irish whiskey and some Lowland Scotch, and generally produces a lighter spirit.'
	},
	{
		id: 'double-distillation-scotch',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'double-distillation',
		question: 'How many times is most Scotch malt whisky distilled?',
		options: ['Once', 'Twice', 'Three times', 'Continuously'],
		answer: 'Twice',
		explanation: 'Double distillation, first in the wash still and then in the spirit still, is the standard Scottish malt whisky practice.'
	},
	{
		id: 'coffey-still-inventor',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'coffey-still',
		question: 'Who patented the column still design that enabled continuous distillation?',
		options: ['John Jameson', 'Aeneas Coffey', 'Elijah Craig', 'Jack Daniel'],
		answer: 'Aeneas Coffey',
		explanation: 'Aeneas Coffey patented his column still in 1830. It uses heated perforated plates and produces lighter, higher-proof spirit more efficiently than pot stills.'
	},
	{
		id: 'coffey-still-year',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'coffey-still',
		question: 'In what year was the Coffey still patented?',
		options: ['1776', '1830', '1897', '1909'],
		answer: '1830',
		explanation: 'Aeneas Coffey patented his continuous column still design in 1830.'
	},
	{
		id: 'column-still-use',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'column-still',
		question: 'Which type of still is most commonly used for grain whisky and blending stock?',
		options: ['Pot Still', 'Column Still', 'Doubler', 'Worm Tub'],
		answer: 'Column Still',
		explanation: 'Column stills are continuous, efficient, and can produce high-proof spirit, which suits grain whisky and blending stock.'
	},
	{
		id: 'pot-still-required',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'pot-still',
		question: 'Pot stills are required for which of these whisky styles?',
		options: ['Blended Grain Scotch', 'Canadian Rye', 'Single Pot Still Irish Whiskey', 'Light Whiskey'],
		answer: 'Single Pot Still Irish Whiskey',
		explanation: 'Pot stills are required for Single Malt Scotch, Single Pot Still Irish Whiskey, and many malt whisky styles.'
	},
	{
		id: 'distillation-principle',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'distillation',
		question: 'Distillation separates alcohol from water because alcohol...',
		options: [
			'Is heavier than water',
			'Has a lower vaporization temperature than water',
			'Freezes at a higher temperature than water',
			'Bonds to copper while water does not'
		],
		answer: 'Has a lower vaporization temperature than water',
		explanation: 'Alcohol turns to vapor at a lower temperature than water. The vapor is then cooled and recondensed into liquid.'
	},
	{
		id: 'copper-purpose',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'copper',
		question: 'Why is copper the primary metal used for stills?',
		options: [
			'It reacts with sulfur compounds, removing harsh notes',
			'It adds color to the new make spirit',
			'It raises the final ABV of the spirit',
			'It is the only metal permitted by law'
		],
		answer: 'It reacts with sulfur compounds, removing harsh notes',
		explanation: 'Copper reacts with sulfur compounds in the spirit, removing harsh notes and shaping the final flavor profile.'
	},
	{
		id: 'lyne-arm-definition',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'lyne-arm',
		question: 'What is a lyne arm?',
		options: [
			'The angled pipe connecting the top of a pot still to the condenser',
			'The lever used to open the spirit safe',
			'The paddle used to stir the mash tun',
			'The metal hoop that holds a cask together'
		],
		answer: 'The angled pipe connecting the top of a pot still to the condenser',
		explanation: 'The lyne arm\'s angle, upward or downward, influences how much reflux occurs and therefore the weight of the spirit.'
	},
	{
		id: 'reflux-effect',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'reflux',
		question: 'Tall stills with upward-angled lyne arms create more reflux. What kind of spirit does that tend to produce?',
		options: ['Heavier and oilier', 'Lighter and cleaner', 'Smokier and more phenolic', 'Higher in methanol'],
		answer: 'Lighter and cleaner',
		explanation: 'More reflux means heavier compounds condense and are redistilled, producing a lighter, cleaner spirit.'
	},
	{
		id: 'worm-tub-character',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'worm-tub',
		question: 'Compared with modern shell-and-tube condensers, worm tubs tend to produce spirit that is...',
		options: ['Lighter and more floral', 'Higher in proof', 'Heavier and more sulfurous', 'Completely free of congeners'],
		answer: 'Heavier and more sulfurous',
		explanation: 'In a worm tub, vapor travels through a coiled copper pipe in cold water, which can produce a heavier, more sulfurous spirit.'
	},
	{
		id: 'spirit-safe-purpose',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'spirit-safe',
		question: 'What is the purpose of a spirit safe in a Scottish distillery?',
		options: [
			'To store finished bottles securely before sale',
			'To let the operator observe the spirit and direct the cut without touching it',
			'To hold casks at a stable temperature',
			'To filter spirit through charcoal'
		],
		answer: 'To let the operator observe the spirit and direct the cut without touching it',
		explanation: 'The locked brass-and-glass spirit safe lets the still operator check strength and temperature and direct the cut, historically for tax control.'
	},
	{
		id: 'pot-ale-definition',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'pot-ale',
		question: 'In Scotland, what is pot ale?',
		options: [
			'Spent grain drained from the wash after fermentation',
			'The residue left in the still after the first distillation',
			'The first spirit to come off the spirit still',
			'Ale brewed on site for distillery workers'
		],
		answer: 'The residue left in the still after the first distillation',
		explanation: 'Pot ale is what remains in the still after the low wines are produced. Like draff, it is often used as animal feed.'
	},
	{
		id: 'white-dog-term',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'white-dog',
		question: 'What is the American industry term for unaged corn or bourbon distillate straight off the still?',
		options: ['White Dog', 'Poitín', 'Low Wines', 'Backset'],
		answer: 'White Dog',
		explanation: 'White dog is the clear spirit before barrel maturation, similar to what Scotland calls new make spirit.'
	},
	{
		id: 'new-make-spirit-legal-status',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'new-make-spirit',
		question: 'How long must Scottish new make spirit age before it can legally be called whisky?',
		options: ['1 year', '2 years', '3 years', '4 years'],
		answer: '3 years',
		explanation: 'New make spirit is clear and is legally not whisky until it has aged 3 years.'
	},
	{
		id: 'lincoln-county-process',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'lincoln-county-process',
		question: 'The Lincoln County Process filters new spirit through charcoal made from which wood?',
		options: ['American white oak', 'Sugar maple', 'Hickory', 'Cherry'],
		answer: 'Sugar maple',
		explanation: 'The Lincoln County Process, or charcoal mellowing, filters spirit through sugar maple charcoal before or during aging.'
	},

	// Ingredients & Fermentation
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
		id: 'green-malt-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'green-malt',
		question: 'What is green malt?',
		options: [
			'Barley grown without pesticides',
			'Germinated barley that has not yet been dried',
			'Malt that has been lightly peated',
			'Unripe barley harvested early'
		],
		answer: 'Germinated barley that has not yet been dried',
		explanation: 'Green malt is germinated barley before kilning.'
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
		id: 'pagoda-roof-purpose',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'pagoda-roof',
		question: 'The distinctive pagoda roofs on Scottish distilleries were designed to...',
		options: [
			'Improve airflow for the smoke used to dry malted barley',
			'Vent alcohol vapor from the warehouses',
			'Keep rain off the spirit safe',
			'Mark the distillery as licensed for tax purposes'
		],
		answer: 'Improve airflow for the smoke used to dry malted barley',
		explanation: 'Modeled after Chinese architecture, the pagoda roof improved airflow above the kiln.'
	},
	{
		id: 'chocolate-malt-flavor',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'chocolate-malt',
		question: 'Chocolate malt is barley dried at higher temperatures. What flavors does this release?',
		options: ['Cocoa', 'Smoke and iodine', 'Green apple', 'Coconut'],
		answer: 'Cocoa',
		explanation: 'The higher drying temperature darkens the malt and releases cocoa flavors.'
	},
	{
		id: 'bere-barley-origin',
		category: INGREDIENTS_FERMENTATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'bere-barley',
		question: 'Bere barley, one of Britain\'s oldest barley varieties, is grown mainly where today?',
		options: [
			'In the north of Scotland, including Orkney and Shetland',
			'In Kentucky\'s Bluegrass region',
			'In County Cork, Ireland',
			'On the Kintyre peninsula'
		],
		answer: 'In the north of Scotland, including Orkney and Shetland',
		explanation: 'Bere barley is occasionally used for malt whisky and is grown mainly in the north of Scotland.'
	},
	{
		id: 'flavoring-grain-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'flavoring-grain',
		question: 'In bourbon, what is the secondary grain, such as rye or wheat, called?',
		options: ['Base grain', 'Flavoring grain', 'Adjunct malt', 'Backset grain'],
		answer: 'Flavoring grain',
		explanation: 'The flavoring grain shapes the bourbon\'s profile when present in a large amount.'
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
		id: 'peat-definition',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'peat',
		question: 'What is peat?',
		options: [
			'Partially decomposed vegetation compressed in bogs',
			'A type of charcoal made from oak',
			'Dried seaweed burned for fuel',
			'Coal mined from the Scottish Highlands'
		],
		answer: 'Partially decomposed vegetation compressed in bogs',
		explanation: 'Peat is dried and burned during malting. Its smoke gives barley smoky, medicinal, earthy, or iodine-like flavors.'
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
	},
	{
		id: 'oak-bourbon-species',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'oak',
		question: 'Which oak species dominates bourbon production?',
		options: [
			'European oak (Quercus robur)',
			'Sessile oak (Quercus petraea)',
			'American white oak (Quercus alba)',
			'Mizunara (Quercus mongolica)'
		],
		answer: 'American white oak (Quercus alba)',
		explanation: 'American white oak dominates bourbon, European oak is common in Scotch, and Mizunara is a Japanese specialty.'
	},
	{
		id: 'mizunara-origin',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'mizunara',
		question: 'Mizunara is a rare oak species native to which country?',
		options: ['Scotland', 'Japan', 'Spain', 'United States'],
		answer: 'Japan',
		explanation: 'Mizunara (Quercus mongolica) is a Japanese oak that is porous, hard to cooper, rare, and expensive.'
	},
	{
		id: 'mizunara-notes',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'mizunara',
		question: 'Which notes are most associated with Mizunara oak?',
		options: [
			'Incense, sandalwood, and coconut',
			'Smoke, brine, and iodine',
			'Dried fruit, nuts, and sherry',
			'Grass, hay, and green apple'
		],
		answer: 'Incense, sandalwood, and coconut',
		explanation: 'Mizunara imparts distinctive incense, sandalwood, and coconut notes.'
	},
	{
		id: 'sherry-region',
		category: INGREDIENTS_FERMENTATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'sherry',
		question: '"Sherry" is the anglicized name of which Spanish region?',
		options: ['Rioja', 'Jerez', 'Porto', 'Montilla'],
		answer: 'Jerez',
		explanation: 'Sherry is a fortified wine from Jerez in southern Spain, and sherry casks are widely used for whisky maturation.'
	},
	{
		id: 'caramel-coloring-not-permitted',
		category: INGREDIENTS_FERMENTATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'caramel-coloring-e150a',
		question: 'Caramel coloring (E150a) is NOT permitted in which of these?',
		options: ['Scotch', 'Irish whiskey', 'Bourbon', 'Canadian whisky'],
		answer: 'Bourbon',
		explanation: 'Caramel coloring is allowed in Scotch, Irish, Canadian, and many other whiskies, but not in bourbon or straight American whiskey.'
	},

	// Maturation & Wood
	{
		id: 'angels-share-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'angel-s-share',
		question: 'What is the "angel\'s share"?',
		options: [
			'Whisky lost to evaporation during maturation',
			'Whisky absorbed into the wood of the cask',
			'The first dram poured from a new cask',
			'A share of profits given to charity'
		],
		answer: 'Whisky lost to evaporation during maturation',
		explanation: 'The angel\'s share evaporates through the cask. Loss is typically higher in warmer climates.'
	},
	{
		id: 'devils-cut-definition',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'devil-s-cut',
		question: 'What is the "devil\'s cut"?',
		options: [
			'Whisky trapped in the barrel staves',
			'Whisky lost to evaporation',
			'The tails fraction of a distillation run',
			'Tax paid on whisky leaving a bonded warehouse'
		],
		answer: 'Whisky trapped in the barrel staves',
		explanation: 'The devil\'s cut is whisky absorbed into the wood, as opposed to the angel\'s share lost to evaporation.'
	},
	{
		id: 'devils-cut-brand',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'devil-s-cut',
		question: 'Which brand trademarked a product built on the "devil\'s cut" concept?',
		options: ['Maker\'s Mark', 'Jim Beam', 'Buffalo Trace', 'Wild Turkey'],
		answer: 'Jim Beam',
		explanation: 'Jim Beam trademarked a product using the devil\'s cut concept.'
	},
	{
		id: 'bourbon-barrel-size',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'barrel',
		question: 'How many U.S. gallons does a standard bourbon barrel hold?',
		options: ['30', '53', '66', '132'],
		answer: '53',
		explanation: 'A standard bourbon barrel holds 53 U.S. gallons, or about 200 liters.'
	},
	{
		id: 'butt-size',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'butt',
		question: 'In Scotch whisky, how large is a butt?',
		options: ['200 liters', '250 liters', '500 liters', '700 liters'],
		answer: '500 liters',
		explanation: 'A butt is a 500-liter cask.'
	},
	{
		id: 'hogshead-construction',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'hogshead',
		question: 'How is a hogshead typically made?',
		options: [
			'By dismantling bourbon barrels and reassembling them with extra staves',
			'By cutting a butt in half',
			'By coopering new Mizunara oak',
			'By joining two quarter casks together'
		],
		answer: 'By dismantling bourbon barrels and reassembling them with extra staves',
		explanation: 'Hogsheads hold roughly 250-305 liters and are commonly rebuilt from bourbon barrels with additional staves.'
	},
	{
		id: 'quarter-cask-size',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'quarter-cask',
		question: 'In Scotland, what is the capacity of a quarter cask?',
		options: ['50-75 liters', '127-159 liters', '250-305 liters', '480-500 liters'],
		answer: '127-159 liters',
		explanation: 'A quarter cask holds 127-159 liters.'
	},
	{
		id: 'largest-cask-size',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'butt',
		question: 'Which of these Scotch cask types is the largest?',
		options: ['Quarter cask', 'American barrel', 'Hogshead', 'Butt'],
		answer: 'Butt',
		explanation: 'A butt (500 L) is larger than a hogshead (250-305 L), an American barrel (173-191 L), and a quarter cask (127-159 L).'
	},
	{
		id: 'small-barrel-reason',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'small-barrel',
		question: 'Why do many new distilleries use small barrels?',
		options: [
			'A higher surface-area-to-volume ratio matures whisky faster',
			'Small barrels are required for craft whisky labels',
			'Small barrels lose less to the angel\'s share',
			'Small barrels are exempt from excise tax'
		],
		answer: 'A higher surface-area-to-volume ratio matures whisky faster',
		explanation: 'More wood contact per liter speeds up maturation. The term is not regulated.'
	},
	{
		id: 'charring-flavors',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'charring',
		question: 'Which flavors does charring the inside of a barrel contribute?',
		options: [
			'Vanilla, caramel, and smoky notes',
			'Citrus, pine, and mint',
			'Brine, seaweed, and iodine',
			'Green apple, pear, and banana'
		],
		answer: 'Vanilla, caramel, and smoky notes',
		explanation: 'Char also creates a filtering layer and removes some sulfurous compounds. Bourbon and Tennessee whiskey must age in new charred oak.'
	},
	{
		id: 'first-fill-definition',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'first-fill',
		question: 'What does "first-fill" mean for a cask?',
		options: [
			'It previously held another liquid and is maturing whisky for the first time',
			'It is brand-new oak that has never held any liquid',
			'It is the first cask filled in a distillation season',
			'It is filled only once and then discarded'
		],
		answer: 'It previously held another liquid and is maturing whisky for the first time',
		explanation: 'A first-fill cask previously held sherry, bourbon, wine, or another spirit, and usually gives the strongest influence from those contents.'
	},
	{
		id: 'refill-cask-influence',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'refill',
		question: 'Compared with first-fill casks, refill casks usually contribute...',
		options: ['More intense wood character', 'Less intense wood character', 'More smoke', 'Higher proof'],
		answer: 'Less intense wood character',
		explanation: 'Refill casks have already matured whisky, so they give less wood and previous-fill character.'
	},
	{
		id: 'cask-finish-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cask-finish',
		question: 'What is a cask finish?',
		options: [
			'Moving mature whisky into a different cask type to add complexity',
			'Sanding and varnishing the outside of a cask',
			'The final tasting before a cask is bottled',
			'Charring a cask a second time before refilling'
		],
		answer: 'Moving mature whisky into a different cask type to add complexity',
		explanation: 'Whisky is transferred to a sherry, port, wine, rum, or other seasoned cask. The practice is not legally defined.'
	},
	{
		id: 'dunnage-warehouse-traits',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'dunnage-warehouse',
		question: 'Which description best fits a traditional dunnage warehouse?',
		options: [
			'Low, earth-floored, with casks stacked two or three high',
			'Multi-story metal building with barrels on tall ricks',
			'Climate-controlled facility with rotating racks',
			'Underground cave cut into limestone'
		],
		answer: 'Low, earth-floored, with casks stacked two or three high',
		explanation: 'Dunnage warehouses are common in Scotland and Ireland and stay temperature-stable, producing slow maturation.'
	},
	{
		id: 'rickhouse-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'rackhouse',
		question: 'What is an American barrel warehouse with barrels stacked several levels high on ricks called?',
		options: ['Dunnage warehouse', 'Rickhouse', 'Solera', 'Underback'],
		answer: 'Rickhouse',
		explanation: 'Rickhouses (or rackhouses) store barrels high on ricks. Temperature varies by floor, affecting maturation.'
	},
	{
		id: 'bonded-warehouse-definition',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'bonded-warehouse',
		question: 'What is a bonded warehouse?',
		options: [
			'A government-supervised warehouse where excise tax is deferred until release',
			'A warehouse owned jointly by several distilleries',
			'A warehouse insured against fire and theft',
			'A warehouse where only single malts may be stored'
		],
		answer: 'A government-supervised warehouse where excise tax is deferred until release',
		explanation: 'Spirits in a bonded warehouse are stored without paying excise tax until released for sale. Bottled-in-Bond whiskey must age in one.'
	},
	{
		id: 'warehouse-rotation-purpose',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'warehouse-rotation',
		question: 'Why do some bourbon producers rotate barrels between warehouse locations?',
		options: [
			'To keep aging consistent across a large batch',
			'To prevent barrels from leaking',
			'To comply with TTB inspection rules',
			'To reduce excise tax owed'
		],
		answer: 'To keep aging consistent across a large batch',
		explanation: 'Rotation evens out the effect of location on maturation. Buffalo Trace is cited as an example.'
	},
	{
		id: 'solera-definition',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'solera',
		question: 'The solera method, adapted from sherry production, is defined by what feature?',
		options: [
			'The vessel is never fully emptied, so older whisky mingles with newer additions',
			'Whisky is aged exclusively in sunlight',
			'Each cask is used only once',
			'Whisky is aged underground in chalk cellars'
		],
		answer: 'The vessel is never fully emptied, so older whisky mingles with newer additions',
		explanation: 'Solera is a fractional blending and maturation method.'
	},
	{
		id: 'single-cask-equivalent',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'single-cask',
		question: '"Single Cask," the term preferred in Scotland, is equivalent to which American term?',
		options: ['Small Batch', 'Single Barrel', 'Bottled-in-Bond', 'Barrel Proof'],
		answer: 'Single Barrel',
		explanation: 'Both describe whisky drawn from one individual cask or barrel rather than a blend of casks.'
	},
	{
		id: 'single-barrel-legal-status',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'single-barrel',
		question: 'Is "Single Barrel" a legally defined designation?',
		options: [
			'No, it is not legally defined',
			'Yes, under TTB rules',
			'Yes, but only in Kentucky',
			'Yes, under the Bottled-in-Bond Act'
		],
		answer: 'No, it is not legally defined',
		explanation: 'Single Barrel indicates a bottling from one barrel, but it is not a legally defined term.'
	},
	{
		id: 'maturation-oak-compounds',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'maturation',
		question: 'Which compounds does whisky extract from oak during maturation?',
		options: [
			'Vanillin, tannins, and lignins',
			'Methanol, fusel oils, and esters',
			'Phenols, peat, and iodine',
			'Enzymes, sugars, and starches'
		],
		answer: 'Vanillin, tannins, and lignins',
		explanation: 'Maturation also involves oxygen interaction through the cask, which adds color and structure and softens new-make character.'
	},
	{
		id: 'oxidation-after-opening',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'oxidation',
		question: 'Besides cask maturation, when else can oxidation affect whisky?',
		options: [
			'After the bottle is opened',
			'Only during fermentation',
			'Only during distillation',
			'It cannot happen outside the cask'
		],
		answer: 'After the bottle is opened',
		explanation: 'Once a bottle is opened, air exposure can gradually shift its flavor and aroma.'
	},

	// Labeling & Producers
	{
		id: 'proof-to-abv',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'proof',
		question: 'In the U.S., a whiskey labeled 100 proof has what ABV?',
		options: ['40%', '50%', '57.1%', '100%'],
		answer: '50%',
		explanation: 'U.S. proof is double the ABV.'
	},
	{
		id: 'proof-temperature',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'proof',
		question: 'U.S. proof measures a spirit\'s ethanol content at what temperature?',
		options: ['32°F', '60°F', '68°F', '72°F'],
		answer: '60°F',
		explanation: 'In the U.S., proof is the ethanol content at 60 degrees Fahrenheit, expressed as double the ABV.'
	},
	{
		id: 'abv-typical-range',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'abv',
		question: 'Most whiskies are bottled within which ABV range?',
		options: ['20-35%', '35-40%', '40-63%', '65-80%'],
		answer: '40-63%',
		explanation: 'Most whiskies are bottled between 40% and 63% ABV.'
	},
	{
		id: 'age-statement-youngest',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'age-statement',
		question: 'On a bottle containing whiskies of different ages, the age statement reflects...',
		options: ['The oldest whisky', 'The average age', 'The youngest whisky', 'The age of the largest component'],
		answer: 'The youngest whisky',
		explanation: 'An age statement normally reflects the youngest whisky in the bottle.'
	},
	{
		id: 'nas-meaning',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'nas-no-age-statement',
		question: 'What does "NAS" mean on a whisky label?',
		options: [
			'No Age Statement: it still meets legal minimums but doesn\'t claim an age',
			'New American Spirit: an unaged whiskey',
			'Non-Aged Single malt: bottled straight off the still',
			'Natural And Straight: no additives'
		],
		answer: 'No Age Statement: it still meets legal minimums but doesn\'t claim an age',
		explanation: 'A NAS Scotch must still be aged at least 3 years. Producers often use NAS to combine whiskies of different ages.'
	},
	{
		id: 'bottled-in-bond-proof',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'bottled-in-bond',
		question: 'Bottled-in-Bond whiskey must be bottled at what strength?',
		options: ['At least 80 proof', 'Exactly 100 proof', 'At least 110 proof', 'Barrel proof'],
		answer: 'Exactly 100 proof',
		explanation: 'Bottled-in-Bond whiskey is bottled at exactly 100 proof, or 50% ABV.'
	},
	{
		id: 'bottled-in-bond-act-year',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'bottled-in-bond',
		question: 'In what year was the Bottled-in-Bond Act passed?',
		options: ['1830', '1897', '1920', '1964'],
		answer: '1897',
		explanation: 'The Bottled-in-Bond Act of 1897 created a government-backed guarantee of authenticity.'
	},
	{
		id: 'bottled-in-bond-aging',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'bottled-in-bond',
		question: 'How long must Bottled-in-Bond whiskey age in a federally bonded warehouse?',
		options: ['At least 2 years', 'At least 3 years', 'At least 4 years', 'At least 6 years'],
		answer: 'At least 4 years',
		explanation: 'Bottled-in-Bond whiskey must be aged at least four years in a federally bonded warehouse.'
	},
	{
		id: 'bottled-in-bond-not-required',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Which of these is NOT a Bottled-in-Bond requirement?',
		options: [
			'Made in one distillation season',
			'Made by one distiller at one distillery',
			'Made from at least 51% corn',
			'The distillery is identified on the label'
		],
		answer: 'Made from at least 51% corn',
		explanation: 'Bottled-in-Bond sets rules for season, distiller, distillery, aging, proof, and labeling, but not for the grain mix.'
	},
	{
		id: 'barrel-proof-tolerance',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'barrel-proof',
		question: 'Under TTB rules, barrel proof whiskey may be at most how many proof degrees below its strength recorded for tax purposes?',
		options: ['1', '2', '5', '10'],
		answer: '2',
		explanation: 'Barrel proof whiskey can be no more than two proof degrees below the strength recorded for tax determination.'
	},
	{
		id: 'cask-strength-bourbon-range',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'cask-strength',
		question: 'Cask strength bourbon is often bottled at around what proof?',
		options: ['80-90°', '90-100°', '110-140°', '150-160°'],
		answer: '110-140°',
		explanation: 'Cask strength bourbon is bottled with little or no dilution, often around 110-140° proof. The term is not legally defined for bourbon.'
	},
	{
		id: 'chill-filtration-purpose',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'chill-filtered',
		question: 'Why is whisky chill filtered?',
		options: [
			'To remove particles that affect its appearance',
			'To lower the ABV before bottling',
			'To remove peat smoke character',
			'To speed up maturation'
		],
		answer: 'To remove particles that affect its appearance',
		explanation: 'Chill filtration is a cosmetic step: whisky is cooled and filtered to remove particles that can cause haze.'
	},
	{
		id: 'non-chill-filtered-cloudiness',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'non-chill-filtered',
		question: 'What might you notice when adding ice or water to a non-chill filtered whisky?',
		options: ['Some cloudiness', 'A color change to green', 'Heavy foaming', 'A strong sulfur smell'],
		answer: 'Some cloudiness',
		explanation: 'Without chill filtration, particles remain that can cause cloudiness when the whisky is chilled or diluted.'
	},
	{
		id: 'ttb-meaning',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'ttb',
		question: 'Which U.S. agency enforces whiskey classifications and labeling rules?',
		options: [
			'Alcohol and Tobacco Tax and Trade Bureau (TTB)',
			'Food and Drug Administration (FDA)',
			'Department of Agriculture (USDA)',
			'Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)'
		],
		answer: 'Alcohol and Tobacco Tax and Trade Bureau (TTB)',
		explanation: 'The TTB enforces American whiskey classifications, labeling requirements, and production standards.'
	},
	{
		id: 'cooper-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cooper',
		question: 'What does a cooper do?',
		options: ['Makes barrels and casks', 'Operates the spirit still', 'Malts barley', 'Blends whisky'],
		answer: 'Makes barrels and casks',
		explanation: 'A cooper makes and repairs barrels and casks. The craft and the workshop are both called cooperage.'
	},
	{
		id: 'independent-bottler-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'independent-bottler',
		question: 'What is an independent bottler?',
		options: [
			'A company that buys whisky from other distilleries and bottles it',
			'A distillery that bottles only its own whisky',
			'A regulator that inspects bottling lines',
			'A glassmaker that produces custom bottles'
		],
		answer: 'A company that buys whisky from other distilleries and bottles it',
		explanation: 'Many Scottish independent bottlers sell whisky under the original distillery\'s name, with their own name noted.'
	},
	{
		id: 'ndp-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'ndp-non-distiller-producer',
		question: 'What does NDP stand for in the whiskey industry?',
		options: ['Non-Distiller Producer', 'New Distillery Permit', 'National Distillers Program', 'Natural Distilled Product'],
		answer: 'Non-Distiller Producer',
		explanation: 'An NDP buys whisky from a distillery to sell under its own brand name rather than distilling it.'
	},
	{
		id: 'master-blender-role',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'master-blender',
		question: 'What does a master blender do?',
		options: [
			'Chooses which casks go into a batch to achieve a flavor profile',
			'Operates the column still',
			'Inspects casks for the government',
			'Grows and malts barley'
		],
		answer: 'Chooses which casks go into a batch to achieve a flavor profile',
		explanation: 'The master blender selects casks or lots to hit a specific profile. The title is not regulated.'
	},
	{
		id: 'silent-distillery',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'silent',
		question: 'A "silent" distillery is one that...',
		options: [
			'Exists intact but is no longer operating',
			'Has been fully demolished',
			'Produces unpeated whisky only',
			'Does not offer public tours'
		],
		answer: 'Exists intact but is no longer operating',
		explanation: 'A silent distillery is also called mothballed.'
	},
	{
		id: 'silent-season',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'silent-season',
		question: 'What is a distillery\'s "silent season"?',
		options: [
			'An annual production pause for maintenance and repairs',
			'The months when whisky cannot legally be sold',
			'The period when casks rest untouched after filling',
			'The winter months when warehouses are sealed'
		],
		answer: 'An annual production pause for maintenance and repairs',
		explanation: 'The silent season is when a distillery stops production each year, generally for maintenance.'
	},
	{
		id: 'marrying-definition',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'marrying',
		question: 'In whisky production, what is "marrying"?',
		options: [
			'Resting blended whisky, often in a neutral vat, before bottling',
			'Pairing a whisky with food at a tasting',
			'Joining two distilleries under one owner',
			'Combining the heads and tails for redistillation'
		],
		answer: 'Resting blended whisky, often in a neutral vat, before bottling',
		explanation: 'Marrying is not required, but some producers believe it gives a better-integrated whisky.'
	},
	{
		id: 'expression-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'expression',
		question: 'In whisky, what is an "expression"?',
		options: [
			'A specific bottling or variant from a distillery',
			'The aroma released when water is added',
			'A tasting note written by a critic',
			'The shape of a pot still'
		],
		answer: 'A specific bottling or variant from a distillery',
		explanation: 'Expressions from one distillery can differ by age, cask type, strength, or release series.'
	},
	{
		id: 'rectifier-definition',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'rectifier',
		question: 'In the whiskey trade, what is a rectifier?',
		options: [
			'A producer that buys base spirit and processes or blends it',
			'A device that corrects proof readings',
			'An inspector who certifies age statements',
			'A still that removes methanol'
		],
		answer: 'A producer that buys base spirit and processes or blends it',
		explanation: 'A rectifier works with purchased spirit rather than making it from grain, and the distinction matters legally for labeling.'
	},

	// Tasting & Service
	{
		id: 'aqua-vitae-meaning',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'aqua-vitae',
		question: 'What does the Latin "aqua vitae," the root concept behind the word whisky, mean?',
		options: ['Water of life', 'Spirit of grain', 'Fire water', 'Gift of the gods'],
		answer: 'Water of life',
		explanation: 'Aqua vitae, and the Gaelic forms uisce beatha and uisge beatha, mean "water of life."'
	},
	{
		id: 'uisge-beatha-language',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'aqua-vitae',
		question: '"Uisge beatha" is the form of "water of life" in which language?',
		options: ['Irish Gaelic', 'Scottish Gaelic', 'Welsh', 'Old Norse'],
		answer: 'Scottish Gaelic',
		explanation: 'Uisge beatha is Scottish Gaelic, while uisce beatha is Irish Gaelic.'
	},
	{
		id: 'slainte-meaning',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'slainte',
		question: 'The Gaelic toast "Sláinte" translates to what?',
		options: ['Cheers', 'Health', 'Friendship', 'Bottoms up'],
		answer: 'Health',
		explanation: 'Sláinte means "health" and is commonly used in Ireland and Scotland.'
	},
	{
		id: 'quaich-definition',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'quaich',
		question: 'What is a quaich?',
		options: [
			'A traditional two-handled Scottish drinking cup',
			'A Scottish unit of measure for whisky',
			'A copper still used in the Highlands',
			'A toast given at Scottish weddings'
		],
		answer: 'A traditional two-handled Scottish drinking cup',
		explanation: 'The quaich, pronounced "quake," is a traditional Scottish cup with two handles.'
	},
	{
		id: 'dram-definition',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'dram',
		question: 'As a traditional unit of measurement, a dram equals roughly how much?',
		options: ['1/8 fl oz', '1 fl oz', '1.5 fl oz', '2 fl oz'],
		answer: '1/8 fl oz',
		explanation: 'A dram is about 1/8 fl oz, but the word is now used loosely for any serving of whisky, especially Scotch.'
	},
	{
		id: 'jigger-measure',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'jigger',
		question: 'A standard jigger measure is typically how much?',
		options: ['0.5 fl oz', '1 fl oz', '1.5 fl oz', '3 fl oz'],
		answer: '1.5 fl oz',
		explanation: 'A jigger is a bartending measuring tool, and the term also refers to a standard pour of about 1.5 fl oz.'
	},
	{
		id: 'neat-definition',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'neat',
		question: 'What does ordering a whisky "neat" mean?',
		options: [
			'No ice, water, or mixers',
			'Served over ice',
			'With a splash of water',
			'Chilled but without ice'
		],
		answer: 'No ice, water, or mixers',
		explanation: 'Neat means the spirit is served on its own. "On the rocks" means with ice.'
	},
	{
		id: 'nose-definition',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'nose',
		question: 'In tasting, what does "nose" refer to?',
		options: ['The aroma of a spirit', 'The first sip', 'The aftertaste', 'The color of the spirit'],
		answer: 'The aroma of a spirit',
		explanation: 'Nose is the aroma of a spirit, or the act of smelling it.'
	},
	{
		id: 'finish-definition',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'finish',
		question: 'In tasting, what is the "finish"?',
		options: [
			'The aftertaste that lingers after swallowing',
			'The first impression on the nose',
			'The texture of the whisky in the mouth',
			'The color of the whisky in the glass'
		],
		answer: 'The aftertaste that lingers after swallowing',
		explanation: 'Finish is described by both its flavors and its length.'
	},
	{
		id: 'valinch-definition',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'valinch',
		question: 'What is a valinch, also called a whisky thief, used for?',
		options: [
			'Drawing small samples from a barrel',
			'Measuring the proof of a spirit',
			'Sealing a cask\'s bunghole',
			'Adding water to a glass drop by drop'
		],
		answer: 'Drawing small samples from a barrel',
		explanation: 'The valinch is a tubular tool used to take small quantities of whisky from a barrel for sampling.'
	},

	// Styles & Regulations
	{
		id: 'bourbon-corn-minimum',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'bourbon',
		question: 'What is the minimum percentage of corn required in a bourbon mash bill?',
		options: ['25%', '51%', '80%', '100%'],
		answer: '51%',
		explanation: 'Bourbon must be made from at least 51% corn, with the rest commonly including rye, wheat, and malted barley.'
	},
	{
		id: 'bourbon-distillation-ceiling',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'bourbon',
		question: 'What is the maximum distillation strength for bourbon?',
		options: ['62.5% ABV (125°)', '80% ABV (160°)', '94.8% ABV (189.6°)', '95% ABV (190°)'],
		answer: '80% ABV (160°)',
		explanation: 'Bourbon must be distilled to no more than 80% ABV, or 160 proof.'
	},
	{
		id: 'bourbon-entry-proof',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'bourbon',
		question: 'What is the maximum strength at which bourbon may enter the barrel?',
		options: ['50% ABV (100°)', '62.5% ABV (125°)', '70% ABV (140°)', '80% ABV (160°)'],
		answer: '62.5% ABV (125°)',
		explanation: 'Bourbon must enter new charred oak at no more than 62.5% ABV, or 125 proof.'
	},
	{
		id: 'bourbon-barrel-requirement',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'charring',
		question: 'What type of barrel must bourbon be aged in?',
		options: ['Used bourbon barrels', 'Ex-sherry casks', 'New charred oak', 'Any wooden cask'],
		answer: 'New charred oak',
		explanation: 'Bourbon and Tennessee whiskey must age in new charred oak.'
	},
	{
		id: 'straight-whiskey-aging',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'straight-whiskey',
		question: 'What is the minimum aging for a U.S. "straight" whiskey?',
		options: ['No minimum', '1 year', '2 years', '4 years'],
		answer: '2 years',
		explanation: 'Straight whiskey must age at least two years, with only water and same-state whiskey allowed as additions.'
	},
	{
		id: 'straight-bourbon-age-statement',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Straight bourbon must carry an age statement if it is younger than how many years?',
		options: ['2 years', '3 years', '4 years', '6 years'],
		answer: '4 years',
		explanation: 'Straight bourbon aged at least 2 years but under 4 years must state its age on the label.'
	},
	{
		id: 'corn-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'corn-whiskey',
		question: 'Corn whiskey requires a mash of at least what percentage corn?',
		options: ['51%', '65%', '80%', '100%'],
		answer: '80%',
		explanation: 'Corn whiskey must use at least 80% corn, compared with bourbon\'s 51%.'
	},
	{
		id: 'corn-whiskey-oak',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Which major U.S. whiskey style does NOT use new charred oak when aged?',
		options: ['Rye Whiskey', 'Wheat Whiskey', 'Corn Whiskey', 'Tennessee Whiskey'],
		answer: 'Corn Whiskey',
		explanation: 'If corn whiskey is aged, it must use used or uncharred new oak. It is often sold unaged.'
	},
	{
		id: 'rye-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'rye',
		question: 'U.S. rye whiskey must be made from at least what percentage rye?',
		options: ['20%', '30%', '51%', '80%'],
		answer: '51%',
		explanation: 'U.S. rye whiskey follows bourbon-style rules with at least 51% rye.'
	},
	{
		id: 'wheat-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'wheat-whiskey',
		question: 'U.S. wheat whiskey must be made from at least what percentage wheat?',
		options: ['20%', '30%', '51%', '80%'],
		answer: '51%',
		explanation: 'Wheat whiskey uses at least 51% wheat, ages in new charred oak, and follows bourbon\'s proof limits.'
	},
	{
		id: 'malt-whisky-us-vs-scotland',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'malt-whisky',
		question: 'How does American malt whiskey differ from Scottish malt whisky?',
		options: [
			'U.S. requires at least 51% malted barley; Scotland requires 100%',
			'U.S. requires 100% malted barley; Scotland requires 51%',
			'U.S. requires pot stills; Scotland does not',
			'There is no difference'
		],
		answer: 'U.S. requires at least 51% malted barley; Scotland requires 100%',
		explanation: 'In Scotland and Ireland, malt whisky must be 100% malted barley and distilled in a pot still.'
	},
	{
		id: 'high-rye-examples',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'high-rye',
		question: 'Bulleit and Four Roses Single Barrel are common examples of which bourbon style?',
		options: ['Wheated bourbon', 'High-rye bourbon', 'Bottled-in-Bond', 'Corn whiskey'],
		answer: 'High-rye bourbon',
		explanation: 'High-rye bourbons have elevated rye content and tend to taste spicier and drier.'
	},
	{
		id: 'high-rye-percentage',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'high-rye',
		question: 'A "high rye" bourbon typically contains roughly how much rye?',
		options: ['5-10%', '20-35%', '51-60%', '80% or more'],
		answer: '20-35%',
		explanation: 'High rye is a non-legal designation, typically around 20-35% rye.'
	},
	{
		id: 'wheated-bourbon-example',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'wheated-bourbon',
		question: 'Which of these is a well-known wheated bourbon?',
		options: ['Bulleit', 'Maker\'s Mark', 'Jack Daniel\'s', 'Crown Royal'],
		answer: 'Maker\'s Mark',
		explanation: 'Wheated bourbons use wheat instead of rye as the main secondary grain. W.L. Weller and Pappy Van Winkle are other examples.'
	},
	{
		id: 'small-batch-legal-status',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'small-batch',
		question: 'What does "small batch" legally require on a bourbon label?',
		options: [
			'Nothing, because it is a marketing term',
			'No more than 10 barrels',
			'No more than 200 barrels',
			'Distillation in a pot still'
		],
		answer: 'Nothing, because it is a marketing term',
		explanation: 'Small batch often implies about 10-200 barrels, but no legal minimum or maximum exists.'
	},
	{
		id: 'tennessee-whiskey-exception',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'tennessee-whiskey',
		question: 'Which Tennessee distillery is exempt from the Lincoln County Process requirement?',
		options: ['Jack Daniel\'s', 'George Dickel', 'Prichard\'s', 'Nelson\'s Green Brier'],
		answer: 'Prichard\'s',
		explanation: 'Benjamin Prichard\'s is the notable exemption. Jack Daniel\'s and George Dickel are the primary examples of the style.'
	},
	{
		id: 'tennessee-whiskey-leader',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'tennessee-whiskey',
		question: 'Which brand is the global market leader in Tennessee whiskey?',
		options: ['George Dickel', 'Jack Daniel\'s', 'Jim Beam', 'Evan Williams'],
		answer: 'Jack Daniel\'s',
		explanation: 'Jack Daniel\'s is the global market leader in Tennessee whiskey.'
	},
	{
		id: 'single-pot-still-mash',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'single-pot-still',
		question: 'Single Pot Still Irish whiskey requires a mash of at least...',
		options: [
			'30% malted barley and 30% unmalted barley',
			'51% malted barley',
			'100% malted barley',
			'51% unmalted barley'
		],
		answer: '30% malted barley and 30% unmalted barley',
		explanation: 'It is made at one distillery, with up to 5% other cereals allowed, and distilled in pot stills.'
	},
	{
		id: 'single-pot-still-other-cereals',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'single-pot-still',
		question: 'Up to what percentage of other cereals may be used in a Single Pot Still mash?',
		options: ['0%', '5%', '20%', '40%'],
		answer: '5%',
		explanation: 'Beyond the required malted and unmalted barley, up to 5% other cereals are allowed.'
	},
	{
		id: 'poitin-meaning',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'poitin',
		question: 'Poitín, a traditional Irish spirit, translates to what?',
		options: ['Little pot', 'Water of life', 'Mountain dew', 'Secret still'],
		answer: 'Little pot',
		explanation: 'Poitín is unaged, can be made from grain, potatoes, or sugar beet molasses, and was historically produced illicitly.'
	},
	{
		id: 'flavored-whisky-abv',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'flavored-whisky',
		question: 'Flavored whisky is often bottled at what strength relative to most whiskies?',
		options: ['Below the usual 40% ABV minimum', 'At exactly 50% ABV', 'At cask strength', 'Above 60% ABV'],
		answer: 'Below the usual 40% ABV minimum',
		explanation: 'Flavored whiskies with added flavoring or ingredients like fruit or honey are often bottled below 40% ABV.'
	},
	{
		id: 'whisky-spelling',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'whisky',
		question: 'In which two countries is the spelling "whiskey" (with an e) standard?',
		options: [
			'Scotland and Canada',
			'Ireland and the United States',
			'Japan and Scotland',
			'Canada and Ireland'
		],
		answer: 'Ireland and the United States',
		explanation: '"Whisky" is the usual spelling in Scotland, Canada, and Japan.'
	},
	{
		id: 'grain-whisky-character',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'grain-whisky',
		question: 'Compared with malt whisky, grain whisky is typically...',
		options: [
			'Lighter and more neutral',
			'Heavier and more peated',
			'Always older',
			'Only made in pot stills'
		],
		answer: 'Lighter and more neutral',
		explanation: 'Grain whisky is typically made in column stills and is used extensively in blended Scotch.'
	},
	{
		id: 'us-blended-whiskey-minimum',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'blend',
		question: 'A U.S. blended whiskey must contain at least what percentage of straight whiskey?',
		options: ['10%', '20%', '51%', '80%'],
		answer: '20%',
		explanation: 'The remainder can be non-straight whiskey, neutral spirits, or both, and coloring or flavoring is allowed.'
	},
	{
		id: 'moonshine-definition',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'moonshine',
		question: 'Historically, what defined "moonshine"?',
		options: [
			'Illegally produced spirit made without paying excise tax',
			'Whisky aged under moonlight in open-air warehouses',
			'Whisky distilled only at night for cooler temperatures',
			'A legally protected style of Appalachian bourbon'
		],
		answer: 'Illegally produced spirit made without paying excise tax',
		explanation: 'Moonshine was often high-proof and unaged. Modern legal products may use the name for unaged corn whiskey.'
	},

	// Scotch Regions
	{
		id: 'islay-pronunciation',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'islay',
		question: 'How is Islay pronounced?',
		options: ['IZ-lay', 'EYE-luh', 'ISS-lee', 'EE-lay'],
		answer: 'EYE-luh',
		explanation: 'Islay is pronounced "EYE-luh."'
	},
	{
		id: 'islay-style',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Islay is best known for what style of whisky?',
		options: [
			'Heavily peated and maritime',
			'Light, grassy, and triple-distilled',
			'Elegant, fruity, and sweet',
			'Unaged and corn-based'
		],
		answer: 'Heavily peated and maritime',
		explanation: 'Many Islay whiskies have high phenol levels, with smoke, brine, medicinal seaweed, and coastal peat notes.'
	},
	{
		id: 'islay-distillery',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which of these is an Islay distillery?',
		options: ['Glenfiddich', 'Springbank', 'Laphroaig', 'The Macallan'],
		answer: 'Laphroaig',
		explanation: 'Laphroaig, Ardbeg, and Lagavulin are among Islay\'s defining distilleries.'
	},
	{
		id: 'speyside-concentration',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which Scotch region has the densest concentration of distilleries?',
		options: ['Islay', 'Speyside', 'Lowlands', 'Campbeltown'],
		answer: 'Speyside',
		explanation: 'Speyside, centered on the River Spey, contains more than half of Scotland\'s malt whisky distilleries.'
	},
	{
		id: 'speyside-parent-region',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Speyside is officially a sub-region of which larger Scotch region?',
		options: ['Lowlands', 'Islands', 'Highlands', 'Campbeltown'],
		answer: 'Highlands',
		explanation: 'Speyside is officially part of the Highlands but is recognized independently.'
	},
	{
		id: 'speyside-style',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Speyside malts are generally known for being...',
		options: [
			'Elegant, complex, and fruit-forward',
			'Heavily peated and medicinal',
			'Briny and oily',
			'Grassy and triple-distilled'
		],
		answer: 'Elegant, complex, and fruit-forward',
		explanation: 'Speyside, home to Glenfiddich, The Macallan, and Glenlivet, is known for refined, often sweet, fruit-forward malts.'
	},
	{
		id: 'highlands-largest',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which is Scotland\'s largest whisky region?',
		options: ['Speyside', 'Highlands', 'Lowlands', 'Islands'],
		answer: 'Highlands',
		explanation: 'Because of its size, the Highlands have no single flavor profile, ranging from light and floral to rich and peated.'
	},
	{
		id: 'highland-line',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'The Highlands stretch north of a line drawn between which two places?',
		options: ['Glasgow and Edinburgh', 'Greenock and Dundee', 'Oban and Aberdeen', 'Inverness and Perth'],
		answer: 'Greenock and Dundee',
		explanation: 'The Highland region lies north of the line from Greenock to Dundee.'
	},
	{
		id: 'lowlands-style',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Lowland whiskies have historically been associated with which characteristics?',
		options: [
			'Lighter, grassier, and gentler',
			'Heavily peated and smoky',
			'Briny, oily, and robust',
			'Rich and sherried'
		],
		answer: 'Lighter, grassier, and gentler',
		explanation: 'The Lowlands have a tradition of triple distillation and were once a heartland of grain whisky production.'
	},
	{
		id: 'campbeltown-distillery-count',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'campbeltown',
		question: 'Campbeltown, once called Scotland\'s whisky capital, now has how many working distilleries?',
		options: ['One', 'Three', 'Nine', 'Over twenty'],
		answer: 'Three',
		explanation: 'Campbeltown\'s three operating distilleries are Springbank, Glen Scotia, and Glengyle.'
	},
	{
		id: 'campbeltown-distillery',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which of these is a Campbeltown distillery?',
		options: ['Ardbeg', 'Springbank', 'Glenlivet', 'Cameronbridge'],
		answer: 'Springbank',
		explanation: 'Springbank, Glen Scotia, and Glengyle make Campbeltown\'s briny, oily, sometimes lightly peated whiskies.'
	},
	{
		id: 'campbeltown-location',
		category: SCOTCH_REGIONS,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Campbeltown sits on which peninsula?',
		options: ['Kintyre', 'Black Isle', 'Fife', 'Ardnamurchan'],
		answer: 'Kintyre',
		explanation: 'Campbeltown is on the Kintyre peninsula on Scotland\'s west coast.'
	},
	{
		id: 'islands-exclusion',
		category: SCOTCH_REGIONS,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which island is NOT part of the "Islands" whisky grouping?',
		options: ['Orkney', 'Skye', 'Islay', 'Arran'],
		answer: 'Islay',
		explanation: 'Islay is treated as its own region. The Islands include Orkney, Skye, Mull, Jura, and Arran.'
	},
	{
		id: 'terroir-origin',
		category: SCOTCH_REGIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'terroir',
		question: 'The concept of terroir in whisky was borrowed from which industry?',
		options: ['Beer', 'Wine', 'Coffee', 'Tea'],
		answer: 'Wine',
		explanation: 'Terroir describes environmental influence (water, barley, peat, climate, warehouse conditions) and remains contested in whisky.'
	},

	// World Whisky: Scotland
	{
		id: 'scotch-regulation',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which regulation governs Scotch whisky today?',
		options: [
			'Scotch Whisky Regulations 2009',
			'Irish Whiskey Technical File 2014',
			'Regulation (EU) 2019/787',
			'Bottled-in-Bond Act 1897'
		],
		answer: 'Scotch Whisky Regulations 2009',
		explanation: 'Scotch is regulated by the Scotch Whisky Regulations 2009 (SWR 2009).'
	},
	{
		id: 'scotch-cask-limit',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'What is the maximum cask size permitted for maturing Scotch?',
		options: ['200 liters', '500 liters', '700 liters', 'No limit'],
		answer: '700 liters',
		explanation: 'Scotch must mature in oak casks not exceeding 700 liters.'
	},
	{
		id: 'scotch-oak-required',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which of these requires oak casks specifically, rather than any wooden cask?',
		options: ['Ireland', 'Japan', 'Canada', 'Scotland'],
		answer: 'Scotland',
		explanation: 'Scotland requires oak casks up to 700 liters. Ireland, Japan, and Canada only specify wooden casks.'
	},
	{
		id: 'scotch-fermentation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'What do Scotch regulations permit for fermentation?',
		options: ['Yeast only', 'Yeast and commercial enzymes', 'Any fermenting agent', 'Natural enzymes only'],
		answer: 'Yeast only',
		explanation: 'Scotch allows yeast only. Ireland permits natural enzymes, and the U.S., Japan, and Canada permit enzymes.'
	},
	{
		id: 'blended-malt-former-name',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Blended Malt Scotch was formerly known by which names?',
		options: [
			'Vatted malt or pure malt',
			'Single blend or house malt',
			'Double malt or twin malt',
			'Grain malt or mixed malt'
		],
		answer: 'Vatted malt or pure malt',
		explanation: 'Blended Malt combines single malts from two or more distilleries without any grain whisky.'
	},
	{
		id: 'scotch-largest-category',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which is the largest Scotch category by volume?',
		options: ['Single Malt', 'Blended Malt', 'Blended Scotch', 'Single Grain'],
		answer: 'Blended Scotch',
		explanation: 'Blended Scotch combines malts and grains. Johnnie Walker and Chivas Regal are major examples.'
	},
	{
		id: 'scotch-uncommon-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which Scotch category is described as relatively uncommon?',
		options: ['Blended Grain', 'Blended Scotch', 'Single Malt', 'Blended Malt'],
		answer: 'Blended Grain',
		explanation: 'Blended Grain combines single grains from two or more distilleries without any malt whisky.'
	},
	{
		id: 'scotch-not-a-category',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'scotch',
		question: 'Which of these is NOT a legal Scotch whisky category?',
		options: ['Single Grain', 'Blended Malt', 'Single Pot Still', 'Blended Grain'],
		answer: 'Single Pot Still',
		explanation: 'Single Pot Still is an Irish category. Scotch has Single Malt, Single Grain, Blended Malt, Blended Grain, and Blended Scotch.'
	},
	{
		id: 'scotch-single-grain-producers',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Cameronbridge and Girvan are major producers of which Scotch category?',
		options: ['Single Malt', 'Single Grain', 'Blended Malt', 'Peated Scotch'],
		answer: 'Single Grain',
		explanation: 'Single Grain Scotch is typically column-distilled and lighter than malt whisky.'
	},
	{
		id: 'blended-scotch-companies',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'scotland',
		question: 'Which two companies dominate the Blended Scotch category?',
		options: [
			'Suntory and Nikka',
			'Diageo and Pernod Ricard',
			'Brown-Forman and Sazerac',
			'Beam and Heaven Hill'
		],
		answer: 'Diageo and Pernod Ricard',
		explanation: 'Diageo and Pernod Ricard dominate Blended Scotch.'
	},

	// World Whisky: Ireland
	{
		id: 'irish-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Where may Irish whiskey be produced?',
		options: [
			'Anywhere on the island of Ireland, including Northern Ireland',
			'Only in the Republic of Ireland',
			'Anywhere in the UK or Ireland',
			'Only in County Cork'
		],
		answer: 'Anywhere on the island of Ireland, including Northern Ireland',
		explanation: 'Irish whiskey must be produced on the island of Ireland, covering both the Republic and Northern Ireland.'
	},
	{
		id: 'irish-regulation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Irish whiskey is regulated by the Irish Whiskey Technical File from which year?',
		options: ['1880', '1980', '2009', '2014'],
		answer: '2014',
		explanation: 'Irish whiskey is regulated by the Irish Whiskey Technical File (2014) and EU Geographic Indication.'
	},
	{
		id: 'irish-peated-exception',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Irish Single Malt is typically unpeated. Which brand is a notable peated exception?',
		options: ['Jameson', 'Connemara', 'Redbreast', 'Tullamore D.E.W.'],
		answer: 'Connemara',
		explanation: 'Connemara is the notable peated exception in Irish Single Malt.'
	},
	{
		id: 'single-pot-still-character',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Single Pot Still Irish whiskey is known for which characteristics?',
		options: [
			'Creamy texture, grassy notes, spice, and oiliness',
			'Heavy peat smoke and brine',
			'Light, neutral, and sweet',
			'Vanilla and caramel from new charred oak'
		],
		answer: 'Creamy texture, grassy notes, spice, and oiliness',
		explanation: 'Distilling a mix of malted and unmalted barley in pot stills gives Single Pot Still its distinctive profile.'
	},
	{
		id: 'single-pot-still-history',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Single Pot Still was historically dominant until which event damaged its export markets?',
		options: ['The Great Famine', 'World War II', 'American Prohibition', 'The 2008 financial crisis'],
		answer: 'American Prohibition',
		explanation: 'Single Pot Still was Ireland\'s dominant style before Prohibition damaged its export markets.'
	},
	{
		id: 'irish-blended-examples',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'ireland',
		question: 'Jameson, Bushmills Black Bush, and Tullamore D.E.W. are examples of which Irish category?',
		options: ['Single Pot Still', 'Single Malt', 'Blended', 'Single Grain'],
		answer: 'Blended',
		explanation: 'Blended Irish whiskey combines two or more Irish categories and is the most widely sold Irish style.'
	},

	// World Whisky: United States
	{
		id: 'us-no-age-minimum',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'usa',
		question: 'What is the universal minimum aging requirement for American whiskey?',
		options: ['None', '2 years', '3 years', '4 years'],
		answer: 'None',
		explanation: 'U.S. law sets no universal aging minimum. Specific minimums apply by category, such as 2 years for straight whiskey.'
	},
	{
		id: 'us-entry-proof-unique',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Which of these sets a maximum barrel entry proof for whisky?',
		options: ['Scotland', 'Japan', 'United States', 'Canada'],
		answer: 'United States',
		explanation: 'The U.S. caps barrel entry at 62.5% (125°) ABV. Scotland, Japan, and Canada specify no entry proof.'
	},
	{
		id: 'american-single-malt-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'When did American Single Malt become a distinct federal category?',
		options: ['1897', '1964', '2014', 'December 2024'],
		answer: 'December 2024',
		explanation: 'American Single Malt Whisky became a distinct federal category in December 2024.'
	},
	{
		id: 'american-single-malt-proof',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'What is the maximum distillation proof for American Single Malt?',
		options: ['125°', '160°', '189.6°', '190°'],
		answer: '160°',
		explanation: 'The 160° ceiling is stricter than Scotch single malt\'s and preserves grain character without requiring pot stills.'
	},
	{
		id: 'american-single-malt-oak',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Which oak does American Single Malt allow for maturation?',
		options: [
			'Used, uncharred new, or charred new oak',
			'New charred oak only',
			'Used oak only',
			'Ex-sherry casks only'
		],
		answer: 'Used, uncharred new, or charred new oak',
		explanation: 'American Single Malt allows several oak types in barrels no larger than 700 liters, unlike bourbon\'s new-charred-oak rule.'
	},
	{
		id: 'american-single-malt-caramel',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Under the American Single Malt rules, caramel coloring is...',
		options: [
			'Permitted if disclosed on the label',
			'Prohibited entirely',
			'Permitted without disclosure',
			'Required for consistency'
		],
		answer: 'Permitted if disclosed on the label',
		explanation: 'American Single Malt permits caramel coloring as long as it is disclosed on the label.'
	},
	{
		id: 'american-single-malt-single-distillery',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'The American Single Malt "one distillery" rule applies to which production step?',
		options: ['Distillation only', 'Fermentation only', 'Aging only', 'Every step from mashing to bottling'],
		answer: 'Distillation only',
		explanation: 'Fermentation, aging, and bottling may take place elsewhere, as long as all distillation happens at one U.S. distillery.'
	},
	{
		id: 'kentucky-straight-bourbon-share',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Kentucky Straight Bourbon accounts for roughly what share of global bourbon production?',
		options: ['25%', '50%', '75%', '95%'],
		answer: '95%',
		explanation: 'Kentucky Straight Bourbon makes up roughly 95% of global bourbon production.'
	},
	{
		id: 'kentucky-straight-bourbon-aging',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Beyond straight bourbon rules, Kentucky Straight Bourbon must be distilled in Kentucky and aged there for at least...',
		options: ['6 months', '1 year', '2 years', '4 years'],
		answer: '1 year',
		explanation: 'Kentucky Straight Bourbon adds Kentucky distillation and at least 1 year of aging in Kentucky.'
	},
	{
		id: 'light-whiskey-proof',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Light Whiskey is distilled within which proof range?',
		options: ['80°-100°', '125°-160°', '161°-189°', '190°-200°'],
		answer: '161°-189°',
		explanation: 'Light Whiskey is distilled between 161° and 189° proof and aged in used or uncharred new oak.'
	},
	{
		id: 'straight-rye-traditions',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'usa',
		question: 'Which two historical American rye traditions are contrasted as lighter and heavier?',
		options: [
			'Maryland (lighter) and Pennsylvania/Monongahela (heavier)',
			'Kentucky (lighter) and Tennessee (heavier)',
			'Virginia (lighter) and New York (heavier)',
			'Indiana (lighter) and Ohio (heavier)'
		],
		answer: 'Maryland (lighter) and Pennsylvania/Monongahela (heavier)',
		explanation: 'Straight rye is generally spicier and drier than bourbon, with lighter Maryland and heavier Pennsylvania or Monongahela traditions.'
	},
	{
		id: 'us-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'usa',
		question: 'What is the general U.S. distillation ceiling for whisky?',
		options: ['80% ABV (160°)', '90% ABV (180°)', '94.8% ABV (189.6°)', '95% ABV (190°)'],
		answer: '95% ABV (190°)',
		explanation: 'U.S. whisky may be distilled to no more than 95% ABV, though categories like bourbon set lower limits.'
	},

	// World Whisky: Japan
	{
		id: 'japan-standards-year',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'japan',
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
		question: 'What gap did Japan\'s 2021 whisky standards close?',
		options: [
			'Imported foreign whisky could be bottled as "Japanese whisky"',
			'Whisky could be sold before aging 1 year',
			'Distilleries could use any cask size',
			'Caramel coloring was undisclosed'
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

	// World Whisky: Canada
	{
		id: 'canada-rye-synonym',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		question: 'In Canada, "rye whisky" is legally...',
		options: [
			'Synonymous with Canadian whisky, regardless of rye content',
			'Required to contain at least 51% rye',
			'Required to contain 100% rye',
			'Not a permitted label term'
		],
		answer: 'Synonymous with Canadian whisky, regardless of rye content',
		explanation: 'Canadian whisky was historically high in rye, but that is not required today.'
	},
	{
		id: 'canada-no-distillation-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		question: 'Which of these has no distillation ceiling for whisky?',
		options: ['Scotland', 'Ireland', 'United States', 'Canada'],
		answer: 'Canada',
		explanation: 'Canada specifies no distillation ceiling. Scotland and Ireland cap at 94.8% ABV, and the U.S. at 95%.'
	},
	{
		id: 'canada-other-spirits',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'canada',
		question: 'Canadian whisky may include up to what percentage of other spirits, wine, or flavorings?',
		options: ['2%', '5%', '9.09%', '20%'],
		answer: '9.09%',
		explanation: 'Canada permits caramel coloring, caramel flavoring, and up to 9.09% of other spirits, wine, or flavorings.'
	},
	{
		id: 'canada-examples',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'canada',
		question: 'Crown Royal and Canadian Club are examples of whisky from which country?',
		options: ['United States', 'Canada', 'Ireland', 'Scotland'],
		answer: 'Canada',
		explanation: 'Canadian whisky comes from a blending-focused tradition and is often light and smooth.'
	},
	{
		id: 'canada-mash-bill',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'canada',
		question: 'What mash bill restrictions apply to Canadian whisky?',
		options: [
			'None, since any grain combination is allowed',
			'At least 51% rye',
			'At least 51% corn',
			'At least 30% malted barley'
		],
		answer: 'None, since any grain combination is allowed',
		explanation: 'Canada permits any grain or combination of grains with no specific percentages.'
	},

	// World Whisky: India
	{
		id: 'india-imfl-meaning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		question: 'What does IMFL stand for in the Indian spirits market?',
		options: [
			'Indian Made Foreign Liquor',
			'Indian Malt and Fine Liquor',
			'International Malt Framework License',
			'Indian Molasses Fermented Liquor'
		],
		answer: 'Indian Made Foreign Liquor',
		explanation: 'IMFL accounts for the large majority of Indian whisky by volume.'
	},
	{
		id: 'india-molasses-base',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		question: 'Most Indian whisky by volume is built on extra neutral alcohol made from what?',
		options: ['Malted barley', 'Rice', 'Molasses', 'Corn'],
		answer: 'Molasses',
		explanation: 'Brands like McDowell\'s No. 1 and Royal Stag use molasses-based ENA, often with only a small fraction of real malt or grain whisky.'
	},
	{
		id: 'india-imfl-export',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'india',
		question: 'Why can most IMFL whisky not be sold as "whisky" in the US, UK, or EU?',
		options: [
			'It is not grain-based',
			'It is bottled below 40% ABV',
			'It is aged in steel tanks',
			'It uses imported water'
		],
		answer: 'It is not grain-based',
		explanation: 'Because IMFL is built on molasses-based spirit rather than grain, it does not meet those markets\' whisky definitions.'
	},
	{
		id: 'india-blended-malt-minimum',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		question: 'FSSAI\'s blended malt/grain whisky category requires as little as what percentage of actual malt or grain whisky?',
		options: ['2%', '10%', '20%', '51%'],
		answer: '2%',
		explanation: 'The rest can be neutral or rectified spirit, and the label often cannot show how much real malt a bottle contains.'
	},
	{
		id: 'india-imwa-founders',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		question: 'Which of these is NOT a founding member of the Indian Malt Whisky Association?',
		options: ['Amrut', 'Paul John', 'McDowell\'s', 'Rampur'],
		answer: 'McDowell\'s',
		explanation: 'IMWA was launched in March 2025 by Amrut, Paul John, Rampur, and Indri. McDowell\'s is a mass-market IMFL brand.'
	},
	{
		id: 'india-tropical-maturation',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		question: 'Tropical heat matures Indian single malt roughly how much faster than in Scotland?',
		options: ['About the same', '1.5 times faster', '3 to 4 times faster', '10 times faster'],
		answer: '3 to 4 times faster',
		explanation: 'A young Indian single malt can taste comparable to a much older Scotch.'
	},
	{
		id: 'india-matured-claim',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'india',
		question: 'Under FSSAI rules, how long must a beverage spend in wood to be labeled "matured"?',
		options: ['6 months', '1 year', '2 years', '3 years'],
		answer: '1 year',
		explanation: 'FSSAI\'s general "matured" claim requires at least 1 year in wood and applies to all alcoholic beverages, not just whisky.'
	},
	{
		id: 'india-pure-malt-equivalent',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'india',
		question: 'Indian Pure Malt is similar in concept to which Scotch category?',
		options: ['Single Malt', 'Blended Malt', 'Single Grain', 'Blended Scotch'],
		answer: 'Blended Malt',
		explanation: 'Indian Pure Malt blends single malts from two or more Indian distilleries under IMWA\'s voluntary standard.'
	},

	// World Whisky: Taiwan
	{
		id: 'taiwan-producers',
		category: WORLD_WHISKY,
		difficulty: EASY,
		source: REGIONS,
		sourceId: 'taiwan',
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
		question: 'Nantou Distillery also runs a fruit winery. What does this let Omar do?',
		options: [
			'Finish whisky in casks that held lychee, plum, or orange wine',
			'Ferment its wash with fruit sugars',
			'Blend fruit brandy into its single malt',
			'Use fruit wood to smoke its barley'
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
		question: 'Why do Kavalan and Nantou voluntarily follow Scotch-style practices such as banning imported bulk spirit?',
		options: [
			'Taiwan\'s law sets no domestic-production requirement',
			'Taiwan adopted Scotch law directly',
			'It is required for export to Japan',
			'Their parent companies are Scottish'
		],
		answer: 'Taiwan\'s law sets no domestic-production requirement',
		explanation: 'Taiwan\'s statute defines a generic tax category rather than a protected designation of origin.'
	},

	// World Whisky: Australia
	{
		id: 'australia-bottling-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'australia',
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
		question: 'Australia\'s British-owned "Blended Whisky Period" spanned which years?',
		options: ['1850-1900', '1900-1920', '1930-1980', '1992-2010'],
		answer: '1930-1980',
		explanation: 'Blends dominated until tariff protections ended and the era\'s major distilleries closed.'
	},

	// World Whisky: New Zealand
	{
		id: 'nz-standard-body',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
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
		question: 'Under New Zealand\'s voluntary standard, enzymes are...',
		options: [
			'Banned for single malt but permitted for blended whisky',
			'Permitted for all categories',
			'Banned for all categories',
			'Required for blended whisky'
		],
		answer: 'Banned for single malt but permitted for blended whisky',
		explanation: 'The standard also bans liquid malt extract, added flavorings, and wood chips during maturation.'
	},
	{
		id: 'nz-production-location',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		question: 'Which production steps must take place in New Zealand under the DSA standard?',
		options: [
			'Mashing, fermentation, distillation, maturation, and bottling',
			'Distillation only',
			'Maturation and bottling only',
			'Bottling only'
		],
		answer: 'Mashing, fermentation, distillation, maturation, and bottling',
		explanation: 'That is a stricter production-location test than most whisky nations use, though it has no legal force.'
	},
	{
		id: 'nz-thomson-manuka',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
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
		question: 'Which Dunedin distillery was once the world\'s southernmost whisky distillery?',
		options: ['Cardrona', 'Thomson', 'Willowbank', 'Lammerlaw'],
		answer: 'Willowbank',
		explanation: 'Willowbank produced Wilson\'s, 45 South, and Lammerlaw. Its surviving casks are still bottled by the New Zealand Whisky Collection.'
	},

	// World Whisky: European Union
	{
		id: 'eu-regulation',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'european-union',
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
		question: 'How does EU Single Malt differ from Scotch Single Malt?',
		options: [
			'The EU does not require pot still distillation',
			'The EU allows unmalted barley',
			'The EU has no minimum aging',
			'The EU allows added sweeteners'
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
		question: 'Armorik, the leading Whisky Breton, is made by which distillery?',
		options: ['Warenghem', 'Slyrs', 'Zuidam', 'Stauning'],
		answer: 'Warenghem',
		explanation: 'The Whisky Breton GI, created in 2015, is led by the Warenghem distillery\'s Armorik.'
	},

	// World Whisky: Denmark
	{
		id: 'denmark-manifesto',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		question: 'What did ten Danish distilleries launch in April 2025?',
		options: [
			'The Danish Whisky Manifesto',
			'A binding national whisky law',
			'A registered EU geographical indication',
			'The Nordic Whisky Association'
		],
		answer: 'The Danish Whisky Manifesto',
		explanation: 'The voluntary Manifesto defines national categories ahead of a hoped-for EU GI.'
	},
	{
		id: 'denmark-stauning',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		question: 'Which Danish distillery markets its rye as "The Original Rye Whisky"?',
		options: ['Stauning', 'Slyrs', 'Warenghem', 'Zuidam'],
		answer: 'Stauning',
		explanation: 'Stauning, in West Jutland since 2005, uses locally grown rye and barley and direct-fired stills.'
	},
	{
		id: 'denmark-direct-fire',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'denmark',
		question: 'Stauning heats its stills using which rarer method?',
		options: ['Direct fire', 'Steam coils', 'Electric elements', 'Solar thermal'],
		answer: 'Direct fire',
		explanation: 'Direct firing is rarer than steam coils and is part of Stauning\'s house style.'
	},
	{
		id: 'denmark-categories',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'denmark',
		question: 'Which of these is NOT one of the four whisky styles defined by the Danish Whisky Manifesto?',
		options: ['Single Malt', 'Rye', 'Oat', 'Corn'],
		answer: 'Corn',
		explanation: 'The Manifesto defines Single Malt, Rye, Wheat, and Oat whisky.'
	},

	// World Whisky: Comparisons
	{
		id: 'compare-two-year-minimum',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'taiwan',
		question: 'Which of these has a 2-year minimum aging requirement rather than 3?',
		options: ['Scotland', 'Ireland', 'Japan', 'Taiwan'],
		answer: 'Taiwan',
		explanation: 'Scotland, Ireland, and Japan require 3 years. Taiwan and Australia require 2.'
	},
	{
		id: 'compare-94-8-ceiling',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'european-union',
		question: 'Scotland, Ireland, and the EU share which distillation ceiling?',
		options: ['80% ABV', '90% ABV', 'Less than 94.8% ABV', '95% ABV'],
		answer: 'Less than 94.8% ABV',
		explanation: 'All three cap distillation below 94.8% (189.6°) ABV, while the U.S. and Japan allow up to 95%.'
	},
	{
		id: 'compare-no-single-malt-definition',
		category: WORLD_WHISKY,
		difficulty: HARD,
		source: REGIONS,
		sourceId: 'australia',
		question: 'Which of these countries has no legal definition of "single malt"?',
		options: ['Scotland', 'Ireland', 'United States', 'Australia'],
		answer: 'Australia',
		explanation: 'Scotland, Ireland, and the U.S. all define single malt in law. Australia does not.'
	}
];
