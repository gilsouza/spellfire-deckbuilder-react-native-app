import { createStore, Store } from 'redux';

import { CardsState } from './ducks/cards/types';
import { DeckState } from './ducks/deck/types';
import { DecksState } from './ducks/decks/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    cards: CardsState;
    decks: DecksState;
    deck: DeckState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
