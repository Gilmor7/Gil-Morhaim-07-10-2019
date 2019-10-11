import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DailyWeather from './DailyWeather';

const WeatherForecast = ({ dailyForcasts }) => {

    let content;

    if (dailyForcasts) {
        content =
            dailyForcasts.map(item =>
                <DailyWeather
                    key={item.EpochDate}
                    {...item} />
            )
    } else {
        content = <div>wait...</div>
    }

    return (
        <Container>
            {content}
        </Container>
    )
}

const mapStateToProps = state => ({
    dailyForcasts: state.currentWeather.forecast,
    forecastErr: state.currentWeather.forecastErr
});

export default connect(mapStateToProps)(WeatherForecast);

const Container = styled.div`
align-self:center;
margin-top: 5rem;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`;
