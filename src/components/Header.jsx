import React from 'react'
import PropTypes from 'prop-types'
import { getUser } from '../datas/api'
import '../styles/Header.css'

/**
 * The Header component is a React component that renders a header with a name and a paragraph
 * @param {string} firstname
 * @returns A div with a h1 with the name of the user and a paragraph.
 */

const Header = ({firstName}) => {
    return (
        <div className='header'>
          <h1>Bonjour <span className='header__name'>{firstName}</span></h1>
          <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
    );
};

export default Header;

// Header.propTypes = {
// 	firstName: PropTypes.string.isRequired
// }