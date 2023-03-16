import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Aside from './components/Aside';
import Home from './pages/Home';
import Error404 from './pages/Error';
import './App.css';

/**
 * This component is the main component of the app
 * @param {number} userId - The id of the user
 * @param {function} setUserId - The function to set the id of the user
 */

const App = () => {
    return (
        <div className='App'>
              <Nav />
              <div className='app-content'>
                <Aside/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Home" element={<Home/>} />
                        <Route path="/404" element={<Error404/>} />
                        <Route path="/*" element={<Error404/>} />
                        <Route path="/user/:userId" element={<Home/>} />
                        <Route path="/user/:userId/activity" element={<Home/>} />
                        <Route path="/user/:userId/average-sessions" element={<Home/>} />
                        <Route path="/user/:userId/performance" element={<Home/>} />
                    </Routes>
                </main>
              </div>
        </div>
    )
}

export default App;