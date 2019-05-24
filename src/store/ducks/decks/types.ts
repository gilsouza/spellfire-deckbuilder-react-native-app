import { Deck } from '../deck/types';

/**
 * Actions Types
 *
 * @export
 * @enum {number}
 */
export enum DecksTypes {
    LOAD_REQUEST = '@deck/LOAD_REQUEST',
    LOAD_SUCCESS = '@deck/LOAD_SUCCESS',
    LOAD_FAILURE = '@deck/LOAD_FAILURE',
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
