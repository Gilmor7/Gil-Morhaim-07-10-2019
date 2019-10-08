import React from 'react';
import styled from 'styled-components';

import { telAviv } from '../services/currentWeather';

import { lightTheme as theme } from '../styles/colors';

const WeatherDisplay = () => {

    return (
        <Container>
            <Header>
                <div>
                    <City>Tel Aviv</City>
                    <Temp>{telAviv.Temperature.Metric.Value} C</Temp>
                </div>
                <div><I className="fas fa-star" /></div>
            </Header>
        </Container>
    )
}

export default WeatherDisplay;

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
`;

const City = styled.span`
display:block;
font-size: 1.8rem
`;

const Temp = styled.span`
display:block;
font-size: 2rem;
`;

const I = styled.i`
font-size: 2.5rem;
`;

