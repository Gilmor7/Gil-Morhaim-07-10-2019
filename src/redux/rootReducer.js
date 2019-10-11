import { combineReducers } from 'redux';

import favoritesReducer from './favorites/favorites.reducer';
import currentWeatherReducer from './currentWeather/currentWeather.reducer';
import citiesReducer from './cities/cities.reducer';

export default combineReducers({
    favorites: favoritesReducer,
    currentWeather: currentWeatherReducer,
    cities: citiesReducer
});