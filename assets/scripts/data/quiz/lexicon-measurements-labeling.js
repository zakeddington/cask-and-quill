import { LABELING_PRODUCERS, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Measurements & Labeling
export const LEXICON_MEASUREMENTS_LABELING_QUESTIONS = [
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
	}
];
