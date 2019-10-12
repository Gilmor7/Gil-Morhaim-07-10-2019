import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSuggestionsStatus } from '../redux/cities/cities.actions';
import { fetchCitiesAsync } from '../redux/cities/cities.actions';

//Styles imports
import { theme } from '../styles/colors';



const SearchComponent = ({ fetchCities, openSuggestions, setInputErr, closeSuggestions }) => {

    const onChangeHandle = async (e) => {
        const input = e.target;
        const regex = /[A-Za-z]/;

        if (input.value.length > 0) {
            openSuggestions();
        }
        else closeSuggestions();

        if (!regex.test(input.value)) {
            if (input.value.length !== 0) {
                setInputErr('*Only english letters allowed');
            }
            else {
                setInputErr(null);
            }
            return;
        }
        fetchCities(input.value);

    }

    return (
        <Search>
            <Input
                onChange={onChangeHandle}
                onFocus={openSuggestions}
                onBlur={() => {
                    setInputErr(null);
                }}
                type='text'
                autoComplete='off'
                name='search'
                placeholder='Show me weather in...' />
            <Icon><i className="fas fa-search" /></Icon>
        </Search>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCities: str => dispatch(fetchCitiesAsync(str)),
    openSuggestions: () => dispatch(setSuggestionsStatus(true)),
    closeSuggestions: () => dispatch(setSuggestionsStatus(false))

})

export default connect(null, mapDispatchToProps)(SearchComponent);

const Search = styled.div`
display:flex;
width:25rem;
background-color: transparent;
padding: 0 .5rem;
border-bottom: 2px solid ${theme.lightBlack};
`;

const Icon = styled.div`
font-size:1.8rem;
color: ${theme.lightBlack};
padding:1rem;
display:flex;
align-items:center;
cursor:pointer;
`;

const Input = styled.input`
border:none;
background-color:transparent;
color: white;
font-size: 1.8rem;

&::placeholder{
    color: ${theme.lightBlack};
}

&:focus::placeholder{
    color: ${theme.darkerBlack};
}

&:focus {
    outline:none;
}

&:focus ~ ${Icon} {
 color: ${theme.darkerBlack};
}
`;




