import { action } from 'typesafe-actions';
import { Reducer } from 'redux';

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
    bonus: string;
    type: string;
    world: string;
    title: string;
    text: string;
    frequency: string;
    blueline: string;
    aIndex: number;
    uIndex: number;
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

/** actions */
export const loadRequest = () => action(CardsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Card[]) => action(CardsTypes.LOAD_SUCCESS, data);
export const loadFailure = () => action(CardsTypes.LOAD_FAILURE);

const INITIAL_STATE: CardsState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<CardsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CardsTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case CardsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case CardsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
};

export default reducer;
