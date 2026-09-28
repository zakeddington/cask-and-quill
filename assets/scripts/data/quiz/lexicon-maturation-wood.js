import { INGREDIENTS_FERMENTATION, MATURATION_WOOD, STYLES_REGULATIONS, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Maturation & Wood
export const LEXICON_MATURATION_WOOD_QUESTIONS = [
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
	}
];
