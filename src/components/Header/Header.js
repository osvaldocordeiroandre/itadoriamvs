import React, { useState } from 'react'

import { Link, useLocation, NavLink } from 'react-router-dom'

import '../../components scss/header.scss'

import Logo from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import { AiOutlineMail } from 'react-icons/ai'
import { FaInstagram, FaDiscord } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Randonvideo from '../RandomVideo/Randonvideo'

export default function Header() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const [itensDisplay, setItensDisplay] = useState('none');

  function handlekClick() {
    setItensDisplay(prevDisplay => prevDisplay === 'none' ? 'block' : 'none');
  }

  return (
    <header>

      <div className="logo-name"> <Link to={'/'}><img className='name-logo' src={Logo} alt="Logo itadori amv's branca" /></Link> </div>
      <menu className='itens'>

        <ul className='ul-itens'>
          <NavLink to={'/'} onClick={() => setActiveLink('/')}> <li className={location.pathname === '/' || activeLink === '/' ? 'active-link' : ''}>HOME</li> </NavLink>
          <NavLink to={'/About'} onClick={() => setActiveLink('/About')}> <li className={location.pathname === '/About' || activeLink === '/About' ? 'active-link' : ''}>ABOUT</li> </NavLink>
          <NavLink to={'/Contact'} onClick={() => setActiveLink('/Contatc')}> <li className={location.pathname === '/Contact' || activeLink === '/Contact' ? 'active-link' : ''}>CONTACT</li> </NavLink>
          <NavLink to={'/Clips'} onClick={() => setActiveLink('/Clips')}> <li className={location.pathname === '/Clips' || activeLink === '/Clips' ? 'active-link' : ''}> CLIPS </li> </NavLink>
        </ul>

      </menu>

      <div className="menu-responsive" style={{ display: itensDisplay }}>
        <ul className='ul-itens'>
          <div>
            <NavLink to={'/'} onClick={() => setActiveLink('/')}> <li className={location.pathname === '/' || activeLink === '/' ? 'active-link' : ''}>HOME</li> </NavLink>
          </div>
          <div>
            <NavLink to={'/About'} onClick={() => setActiveLink('/About')}> <li className={location.pathname === '/About' || activeLink === '/About' ? 'active-link' : ''}>ABOUT</li> </NavLink>
          </div>
          <div>
            <NavLink to={'/Contact'} onClick={() => setActiveLink('/Contatc')}> <li className={location.pathname === '/Contact' || activeLink === '/Contact' ? 'active-link' : ''}>CONTACT</li> </NavLink>
          </div>

          <div>
          <NavLink to={'/Clips'} onClick={() => setActiveLink('/Clips')}> <li className={location.pathname === '/Clips' || activeLink === '/Clips' ? 'active-link' : ''}> CLIPS </li> </NavLink>
          </div>

          <div className='responsive-icons'>

            <NavLink to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'}> <FaInstagram title='Instagram' size={19} /> </NavLink>
            <NavLink to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'}> <FaDiscord title='Discord' size={19} /> </NavLink>
            <Randonvideo title="Vídeo aleatorio" />

          </div>
        </ul>
      </div>

      <div className="icons">

        <NavLink to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'}> <FaInstagram size={19} /> </NavLink>
        <NavLink to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'}> <FaDiscord size={19} /> </NavLink>
        <Randonvideo />

      </div>

      <div className='container-svg'>
        <GiHamburgerMenu onClick={handlekClick} size={24} />
      </div>

    </header>
  )
}
