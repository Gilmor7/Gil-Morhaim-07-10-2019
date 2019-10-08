import React from 'react';
import styled from 'styled-components';

import CitySuggest from './CitySuggest';


const CitySuggestions = ({ cities }) => {
    return (
        <Container>
            {
                cities
                    .filter((city, i) => i < 5)
                    .map(city =>
                        <CitySuggest
                            key={city.Key}
                            city={city.LocalizedName}
                            country={city.Country.LocalizedName} />
                    )
            }

        </Container>
    )
}

export default CitySuggestions;

const Container = styled.div`
position: absolute;
left:0;
right:0;
z-index: 1;
top: calc(100% + 0.5rem);

background-color: white;
border-radius: 5px;

`;
