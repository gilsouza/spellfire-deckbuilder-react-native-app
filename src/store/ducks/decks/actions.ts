import { action } from 'typesafe-actions';

import { Deck } from '../deck/types';
import { DecksTypes } from './types';

export const findDecksRequest = () => action(DecksTypes.FIND_DB_REQUEST);

export const findDecksSuccess = (data: Deck[]) => action(DecksTypes.FIND_DB_SUCCESS, { data });

export const findDecksFailure = () => action(DecksTypes.FIND_DB_FAILURE);
