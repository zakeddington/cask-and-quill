import { DISTILLATION, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Distillation
export const LEXICON_DISTILLATION_QUESTIONS = [
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
		options: [
			'Single Grain Scotch Whisky',
			'Blended Grain Scotch Whisky',
			'Single Pot Still Irish Whiskey',
			'Single Grain Irish Whiskey'
		],
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
			'It removes harsh sulfur compounds',
			'It adds color to the new make spirit',
			'It raises the final ABV of the spirit',
			'It is the only metal permitted by law'
		],
		answer: 'It removes harsh sulfur compounds',
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
			'The angled pipe from the still top to the condenser',
			'The lever used to open and lock the spirit safe',
			'The paddle used to stir the mash in the mash tun',
			'The metal hoop that holds the staves of a cask'
		],
		answer: 'The angled pipe from the still top to the condenser',
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
			'To store finished bottles securely before they are sold',
			'To let the operator watch the spirit and direct the cut',
			'To hold new-filled casks at a steady, cool temperature',
			'To filter new spirit through charcoal before casking'
		],
		answer: 'To let the operator watch the spirit and direct the cut',
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
	{
		id: 'aftershots-definition',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'aftershots',
		question: 'What is the term for the final, low-alcohol spirit produced by a spirit still at the end of distillation?',
		options: ['Foreshots', 'Aftershots', 'Low Wines', 'Pot Ale'],
		answer: 'Aftershots',
		explanation: 'Aftershots are the last, heavier fraction off the spirit still. They are usually discarded or redistilled.'
	},
	{
		id: 'aftershots-fusel-oils',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'aftershots',
		question: 'Aftershots are a heavier fraction that contains which compounds?',
		options: ['Fusel oils', 'Methanol', 'Tannins', 'Lactones'],
		answer: 'Fusel oils',
		explanation: 'Aftershots contain fusel oils. Methanol is concentrated at the other end of the run, in the foreshots.'
	},
	{
		id: 'condenser-purpose',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'condenser',
		question: 'What does a condenser do in the distillation apparatus?',
		options: [
			'Cools spirit vapor back into liquid',
			'Heats the wash to its boiling point',
			'Separates the heads from the tails',
			'Filters spirit through charcoal'
		],
		answer: 'Cools spirit vapor back into liquid',
		explanation: 'A condenser converts the spirit from a gas to a liquid through cooling.'
	},
	{
		id: 'condenser-types',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'condenser',
		question: 'Which of these is a type of condenser?',
		options: ['Lyne Arm', 'Spirit Safe', 'Worm Tub', 'Neck'],
		answer: 'Worm Tub',
		explanation: 'The two main condenser types are the worm tub, a coil submerged in water, and the shell and tube condenser.'
	},
	{
		id: 'shell-and-tube-condenser-cooling',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'shell-and-tube-condenser',
		question: 'How does a shell and tube condenser cool the spirit vapor?',
		options: [
			'It runs the vapor through a copper tube cooled by small water-fed pipes',
			'It runs the vapor through a coiled pipe submerged in a tub of cold water',
			'It bubbles the vapor through a vessel of already condensed spirit',
			'It passes the vapor over a stack of perforated plates in a column'
		],
		answer: 'It runs the vapor through a copper tube cooled by small water-fed pipes',
		explanation: 'In a shell and tube condenser, cold water flows through small copper pipes that cool the vapor. A coiled pipe in a tub of water describes a worm tub.'
	},
	{
		id: 'worm-tub-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'worm-tub',
		question: 'What is a worm tub?',
		options: [
			'A coiled copper pipe in cold water that condenses vapor',
			'A vat where the fermenting wash is stirred and cooled',
			'A tank that collects feints for later redistillation',
			'A copper vessel where the wash is heated to boiling'
		],
		answer: 'A coiled copper pipe in cold water that condenses vapor',
		explanation: 'A worm tub is a traditional condenser. Spirit vapor travels through a coiled copper pipe submerged in cold water.'
	},
	{
		id: 'continuous-still-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'continuous-still',
		question: 'What sets a continuous still apart from a pot still?',
		options: [
			'It distills nonstop rather than in batches',
			'It is made of steel rather than copper',
			'It can only distill malted barley',
			'It must be paired with a worm tub'
		],
		answer: 'It distills nonstop rather than in batches',
		explanation: 'A continuous still runs continuously, while a pot still works in separate batches.'
	},
	{
		id: 'continuous-still-type',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'continuous-still',
		question: 'Most continuous stills are which kind of still?',
		options: ['Pot Stills', 'Column Stills', 'Doublers', 'Thumpers'],
		answer: 'Column Stills',
		explanation: 'Most continuous stills are column stills. Doublers and thumpers are pot stills used for a second distillation.'
	},
	{
		id: 'distillate-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'distillate',
		question: 'In whisky making, what is "distillate"?',
		options: [
			'Spirit that comes off the still before aging',
			'Liquid left in the still after a run',
			'Fermented wash before it is distilled',
			'Whisky diluted to bottling strength'
		],
		answer: 'Spirit that comes off the still before aging',
		explanation: 'Distillate is unaged spirit straight off the still. It is called white dog in the US and new make spirit in Scotland.'
	},
	{
		id: 'doubler-role',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'doubler',
		question: 'In American whiskey distilling, what is a doubler used for?',
		options: [
			'The second round of distillation',
			'Charcoal filtering the new spirit',
			'Cooling vapor into a liquid',
			'Fermenting the sour mash'
		],
		answer: 'The second round of distillation',
		explanation: 'A doubler is a pot still used for the second distillation. It receives spirit that has already been cooled into a liquid.'
	},
	{
		id: 'feints-definition',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'feints',
		question: 'What are feints?',
		options: [
			'The lower-strength fraction collected after the heart',
			'The high-methanol fraction collected before the heart',
			'The residue left in the still after the first run',
			'The water used to cool the condenser coils'
		],
		answer: 'The lower-strength fraction collected after the heart',
		explanation: 'Feints come at the end of the run and contain heavier compounds. They are usually recycled into a later distillation or discarded.'
	},
	{
		id: 'heads-why-separated',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'heads',
		question: 'Why are the heads separated from the heart during a distillation run?',
		options: [
			'They are high in methanol and volatile compounds',
			'They are too low in alcohol to age properly',
			'They carry oily, musty, and harsh notes',
			'They contain spent yeast from the wash'
		],
		answer: 'They are high in methanol and volatile compounds',
		explanation: 'Heads come early in the run and are high in methanol and other volatile compounds, so they are discarded or redistilled.'
	},
	{
		id: 'cut-run-order',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'cut',
		question: 'Which sequence shows the parts of a distillation run from first to last?',
		options: ['Heads, heart, tails', 'Heart, heads, tails', 'Tails, heart, heads', 'Heads, tails, heart'],
		answer: 'Heads, heart, tails',
		explanation: 'The stillman separates the foreshots and heads first, then collects the heart, then diverts the tails.'
	},
	{
		id: 'cut-late-heart-cut',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'cut',
		question: 'A stillman delays the end of the heart cut, letting more of the late run into the heart. What is the likely result?',
		options: [
			'A heavier, oilier spirit',
			'A lighter, more volatile spirit',
			'A spirit higher in methanol',
			'A cleaner, more floral spirit'
		],
		answer: 'A heavier, oilier spirit',
		explanation: 'The end of the run carries heavier, oilier compounds. Cut points dramatically affect flavor, so a late cut brings more of that weight into the heart.'
	},
	{
		id: 'middle-cut-also-called',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'middle-cut',
		question: 'The middle cut of a distillation run is often called the...',
		options: ['Heads', 'Heart', 'Feints', 'Aftershots'],
		answer: 'Heart',
		explanation: 'The middle cut, or heart, is the best section of the distillate, and it goes into the cask.'
	},
	{
		id: 'neck-definition',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'neck',
		question: 'What is the neck of a pot still?',
		options: [
			'The narrow top section leading to the lyne arm',
			'The wide base where the wash is heated',
			'The pipe that carries spirit into the safe',
			'The coiled pipe inside the worm tub'
		],
		answer: 'The narrow top section leading to the lyne arm',
		explanation: 'The neck is the narrow upper part of a pot still. It leads to the lyne arm, which carries vapor to the condenser.'
	},
	{
		id: 'neck-vapor-path',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'neck',
		question: 'Vapor rising out of a pot still passes through which parts, in order?',
		options: [
			'Neck, lyne arm, condenser',
			'Lyne arm, neck, condenser',
			'Condenser, neck, lyne arm',
			'Neck, condenser, lyne arm'
		],
		answer: 'Neck, lyne arm, condenser',
		explanation: 'Vapor rises through the neck into the lyne arm, which connects the top of the still to the condenser.'
	},
	{
		id: 'still-two-types',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'still',
		question: 'Stills are commonly grouped into which two broad types?',
		options: [
			'Pot stills and column stills',
			'Wash tubs and worm tubs',
			'Thumpers and condensers',
			'Doublers and spirit safes'
		],
		answer: 'Pot stills and column stills',
		explanation: 'Stills are usually copper and fall into pot stills for batch distillation and column stills for continuous distillation.'
	},
	{
		id: 'still-batch-continuous',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'still',
		question: 'Which pairing of still and distillation method is correct?',
		options: [
			'Pot still: batch; column still: continuous',
			'Pot still: continuous; column still: batch',
			'Pot still: batch; column still: batch',
			'Pot still: continuous; column still: continuous'
		],
		answer: 'Pot still: batch; column still: continuous',
		explanation: 'Pot stills distill in separate batches, while column stills can run continuously.'
	},
	{
		id: 'copper-stainless-scenario',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'copper',
		question: 'A distiller builds a pot still entirely from stainless steel instead of copper. What would you expect in the new make?',
		options: [
			'More sulfurous, harsher notes',
			'A lighter, cleaner character',
			'A much higher final proof',
			'A deeper amber color'
		],
		answer: 'More sulfurous, harsher notes',
		explanation: 'Copper reacts with sulfur compounds and removes harsh notes. Without that contact, more sulfur character survives into the spirit.'
	},
	{
		id: 'column-still-plates',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'column-still',
		question: 'How does a column still repeatedly vaporize and condense alcohol?',
		options: [
			'Through heated plates inside tall columns',
			'Through a coiled pipe in a tub of cold water',
			'Through a chain of small batch pot stills',
			'Through vats packed with maple charcoal'
		],
		answer: 'Through heated plates inside tall columns',
		explanation: 'Column stills are tall columns fitted with heated plates, where alcohol is vaporized and condensed again and again.'
	},
	{
		id: 'pot-still-character',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'pot-still',
		question: 'Compared with column stills, pot stills tend to produce spirit that is...',
		options: [
			'Heavier and more characterful',
			'Lighter and higher in proof',
			'Neutral and nearly flavorless',
			'Lower in body and congeners'
		],
		answer: 'Heavier and more characterful',
		explanation: 'Pot stills are batch copper stills that produce a heavier, more characterful spirit than column stills.'
	},
	{
		id: 'lyne-arm-downward-angle',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'lyne-arm',
		question: 'A distillery fits its still with a steeply downward-angled lyne arm. What effect would you expect?',
		options: [
			'Less reflux and a heavier spirit',
			'More reflux and a lighter spirit',
			'Less reflux and a lighter spirit',
			'More reflux and a heavier spirit'
		],
		answer: 'Less reflux and a heavier spirit',
		explanation: 'A downward lyne arm sends heavier vapors on to the condenser instead of returning them to the still. Less reflux means a heavier spirit.'
	},
	{
		id: 'reflux-definition',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'reflux',
		question: 'What is reflux?',
		options: [
			'Vapor that condenses in the still and is redistilled',
			'Spirit sent back to the wash still after the cut',
			'Water added to the still to lower its strength',
			'Steam piped around the still to heat it indirectly'
		],
		answer: 'Vapor that condenses in the still and is redistilled',
		explanation: 'Reflux is vapor that condenses and returns to the still rather than reaching the condenser, so it is distilled again.'
	},
	{
		id: 'spirit-safe-tax-control',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'spirit-safe',
		question: 'Why was the spirit safe historically kept locked?',
		options: ['For tax control', 'To stop evaporation', 'To block out light', 'To prevent fires'],
		answer: 'For tax control',
		explanation: 'The locked safe let the operator direct the cut without direct access to the spirit, which served as a tax control.'
	},
	{
		id: 'spirit-safe-materials',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'spirit-safe',
		question: 'A Scottish spirit safe is traditionally made of which materials?',
		options: ['Brass and glass', 'Copper and oak', 'Iron and oak', 'Pewter and copper'],
		answer: 'Brass and glass',
		explanation: 'The spirit safe is a locked brass-and-glass device, so the operator can see the spirit without touching it.'
	},
	{
		id: 'pot-ale-use',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'pot-ale',
		question: 'What is pot ale, the residue from the first distillation, often used for?',
		options: ['Animal feed', 'Seasoning casks', 'Diluting spirit', 'Charring barrels'],
		answer: 'Animal feed',
		explanation: 'Pot ale is the residue left in the still after low wines are produced, and it is often used as animal feed.'
	},
	{
		id: 'high-wines-definition',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'high-wines',
		question: 'In Scotch whisky production, what are high wines?',
		options: [
			'Spirit from the second distillation, before the cut',
			'Spirit from the first distillation of the wash',
			'The residue left in the still after a run',
			'The final low-strength fraction of the run'
		],
		answer: 'Spirit from the second distillation, before the cut',
		explanation: 'High wines are the stronger spirit from the spirit still, typically 60-80% ABV, before cut separation.'
	},
	{
		id: 'wash-still-input',
		category: DISTILLATION,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'wash-still',
		question: 'What liquid is distilled in the wash still?',
		options: ['Fermented wash', 'Low wines', 'Feints', 'New make spirit'],
		answer: 'Fermented wash',
		explanation: 'The wash still takes the fermented wash and distills it into low wines for the spirit still.'
	},
	{
		id: 'intermediate-still-method',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'intermediate-still',
		question: 'A distillery runs its spirit through a wash still, an intermediate still, and a spirit still. What is this practice called?',
		options: ['Double distillation', 'Triple distillation', 'Continuous distillation', 'Column distillation'],
		answer: 'Triple distillation',
		explanation: 'The intermediate still is the extra, middle still used in pot still triple distillation.'
	},
	{
		id: 'triple-distillation-character',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'triple-distillation',
		question: 'What effect does the extra distillation in triple distillation generally have on the spirit?',
		options: [
			'It makes it lighter and more refined',
			'It makes it heavier and oilier',
			'It makes it smokier and more peaty',
			'It makes it darker in color'
		],
		answer: 'It makes it lighter and more refined',
		explanation: 'Distilling three times rather than two generally produces a lighter, more refined spirit.'
	},
	{
		id: 'double-distillation-outputs',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'double-distillation',
		question: 'In Scottish double distillation, what does each of the two stills produce, in order?',
		options: [
			'Low wines, then new make spirit',
			'New make spirit, then low wines',
			'Pot ale, then low wines',
			'High wines, then low wines'
		],
		answer: 'Low wines, then new make spirit',
		explanation: 'The wash still produces low wines, and the spirit still redistills them into the final new make spirit.'
	},
	{
		id: 'tails-character',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'tails',
		question: 'Which notes are typical of the tails of a distillation run?',
		options: [
			'Oily, musty, or harsh',
			'Bright, fruity, and floral',
			'Sharp, solventy, and volatile',
			'Sweet vanilla and caramel'
		],
		answer: 'Oily, musty, or harsh',
		explanation: 'Tails are the heavier, lower-alcohol end of the run. Sharp, volatile notes belong to the heads, and vanilla and caramel come from oak.'
	},
	{
		id: 'lincoln-county-process-other-name',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'lincoln-county-process',
		question: 'The Lincoln County Process is also known as what?',
		options: ['Charcoal mellowing', 'Sour mashing', 'Double barreling', 'Solera aging'],
		answer: 'Charcoal mellowing',
		explanation: 'The Lincoln County Process, or charcoal mellowing, filters new spirit through sugar maple charcoal.'
	},
	{
		id: 'low-wines-why-redistilled',
		category: DISTILLATION,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'low-wines',
		question: 'Why must low wines go through another distillation?',
		options: [
			'They are too weak to be a finished spirit',
			'They are too strong to be aged in oak',
			'They contain too much copper from the still',
			'They must be charcoal filtered before aging'
		],
		answer: 'They are too weak to be a finished spirit',
		explanation: 'Low wines lack enough alcohol by volume to produce a finished spirit, so they go to the spirit still.'
	},
	{
		id: 'beer-still-name',
		category: DISTILLATION,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'beer-still',
		question: 'Why is the first still in American double distillation often called a beer still?',
		options: [
			'It distills the fermented wash, or distiller\'s beer',
			'It was first adapted from a brewery\'s boiling kettle',
			'It produces a spirit at roughly beer strength',
			'It is used to brew beer between distilling seasons'
		],
		answer: 'It distills the fermented wash, or distiller\'s beer',
		explanation: 'The fermented wash is also called distiller\'s beer. The beer still strips alcohol from it to make low wines.'
	}
];
