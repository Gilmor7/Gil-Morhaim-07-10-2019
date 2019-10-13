import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';


const dailyWeather = ({ Temperature, Date: date }) => {
    return (
        <Card>
            <Moment format='ddd'>
                {date}
            </Moment>
            <span>{`${Temperature.Minimum.Value}°C - ${Temperature.Maximum.Value}°C`}</span>
        </Card>
    )
}

export default dailyWeather;

const Card = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
padding: 2rem;
font-size: 2rem;
`;
