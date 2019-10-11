import actionTypes from './currentWeather.types';

const initialState = {
    currentCity: null,
    currentCondition: null,
    forecast: null
    // isFetching: null,
    // errMessage: null
};

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload
            }
        case actionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                currentCondition: action.payload
            }
        default:
            return state;
    }
}

export default currentWeatherReducer;