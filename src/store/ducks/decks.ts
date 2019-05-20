import { action } from 'typesafe-actions';
import { Reducer } from 'redux';
import { Card } from './cards';

/**
 * Actions Types
 *
 * @export
 * @enum {number}
 */
export enum DecksTypes {
    LOAD_REQUEST = '@decks/LOAD_REQUEST',
    LOAD_SUCCESS = '@decks/LOAD_SUCCESS',
    LOAD_FAILURE = '@decks/LOAD_FAILURE',
}

/**
 * Data type in State
 *
 * @export
 * @interface Deck
 */
export interface Deck {
    cIndex: number;
    name: string;
    description: string;
    image: string;
    cards: Card[];
}

/**
 * State type in Reducer
 *
 * @export
 * @interface DecksState
 */
export interface DecksState {
    readonly data: Deck[];
    readonly loading: boolean;
    readonly error: boolean;
}

/** actions */
export const loadRequestAction = () => action(DecksTypes.LOAD_REQUEST);
export const loadSuccessAction = (data: Deck[]) => action(DecksTypes.LOAD_SUCCESS, data);
export const loadFailureAction = () => action(DecksTypes.LOAD_FAILURE);

const INITIAL_STATE: DecksState = {
    data: [
        {
            cIndex: 1,
            name: '',
            description: '',
            image: '',
            cards: [],
        },
    ],
    error: false,
    loading: false,
};

const reducer: Reducer<DecksState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DecksTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case DecksTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case DecksTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
};

export default reducer;
