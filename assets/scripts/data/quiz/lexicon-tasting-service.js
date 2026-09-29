import { TASTING_SERVICE, EASY, MEDIUM, HARD, LEXICON } from './quiz-constants.js';

// Lexicon: Tasting & Service
export const LEXICON_TASTING_SERVICE_QUESTIONS = [
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
	{
		id: 'mouthfeel-definition',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'mouthfeel',
		question: 'In a tasting note, what does "mouthfeel" describe?',
		options: [
			'The texture and viscosity on the palate',
			'The aroma rising from the glass',
			'The length of the aftertaste',
			'The color of the whisky'
		],
		answer: 'The texture and viscosity on the palate',
		explanation: 'Mouthfeel is the perception of viscosity, texture, and other sensations in the mouth.'
	},
	{
		id: 'on-the-rocks-definition',
		category: TASTING_SERVICE,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'on-the-rocks',
		question: 'A whisky served "on the rocks" comes...',
		options: ['With ice cubes', 'With nothing added', 'With a splash of water', 'In a quaich'],
		answer: 'With ice cubes',
		explanation: 'On the rocks means served with ice cubes. Neat means with no ice, water, or mixers.'
	},
	{
		id: 'pipette-two-uses',
		category: TASTING_SERVICE,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'pipette',
		question: 'The word "pipette" can describe tools for which two tasks?',
		options: [
			'Adding water drops and drawing cask samples',
			'Measuring pours and chilling the whisky',
			'Sealing casks and stirring the whisky',
			'Filtering spirit and charring barrels'
		],
		answer: 'Adding water drops and drawing cask samples',
		explanation: 'A glass pipette adds water to whisky drop by drop, and a tubular pipette removes small samples from a cask.'
	},
	{
		id: 'whisky-thief-scenario',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'whisky-thief',
		question: 'A warehouse manager wants to taste a little whisky straight from a barrel. Which tool would they reach for?',
		options: ['A jigger', 'A whisky thief', 'A quaich', 'A bung'],
		answer: 'A whisky thief',
		explanation: 'A whisky thief is a tubular tool used to remove small quantities of whisky from a barrel for sampling.'
	},
	{
		id: 'finish-second-meaning',
		category: TASTING_SERVICE,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'finish',
		question: 'Besides the aftertaste, what else can "finish" refer to?',
		options: [
			'A short spell in a second cask',
			'The strength at which it is bottled',
			'The final pass through the still',
			'The last dram left in a bottle'
		],
		answer: 'A short spell in a second cask',
		explanation: 'Finish can also mean cask finishing, where mature whisky moves to a different cask, usually briefly, to pick up specific flavors.'
	},
	{
		id: 'dram-modern-usage',
		category: TASTING_SERVICE,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'dram',
		question: 'In everyday use today, what does "a dram" usually mean?',
		options: [
			'A serving of whisky',
			'An exact 1.5 fl oz pour',
			'A two-handled cup',
			'A sample from a cask'
		],
		answer: 'A serving of whisky',
		explanation: 'Dram began as a unit of about 1/8 fl oz but is now a colloquial term for a serving of whisky, especially Scotch.'
	}
];
