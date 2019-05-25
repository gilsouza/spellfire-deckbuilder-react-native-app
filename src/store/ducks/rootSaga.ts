import { all, takeLatest } from 'redux-saga/effects';

import { DecksTypes } from './decks/types';
import { findDecks } from './decks/sagas';

export default function* rootSaga() {
    return yield all([takeLatest(DecksTypes.FIND_DB_REQUEST, findDecks)]);
}
