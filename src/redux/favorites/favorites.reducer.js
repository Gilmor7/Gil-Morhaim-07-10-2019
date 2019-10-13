import actionTypes from './favotites.types';

const initialState = {
    favesList: [],
    favesWeather: [],
    fetchErr: null

};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            return {
                ...state,
                favesList: [...state.favesList, action.payload]
            }
        case actionTypes.REMOVE_FAVORITE:
            return {
                ...state,
                favesList: state.favesList
                    .filter(fav => fav.id !== action.payload.id)
            }
        case actionTypes.FETCH_FAVORITES_WEATHER_SUCCESS:
            return {
                ...state,
                favesWeather: action.payload
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

export default favoritesReducer;