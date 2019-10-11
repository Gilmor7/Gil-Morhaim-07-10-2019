import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CitySuggestions from './CitySuggestions';
import SearchComponent from './SearchComponent';

const SearchForm = ({ citiesList, showSuggestions }) => {

    return (
        <Form>
            <SearchComponent />
            {
                (citiesList && showSuggestions) ?
                    <CitySuggestions cities={citiesList} />
                    :
                    null
            }
        </Form>
    )
}

const mapStateToProps = state => ({
    citiesList: state.cities.citiesList,
    showSuggestions: state.cities.isSuggestionShown
})

export default connect(mapStateToProps)(SearchForm);

const Form = styled.form`
position:relative;
margin: 5rem 0;
`;
