import React, {useState, useEffect} from 'react';
import '../styles/Counter.css'
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import chicken from '../assets/chicken.svg';
import energy from '../assets/energy.svg';
import { getUser } from "../datas/api";

/**
 * This function renders the counter on the right.
 * @param {user}
 * @returns The counter component on the right of the page.
 */

const Counter = (user) => {
  const [data, setData] = useState([]);

  const transformDataForGraph = (data) => {
    const convertArrayData = Object.values(data.data.keyData);
    data = convertArrayData;
    return data;
  };

useEffect(() => {
  getUser(user.id)
    .then((response) => {
      // console.log(response)
      const transformedData = transformDataForGraph(response);
      setData(transformedData);
    })
    .catch((err) => console.log(err));
}, [user.id]);

  return (
    <div className="counter">
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#ffe6e6'} }>
          <img src={energy} alt="Calories" />
        </div>
        <div className="counter__text">
          <h3 className="counter__number">{data[0]} kCal</h3>
          <p>Calories</p>
      </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#DBECFF'}}>
          <img src={chicken} alt="Protéines" />
        </div>
        <div className="counter__text">
          <h3 className="counter__number">{data[1]} g</h3>
          <p>Protéines</p>
        </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#fff5cc'}}>
          <img src={apple} alt="Glucides" />
        </div>
        <div className="counter__text">
          <h3 className="counter__number">{data[2]} g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="counter__icon--cell">
        <div className="counter__icon" style={{backgroundColor:'#ffe6f9'}}>
          <img src={cheeseburger} alt="Lipides" />
        </div>
        <div className="counter__text">
          <h3 className="counter__number">{data[3]} g</h3>
          <p className="font-grey">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;