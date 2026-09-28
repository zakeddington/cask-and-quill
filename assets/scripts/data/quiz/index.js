import { LEXICON_DISTILLATION_QUESTIONS } from './lexicon-distillation.js';
import { LEXICON_FERMENTATION_CHEMISTRY_QUESTIONS } from './lexicon-fermentation-chemistry.js';
import { LEXICON_INGREDIENTS_GRAIN_QUESTIONS } from './lexicon-ingredients-grain.js';
import { LEXICON_MALTING_MASHING_QUESTIONS } from './lexicon-malting-mashing.js';
import { LEXICON_MATURATION_WOOD_QUESTIONS } from './lexicon-maturation-wood.js';
import { LEXICON_MEASUREMENTS_LABELING_QUESTIONS } from './lexicon-measurements-labeling.js';
import { LEXICON_PEOPLE_PRODUCERS_QUESTIONS } from './lexicon-people-producers.js';
import { LEXICON_REGIONS_TERROIR_QUESTIONS } from './lexicon-regions-terroir.js';
import { LEXICON_STYLES_REGULATIONS_QUESTIONS } from './lexicon-styles-regulations.js';
import { LEXICON_TASTING_SERVICE_QUESTIONS } from './lexicon-tasting-service.js';
import { REGIONS_SCOTLAND_QUESTIONS } from './regions-scotland.js';
import { REGIONS_IRELAND_QUESTIONS } from './regions-ireland.js';
import { REGIONS_USA_QUESTIONS } from './regions-usa.js';
import { REGIONS_JAPAN_QUESTIONS } from './regions-japan.js';
import { REGIONS_CANADA_QUESTIONS } from './regions-canada.js';
import { REGIONS_INDIA_QUESTIONS } from './regions-india.js';
import { REGIONS_TAIWAN_QUESTIONS } from './regions-taiwan.js';
import { REGIONS_AUSTRALIA_QUESTIONS } from './regions-australia.js';
import { REGIONS_NEW_ZEALAND_QUESTIONS } from './regions-new-zealand.js';
import { REGIONS_EUROPEAN_UNION_QUESTIONS } from './regions-european-union.js';
import { REGIONS_DENMARK_QUESTIONS } from './regions-denmark.js';

export { QUIZ_CATEGORIES, QUIZ_DIFFICULTIES, QUIZ_SOURCES, QUIZ_REGION_TOPICS } from './quiz-constants.js';

// Quiz data, one file per lexicon category and region
// `answer` must exactly match one entry in `options`, so options can be shuffled freely.
// `sourceId` references a LEXICON_TERMS id (source: 'lexicon') or a REGIONS_DATA id (source: 'regions').
// `topic` (region questions only) is the Regions page section the question draws on: legal, varieties, or sub-regions.
export const QUIZ_QUESTIONS = [
	...LEXICON_DISTILLATION_QUESTIONS,
	...LEXICON_FERMENTATION_CHEMISTRY_QUESTIONS,
	...LEXICON_INGREDIENTS_GRAIN_QUESTIONS,
	...LEXICON_MALTING_MASHING_QUESTIONS,
	...LEXICON_MATURATION_WOOD_QUESTIONS,
	...LEXICON_MEASUREMENTS_LABELING_QUESTIONS,
	...LEXICON_PEOPLE_PRODUCERS_QUESTIONS,
	...LEXICON_REGIONS_TERROIR_QUESTIONS,
	...LEXICON_STYLES_REGULATIONS_QUESTIONS,
	...LEXICON_TASTING_SERVICE_QUESTIONS,
	...REGIONS_SCOTLAND_QUESTIONS,
	...REGIONS_IRELAND_QUESTIONS,
	...REGIONS_USA_QUESTIONS,
	...REGIONS_JAPAN_QUESTIONS,
	...REGIONS_CANADA_QUESTIONS,
	...REGIONS_INDIA_QUESTIONS,
	...REGIONS_TAIWAN_QUESTIONS,
	...REGIONS_AUSTRALIA_QUESTIONS,
	...REGIONS_NEW_ZEALAND_QUESTIONS,
	...REGIONS_EUROPEAN_UNION_QUESTIONS,
	...REGIONS_DENMARK_QUESTIONS,
];
