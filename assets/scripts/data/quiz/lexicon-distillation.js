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
	}
];
