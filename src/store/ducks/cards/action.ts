import { action } from 'typesafe-actions';
import { CardsTypes, Card } from './types';

export const loadRequest = () => action(CardsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Card[]) => action(CardsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(CardsTypes.LOAD_FAILURE);
