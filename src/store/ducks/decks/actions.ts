import { action } from 'typesafe-actions';
import { DecksTypes, Deck } from './types';

export const loadRequest = () => action(DecksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Deck[]) => action(DecksTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(DecksTypes.LOAD_FAILURE);
