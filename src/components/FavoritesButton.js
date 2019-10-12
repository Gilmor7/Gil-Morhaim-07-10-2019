import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addFavorite, removeFavorite } from '../redux/favorites/favorites.actions';


const FavoritesButton = ({ isFavorite, city, removeFav, addFav }) => {
    return (
        <Button
            onClick={
                isFavorite ?
                    () => removeFav(city)
                    :
                    () => addFav(city)
            }>

            {
                isFavorite ?
                    <span>Remove <i className="fas fa-star" /></span>
                    :
                    <span>Add <i className="far fa-star" /></span>
            }
        </Button>
    )
}

const mapDispatchToProps = dispatch => ({
    addFav: city => dispatch(addFavorite(city)),
    removeFav: city => dispatch(removeFavorite(city))
})

export default connect(null, mapDispatchToProps)(FavoritesButton);


const Button = styled.div`
cursor: pointer;
`;