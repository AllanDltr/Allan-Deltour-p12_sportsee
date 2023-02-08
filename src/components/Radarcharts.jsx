import React from 'react'
import API from '../datas/api'
import { USER_PERFORMANCE } from '../datas/mocked'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import '../styles/Radarcharts.css'
import propTypes from 'prop-types'

const Radarcharts = ({userId}) => {
    const userIndex = USER_PERFORMANCE.findIndex((user) => {
        return user.id === userId;
    });
    
    const userData = USER_PERFORMANCE[userIndex].data;
    const Kind = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité'
    ];

    let stat = userData.map(({value, kind}) => {
        return {
            value: value,
            kind: Kind[kind-1],
        };
    });
    return (
        <div className="radar__chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    data={stat}
                    >
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind"/>
                    <Radar
                    dataKey="value"
                    fill='#FF0000'
                    fillOpacity={0.75}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Radarcharts;

Radarcharts.prototype = {
    userId: propTypes.number.isRequired,
}