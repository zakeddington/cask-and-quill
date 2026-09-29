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
			'Nothing, as it is a marketing term',
			'No more than 10 barrels per batch',
			'No more than 200 barrels per batch',
			'Distillation in a copper pot still'
		],
		answer: 'Nothing, as it is a marketing term',
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
			'30% malted and 30% unmalted barley',
			'51% malted barley and 49% corn',
			'100% malted barley, no other grain',
			'51% unmalted barley and 49% rye'
		],
		answer: '30% malted and 30% unmalted barley',
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
		options: [
			'Below the usual 40% ABV minimum',
			'Always at exactly 50% ABV (100°)',
			'At full cask strength, undiluted',
			'Above 60% ABV, like barrel proof'
		],
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
			'Scotland and the United States',
			'Ireland and the United States',
			'Canada and the United States',
			'Japan and Ireland'
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
	},
	{
		id: 'whisky-fermented-grain',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'whisky',
		question: 'Whisky is a distilled spirit made from fermented what?',
		options: ['Grain', 'Fruit', 'Sugarcane', 'Agave'],
		answer: 'Grain',
		explanation: 'Whisky is distilled from fermented grain and typically matured in wooden containers for some period of time.'
	},
	{
		id: 'whisky-made-anywhere',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'whisky',
		question: 'Which statement about where whisky can be made is true?',
		options: [
			'It can be made anywhere in the world',
			'Only in Scotland, Ireland, the U.S., and Canada',
			'Only in countries with their own whisky laws',
			'Only in countries that grow their own barley'
		],
		answer: 'It can be made anywhere in the world',
		explanation: 'Whisky can be made anywhere. Some countries, such as Scotland, Ireland, the United States, and Canada, regulate how it is produced.'
	},
	{
		id: 'japanese-whisky-influence',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'japanese-whisky',
		question: 'Japanese whisky is most closely influenced by which whisky tradition?',
		options: ['Scotch', 'Bourbon', 'Irish pot still', 'Canadian rye'],
		answer: 'Scotch',
		explanation: 'Japanese whisky draws heavily on Scotch single malt and blended whisky traditions.'
	},
	{
		id: 'poitin-pronunciation',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'poitin',
		question: 'How is poitín pronounced?',
		options: ['POY-tin', 'put-cheen', 'pwah-TAN', 'poh-TEEN'],
		answer: 'put-cheen',
		explanation: 'Poitín is pronounced "put-cheen" and translates to "little pot."'
	},
	{
		id: 'poitin-aging',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'poitin',
		question: 'How long is poitín aged?',
		options: ['It is unaged', 'At least 1 year', 'At least 2 years', 'At least 3 years'],
		answer: 'It is unaged',
		explanation: 'Poitín is an unaged spirit, unlike Irish whiskey, which must mature for at least three years.'
	},
	{
		id: 'poitin-ingredients',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'poitin',
		question: 'Which of these may be used as a base for poitín but not for Irish whiskey?',
		options: ['Potatoes', 'Malted barley', 'Wheat', 'Corn'],
		answer: 'Potatoes',
		explanation: 'Poitín can be made from grain, potatoes, or sugar beet molasses. Irish whiskey must be made from cereal grains.'
	},
	{
		id: 'flavored-whisky-additive',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'flavored-whisky',
		question: 'Which of these would make a whisky a flavored whisky?',
		options: [
			'Adding honey to change the taste',
			'Aging it in ex-sherry casks',
			'Using peated malted barley',
			'Bottling it at cask strength'
		],
		answer: 'Adding honey to change the taste',
		explanation: 'Flavored whisky contains additives, such as artificial flavoring or natural ingredients like fruit or honey, that change the taste.'
	},
	{
		id: 'peated-scotch-smoke-source',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'peated-scotch',
		question: 'How does peat smoke get into peated Scotch?',
		options: [
			'Malted barley is dried over peat fires',
			'Peat is added to the fermenting wash',
			'Casks are charred with burning peat',
			'Peat water is used to reduce strength'
		],
		answer: 'Malted barley is dried over peat fires',
		explanation: 'Peated Scotch is made with malted barley dried over peat fires, which adds phenolic smoky character.'
	},
	{
		id: 'peated-scotch-legal-status',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'peated-scotch',
		question: 'Is "peated Scotch" a legal Scotch whisky category?',
		options: [
			'No, it is a style, not a category',
			'Yes, it is a sixth legal category',
			'Only for whisky made on Islay',
			'Only above a set ppm level'
		],
		answer: 'No, it is a style, not a category',
		explanation: 'Peated Scotch is not legally defined. The legal categories are Single Malt, Single Grain, Blended Malt, Blended Grain, and Blended Scotch.'
	},
	{
		id: 'peated-scotch-regions',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'peated-scotch',
		question: 'Which statement about where peated Scotch is made is true?',
		options: [
			'Peat is used across Scotch regions',
			'Peated malt is limited by law to Islay',
			'Peat is banned in Speyside distilleries',
			'Peat is only used for grain whisky'
		],
		answer: 'Peat is used across Scotch regions',
		explanation: 'Islay is the best-known source of peated Scotch, but peat is used across Scotch regions.'
	},
	{
		id: 'blended-malt-distillery-count',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'blended-malt',
		question: 'A Scotch Blended Malt must contain malt whisky from at least how many distilleries?',
		options: ['One', 'Two', 'Three', 'Five'],
		answer: 'Two',
		explanation: 'A blended malt combines malt whiskies from at least two distilleries, and contains no grain whisky.'
	},
	{
		id: 'canadian-whisky-bottling-strength',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'canadian-whisky',
		question: 'What is the minimum bottling strength for Canadian whisky?',
		options: ['37.5% ABV', '40% ABV', '43% ABV', '46% ABV'],
		answer: '40% ABV',
		explanation: 'Canadian whisky must be bottled at no less than 40% ABV, after at least three years in wood.'
	},
	{
		id: 'canadian-whisky-production-location',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'canadian-whisky',
		question: 'A rye spirit is distilled in the U.S., then aged 3 years in Canada. Can it be sold as Canadian whisky?',
		options: [
			'No, it must also be distilled in Canada',
			'Yes, because it was aged in Canada',
			'Yes, if bottled at 40% ABV or more',
			'No, because it must age 5 years'
		],
		answer: 'No, it must also be distilled in Canada',
		explanation: 'Canadian whisky must be mashed, distilled, and aged in Canada.'
	},
	{
		id: 'irish-whiskey-distillation-strength',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'irish-whiskey',
		question: 'What is the maximum distillation strength for Irish whiskey?',
		options: ['80% ABV', '90% ABV', '94.8% ABV', '96% ABV'],
		answer: '94.8% ABV',
		explanation: 'Irish whiskey must be distilled to no more than 94.8% ABV, the same ceiling as Scotch.'
	},
	{
		id: 'irish-whiskey-distillation-method',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'irish-whiskey',
		question: 'Which statement about how Irish whiskey is distilled is true?',
		options: [
			'It may be double or triple distilled',
			'It must always be triple distilled',
			'It must be made in pot stills only',
			'It must be made in column stills only'
		],
		answer: 'It may be double or triple distilled',
		explanation: 'Triple distillation is common but not required. Irish whiskey can be double or triple distilled, in pot or column stills.'
	},
	{
		id: 'single-grain-whisky-use',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'single-grain-whisky',
		question: 'What happens to most single grain whisky?',
		options: [
			'It is blended with malt whisky',
			'It is bottled on its own',
			'It is sold as unaged new make',
			'It is redistilled into gin'
		],
		answer: 'It is blended with malt whisky',
		explanation: 'Single grain whisky is most often combined with malt whiskies to create blended whisky, though some is bottled on its own.'
	},
	{
		id: 'single-malt-not-feature',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'single-malt',
		question: 'Which of these is NOT a defining feature of single malt whisky in general?',
		options: [
			'Made at a single distillery',
			'Made from malted barley',
			'Typically distilled in pot stills',
			'Made only in Scotland'
		],
		answer: 'Made only in Scotland',
		explanation: 'Single malt is most closely associated with Scotch, but the term also applies to Irish, Japanese, American, Indian, and other whiskies.'
	},
	{
		id: 'single-malt-many-casks',
		category: STYLES_REGULATIONS,
		difficulty: EASY,
		source: LEXICON,
		sourceId: 'single-malt',
		question: 'Does "single malt" mean the whisky came from a single cask?',
		options: [
			'No, it can combine many casks',
			'Yes, it must come from one cask',
			'Yes, but only in Scotland',
			'No, it can mix distilleries'
		],
		answer: 'No, it can combine many casks',
		explanation: '"Single" refers to one distillery. A single malt usually combines many casks made at that distillery.'
	},
	{
		id: 'single-malt-canadian-legal-status',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'single-malt-canadian',
		question: 'What is the legal status of single malt Canadian whisky?',
		options: [
			'It follows general Canadian whisky rules',
			'It has its own protected legal category',
			'It is exempt from the 3-year minimum',
			'It must be labeled as rye whisky'
		],
		answer: 'It follows general Canadian whisky rules',
		explanation: 'Single malt Canadian is an emerging style rather than a separate legally protected category, so general Canadian aging rules apply.'
	},
	{
		id: 'single-malt-canadian-producers',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'single-malt-canadian',
		question: 'Single malt Canadian whisky, made from 100% malted barley at one distillery, is increasingly associated with which producers?',
		options: [
			'Craft distilleries',
			'Large blending houses',
			'Scottish bottlers',
			'Bourbon distilleries'
		],
		answer: 'Craft distilleries',
		explanation: 'Single malt Canadian is an emerging style, increasingly associated with craft distilleries.'
	},
	{
		id: 'grain-whisky-base-grain',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'grain-whisky',
		question: 'Grain whisky is produced primarily from grains other than which one?',
		options: ['Malted barley', 'Corn', 'Wheat', 'Rye'],
		answer: 'Malted barley',
		explanation: 'Grain whisky is made mainly from grains such as corn, wheat, or rye rather than malted barley, typically in column stills.'
	},
	{
		id: 'straight-whiskey-mingling',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'straight-whiskey',
		question: 'A producer wants to mingle two straight bourbons and still call the result straight bourbon. Which rule applies?',
		options: [
			'Both must come from the same state',
			'Both must come from one distillery',
			'Both must be exactly the same age',
			'Both must be distilled in one season'
		],
		answer: 'Both must come from the same state',
		explanation: 'Only water and whiskey from the same state may be mingled into straight whiskey. Flavoring and colorants are not allowed.'
	},
	{
		id: 'straight-whiskey-legal-term',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'straight-whiskey',
		question: 'Which of these bourbon label terms is a U.S. legal designation?',
		options: ['Straight', 'High rye', 'Wheated', 'Small batch'],
		answer: 'Straight',
		explanation: 'Straight is a legal designation. High rye, wheated, and small batch are descriptive or marketing terms with no legal definition.'
	},
	{
		id: 'wheat-whiskey-vs-wheated-bourbon',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'wheat-whiskey',
		question: 'A U.S. whiskey from 60% wheat, 30% corn, and 10% malted barley is aged in new charred oak within the usual proof limits. Which category fits?',
		options: ['Wheat whiskey', 'Wheated bourbon', 'Bourbon', 'Corn whiskey'],
		answer: 'Wheat whiskey',
		explanation: 'With at least 51% wheat it is wheat whiskey. Wheated bourbon still needs at least 51% corn, with wheat as the secondary grain.'
	},
	{
		id: 'high-rye-vs-wheated-flavor',
		category: STYLES_REGULATIONS,
		difficulty: MEDIUM,
		source: LEXICON,
		sourceId: 'high-rye',
		question: 'Of two bourbons, the first tastes spicy and dry and the second soft and sweet. Which mash bill styles best explain this?',
		options: [
			'High rye, then wheated',
			'Wheated, then high rye',
			'Small batch, then high rye',
			'Wheated, then small batch'
		],
		answer: 'High rye, then wheated',
		explanation: 'High-rye bourbons tend to be spicier and drier, while wheated bourbons are often softer, sweeter, and more delicate.'
	},
	{
		id: 'blend-irish-components',
		category: STYLES_REGULATIONS,
		difficulty: HARD,
		source: LEXICON,
		sourceId: 'blend',
		question: 'Which of these is NOT one of the styles combined in Irish blended whiskey?',
		options: ['Malt whiskey', 'Pot still whiskey', 'Grain whiskey', 'Poitín'],
		answer: 'Poitín',
		explanation: 'Irish blended whiskey is a mixture of any two or more of malt, pot still, and grain whiskey. Poitín is a separate, unaged spirit.'
	}
];
