import { combineReducers } from 'redux';

import cards from './cards';
import deck from './deck';
import decks from './decks';

export default combineReducers({
    decks,
    cards,
    deck,
});
