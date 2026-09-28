import { WORLD_WHISKY, MEDIUM, HARD, REGIONS, LEGAL, VARIETIES } from './quiz-constants.js';

// Regions: New Zealand
export const REGIONS_NEW_ZEALAND_QUESTIONS = [
	{
		id: 'nz-standard-body',
		category: WORLD_WHISKY,
		difficulty: MEDIUM,
		source: REGIONS,
		sourceId: 'new-zealand',
		topic: LEGAL,
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
		topic: LEGAL,
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
		topic: LEGAL,
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
		topic: VARIETIES,
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
		topic: VARIETIES,
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
		topic: VARIETIES,
		question: 'Which Dunedin distillery was once the world\'s southernmost whisky distillery?',
		options: ['Cardrona', 'Thomson', 'Willowbank', 'Lammerlaw'],
		answer: 'Willowbank',
		explanation: 'Willowbank produced Wilson\'s, 45 South, and Lammerlaw. Its surviving casks are still bottled by the New Zealand Whisky Collection.'
	}
];
