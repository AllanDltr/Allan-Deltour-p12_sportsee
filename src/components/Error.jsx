import React from 'react'
import '../styles/Error.css'

const Error = () => {
    return (
        <div className="error">
            <div className="error__title"> 404 </div>
            <h1 className='error__subtitle'>
                Oups! La page que vous demandez n'existe pas
            </h1>
            <a className="error__returnLink" href="/">
                Retourner sur la page d'accueil
            </a>
        </div>
    )
}

export default Error