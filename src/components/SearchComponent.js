import React from 'react';
import styled from 'styled-components';

//Styles imports
import { lightTheme as theme } from '../styles/colors';

//Util functions and services
import { getCitiesOptions } from '../services/autoComplete';


const SearchComponent = ({ setOptions }) => {

    const onChangeHandle = async (e, setOptions) => {
        const val = e.target.value;

        if (val.length === 0) setOptions(null);
        else if (val.length % 4 === 0) {
            const options = await getCitiesOptions(val);
            setOptions(options);
        }

    }

    return (
        <Search>
            <Input
                onChange={e => onChangeHandle(e, setOptions)}
                type='text'
                autoComplete='off'
                name='search'
                placeholder='Show me weather in...' />
            <Icon><i className="fas fa-search" /></Icon>
        </Search>
    )
}

export default SearchComponent;

const Search = styled.div`
display:flex;
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
width:25rem;
color: white;
font-size: 1.8rem;

&:focus {
    outline:none;
}

&:focus ~ ${Icon} {
 color: ${theme.darkerBlack};
}
`;




