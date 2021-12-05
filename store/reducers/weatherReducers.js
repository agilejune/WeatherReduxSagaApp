import { GET_WEATHER, LOADED, LOADING, SET_ERROR } from '../types';

const initialState = {
    data: null,
    error: '',
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER: 
            return {
                data: action.payload,
                error: '',
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case LOADED:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};