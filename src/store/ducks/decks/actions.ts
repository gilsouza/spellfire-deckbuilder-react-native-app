import { action } from 'typesafe-actions';

import { Deck } from '../deck/types';
import { DecksTypes } from './types';

export const loadRequest = () => action(DecksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Deck[]) => action(DecksTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(DecksTypes.LOAD_FAILURE);
