import React from 'react';
import styled from 'styled-components';

import { lightTheme as theme } from '../styles/colors';

import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';

const WeatherPage = () => {
    return (
        <Container>
            <SearchForm />
            <WeatherDisplay />
        </Container>
    )
}

export default WeatherPage;


const Container = styled.div`
color: ${theme.textColor};
background-color: ${theme.backColor};
width: 90vw;
max-width: 85rem;
display:flex;
flex-direction: column;
align-items:center;
overflow:auto;
margin-bottom: 2rem;
`;
