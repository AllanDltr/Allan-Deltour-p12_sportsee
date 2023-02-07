import React from "react";
import API from "../datas/api";
import { USER_MAIN_DATA } from "../datas/mocked";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import '../styles/Radialcharts.css'
import propTypes from 'prop-types';

const RadialCharts = (userId) => {
    const userIndex = USER_MAIN_DATA.findIndex((obj) => {
        return obj.id === userId.id;
    });
    console.log(userIndex+ "radial")
    const userData = USER_MAIN_DATA[userIndex].todayScore;
    const Score = [
        {
            score: userData * 100,
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
                data={Score}
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
                        {userData * 100}%
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
    userId: propTypes.number.isRequired,
}