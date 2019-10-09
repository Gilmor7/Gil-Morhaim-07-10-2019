import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { telAviv } from '../services/currentWeather';

import { lightTheme as theme } from '../styles/colors';

import WeatherForecast from './WeatherForecast';

const WeatherDisplay = () => {

    return (
        <Container>
            <Header>
                <HeaderItem>Israel, Tel Aviv</HeaderItem>
                <HeaderItem><i className="fas fa-star" /></HeaderItem>
            </Header>
            <TodayWeather>
                <Temp>{telAviv.Temperature.Metric.Value}°C </Temp>
                <Info>
                    <Moment format='dddd'>
                        {telAviv.LocalObservationDateTime}
                    </Moment>
                    <Moment format='LL'>
                        {telAviv.LocalObservationDateTime}
                    </Moment>
                    <WeatherText>{telAviv.WeatherText}</WeatherText>
                </Info>
            </TodayWeather>
            <WeatherForecast />
        </Container>
    )
}

export default WeatherDisplay;

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
padding: 2rem;
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
margin-bottom: 3rem;
`;

const HeaderItem = styled.span`
font-size: 1.8rem
`;

const TodayWeather = styled.div`
display:flex;
align-items: center;
`;

const Temp = styled.span`
font-size:4.8rem;
margin-right: 2rem;
`;

const Info = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
font-size: 1.4rem;
`;

const WeatherText = styled.span`
font-size:2rem;
`;



