export {
    getAllWorkSlugs,
    getPublishedWorks,
    getWorkBySlug
} from './work';

export {
    getAllTilSlugs,
    getPublishedTils,
    getTilBySlug
} from './posts';

export {
    getAllDecks,
    getAllDeckSlidePaths,
    getDeck,
    getFirstSlideId,
    getSlideNavigation
} from './slides';
export type { Deck, SlideMetadata, SlideNavigation } from './slides';
