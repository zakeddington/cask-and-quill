import { STYLES_REGULATIONS, WORLD_WHISKY, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Styles & Regulations
export const LEXICON_STYLES_REGULATIONS_QUESTIONS = [
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
	}
];
