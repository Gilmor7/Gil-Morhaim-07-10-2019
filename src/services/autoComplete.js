import axios from 'axios';
import { apiKey } from '../keys';

export const getCitiesOptions = async str => {
    try {
        const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${str}`);
        return response.data;
    } catch (err) {
        return err;
    }
}