import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
import logo from '../assets/logo.svg'

const Nav = () => {
    return (
    <div className="navbar__h">
        <img className="logo" src={logo} to="/" alt="Logo Sportsee"/>
            <nav className='nav__h'>
                <span className="navbar__link" to="/Home" alt="Accueil"> Accueil </span>

                <span className="navbar__link" alt="Profil"> Profil </span>

                <span className="navbar__link" alt="Réglages"> Réglages </span>

                <span className="navbar__link" alt="Communautés"> Communautés </span>
            </nav>
    </div>
    )

}

export default Nav