import React from 'react';
import styled from 'styled-components';

const CitySuggest = ({ city, country }) => {
    return (
        <Row>
            <i className="fas fa-map-marked-alt" />
            <Info>{city},{' '}{country}</Info>
        </Row>
    )
}

export default CitySuggest;

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
