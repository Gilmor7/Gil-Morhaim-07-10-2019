import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DailyWeather from './DailyWeather';

const WeatherForecast = ({ dailyForcasts, fetchErr }) => {

    let content;

    if (fetchErr) {
        content = null;
    }
    else if (dailyForcasts) {
        content =
            dailyForcasts.map(item =>
                <DailyWeather
                    key={item.EpochDate}
                    {...item} />
            )
    }

    return (
        <Container>
            {content}
        </Container>
    )
}

const mapStateToProps = state => ({
    dailyForcasts: state.currentWeather.forecast,
    fetchErr: state.currentWeather.fetchErr
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
