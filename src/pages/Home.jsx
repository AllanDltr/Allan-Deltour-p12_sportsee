import React, {useEffect, useState} from 'react';
import { getUser } from '../datas/api';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Weightbar  from '../components/Weightbar';
import ObjectiveCharts from '../components/Objectivecharts';
import RadarCharts from '../components/Radarcharts';
import RadialCharts from '../components/Radialcharts';
import {transformDataUserId} from '../datas/transformGraph';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';

/**
 * This function renders the whole homepage.
 * @param {number} userId - The id number of current user.
 * @returns The Homepage component is returning a div element with all the informations and graphics.
 */

const Home = (user) => {
    const [data, setData] = useState([]);
    let {userId} = useParams();
        if (userId === undefined || "") {
            userId = 18;
        }
    userId = Number(userId);

    useEffect(() => {
        getUser(userId)
            .then((response) => {
                const transformedData = transformDataUserId(response);
                setData(transformedData);
            })
            .catch((err) => console.log(err));
    }, [userId]);

    return (
        <section className="Dashboard">
            <>
                <Header firstName={data.firstName} />
                    <div className="Dashboard__charts">
                        <div className="Dashboard__charts--first-column">
                            <Weightbar id={userId} />
                            <div className="Dashboard__charts--first-column2">
                                <ObjectiveCharts id={userId} />
                                <RadarCharts id={userId} />
                                <RadialCharts id={userId} />
                            </div>
                        </div>
                    <div className="Dashboard__charts--second-column">
                        <Counter id={userId} />
                    </div>
                    </div>
            </>
        </section>
    )
}

export default Home