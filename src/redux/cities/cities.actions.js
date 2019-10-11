import actionTypes from './cities.types';

import { getCitiesOptions } from '../../services/apiCalls';

export const setSuggestionsStatus = payload => ({
    type: actionTypes.SET_SUGGESTION_IS_SHOWN,
    payload
})


const setCities = payload => ({
    type: actionTypes.SET_CITIES,
    payload
})

export const fetchCitiesAsync = str => {
    return dispatch => {

        if (str.length === 0) dispatch(setCities(null))

        else getCitiesOptions(str)
            .then(response => {
                //get the auto complete cities list and save them in state
                dispatch(setCities(response.data));
            })
            .catch(err => {
                //set cities to empty object
                dispatch(setCities(null));
            })

    }

}
