import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchWeatherAndForecast } from '../redux/currentWeather/currentWeather.actions';
import { setSuggestionsStatus } from '../redux/cities/cities.actions';

import CitySuggestions from './CitySuggestions';
import SearchComponent from './SearchComponent';

const SearchForm = ({ citiesList, showSuggestions, closeSuggestions, getLocationWeather }) => {

    const [inputErr, setInputErr] = useState(false);
    const formRef = useRef();


    const on_submit = e => {
        e.preventDefault()
        if (!inputErr) {
            setInputErr(null);
            closeSuggestions();

            const [cityInfo] = citiesList;
            if (cityInfo) {
                const city = {
                    cityName: cityInfo.LocalizedName,
                    id: cityInfo.Key
                }
                getLocationWeather(city);
            }
            else setInputErr('No city Found');
        }
        e.target.reset() // reset form 
    }

    return (
        <Form ref={formRef} onSubmit={on_submit}>
            <SearchComponent setInputErr={setInputErr} />
            {inputErr && <Message> {inputErr} </Message>}
            {
                (citiesList && showSuggestions) ?
                    <CitySuggestions
                        formRef={formRef}
                        cities={citiesList} />
                    :
                    null
            }
        </Form>
    )
}

const mapStateToProps = state => ({
    citiesList: state.cities.citiesList,
    showSuggestions: state.cities.isSuggestionShown
});

const mapDispatchToProps = dispatch => ({
    closeSuggestions: () => dispatch(setSuggestionsStatus(false)),
    getLocationWeather: city => dispatch(fetchWeatherAndForecast(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

const Form = styled.form`
position:relative;
margin: 5rem 0;
`;

const Message = styled.div`
color: red;
font-size: 1.2rem;
margin-top: 0.5rem;
`;
