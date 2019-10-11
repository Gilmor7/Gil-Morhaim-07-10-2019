import React from 'react';
import styled from 'styled-components';

import WeatherForecast from './WeatherForecast';
import CurrentCondition from './CurrentCondition';

const WeatherDisplay = () => {

    return (
        <Container>
            <CurrentCondition />
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





