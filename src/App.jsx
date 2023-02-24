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
    const [userId, setUserId] = useState(12);
    return (
        <div className='App'>
              <Nav currentUser={[userId.setUserId]}/>
              <div className='app-content'>
              <Aside/>
              <Home userId={userId} />
              </div>
        </div>
    )
}

export default App;