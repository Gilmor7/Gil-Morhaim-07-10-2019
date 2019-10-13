import React from 'react';
import styled from 'styled-components';

import { theme } from '../styles/colors';

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
min-height: 70vh;
display:flex;
flex-direction: column;
align-items:center;
overflow:auto;
margin-bottom: 2rem;
`;
