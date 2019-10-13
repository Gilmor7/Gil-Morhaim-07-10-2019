import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchFavoritesWeatherAsync } from '../redux/favorites/favorites.actions';

import { theme } from '../styles/colors';

import FavoriteDisplay from '../components/FavoriteDisplay';


const FavoritesPage = ({ favoritesList, favesWeather, getFavesWeather, fetchErr }) => {

    // get the updated weather on favorites cities
    useEffect(() => {
        if (favoritesList.length > 0) {
            getFavesWeather(favoritesList);
        }
    }, []);


    let content;
    if (favoritesList.length === 0) {
        content = <Message>You Don't have favorites yet</Message>
    }
    else if (fetchErr) {
        content = content = <Message>Sorry, something went wrong...</Message>
    }
    else if (favesWeather.length > 0) {
        content = favesWeather.map((fav, idx) =>
            <FavoriteDisplay
                city={favoritesList[idx]}
                key={fav.EpochTime}
                {...fav} />)
    }
    else content = <Message>Loading...</Message>

    return (
        <Container>
            <Title>Favorites</Title>
            <FavesContainer>
                {content}
            </FavesContainer>
        </Container>
    )
}

const mapStateToProps = state => ({
    favoritesList: state.favorites.favesList,
    favesWeather: state.favorites.favesWeather,
    fetchErr: state.favorites.fetchErr
});

const mapDispatchToProps = disptach => ({
    getFavesWeather: favesList => disptach(fetchFavoritesWeatherAsync(favesList))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

const Container = styled.div`
color: ${theme.textColor};
background-color: ${theme.backColor};
width: 90vw;
max-width: 85rem;
min-height: 70vh;
margin-bottom: 2rem;
text-align:center;
overflow:auto;
`;

const FavesContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;
align-items:center;

`;

const Message = styled.span`
font-size:2rem;
`;

const Title = styled.h1`
margin: 2rem 0;
`;