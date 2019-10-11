import actionTypes from './cities.types';

const initialState = {
    citiesList: null,
    isSuggestionShown: false

};

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CITIES:
            return {
                ...state,
                citiesList: action.payload
            }
        case actionTypes.SET_SUGGESTION_IS_SHOWN:
            return {
                ...state,
                isSuggestionShown: action.payload
            }
        default:
            return state;
    }
}

export default citiesReducer;