import React from 'react';
import PropTypes from 'prop-types';
import { USER_AVERAGE_SESSIONS } from '../datas/mocked';
import '../styles/Objectivecharts.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

/**
 * This graph displays the average session length of the user during the week (starting on Monday).
 * @param {userId} userId
 * @returns a line chart with the average session length of the user during the week.
 */
const ObjectiveCharts = (userId) => {
    const userIndex = USER_AVERAGE_SESSIONS.findIndex((obj) => {
        return obj.userId === userId.id
    });

const userData = USER_AVERAGE_SESSIONS[userIndex].sessions;
const days = ["L", "M", "M", "J", "V", "S", "D"]
const sessions = [];

userData.forEach((session) => {
    sessions.push({
        name:days[session.day-1],
        sessionLength:session.sessionLength,
    });
});

const Title = () => {
    return <div className="average__title"> Durée moyenne des sessions </div>;
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="session__tooltip">
                <p> {`${payload[0].value} min`} </p>
            </div>
        );
    }

    return null;
};

return (
    <div className="average__session">
        <ResponsiveContainer  width="100%" height="100%">
            <LineChart
                width= {500}
                height= {300}
                data={sessions}
                margin={{
                    top: 20,
                    right: 15,
                    left: 15,
                    bottom: 15,
                }}>
                <XAxis dataKey="name" axisLine={false} stroke="#fff" tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 14 }} />
                <YAxis hide={true} />
                <Line
                                    type="monotone"
                                    dataKey="sessionLength"
                                    stroke="#FFFFFF"
                                    dot={false}
                                    strokeWidth={2}
                                />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Legend verticalAlign="top" align="left" content={Title} />
              </LineChart>
              </ResponsiveContainer>
            </div>
          );
        }

        export default ObjectiveCharts;
        ObjectiveCharts.prototype = {
            userId: PropTypes.number.isRequired
        }