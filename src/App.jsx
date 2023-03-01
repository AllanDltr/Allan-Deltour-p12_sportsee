import React, {useState} from 'react';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Home from './pages/Home';
import './App.css';

/**
 * This component is the main component of the app
 * @param {number} userId - The id of the user
 * @param {function} setUserId - The function to set the id of the user
 * @returns {JSX.Element} - The global interface of the App
 */
const App = () => {
    return (
        <div className='App'>
              <Nav />
              <div className='app-content'>
              <Aside/>
              <Home/>
              </div>
        </div>
    )
}

export default App;