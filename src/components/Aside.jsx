import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Aside.css'
import logoYoga from '../assets/logoYoga.svg'
import logoSwim from '../assets/logoSwim.svg'
import logoBike from '../assets/logoBike.svg'
import logoDumbbell from '../assets/logoDumbbell.svg'


const Aside = () => {
    const LogoYoga = <img src={logoYoga} alt="Logo yoga" />
    const LogoSwim = <img src={logoSwim} alt="Logo swimming" />
    const LogoBike = <img src={logoBike} alt="Logo cycling" />
    const LogoDumbbell = <img src={logoDumbbell} alt="Logo dumbbell" />

    return (
        <div className="aside__v ">
            <nav className="navbar__aside__btns">
                <NavLink className="navbar__aside__link" to="#Yoga">
                    {LogoYoga}
                </NavLink>
                <NavLink className="navbar__aside__link" to="#Swim">
                    {LogoSwim}
                </NavLink>
                <NavLink className="navbar__aside__link" to="#Bike">
                    {LogoBike}
                </NavLink>
                <NavLink className="navbar__aside__link" to="#Dumbbell">
                    {LogoDumbbell}
                </NavLink>
            </nav>
            <div className="copyright"> Copyright © SportSee 2023 </div>
        </div>
    )
}

export default Aside