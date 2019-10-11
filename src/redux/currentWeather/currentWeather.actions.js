import actionTypes from './currentWeather.types';

import { getCurrentWeather } from '../../services/apiCalls';

const setCurrentCity = payload => ({
    type: actionTypes.SET_CURRENT_CITY,
    payload
});

const fetchWeatherSucces = payload => ({
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload
});

const fetchWeatherfailed = payload => ({
    type: actionTypes.FETCH_WEATHER_FAILURE,
    payload
})

export const fetchWeatherAsync = city => {
    return dispatch => {
        dispatch(setCurrentCity(city));
        getCurrentWeather(city.id)
            .then(response => {
                dispatch(fetchWeatherSucces(response.data))
            })
            .catch(err => dispatch(fetchWeatherfailed(err.response)))

    }
}