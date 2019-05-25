import { all, takeLatest } from 'redux-saga/effects';

import { DecksTypes } from './decks/types';
import { load } from './decks/sagas';

export default function* rootSaga() {
    return yield all([takeLatest(DecksTypes.LOAD_REQUEST, load)]);
}
