import { createStore, Store } from 'redux';
import { CardsState } from './ducks/cards';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    cards: CardsState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
