import { Reducer } from 'redux';

import { DeckState, DeckTypes } from './types';

const INITIAL_STATE: DeckState = {
    data: {
        dIndex: null,
        name: '',
        description: '',
        image: '',
        cards: [],
    },
    error: false,
    loading: false,
};

const reducer: Reducer<DeckState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DeckTypes.SAVE_REQUEST:
            return { ...state, loading: true };
        case DeckTypes.SAVE_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case DeckTypes.SAVE_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default reducer;
