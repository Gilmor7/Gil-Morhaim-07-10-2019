import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchWeatherAndForecast } from '../redux/currentWeather/currentWeather.actions';


const FavoriteDisplay = ({ getLocationWeather, city, Temperature, WeatherText, history }) => {

    const clickHandle = () => {
        getLocationWeather(city);
        history.push('/');
    }

    return (
        <Card>
            <CardItem>{city.cityName}</CardItem>
            <CardItem>{Temperature.Metric.Value}°C</CardItem>
            <CardItem>{WeatherText}</CardItem>
            <CallToAction
                onClick={clickHandle}
            >For more information</CallToAction>
        </Card>
    )
}

const mapDispatchToProps = dispatch => ({
    getLocationWeather: city => dispatch(fetchWeatherAndForecast(city)),
});

export default withRouter(connect(null, mapDispatchToProps)(FavoriteDisplay));

const Card = styled.div`
width: 20rem;
height:15rem;
border-radius:0.5rem;
background-color: rgba(0,0,0, .5);
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const CardItem = styled.span`
font-size: 1.8rem;

&:not(:last-child){
    margin-bottom: 1rem;
}

&:last-child {
    font-size:2rem;
}
`;

const CallToAction = styled.div`
font-size:1.4rem;
text-decoration:underline;
cursor:pointer;
`;