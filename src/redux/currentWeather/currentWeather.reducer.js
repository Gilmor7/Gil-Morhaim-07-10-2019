import actionTypes from './currentWeather.types';

const initialState = {
    currentCity: null,
    currentCondition: null,
    forecast: null,
    fetchErr: null,
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

        case actionTypes.FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.payload,
            }

        case actionTypes.SET_FETCH_ERR:
            return {
                ...state,
                fetchErr: action.payload
            }

        default:
            return state;
    }
}

export default currentWeatherReducer;