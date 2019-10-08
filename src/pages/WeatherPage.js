import React from 'react';
import styled from 'styled-components';

import { lightTheme as theme } from '../styles/colors';

import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';

const WeatherPage = () => {
    return (
        <Container>
            <Overlay>
                <PageWrapper>
                    <SearchForm />
                    <WeatherDisplay />
                </PageWrapper>
            </Overlay>
        </Container>
    )
}

export default WeatherPage;

const Container = styled.div`
position:relative;
height: 100vh;
background-image: url('./assets/backImg.jpg');
background-size:cover;
background-position:center;
`;

const Overlay = styled.div`
position:absolute;
top:0;
left:0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0, .4);
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;

const PageWrapper = styled.div`
color: ${theme.textColor};
background-color: ${theme.backColor};
min-height:30rem;
padding: 2rem;
`;
