/**
 * Actions Types
 *
 * @export
 * @enum {number}
 */
export enum CardsTypes {
    LOAD_REQUEST = '@cards/LOAD_REQUEST',
    LOAD_SUCCESS = '@cards/LOAD_SUCCESS',
    LOAD_FAILURE = '@cards/LOAD_FAILURE',
}

/**
 * Data type in State
 *
 * @export
 * @interface Card
 */
export interface Card {
    cIndex: number;
    collection: string;
    number: number;
    bonus: string | null;
    type: string;
    world: string;
    title: string;
    text: string | null;
    frequency: string;
    blueline: string | null;
    aIndex: number | null;
    uIndex: number | null;
}

/**
 * State type in Reducer
 *
 * @export
 * @interface CardsState
 */
export interface CardsState {
    readonly data: Card[];
    readonly loading: boolean;
    readonly error: boolean;
}
