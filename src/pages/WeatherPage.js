import React from 'react';
import styled from 'styled-components';

import SearchComponent from '../components/SearchComponent';

const WeatherPage = () => {
    return (
        <Container>
            <Overlay>
                <SearchComponent />

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
justify-content:center;
align-items:center;
`;
