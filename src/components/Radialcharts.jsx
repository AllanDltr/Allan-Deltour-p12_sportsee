import React, {useEffect, useState} from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import '../styles/Radialcharts.css'
import propTypes from 'prop-types';
import { getUser } from '../datas/api';


/**
 * This graph displays the score of the user based on an objective.
 * @param {user} user
 * @returns a graph with the score of the user. Presented in percentage and in a circle form.
 */
const RadialCharts = (user) => {
    const [data, setData] = useState(0);

    useEffect(() => {
        getUser(user.id)
        .then((response) => {
            // console.log(response.data)
            setData(response.data?.todayScore || response.data?.score);
        })
        .catch((err) => console.log(err));
    }, [user.id]);

    const score = [
        {
            score: data * 100,
            fill: "#ff0000",
        },
    ];

    return (
        <div className="score__chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                cy ="50%"
                cx ="50%"
                innerRadius="50%"
                barSize={10}
                data={score}
                startAngle={75}
                endAngle={-285}
                >
                    <text className="graph__title"
                    x="17%"
                    y="17%"
                    fill="#979797"
                    textAnchor="middle"
                    dominantBaseline={"middle"}>
                    Score
                    </text>
                    <text className="graph__score__legend" x="50%" y="42%" textAnchor="middle" dominantBaseline={"middle"} style={{fontSize:20, fontWeight:800}} >
                        {data * 100}%
                    </text>
                    <text className="graph__score__legend" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" >
                    de votre
                    </text>
                    <text className="graph__score__legend" x="50%" y="58%" textAnchor="middle" dominantBaseline={"middle"} >
                    Objectif </text>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar background={true} dataKey="score" cornerRadius={20} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadialCharts;
RadialCharts.prototype = {
    user: propTypes.number.isRequired,
}