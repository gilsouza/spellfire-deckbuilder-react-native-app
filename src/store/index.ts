import { createStore, Store } from 'redux';

import rootReducer from './ducks/rootReducer';
import { CardsState } from './ducks/cards/types';
import { DecksState } from './ducks/decks/types';

export interface ApplicationState {
    cards: CardsState;
    decks: DecksState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
