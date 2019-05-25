import { call, put } from 'redux-saga/effects';

import DBClient from '~/repository/dbClient';

import { Decks } from '~/repository/entities/decks';

import { findDecksSuccess, findDecksFailure } from './actions';

export function* findDecks() {
    try {
        const connection = yield DBClient.createConnection();
        const decks = yield call([Decks, 'find']);

        yield put(findDecksSuccess(decks));
    } catch (err) {
        yield put(findDecksFailure());
    }
}
