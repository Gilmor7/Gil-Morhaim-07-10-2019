import axios from 'axios';
import { apiKey } from '../keys';

export const getCitiesOptions = str => {
    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${str}`);
}

export const getCurrentWeather = cityKey => {
    return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`);
}