import { call, put } from 'redux-saga/effects';

import DBClient from '~/repository/dbClient';

import { Decks } from '~/repository/entities/decks';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
    try {
        const connection = yield DBClient.createConnection();
        const decks = yield call([Decks, 'find']);

        yield put(loadSuccess(decks));
    } catch (err) {
        yield put(loadFailure());
    }
}
