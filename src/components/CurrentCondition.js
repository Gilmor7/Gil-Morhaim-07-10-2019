import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CurrentCondition = ({ city, currentCityCondition }) => {

    let content;
    if (currentCityCondition) {
        const { Temperature, LocalObservationDateTime, WeatherText: status } = currentCityCondition[0];

        content = (
            <React.Fragment>
                <Header>
                    <HeaderItem>{city.cityName}</HeaderItem>
                    <HeaderItem><i className="fas fa-star" /></HeaderItem>
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
    } else {
        content = <div> wait... </div>
    }

    return content;
}


const mapStateToProps = state => ({
    city: state.currentWeather.currentCity,
    currentCityCondition: state.currentWeather.currentCondition,
    currentConditionErr: state.currentWeather.currentConditionErr

})

export default connect(mapStateToProps)(CurrentCondition);

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
margin-bottom: 3rem;
`;

const HeaderItem = styled.span`
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
