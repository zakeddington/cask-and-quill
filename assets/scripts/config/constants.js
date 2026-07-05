export const SPRITE_URL = '/assets/images/icon-sprite.svg';

export const CATALOG_CATEGORY_OPTIONS = [
	{ value: 'American & Bourbon', label: 'American & Bourbon' },
	{ value: 'American Rye', label: 'American Rye' },
	{ value: 'American Single Malt', label: 'American Single Malt' },
	{ value: 'American Wheat', label: 'American Wheat' },
	{ value: 'Irish', label: 'Irish' },
	{ value: 'Japanese', label: 'Japanese' },
	{ value: 'Scotch', label: 'Scotch' }
];

export const CATALOG_IDENTITY_FIELDS = [
	{ name: 'brand', label: 'Brand' },
	{ name: 'bottle', label: 'Bottle' },
	{ name: 'category', label: 'Category', type: 'select', options: CATALOG_CATEGORY_OPTIONS },
	{ name: 'type', label: 'Type' },
	{ name: 'distillery', label: 'Distillery' },
	{ name: 'corpOwner', label: 'Corp. Owner' },
	{ name: 'origin', label: 'Origin' },
];

export const CATALOG_FILL_OPTIONS = [
	{ value: 'plenty', label: 'Plenty' },
	{ value: 'average', label: 'Average' },
	{ value: 'low', label: 'Low' },
	{ value: 'extremely-low', label: 'Extremely Low' },
	{ value: 'bottle-kill', label: 'Bottle Kill' }
];

export const CATALOG_FILL_ICON_CONFIG = {
	'plenty': { icon: 'icon-water-drop', colorClass: 'catalog-fill-plenty' },
	'average': { icon: 'icon-water-drop', colorClass: 'catalog-fill-average' },
	'low': { icon: 'icon-water-drop', colorClass: 'catalog-fill-low' },
	'extremely-low': { icon: 'icon-exclamation-mark', colorClass: 'catalog-fill-extremely-low' },
	'bottle-kill': { icon: 'icon-drop-slash', colorClass: 'catalog-fill-bottle-kill' }
};

export const CATALOG_SPEC_FIELDS = [
	{ name: 'fill', label: 'Fill', options: CATALOG_FILL_OPTIONS },
	{ name: 'age', label: 'Age' },
	{ name: 'abv', label: 'ABV', unit: '%' },
	{ name: 'proof', label: 'Proof', unit: '°' },
	{ name: 'char', label: 'Char Level', icon: 'icon-barrel' },
	{ name: 'cask', label: 'Cask / Finish / Notes', multiline: true }
];

export const CATALOG_MASH_BILL_FIELDS = [
	{ name: 'corn', label: 'Corn', icon: 'icon-corn' },
	{ name: 'barley', label: 'Barley', icon: 'icon-barley' },
	{ name: 'maltedBarley', label: 'Malted Barley', icon: 'icon-barley' },
	{ name: 'rye', label: 'Rye', icon: 'icon-rye' },
	{ name: 'maltedRye', label: 'Malted Rye', icon: 'icon-rye' },
	{ name: 'wheat', label: 'Wheat', icon: 'icon-wheat' }
];

export const CATALOG_TASTING_NOTE_FIELDS = [
	{ name: 'nose', label: 'Nose', icon: 'icon-wind' },
	{ name: 'palate', label: 'Palate', icon: 'icon-wine' },
	{
		name: 'finish',
		label: 'Finish',
		icon: 'icon-clock-countdown',
		options: [
			{ value: 'Short', label: 'Short' },
			{ value: 'Short to Medium', label: 'Short to Medium' },
			{ value: 'Medium', label: 'Medium' },
			{ value: 'Medium to Long', label: 'Medium to Long' },
			{ value: 'Long', label: 'Long' }
		]
	}
];
