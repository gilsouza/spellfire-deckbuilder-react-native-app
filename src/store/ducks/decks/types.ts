import { Deck } from '../deck/types';

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
