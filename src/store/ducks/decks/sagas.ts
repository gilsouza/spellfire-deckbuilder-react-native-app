import { call, put } from 'redux-saga/effects';

import DBClient from '~/repository/dbClient';

import { Decks } from '~/repository/entities/decks';

import { findDecksSuccess, findDecksFailure } from './actions';
import DeckService from '~/servcies/DeckService';

export function* findDecks() {
    try {
        // const connection = yield DBClient.createConnection();
        // const decks = yield call([Decks, 'find']);

        const deckService = new DeckService();
        const decks = yield call([deckService, 'findAll']);

        yield put(findDecksSuccess(decks));
    } catch (err) {
        yield put(findDecksFailure());
    }
}
