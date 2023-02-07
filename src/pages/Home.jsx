import React, { Fragment } from 'react';
import API from '../datas/api';
import { USER_MAIN_DATA } from '../datas/mocked';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Counter from '../components/counter';
import Weightbar  from '../components/Weightbar';
import ObjectiveCharts from '../components/Objectivecharts';
import RadarCharts from '../components/Radarcharts';
import RadialCharts from '../components/Radialcharts';
import '../styles/Home.css';

/**
 * This function renders the whole homepage.
 * @param {number} userId - The id number of current user.
 * @returns The Homepage component is returning a div element with all the informations and graphics.
 */

const Home = () => {
    // Standard ID for testing purposes is 12
    const id=12;
    const userIndex = USER_MAIN_DATA.findIndex((user) => {
    return user.id === id;
});
    const userData = USER_MAIN_DATA[userIndex].userInfos;
    return (
        <section className="Dashboard">
            <Fragment>
                    <Header firstName={userData.firstName} />
                        <div className="Dashboard__charts">
                            <div className="Dashboard__charts--first-column">
                                <Weightbar id={id} />
                            <div className="Dashboard__charts--first-column2">
                                <ObjectiveCharts id={id} />
                                <RadarCharts id={id} />
                                <RadialCharts id={id} />
                            </div>
                            </div>

                            <div className="Dashboard__charts--second-column"> 
                                <Counter id={id} />
                        </div>
                        </div>
            </Fragment>
        </section>
    )
}

export default Home
Home.propTypes = {
	userId: propTypes.number.isRequired,
};