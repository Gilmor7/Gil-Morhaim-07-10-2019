import actionTypes from './currentWeather.types';

const initialState = {
    currentCity: null,
    currentCondition: null,
    forecast: null,
    isFetching: null,
    currentConditionErr: null,
    forecastErr: null
};

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload
            }
        case actionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case actionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                currentCondition: action.payload
            }
        case actionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                currentConditionErr: action.payload
            }
        case actionTypes.FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.payload,
                forecastErr: null
            }
        case actionTypes.FETCH_FORECAST_FAILURE:
            return {
                ...state,
                forecast: null,
                forecastErr: action.payload
            }

        default:
            return state;
    }
}

export default currentWeatherReducer;