import { Reducer } from 'redux';

import { DecksState, DecksTypes } from './types';

const INITIAL_STATE: DecksState = {
    data: [
        {
            dIndex: 1,
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
            debugger;
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
};

export default reducer;
