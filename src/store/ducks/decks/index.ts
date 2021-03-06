import { Reducer } from 'redux';

import { DecksState, DecksTypes } from './types';

const INITIAL_STATE: DecksState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<DecksState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DecksTypes.FIND_DB_REQUEST:
            return { ...state, loading: true };
        case DecksTypes.FIND_DB_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case DecksTypes.FIND_DB_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
};

export default reducer;
