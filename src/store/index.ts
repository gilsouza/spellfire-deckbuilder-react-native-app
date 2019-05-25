import { createStore, Store, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { CardsState } from './ducks/cards/types';
import { DeckState } from './ducks/deck/types';
import { DecksState } from './ducks/decks/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    cards: CardsState;
    decks: DecksState;
    deck: DeckState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
