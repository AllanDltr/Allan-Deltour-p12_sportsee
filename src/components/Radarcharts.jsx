import React, {useState, useEffect} from 'react'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import '../styles/Radarcharts.css'
import propTypes from 'prop-types'
import { getPerformance } from '../datas/api'

/**
 * This graph is a radar chart. It shows the user's performance in 6 different categories.
 * @param {user} user
 * @returns A radar display of the user's performance.
 */
const Radarcharts = (user) => {
    const [data, setData] = useState([]);
    const Kind = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité'
    ];

    const transformDataForGraph = (data) => {
        const arrayData = data.data.map(({value, kind}) => {
        return {
            value: value,
            kind: Kind[kind-1],
        };
    });
    return arrayData;
};

useEffect(() => {
    getPerformance(user.id)
    .then((response) => {
        // console.log(response)
        const transformedData = transformDataForGraph(response);
        setData(transformedData);
    })
    .catch((err) => console.log(err));
}, [user.id]);

    return (
        <div className="radar__chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    data={data}
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
    user: propTypes.number.isRequired,
}