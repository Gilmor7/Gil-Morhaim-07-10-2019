import React from 'react';
import styled from 'styled-components';

import DailyWeather from './DailyWeather';

const WeatherForecast = () => {

    const arr = [
        {
            temp: 33,
            date: '2019-10-09T22:40:00+03:00'
        },
        {
            temp: 31,
            date: '2019-10-10T22:40:00+03:00'
        },
        {
            temp: 34,
            date: '2019-10-11T22:40:00+03:00'
        },
        {
            temp: 30,
            date: '2019-10-12T22:40:00+03:00'
        },
        {
            temp: 29,
            date: '2019-10-13T22:40:00+03:00'
        }
    ]

    return (
        <Container>
            {arr.map(item =>
                <DailyWeather key={item.temp} temp={item.temp} date={item.date} />
            )}
        </Container>
    )
}

export default WeatherForecast;

const Container = styled.div`
align-self:center;
margin-top: 5rem;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`;
