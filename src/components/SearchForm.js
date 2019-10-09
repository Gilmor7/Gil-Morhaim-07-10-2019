import React, { useState } from 'react';
import styled from 'styled-components';

import CitySuggestions from './CitySuggestions';
import SearchComponent from './SearchComponent';

const SearchForm = () => {

    const [cityOptions, setCitiyOptions] = useState(null);

    return (
        <Form>
            <SearchComponent setOptions={setCitiyOptions} />
            {
                (cityOptions && cityOptions.length > 0) ?
                    <CitySuggestions cities={cityOptions} />
                    :
                    null
            }
        </Form>
    )
}

export default SearchForm;

const Form = styled.form`
position:relative;
margin: 5rem 0;
`;
