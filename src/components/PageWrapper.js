import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const PageWrapper = ({ children }) => {
    return (
        <Background>
            <Overlay>
                <NavBar />
                {children}
            </Overlay>
        </Background>
    )
}

export default PageWrapper

const Background = styled.div`
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
justify-content:flex-start;
align-items:center;

`;