export const IDENTITY_FIELDS = [
	{ name: 'brand', label: 'Brand' },
	{ name: 'bottle', label: 'Bottle' },
	{ name: 'category', label: 'Category' },
	{ name: 'type', label: 'Type' },
	{ name: 'distillery', label: 'Distillery' },
	{ name: 'corpOwner', label: 'Corp. Owner' },
	{ name: 'origin', label: 'Origin' },
];

export const FILL_OPTIONS = [
	{ value: 'plenty', label: 'Plenty' },
	{ value: 'average', label: 'Average' },
	{ value: 'low', label: 'Low' },
	{ value: 'extremely-low', label: 'Extremely Low' },
	{ value: 'bottle-kill', label: 'Bottle Kill' }
];

export const FILL_ICON_CONFIG = {
	'plenty': { icon: 'icon-water-drop', colorClass: 'catalog-fill-plenty' },
	'average': { icon: 'icon-water-drop', colorClass: 'catalog-fill-average' },
	'low': { icon: 'icon-water-drop', colorClass: 'catalog-fill-low' },
	'extremely-low': { icon: 'icon-exclamation-mark', colorClass: 'catalog-fill-extremely-low' },
	'bottle-kill': { icon: 'icon-drop-slash', colorClass: 'catalog-fill-bottle-kill' }
};

export const SPEC_FIELDS = [
	{ name: 'fill', label: 'Fill', options: FILL_OPTIONS },
	{ name: 'age', label: 'Age' },
	{ name: 'abv', label: 'ABV' },
	{ name: 'proof', label: 'Proof' },
	{ name: 'char', label: 'Char Level', icon: 'icon-barrel' },
	{ name: 'cask', label: 'Cask / Finish / Notes', multiline: true }
];

export const SPRITE_URL = '/assets/images/icon-sprite.svg';

export const MASH_BILL_FIELDS = [
	{ name: 'corn', label: 'Corn', icon: 'icon-corn' },
	{ name: 'barley', label: 'Barley', icon: 'icon-barley' },
	{ name: 'maltedBarley', label: 'Malted Barley', icon: 'icon-barley' },
	{ name: 'rye', label: 'Rye', icon: 'icon-rye' },
	{ name: 'maltedRye', label: 'Malted Rye', icon: 'icon-rye' },
	{ name: 'wheat', label: 'Wheat', icon: 'icon-wheat' }
];

export const TASTING_NOTE_FIELDS = [
	{ name: 'nose', label: 'Nose', icon: 'icon-wind' },
	{ name: 'palate', label: 'Palate', icon: 'icon-wine' },
	{ name: 'finish', label: 'Finish', icon: 'icon-clock-countdown' }
];
