// Region data
export const REGIONS_DATA = [
	{
		id: 'scotland',
		isOpen: false,
		name: 'Scotland',
		regulator: 'Regulated by the Scotch Whisky Regulations 2009 (SWR 2009)',
		keyRegulationsSummary: [
			'3 yr min',
			'94.8% (189.6°) max distillation',
			'40% (80°) min bottled',
			'produced in Scotland',
		],
		bottleImage: 'assets/images/bottle-scotch.jpg',
		mapBaseImage: 'assets/images/map-all-base.png',
		mapAllHighlightImage: 'assets/images/map-all-highlight.png',
		legalFramework: [
			{ label: 'Production location', value: 'Entirely produced at a distillery in Scotland.' },
			{ label: 'Grain base', value: 'Malted barley required for single malt; other whole grains permitted by category.' },
			{ label: 'Fermentation', value: 'Yeast only.' },
			{ label: 'Distillation ceiling', value: 'Less than 94.8% (189.6°) ABV.' },
			{ label: 'Entry proof', value: 'No entry proof specified.' },
			{ label: 'Barrels', value: 'Oak casks not exceeding 700 litres.' },
			{ label: 'Aging minimum', value: '3 years.' },
			{ label: 'Bottling minimum', value: '40% (80°) ABV.' },
			{ label: 'Permitted additives', value: 'Caramel coloring (E150a) only. No other additives permitted.' },
		],
		varieties: [
			{
				name: 'Single Malt',
				description: 'Single Malt Scotch is made from 100% malted barley at one distillery, batch distilled in copper pot stills, and matured in Scotland for at least 3 years in oak casks no larger than 700 litres. It contains no grain whisky from other distilleries, so each distillery\'s make remains distinct.',
				tags: ['100% Malted Barley', 'Pot Still', 'One Distillery'],
			},
			{
				name: 'Single Grain',
				description: 'Single Grain Scotch is produced at one distillery from cereals other than, or in addition to, malted barley and is typically distilled in column stills. It tends to be lighter and more neutral than malt whisky, with major producers including Cameronbridge and Girvan.',
				tags: ['Any Grain(s)', 'Column Still', 'One Distillery'],
			},
			{
				name: 'Blended Malt',
				description: 'Blended Malt Scotch combines single malts from two or more Scottish distilleries without adding grain whisky. Formerly known as vatted malt or pure malt, it must still meet all Scotch regulations.',
				tags: ['2+ Single Malts'],
			},
			{
				name: 'Blended Grain',
				description: 'Blended Grain Scotch combines single grain whiskies from two or more distilleries without adding malt whisky. It is a relatively uncommon Scotch category.',
				tags: ['2+ Single Grains', 'Uncommon Category'],
			},
			{
				name: 'Blended Scotch',
				description: 'Blended Scotch Whisky combines one or more single malts with one or more single grains and is the largest Scotch category by volume. Any age statement reflects the youngest component, major examples include Johnnie Walker and Chivas Regal, and Diageo and Pernod Ricard dominate the category.',
				tags: ['1+ Single Malts & Single Grains', 'Largest Category'],
			}
		],
		subRegions: [
			{ key: 'speyside', name: 'Speyside', mapHighlightImage: 'assets/images/map-speyside-highlight.png', description: 'Officially a sub-region of the Highlands but recognized independently, Speyside is centered on the River Spey and has the densest concentration of distilleries in Scotland. Home to names like Glenfiddich, The Macallan, and Glenlivet, it is known for elegant, complex, fruit-forward malts that are often sweet and refined.' },
			{ key: 'islay', name: 'Islay', mapHighlightImage: 'assets/images/map-islay-highlight.png', description: 'Islay is an island off Scotland\'s west coast and is famous for heavily peated, maritime whiskies. Many expressions carry high phenol levels and pungent notes of smoke, brine, medicinal seaweed, and coastal peat, with Laphroaig, Ardbeg, and Lagavulin among its defining distilleries.' },
			{ key: 'highlands', name: 'Highlands', mapHighlightImage: 'assets/images/map-highlands-highlight.png', description: 'The Highlands are Scotland\'s largest whisky region, stretching north of the line from Greenock to Dundee and formally including Speyside as a sub-region. Because of its size, the region has no single required flavor profile and ranges widely from light, floral malts to robust, rich, and peated styles.' },
			{ key: 'lowlands', name: 'Lowlands', mapHighlightImage: 'assets/images/map-lowlands-highlight.png', description: 'The Lowlands sit south of the Highland line and have historically been associated with lighter, grassier, gentler whiskies. The region has a tradition of triple distillation and was once an important heartland for grain whisky production.' },
			{ key: 'campbeltown', name: 'Campbeltown', mapHighlightImage: 'assets/images/map-campbeltown-highlight.png', description: 'Campbeltown sits on the Kintyre peninsula and was once known as Scotland\'s whisky capital. Today it is a small but distinct region with only three operating distilleries, known for briny, oily, robust, and sometimes lightly peated whiskies from producers such as Springbank, Glen Scotia, and Glengyle.' },
			{ key: 'islands', name: 'Islands', mapHighlightImage: 'assets/images/map-islands-highlight.png', description: 'The Islands grouping covers Scotch whisky made on Scotland\'s whisky-producing islands outside Islay, including Orkney, Skye, Mull, Jura, and Arran. Often treated as part of the Highlands, these malts vary widely but commonly show coastal, mineral, smoky, or maritime character.' },
		]
	},
	{
		id: 'ireland',
		isOpen: false,
		name: 'Ireland',
		regulator: 'Regulated by Irish Whiskey Technical File (2014) & EU Geographic Indication',
		keyRegulationsSummary: [
			'3 yr min',
			'94.8% (189.6°) max distillation',
			'40% (80°) min bottled',
			'produced in Ireland',
		],
		bottleImage: 'assets/images/bottle-irish.jpg',
		legalFramework: [
			{ label: 'Production location', value: 'Entirely produced at a distillery on the island of Ireland (Republic and Northern Ireland).' },
			{ label: 'Grain base', value: 'Malted grains required, with or without additional unmalted whole grains.' },
			{ label: 'Fermentation', value: 'Natural (non-synthetic) enzymes permitted.' },
			{ label: 'Distillation ceiling', value: 'Less than 94.8% (189.6°) ABV.' },
			{ label: 'Entry proof', value: 'No entry proof specified.' },
			{ label: 'Barrels', value: 'Wooden casks.' },
			{ label: 'Aging minimum', value: '3 years.' },
			{ label: 'Bottling minimum', value: '40% (80°) ABV.' },
			{ label: 'Permitted additives', value: 'Caramel coloring (E150a) only. No other additives permitted.' },
		],
		varieties: [
			{
				name: 'Single Malt',
				description: 'Irish Single Malt is made from 100% malted barley at a single Irish distillery, distilled in pot stills, and aged at least 3 years. It is typically unpeated, with Connemara as a notable peated exception, and is often triple-distilled for smoothness.',
				tags: ['100% Malted Barley', 'Pot Still', 'One Distillery'],
			},
			{
				name: 'Single Pot Still',
				description: 'Single Pot Still Irish is Ireland\'s most distinctive whiskey category, made at one distillery from a mix of malted and unmalted barley with at least 30% of each. It is distilled only in pot stills, giving a creamy texture, green or grassy notes, spicy character, and characteristic oiliness, and it was historically dominant before Prohibition damaged export markets.',
				tags: ['≥30% Malted Barley', '≥30% Unmalted Barley', 'Pot Still', 'One Distillery'],
			},
			{
				name: 'Single Grain',
				description: 'Single Grain Irish comes from one distillery and may use cereals other than, or in addition to, malted barley. It is typically column-distilled, producing a lighter and sweeter character.',
				tags: ['Any Grain(s)', 'Column Still', 'One Distillery'],
			},
			{
				name: 'Blended',
				description: 'Blended Irish Whiskey combines two or more Irish whiskey categories and is the most widely sold Irish style. Familiar examples include Jameson, Bushmills Black Bush, and Tullamore D.E.W.',
				tags: ['2+ Categories', 'Largest Category'],
			}
		]
	},
	{
		id: 'usa',
		isOpen: false,
		name: 'United States',
		regulator: 'Regulated by TTB (Alcohol and Tobacco Tax and Trade Bureau)',
		keyRegulationsSummary: [
			'No min age',
			'95% (190°) max distillation',
			'40% (80°) min bottled',
			'produced in United States',
		],
		bottleImage: 'assets/images/bottle-bourbon.jpg',
		legalFramework: [
			{ label: 'Production location', value: 'Entirely produced at a distillery in the United States.' },
			{ label: 'Grain base', value: 'Any grain or combination of grains permitted; specific minimums required by category.' },
			{ label: 'Fermentation', value: 'Enzymes permitted.' },
			{ label: 'Distillation ceiling', value: 'No more than 95% (190°) ABV.' },
			{ label: 'Entry proof', value: 'No more than 62.5% (125°) ABV.' },
			{ label: 'Barrels', value: 'Oak casks; type varies by category.' },
			{ label: 'Aging minimum', value: 'No universal aging minimum specified; specific minimums required by category.' },
			{ label: 'Bottling minimum', value: '40% (80°) ABV.' },
			{ label: 'Permitted additives', value: 'No additives permitted. Blended designations may include neutral grain spirit, coloring, and flavoring.' },
		],
		varieties: [
			{
				name: 'American Single Malt',
				description: 'American Single Malt Whisky became a distinct federal category in December 2024. It must be made from a fermented mash of 100% malted barley, mashed, distilled, and aged in the United States, distilled entirely at one U.S. distillery to no more than 160° proof, stored in oak barrels no larger than 700 liters, and bottled at no less than 80° proof. The category has no minimum aging requirement, allows used, uncharred new, or charred new oak, permits caramel coloring if disclosed on the label, and establishes a straight designation at 2 years of aging. The single-distillery rule applies to distillation only, so fermentation, aging, and bottling may occur elsewhere; the 160° proof ceiling is stricter than Scotch single malt and is intended to preserve grain character without requiring pot stills.',
				tags: ['100% Malted Barley', 'Used/New Oak Allowed', 'One Distillery', 'Distilled ≤160°', 'Bottled ≥80°', 'No Age Minimum', 'Caramel Color Disclosed'],
			},
			{
				name: 'Bourbon',
				description: 'Bourbon is the flagship American whiskey, made anywhere in the United States from a mash bill of at least 51% corn, aged in new charred oak, distilled to no more than 160° proof, entered into barrel at no more than 125° proof, and bottled at no less than 80° proof. It has no general age minimum, can qualify as straight after 2 years, needs no age statement once aged 4 years or more, and does not allow additives.',
				tags: ['≥51% Corn', 'New Charred Oak', 'Distilled ≤160°', 'Barreled ≤125°', 'Bottled ≥80°', 'No Age Minimum', 'Age Stated if <4yr', 'No Additives'],
			},
			{
				name: 'Straight Bourbon',
				description: 'Straight Bourbon follows all bourbon rules and adds a minimum 2-year aging requirement. If it is younger than 4 years, the age must be stated, and it cannot be blended with other spirits or contain additives.',
				tags: ['Bourbon Rules', 'Aged 2+ Years'],
			},
			{
				name: 'Kentucky Straight Bourbon',
				description: 'Kentucky Straight Bourbon meets bourbon and straight bourbon requirements, then adds Kentucky distillation and at least 1 year of aging in Kentucky. It accounts for roughly 95% of global bourbon production.',
				tags: ['Bourbon Rules', 'Distilled in Kentucky', 'Aged in Kentucky 1+ Yr', 'Largest Category (~95%)'],
			},
			{
				name: 'Tennessee Whiskey',
				description: 'Tennessee Whiskey meets bourbon criteria, must be produced in Tennessee, and must use the Lincoln County Process, which filters spirit through sugar maple charcoal before or during aging. Benjamin Prichard\'s is a notable exemption, while Jack Daniel\'s and George Dickel are primary examples.',
				tags: ['Bourbon Rules', 'Distilled in Tennessee', 'Aged in Tennessee (no min)', 'Lincoln County Process'],
			},
			{
				name: 'Rye Whiskey',
				description: 'Rye Whiskey uses a mash bill of at least 51% rye, matures in new charred oak, is distilled to no more than 160° proof, enters barrel at no more than 125° proof, and is bottled at no less than 80° proof.',
				tags: ['Bourbon Rules', '≥51% Rye'],
			},
			{
				name: 'Straight Rye Whiskey',
				description: 'Straight Rye Whiskey follows rye whiskey rules with at least 2 years of aging, an age statement if under 4 years, no blending with other whisky types, and no additives. It is generally spicier and drier than bourbon, with lighter Maryland and heavier Pennsylvania or Monongahela traditions.',
				tags: ['Rye Rules', 'Aged 2+ Years'],
			},
			{
				name: 'Wheat Whiskey',
				description: 'Wheat Whiskey uses a mash bill of at least 51% wheat, matures in new charred oak, follows the same proof limits as bourbon, and needs at least 2 years of aging for the straight designation.',
				tags: ['Bourbon Rules', '≥51% Wheat'],
			},
			{
				name: 'Malt Whiskey',
				description: 'American Malt Whiskey uses at least 51% malted barley, matures in new charred oak, and follows the same proof limits as bourbon. It is not required to use pot stills, and the straight designation requires at least 2 years of aging.',
				tags: ['Bourbon Rules', '≥51% Malted Barley'],
			},
			{
				name: 'Corn Whiskey',
				description: 'Corn Whiskey uses a mash bill of at least 80% corn, is distilled to no more than 160° proof, and does not require aging. If aged, it must use used or uncharred new oak, making it the major U.S. whiskey style not requiring new charred oak; it is often unaged as white dog and tied to moonshine tradition.',
				tags: ['Most Bourbon Rules', '≥80% Corn', 'Used or Uncharred Oak', 'No New Charred Oak'],
			},
			{
				name: 'Bottled-in-Bond',
				description: 'Bottled-in-Bond is a U.S. designation from the Bottled-in-Bond Act of 1897. The whiskey must be the product of one distillation season, one distiller, and one distillery, then aged at least 4 years in a federally bonded warehouse and bottled at exactly 100° proof. The label must identify the distillery, making it a government-backed authenticity guarantee.',
				tags: ['One Season', 'One Distiller', 'One Distillery', 'Aged 4+ Yr Bonded Warehouse', 'Bottled 100°', 'Distillery on Label'],
			},
			{
				name: 'Light Whiskey',
				description: 'Light Whiskey is distilled between 161° and 189° proof, aged in used or uncharred new oak, and designed for a lighter, more neutral flavor profile.',
				tags: ['Distilled 161°–189° Proof', 'Used or Uncharred Oak'],
			},
			{
				name: 'Blended Whiskey',
				description: 'Blended Whiskey must contain at least 20% straight whiskey, while the remainder may be unaged neutral grain spirit or light whiskey. It may contain coloring or flavoring and must be labeled as blended.',
				tags: ['≥20% Straight Whiskey', 'Neutral Grain/Light Whiskey Allowed', 'Coloring/Flavoring Allowed', 'Blended Label Required'],
			}
		]
	},
	{
		id: 'japan',
		isOpen: false,
		name: 'Japan',
		regulator: 'Regulated by Japan Spirits & Liqueurs Makers Association Standards (2021)',
		keyRegulationsSummary: [
			'3 yr min',
			'95% (190°) max distillation',
			'40% (80°) min bottled',
			'produced in Japan',
		],
		bottleImage: 'assets/images/bottle-japanese.jpg',
		legalFramework: [
			{ label: 'Production location', value: 'Entirely produced at a distillery in Japan.' },
			{ label: 'Grain base', value: 'Malted grains required; additional unmalted grains permitted.' },
			{ label: 'Fermentation', value: 'Enzymes permitted.' },
			{ label: 'Distillation ceiling', value: 'Less than 95% (190°) ABV.' },
			{ label: 'Entry proof', value: 'No entry proof specified.' },
			{ label: 'Barrels', value: 'Wooden casks not exceeding 700 litres.' },
			{ label: 'Aging minimum', value: '3 years.' },
			{ label: 'Bottling minimum', value: '40% (80°) ABV.' },
			{ label: 'Permitted additives', value: 'Caramel coloring (E150a) only. No other additives permitted.' },
			{ label: 'Notes', value: 'Must use water extracted in Japan. Prior to 2021, there were no binding domestic regulations, allowing producers to import foreign whisky and bottle it as "Japanese whisky." The new standards closed this gap.' },
		],
		varieties: [
			{
				name: 'Single Malt',
				description: 'Japanese Single Malt is made from 100% malted barley at a single Japanese distillery, distilled in pot stills, and aged at least 3 years in Japan. Producers often use diverse cask types, including Mizunara oak, ex-sherry, and ex-bourbon, and Japanese distilleries commonly run multiple still shapes to create blending diversity in-house.',
				tags: ['100% Malted Barley', 'Pot Still', 'One Distillery', 'Aged 3+ Years in Japan'],
			},
			{
				name: 'Blended',
				description: 'Blended Japanese Whisky combines malt and grain whiskies, and under the 2021 standards all components must be produced and aged in Japan, though historically some blends included imported spirit. Suntory and Nikka dominate the category, and cross-company barrel exchange is rare compared with Scotland.',
				tags: ['Malt & Grain Whisky', 'All Japanese Components'],
			},
			{
				name: 'Grain',
				description: 'Japanese Grain Whisky is made from grains other than, or in addition to, malted barley and is typically column-distilled. It is generally lighter and cleaner in character and is often used as a blending component.',
				tags: ['Any Grain(s)', 'Column Still'],
			}
		]
	},
	{
		id: 'canada',
		isOpen: false,
		name: 'Canada',
		regulator: 'Regulated by Canada\'s Food and Drug Regulations (Division 2, B.02.020)',
		keyRegulationsSummary: [
			'3 yr min',
			'No max distillation',
			'40% (80°) min bottled',
			'produced in Canada',
		],
		bottleImage: 'assets/images/bottle-canadian.jpg',
		legalFramework: [
			{ label: 'Production location', value: 'Entirely produced at a distillery in Canada.' },
			{ label: 'Grain base', value: 'Any grain or combination of grains permitted; no specific percentages mandated.' },
			{ label: 'Fermentation', value: 'Enzymes permitted.' },
			{ label: 'Distillation ceiling', value: 'No distillation ceiling specified.' },
			{ label: 'Entry proof', value: 'No entry proof specified.' },
			{ label: 'Barrels', value: 'Wooden casks.' },
			{ label: 'Aging minimum', value: '3 years.' },
			{ label: 'Bottling minimum', value: '40% (80°) ABV.' },
			{ label: 'Permitted additives', value: 'Caramel coloring (E150a), caramel flavoring, and up to 9.09% of other spirits, wine, or flavorings permitted.' },
			{ label: 'Notes', value: '"Rye whisky" is legally synonymous with "Canadian whisky" regardless of actual rye content; historically produced with high rye content but this is not required today.' },
		],
		varieties: [
			{
				name: 'Canadian Whisky / Rye',
				description: 'Canadian Whisky, legally synonymous with rye whisky in Canada, is the primary national designation. It has no mash bill restrictions, comes from a blending-focused tradition, is often light and smooth, and includes examples such as Crown Royal and Canadian Club.',
				tags: ['No Mash Bill Restrictions', 'Aged 3+ Years', 'Primary Designation', 'Rye Synonym'],
			}
		]
	}
];
