import React from 'react'
import '../styles/Header.css'
import PropTypes from 'prop-types'
import API from '../datas/api'
import { USER_MAIN_DATA } from '../datas/mocked'

/**
 * The Header component is a React component that renders a header with a name and a paragraph
 * @param {string} firstname
 * @returns A div with a h1 with the name of the user and a paragraph.
 */

const Header = ({firstname}) => {

    return (
        <div className='header'>
          <h1>Bonjour <span className='header__name'>{firstname}</span></h1> 
          <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p> 
        </div>
    );
};

export default Header;

Header.propTypes = {
	firstname: PropTypes.string
}