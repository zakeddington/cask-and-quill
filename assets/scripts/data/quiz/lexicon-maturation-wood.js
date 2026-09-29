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
			'Rebuilt from bourbon barrels with extra staves',
			'Cut down from a sherry butt to half size',
			'Coopered from new Mizunara oak staves',
			'Made by joining two quarter casks'
		],
		answer: 'Rebuilt from bourbon barrels with extra staves',
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
			'Its first time holding whisky after another liquid',
			'Brand-new oak that has never held any liquid',
			'The first cask filled in a distillation season',
			'A cask filled only once and then discarded'
		],
		answer: 'Its first time holding whisky after another liquid',
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
			'Moving mature whisky into a different cask',
			'Sanding and varnishing the outside of a cask',
			'The final tasting before a cask is bottled',
			'Charring a cask a second time before refilling'
		],
		answer: 'Moving mature whisky into a different cask',
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
			'A supervised warehouse where excise tax is deferred',
			'A warehouse owned jointly by several distilleries',
			'A warehouse insured against fire and theft by law',
			'A warehouse where only single malts may be stored'
		],
		answer: 'A supervised warehouse where excise tax is deferred',
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
			'The vessel is never fully emptied between additions',
			'Whisky is aged only in direct sunlight outdoors',
			'Each cask is emptied completely before refilling',
			'Whisky is aged underground in chalk cellars'
		],
		answer: 'The vessel is never fully emptied between additions',
		explanation: 'Solera is a fractional blending and maturation method, so older whisky always mingles with newer additions.'
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
	},
	{
		id: 'bung-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'bung',
		question: 'What is a bung?',
		options: [
			'The stopper used to close a cask',
			'A tool for drawing cask samples',
			'A frame that barrels rest on',
			'The charred layer inside a barrel'
		],
		answer: 'The stopper used to close a cask',
		explanation: 'A bung is the stopper that seals a barrel or cask.'
	},
	{
		id: 'cask-general-term',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cask',
		question: 'What is the general term for the oak vessels used to store and mature whisky?',
		options: ['Cask', 'Rick', 'Bung', 'Solera'],
		answer: 'Cask',
		explanation: 'Cask is the general term. Its size, oak species, prior contents, and preparation all influence the final flavor.'
	},
	{
		id: 'charcoal-mellowing-term',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'charcoal-mellowing',
		question: 'What is the term for filtering new whiskey through sugar maple charcoal before or during barrel aging?',
		options: ['Charring', 'Charcoal mellowing', 'Warehouse rotation', 'Solera'],
		answer: 'Charcoal mellowing',
		explanation: 'Charcoal mellowing is required for Tennessee whiskey. Charring, by contrast, is burning the inside of a barrel.'
	},
	{
		id: 'charring-sulfur',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'charring',
		question: 'Besides adding flavor and color, what does the char layer inside a barrel do?',
		options: [
			'Removes some sulfurous compounds',
			'Adds phenols from peat smoke',
			'Raises the proof of the spirit',
			'Stops evaporation through the wood'
		],
		answer: 'Removes some sulfurous compounds',
		explanation: 'Char acts as a filtering layer and removes some sulfurous compounds from the spirit.'
	},
	{
		id: 'mizunara-expression-species',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'mizunara-expression',
		question: 'A "Mizunara expression" is whisky matured in which oak species?',
		options: ['Quercus alba', 'Quercus robur', 'Quercus mongolica', 'Quercus petraea'],
		answer: 'Quercus mongolica',
		explanation: 'Mizunara is the Japanese oak Quercus mongolica. "Mizunara expression" is not a legal designation.'
	},
	{
		id: 'mizunara-expression-rarity',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'mizunara-expression',
		question: 'Why are Mizunara casks rare and expensive?',
		options: [
			'The oak is porous and difficult to cooper',
			'The oak must be charred several times',
			'The casks can only be used once',
			'The oak can only be seasoned with sherry'
		],
		answer: 'The oak is porous and difficult to cooper',
		explanation: 'Mizunara is porous and hard to work into watertight casks, which makes it rare and expensive.'
	},
	{
		id: 'rick-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'rick',
		question: 'In a rackhouse, what are the ricks?',
		options: [
			'The structures the barrels sit on',
			'The stoppers that seal each barrel',
			'The tools used to draw samples',
			'The vents that release vapor'
		],
		answer: 'The structures the barrels sit on',
		explanation: 'Ricks are the structures that hold barrels in a rickhouse or rackhouse.'
	},
	{
		id: 'warehouse-materials',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'warehouse',
		question: 'Besides a barrel\'s position in the building, what else about a warehouse can affect maturation?',
		options: [
			'The materials it is built from',
			'The license number it holds',
			'Its distance from the bottling hall',
			'The brand painted on its walls'
		],
		answer: 'The materials it is built from',
		explanation: 'A warehouse\'s construction materials and each barrel\'s location within it both affect maturation.'
	},
	{
		id: 'warehouse-regional-types',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'warehouse',
		question: 'A Kentucky bourbon producer and a Scottish malt distillery each store casks. Which pairing of warehouse types is most typical?',
		options: [
			'Rickhouse in Kentucky, dunnage in Scotland',
			'Dunnage in Kentucky, rickhouse in Scotland',
			'Solera in Kentucky, rickhouse in Scotland',
			'Dunnage in both locations'
		],
		answer: 'Rickhouse in Kentucky, dunnage in Scotland',
		explanation: 'U.S. warehouses are often rickhouses or rackhouses, while dunnage warehouses are common in Scotland and Ireland.'
	},
	{
		id: 'wood-management-definition',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'wood-management',
		question: 'What does "wood management" refer to at a distillery?',
		options: [
			'Its program for sourcing, seasoning, and coopering wood',
			'Moving barrels between floors to even out aging',
			'Replacing leaking staves in older casks',
			'Sorting casks into first-fill and refill stock'
		],
		answer: 'Its program for sourcing, seasoning, and coopering wood',
		explanation: 'Wood management covers sourcing, seasoning, coopering, and using wood for maturation.'
	},
	{
		id: 'wood-management-house-style',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'wood-management',
		question: 'Why do progressive distilleries develop detailed wood policies?',
		options: [
			'Wood choices strongly define their house style',
			'The law requires every distillery to file one',
			'It removes the need for maturation warehouses',
			'It allows them to skip charring their casks'
		],
		answer: 'Wood choices strongly define their house style',
		explanation: 'Highly developed wood policies significantly shape a distillery\'s house style.'
	},
	{
		id: 'angels-share-climate',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'angel-s-share',
		question: 'A distiller moves casks from a cool site to a much warmer one. What typically happens to the angel\'s share?',
		options: ['It increases', 'It decreases', 'It stops entirely', 'It becomes the devil\'s cut'],
		answer: 'It increases',
		explanation: 'Evaporation loss varies with heat, humidity, and climate, and is typically higher in warmer regions.'
	},
	{
		id: 'american-barrel-scotch-size',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'barrel',
		question: 'In Scotch whisky usage, what capacity may define an American barrel?',
		options: ['127-159 liters', '173-191 liters', '250-305 liters', '480-500 liters'],
		answer: '173-191 liters',
		explanation: 'Scotch usage may define an American barrel at 173 to 191 liters, slightly smaller than a 200-liter bourbon barrel.'
	},
	{
		id: 'hogshead-gallons',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'hogshead',
		question: 'A typical 250-liter hogshead holds roughly how many U.S. gallons?',
		options: ['40', '53', '66', '132'],
		answer: '66',
		explanation: 'A hogshead of about 250 liters holds roughly 66 U.S. gallons, compared with 53 for a bourbon barrel.'
	},
	{
		id: 'first-fill-sherry-scenario',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'first-fill',
		question: 'A blender wants the strongest possible sherry influence. Which cask should they choose?',
		options: [
			'A first-fill sherry butt',
			'A third-fill sherry butt',
			'A refill sherry hogshead',
			'A new uncharred oak cask'
		],
		answer: 'A first-fill sherry butt',
		explanation: 'First-fill casks usually give the strongest influence from their prior contents.'
	},
	{
		id: 'cask-finish-duration',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'cask-finish',
		question: 'How long must a cask finish last?',
		options: [
			'At least six months',
			'At least two years',
			'There is no set rule',
			'Exactly one year'
		],
		answer: 'There is no set rule',
		explanation: 'Cask finishing is not legally defined, and the finishing duration varies by producer.'
	},
	{
		id: 'dunnage-warehouse-runners',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'dunnage-warehouse',
		question: 'In a traditional dunnage warehouse, what do the casks rest on?',
		options: ['Steel ricks', 'Wooden runners', 'Rotating racks', 'Concrete pallets'],
		answer: 'Wooden runners',
		explanation: 'Dunnage casks are laid on wooden runners in two or three tiers over an earth floor.'
	},
	{
		id: 'dunnage-warehouse-slow',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'dunnage-warehouse',
		question: 'Why does whisky tend to mature slowly in a dunnage warehouse?',
		options: [
			'Its temperature stays stable',
			'Its casks are sealed with wax',
			'Its floor absorbs the alcohol',
			'Its casks are stacked very high'
		],
		answer: 'Its temperature stays stable',
		explanation: 'Low, earth-floored dunnage warehouses stay temperature-stable, which produces slow maturation.'
	},
	{
		id: 'rackhouse-floor-variation',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'rackhouse',
		question: 'Why can two barrels in the same rickhouse mature at different speeds?',
		options: [
			'Temperature varies by floor and location',
			'Upper floors hold smaller barrels by law',
			'Lower floors receive more direct sunlight',
			'Each floor uses a different oak species'
		],
		answer: 'Temperature varies by floor and location',
		explanation: 'Temperature differences by floor and position affect maturation speed and flavor development.'
	},
	{
		id: 'single-cask-strength',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'single-cask',
		question: 'Is single cask whisky always bottled at cask strength?',
		options: [
			'Yes, by legal definition',
			'Often, but not always',
			'No, it is always diluted',
			'Only when labeled in Scotland'
		],
		answer: 'Often, but not always',
		explanation: 'Single cask whisky comes from one cask without blending and is often, but not always, bottled at cask strength.'
	},
	{
		id: 'single-barrel-variation',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'single-barrel',
		question: 'Why can two single barrel bottlings of the same bourbon taste different?',
		options: [
			'Warehouse location and natural variation differ',
			'Each barrel must use a different mash bill',
			'Single barrel rules require different proofs',
			'Each barrel is finished in a different wine cask'
		],
		answer: 'Warehouse location and natural variation differ',
		explanation: 'Each barrel matures a little differently depending on warehouse location and natural variation.'
	},
	{
		id: 'single-barrel-canada',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'single-barrel',
		question: 'What stands behind a "single barrel" claim on a Canadian whisky label?',
		options: [
			'Producer transparency alone',
			'A federal single barrel standard',
			'Provincial certification',
			'A Bottled-in-Bond style audit'
		],
		answer: 'Producer transparency alone',
		explanation: 'Canada has no specific regulatory standard for single barrel releases, so they rely on producer transparency.'
	},
	{
		id: 'small-barrel-threshold',
		category: MATURATION_WOOD,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'small-barrel',
		question: '"Small barrel" generally refers to any barrel smaller than what?',
		options: ['30 gallons', '53 gallons', '66 gallons', '132 gallons'],
		answer: '53 gallons',
		explanation: 'The term is not regulated but generally means any barrel below the standard 53 gallons.'
	},
	{
		id: 'maturation-not-effect',
		category: MATURATION_WOOD,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'maturation',
		question: 'Which of these is NOT a typical effect of maturation in oak?',
		options: [
			'The whisky gains color',
			'The whisky gains structure',
			'Harsh new-make notes fade',
			'Starch converts to sugar'
		],
		answer: 'Starch converts to sugar',
		explanation: 'Maturation adds color and structure and softens new-make character. Starch conversion happens earlier, during mashing.'
	},
	{
		id: 'oxidation-definition',
		category: MATURATION_WOOD,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'oxidation',
		question: 'In whisky, what is oxidation?',
		options: [
			'Change caused by exposure to air',
			'Loss of whisky into the staves',
			'Burning the inside of a barrel',
			'Filtering spirit through charcoal'
		],
		answer: 'Change caused by exposure to air',
		explanation: 'Oxidation is the change in characteristics caused by air exposure, and it is an important part of cask maturation.'
	}
];
