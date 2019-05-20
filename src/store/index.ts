import { createStore, Store } from 'redux';
import { CardsState } from './ducks/cards';
import { DecksState } from './ducks/decks';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    cards: CardsState;
    decks: DecksState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
