import React, { Fragment } from 'react';
import { USER_MAIN_DATA } from '../datas/mocked';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Weightbar  from '../components/Weightbar';
import ObjectiveCharts from '../components/Objectivecharts';
import RadarCharts from '../components/Radarcharts';
import RadialCharts from '../components/Radialcharts';
import { useParams } from 'react-router-dom';
import '../styles/Home.css';

/**
 * This function renders the whole homepage.
 * @param {number} userId - The id number of current user.
 * @returns The Homepage component is returning a div element with all the informations and graphics.
 */

const Home = () => {
    let { userId } = useParams();
        if (userId === undefined || "") {
            userId = 18;
        }
    userId = Number(userId);
    const userIndex = USER_MAIN_DATA.findIndex((user => user.id === userId));
    const userData = USER_MAIN_DATA[userIndex].userInfos;
    return (
        <section className="Dashboard">
            <Fragment>
                    <Header firstName={userData.firstName} />
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
            </Fragment>
        </section>
    )
}

export default Home
Home.propTypes = {
	// userId: propTypes.number.isRequired,
};