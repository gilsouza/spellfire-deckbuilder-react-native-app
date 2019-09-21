import { call, put } from 'redux-saga/effects';

import { findDecksSuccess, findDecksFailure } from './actions';

import DeckService from '~/services/DeckService';

export function* findDecks() {
    try {
        const deckService = new DeckService();
        const decks = yield call([deckService, 'findAll']);

        yield put(findDecksSuccess(decks));
    } catch (err) {
        yield put(findDecksFailure());
    }
}
