import React from 'react';
import styled from 'styled-components';

const SearchComponent = () => {

    const on_submit = e => {
        e.preventDefault();


    }

    return (
        <SearchForm onSubmit={on_submit}>
            <Search>
                <Input type='text' autoComplete='off' name='search' placeholder='Show me weather in...' />
                <Icon onClick={on_submit}><i className="fas fa-search" /></Icon>
            </Search>
        </SearchForm>
    )
}

export default SearchComponent;

const SearchForm = styled.form`
position: relative;
`;

const Search = styled.div`
display:flex;
background-color: rgba(255,255,255, 0.4);
box-shadow: 0 5px 8px rgba(0,0,0, 0.2);
`;

const Icon = styled.div`
font-size:1.8rem;
color: rgba(0,0,0,0.4);
padding:0 1.2rem;
display:flex;
align-items:center;
cursor:pointer;
`;

const Input = styled.input`
border:none;
background-color:transparent;
padding: 1.5rem .5rem 1.5rem 1rem;
width:25rem;
color: white;
font-size: 1.8rem;

&:focus {
    outline:none;
}

&:focus ~ ${Icon} {
 color: rgba(0,0,0,0.7);
}
`;




