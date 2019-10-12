import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSuggestionsStatus } from '../redux/cities/cities.actions';
import { fetchCitiesAsync } from '../redux/cities/cities.actions';

//Styles imports
import { theme } from '../styles/colors';



const SearchComponent = ({ fetchCities, closeSuggestions, openSuggestions }) => {

    const onChangeHandle = async (e) => {
        const val = e.target.value;
        if (val.length === 0) {
            closeSuggestions();
        }

        else if (val.length % 1 === 0) {
            openSuggestions();
        }

        if (val.length % 4 === 0) {
            fetchCities(val);
        }

    }

    return (
        <Search>
            <Input
                onChange={onChangeHandle}
                pattern="[A-Za-z]"
                title="Only english letters are allowed"
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




