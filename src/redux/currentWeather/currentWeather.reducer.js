import actionTypes from './currentWeather.types';

const initialState = {
    currentCondition: null,
    forecast: null,
    isFetching: null,
    errMessage: null
};

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default currentWeatherReducer;