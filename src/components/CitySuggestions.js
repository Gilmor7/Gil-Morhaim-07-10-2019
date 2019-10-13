import React from 'react';
import styled from 'styled-components';

import CitySuggest from './CitySuggest';

// auto suggestions component (on search)
const CitySuggestions = ({ cities, formRef }) => {
    return (
        <Container>
            {
                cities
                    .filter((city, i) => i < 5) // display only 5 options
                    .map(city =>
                        <CitySuggest
                            key={city.Key}
                            id={city.Key}
                            city={city.LocalizedName}
                            country={city.Country.LocalizedName}
                            formRef={formRef} />
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
color:black;
background-color: white;
border-radius: 5px;

`;
