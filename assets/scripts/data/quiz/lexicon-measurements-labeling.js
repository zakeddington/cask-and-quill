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
			'No Age Statement: meets legal minimums but claims no age',
			'New American Spirit: an unaged American whiskey',
			'Non-Aged Single malt: bottled straight off the still',
			'Natural And Straight: made with no additives at all'
		],
		answer: 'No Age Statement: meets legal minimums but claims no age',
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
			'To remove particles that affect appearance',
			'To lower the ABV slightly before bottling',
			'To strip out harsh peat smoke character',
			'To speed up maturation in the cask'
		],
		answer: 'To remove particles that affect appearance',
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
		id: 'abv-definition',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'abv',
		question: 'What does ABV measure?',
		options: [
			'Ethanol as a percentage of total volume',
			'Ethanol as a percentage of total weight',
			'Sugar content of the wash before distilling',
			'Years the spirit spent maturing in oak'
		],
		answer: 'Ethanol as a percentage of total volume',
		explanation: 'ABV, or alcohol by volume, is the standard measure of ethanol in a spirit, given as a percentage of the total liquid volume.'
	},
	{
		id: 'proof-uk-scale',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'proof',
		question: 'How did historical UK proof compare with U.S. proof?',
		options: ['It used a different scale', 'It was identical to U.S. proof', 'It was exactly triple the ABV', 'It measured sugar, not alcohol'],
		answer: 'It used a different scale',
		explanation: 'The UK historically measured proof on its own scale, but strength is now largely harmonized with ABV internationally.'
	},
	{
		id: 'age-statement-meaning',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'age-statement',
		question: 'What does a whisky\'s age statement count?',
		options: [
			'Years matured in oak before bottling',
			'Years since the distillery opened',
			'Years the bottle has spent on the shelf',
			'Years since the grain was harvested'
		],
		answer: 'Years matured in oak before bottling',
		explanation: 'An age statement gives the number of years the whisky matured in oak. Time in the bottle does not count.'
	},
	{
		id: 'nas-why',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'nas-no-age-statement',
		question: 'Why do producers often release whiskies with no age statement?',
		options: [
			'To blend different ages for a consistent profile',
			'To skip legal minimum aging requirements',
			'To bottle a single cask straight from the warehouse',
			'To reduce the duty paid on older stock'
		],
		answer: 'To blend different ages for a consistent profile',
		explanation: 'Without an age claim, producers can vat whiskies of different ages while keeping a consistent flavor profile.'
	},
	{
		id: 'nas-scotch-minimum',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'nas-no-age-statement',
		question: 'Which statement about a NAS Scotch is true?',
		options: [
			'It must still be at least 3 years old',
			'It can be bottled straight off the still',
			'It must be younger than 10 years old',
			'It cannot contain any grain whisky'
		],
		answer: 'It must still be at least 3 years old',
		explanation: 'A NAS whisky still has to meet legal minimum maturation rules, such as the 3-year minimum for Scotch. It just doesn\'t state an age.'
	},
	{
		id: 'barrel-proof-meaning',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'barrel-proof',
		question: 'What does "barrel proof" on a label tell you?',
		options: [
			'It was bottled near its strength from the barrel',
			'It was bottled at exactly 100 proof by law',
			'It was aged in one single barrel, not a vat',
			'It was distilled to barrel entry proof'
		],
		answer: 'It was bottled near its strength from the barrel',
		explanation: 'Barrel proof whisky is bottled at, or very near, the strength it had when removed from the barrel, without added water.'
	},
	{
		id: 'cask-strength-legal-status',
		category: LABELING_PRODUCERS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'cask-strength',
		question: 'Which statement about "cask strength" on a bourbon label is accurate?',
		options: [
			'It is not a legally defined term',
			'It means 125 proof or higher',
			'It requires at least 4 years of aging',
			'It is defined by the Bottled-in-Bond Act'
		],
		answer: 'It is not a legally defined term',
		explanation: 'For bourbon, cask strength is a non-legal term. The whiskey must still meet every bourbon requirement.'
	},
	{
		id: 'chill-filtered-process',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'chill-filtered',
		question: 'How is chill filtration carried out?',
		options: [
			'The whisky is cooled, then passed through a filter',
			'The whisky is frozen and the ice is removed',
			'Charcoal is packed into the cask before filling',
			'Cold water is added until the whisky clears'
		],
		answer: 'The whisky is cooled, then passed through a filter',
		explanation: 'Chill filtration cools the whisky and filters out particles that would otherwise affect its appearance.'
	},
	{
		id: 'non-chill-filtered-label',
		category: LABELING_PRODUCERS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'non-chill-filtered',
		question: 'A label says "non-chill filtered." What does that tell you?',
		options: [
			'It skipped a cosmetic filtering step',
			'It contains no added caramel coloring',
			'It was never cooled during distillation',
			'It was bottled at barrel proof'
		],
		answer: 'It skipped a cosmetic filtering step',
		explanation: 'Non-chill filtered whisky has not been cooled and filtered to remove haze-causing particles, and producers often advertise this.'
	},
	{
		id: 'ttb-responsibilities',
		category: LABELING_PRODUCERS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'ttb',
		question: 'Which of these is NOT a TTB responsibility for whiskey?',
		options: [
			'Enforcing whiskey classifications',
			'Enforcing labeling requirements',
			'Enforcing production standards',
			'Judging spirits competitions'
		],
		answer: 'Judging spirits competitions',
		explanation: 'The TTB enforces whiskey classifications, labeling requirements, and production standards. It does not judge competitions.'
	}
];
