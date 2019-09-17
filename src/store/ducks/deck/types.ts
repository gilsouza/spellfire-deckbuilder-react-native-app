import { Card } from '../cards/types';

/**
 * Actions Types
 *
 * @export
 * @enum {number}
 */
export enum DeckTypes {
    SAVE_REQUEST = '@deck/SAVE_REQUEST',
    SAVE_SUCCESS = '@deck/SAVE_SUCCESS',
    SAVE_FAILURE = '@deck/SAVE_FAILURE',
}

/**
 * Data type in State
 *
 * @export
 * @interface Deck
 */
export interface Deck {
    dIndex: number | null;
    name: string;
    description: string | null;
    image: string | null;
    cards: Card[];
}

/**
 * State type in Reducer
 *
 * @export
 * @interface DeckState
 */
export interface DeckState {
    readonly data: Deck;
    readonly loading: boolean;
    readonly error: boolean;
}
