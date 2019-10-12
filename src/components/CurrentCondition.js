import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { connect } from 'react-redux';


import FavoritesButton from './FavoritesButton';


const CurrentCondition = ({ city, currentCityCondition, favorites, fetchErr }) => {

    let content;
    if (fetchErr) {
        content = <div> Something went wrong... </div>;
    }
    else if (currentCityCondition) {

        const { Temperature, LocalObservationDateTime, WeatherText: status } = currentCityCondition[0];

        content = (
            <React.Fragment>
                <Header>
                    <span>{city.cityName}</span>
                    <FavoritesButton
                        isFavorite={favorites.some(fav => fav.id === city.id)}
                        city={city}
                    />
                </Header>
                <TodayWeather>
                    <Temp>{Temperature.Metric.Value}°C </Temp>
                    <Info>
                        <Moment format='dddd'>
                            {LocalObservationDateTime}
                        </Moment>
                        <Moment format='LL'>
                            {LocalObservationDateTime}
                        </Moment>
                        <WeatherText> {status} </WeatherText>
                    </Info>
                </TodayWeather>
            </React.Fragment>
        )
    }
    else content = <div>Loading...</div>;

    return content;
}


const mapStateToProps = state => ({
    city: state.currentWeather.currentCity,
    currentCityCondition: state.currentWeather.currentCondition,
    fetchErr: state.currentWeather.fetchErr,
    favorites: state.favorites.favesList

});



export default connect(mapStateToProps)(CurrentCondition);

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
margin-bottom: 3rem;
font-size: 1.8rem
`;


const TodayWeather = styled.div`
display:flex;
align-items: center;
`;

const Temp = styled.span`
font-size:4.8rem;
margin-right: 2rem;
`;

const Info = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
font-size: 1.4rem;
`;

const WeatherText = styled.span`
font-size:2rem;
`;
