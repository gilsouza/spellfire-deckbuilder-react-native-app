import { Deck } from '../deck/types';

/**
 * Actions Types
 *
 * @export
 * @enum {number}
 */
export enum DecksTypes {
    FIND_DB_REQUEST = '@decks/FIND_DB_REQUEST',
    FIND_DB_SUCCESS = '@decks/FIND_DB_SUCCESS',
    FIND_DB_FAILURE = '@decks/FIND_DB_FAILURE',
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
