import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.svg'
import '../styles/Nav.css'

/**
 *
 * @returns The navbar on top of the page
 */
const Nav = () => {
    return (
    <div className="navbar__h">
        <img className="logo" src={logo} alt="Logo Sportsee"/>
            <nav className='nav__h'>
                <NavLink className="navbar__link" to="/" alt="Accueil"> Accueil </NavLink>

                <span className="navbar__link" alt="Profil"> Profil </span>

                <span className="navbar__link" alt="Réglages"> Réglages </span>

                <span className="navbar__link" alt="Communautés"> Communautés </span>
            </nav>
    </div>
    )

}

export default Nav