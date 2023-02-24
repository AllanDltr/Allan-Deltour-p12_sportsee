import React from 'react';
import { USER_MAIN_DATA } from "../datas/mocked";
import '../styles/Counter.css'
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import chicken from '../assets/chicken.svg';
import energy from '../assets/energy.svg';

/**
 * This function renders the counter on the right.
 * @param {userId}
 * @returns The counter component on the right of the page.
 */

const Counter = (userId) => {

  const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === userId.id;
	});

	const userData = USER_MAIN_DATA[userIndex].keyData;

  return (
    <div className="counter">
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#ffe6e6'} }>
          <img src={energy} alt="Calories" />
        </div>
        <div className="counter__text">
          <h3>{userData.calorieCount} kCal</h3>
          <p>Calories</p>
      </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#DBECFF'}}>
          <img src={chicken} alt="Protéines" />
        </div>
        <div className="counter__text">
          <h3>{userData.proteinCount} g</h3>
          <p>Protéines</p>
        </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#fff5cc'}}>
          <img src={apple} alt="Glucides" />
        </div>
        <div className="counter__text">
          <h3>{userData.carbohydrateCount} g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#ffe6f9'}}>
          <img src={cheeseburger} alt="Lipides" />
        </div>
        <div className="counter__text">
          <h3>{userData.lipidCount} g</h3>
          <p className="font-grey">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;