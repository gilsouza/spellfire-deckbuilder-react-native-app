import { action } from 'typesafe-actions';

import { Deck, DeckTypes } from './types';

//TODO: Passar argumento
export const saveRequest = () => action(DeckTypes.SAVE_REQUEST);

//TODO: necessáriio argumento!?
export const saveSuccess = (data: Deck) => action(DeckTypes.SAVE_SUCCESS, data);

export const saveFailure = () => action(DeckTypes.SAVE_FAILURE);
