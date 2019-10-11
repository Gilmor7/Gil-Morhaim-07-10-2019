import actionTypes from './currentWeather.types';

import { getCurrentWeather, getForecast } from '../../services/apiCalls';

const setCurrentCity = payload => ({
    type: actionTypes.SET_CURRENT_CITY,
    payload
});

const setIsFetching = payload => ({
    type: actionTypes.SET_IS_FETCHING,
    payload
});

const fetchWeatherSucces = payload => ({
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload
});

const fetchWeatherfailed = payload => ({
    type: actionTypes.FETCH_WEATHER_FAILURE,
    payload
});

const fetchForecastSucces = payload => ({
    type: actionTypes.FETCH_FORECAST_SUCCESS,
    payload
});

const fetchForecastfailed = payload => ({
    type: actionTypes.FETCH_FORECAST_FAILURE,
    payload
});

const fetchWeatherAsync = cityKey => {
    return dispatch => {

        getCurrentWeather(cityKey)
            .then(response => {
                dispatch(fetchWeatherSucces(response.data))
            })
            .catch(err => dispatch(fetchWeatherfailed(err.response)))

    }
}

const fetchForecastAsync = cityKey => {
    return dispatch => {

        getForecast(cityKey)
            .then(response => {
                dispatch(fetchForecastSucces(response.data.DailyForecasts))
            })
            .catch(err => dispatch(fetchForecastfailed(err.response)))

    }
}

export const fetchWeatherAndForecast = city => {
    return dispatch => {
        dispatch(setCurrentCity(city));
        dispatch(setIsFetching(true));

        Promise.all([
            dispatch(fetchWeatherAsync(city.id)),
            dispatch(fetchForecastAsync(city.id))
        ])
            .then(response => dispatch(setIsFetching(false)));

    }
}