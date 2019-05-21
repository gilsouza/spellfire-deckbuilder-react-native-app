import { Reducer } from 'redux';
import { CardsState, CardsTypes } from './types';

const INITIAL_STATE: CardsState = {
    data: [
        {
            cIndex: 1,
            collection: '',
            number: 1,
            bonus: '',
            type: '',
            world: '',
            title: 'lalala',
            text: '',
            frequency: '',
            blueline: '',
            aIndex: 1,
            uIndex: 1,
        },
    ],
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
