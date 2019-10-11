import actionTypes from './currentWeather.types';

import { getCurrentWeather, getForecast } from '../../services/apiCalls';

const setCurrentCity = payload => ({
    type: actionTypes.SET_CURRENT_CITY,
    payload
});


const fetchWeatherSucces = payload => ({
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload
});


const fetchForecastSucces = payload => ({
    type: actionTypes.FETCH_FORECAST_SUCCESS,
    payload
});

const setfetchErr = payload => ({
    type: actionTypes.SET_FETCH_ERR,
    payload
});


export const fetchWeatherAndForecast = city => {
    return dispatch => {
        dispatch(setCurrentCity(city));

        Promise.all([
            getCurrentWeather(city.id),
            getForecast(city.id)
        ]).then(responses => {
            dispatch(setfetchErr(null));
            dispatch(fetchWeatherSucces(responses[0].data))
            dispatch(fetchForecastSucces(responses[1].data.DailyForecasts))
        })
            .catch(err => dispatch(setfetchErr('something went wrong')));

    }
}



