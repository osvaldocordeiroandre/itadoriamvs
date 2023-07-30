import React from 'react'
import { NavLink } from 'react-router-dom'

import ErrorGif from '../../Assets/Error/bocchi-error-404-final.gif'

import '../../components scss/error.scss'

export default function Error() {
  return (
    <div className='Error-content'>

        <div className='Errro-gif-content'><img className='gif-error' src={ErrorGif} alt="Error gif" /></div>
        <span className='error-text'> OPS! WE CAN'T FIND THIS PAGE </span>
        <span> CLICK THE HOME BUTTON TO GO BACK TO THE HOMEPAGE AND ENJOY THE SITE </span>
        <NavLink to={'/'}> <button className='Home-Page'> Home </button> </NavLink>

    </div>
  )
};
