import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
import logo from '../assets/logo.svg'

const Nav = () => {
    return (
    <div className="navbar__h">
        <img className="logo" src={logo} alt="Logo Sportsee" />
            <nav className='nav__h'>
                <span className="navbar__link" to="/Home"> Accueil </span>

                <span className="navbar__link"> Profil </span>

                <span className="navbar__link"> Réglages </span>

                <span className="navbar__link"> Communautés </span>
            </nav>
    </div>
    )

}

export default Nav