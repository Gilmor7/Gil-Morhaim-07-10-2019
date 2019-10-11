import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSuggestionsStatus } from '../redux/cities/cities.actions';
import { fetchWeatherAndForecast } from '../redux/currentWeather/currentWeather.actions';

const CitySuggest = ({ city, country, id, getLocationWeather, closeSuggestions }) => {
    return (
        <Row
            onClick={() => {
                getLocationWeather({
                    id,
                    cityName: city
                });
                closeSuggestions();
            }}>
            <i className="fas fa-map-marked-alt" />
            <Info>{city},{' '}{country}</Info>
        </Row>
    )
}

const mapDispatchToProps = dispatch => ({
    getLocationWeather: city => dispatch(fetchWeatherAndForecast(city)),
    closeSuggestions: () => dispatch(setSuggestionsStatus(false))
});

export default connect(null, mapDispatchToProps)(CitySuggest);

const Row = styled.div`
height: 4rem;
padding: 1rem;
font-size: 1.1rem;
display:flex;
align-items:center;
cursor:pointer;

&:not(:last-child){
    border-bottom: 1px solid black;
}

&:hover{
    background-color:rgba(255,255,0, 0.2);
}

`;

const Info = styled.span`
margin-left: 1rem;
`;
