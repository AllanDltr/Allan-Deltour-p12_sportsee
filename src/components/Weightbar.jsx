import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserActivity } from "../datas/api";
import "../styles/Weightbar.css";
import {BarChart,Bar,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer,CartesianGrid} from "recharts";
import {transformDataWeightbarGraph} from "../datas/transformGraph";

/**
 * This graph displays the weight and calories burned by the user during the week.
 * @param {user} user
 * @returns a bar chart with the weight and calories burned by the user during the week.
 */

const WeeklyCharts = (user) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserActivity(user.id)
      .then((response) => {
        const transformedData = transformDataWeightbarGraph(response);
        setData(transformedData);
      })
      .catch((err) => console.log(err));
  }, [user.id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity__tooltip">
          <p className="activity__tooltip__kg">{`${payload[0].value} Kg`}</p>
          <p className="activity__tooltip__kcal">{`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="daily__activity">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="daily__activity__fond"
      >
        <BarChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 15,
            right: 15,
            left: 15,
            bottom: 15,
          }}
          barSize={8}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={15}
            stroke="#DEDEDE"
            tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
            padding={{ left: -50, right: -50 }}
          />

          <YAxis
            yAxisId="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            tickLine={false}
            orientation="right"
            axisLine={false}
            tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
            tickMargin={40}
            minTickGap={30}
          />
          <YAxis yAxisId="calories" hide />
          <Tooltip content={<CustomTooltip />} />
            <Legend
              className="activityLegend"
              verticalAlign="top"
              align="right"
              iconType={"circle"}
              iconSize={8}
              width={300}
              height={25}
              wrapperStyle={{ top: 13, right: 32 }}
              formatter={(value) => {
                return (
                  <span
                    style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}
                  >
                    {value}
                  </span>
                );
              }}
            />
          <Tooltip />

          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[4, 4, 0, 0]}
          />
          <text
            x="5%"
            y="5%"
            dominantBaseline="middle"
            fill="#20253A"
            style={{ fontWeight: 500, fontSize: 15, marginLeft: -50 }}
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default WeeklyCharts;
WeeklyCharts.prototype = {
  userIndex: PropTypes.number.isRequired,
};
