import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
import logos from '../assets/logo.svg'

const Nav = () => {
    const logo = <img src={logos} alt="Logo Sportsee" />

    return (
        <nav className="navbar__h">
            <NavLink className="navbar__logo" to="/">
                {logo}
            </NavLink>

            <NavLink className="navbar__link" to="/Home">
                <div> Accueil </div>
            </NavLink>

            <NavLink className="navbar__link" to="/Profile">
                <div> Profil </div>
            </NavLink>

            <NavLink className="navbar__link" to="/Reglages">
                <div> Reglages </div>
            </NavLink>

            <NavLink className="navbar__link" to="/Communautes">
                <div> Communautés </div>
            </NavLink>
            </nav>
    )

}

export default Nav