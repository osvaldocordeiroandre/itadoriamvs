import React, { useState, useEffect, useContext } from 'react'

import { useLocation, NavLink } from 'react-router-dom'

import '../../components scss/header.scss'

import Logo from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import LogoBlack from '../../Assets/Imagens/Itadori_Logo_black.webp'
import { FaInstagram, FaDiscord } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md';
import Randonvideo from '../RandomVideo/Randonvideo'
import { DarkModeContext } from '../../context'

export default function Header() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const [itensDisplay, setItensDisplay] = useState('none');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handlekClick() {
    setItensDisplay(prevDisplay => prevDisplay === 'none' ? 'block' : 'none');
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

useEffect(() => {

  if (isMenuOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

}, [isMenuOpen])

const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <header style={{ backgroundColor : darkMode ? '#fff' : '#1a1a1a' }}>

      <div className="logo-name"> <NavLink to={'/'} onClick={() => setActiveLink('/')}> {darkMode ? ( <img className='name-logo' src={LogoBlack} width={'100%'} height={'100%'} alt="Logo itadori amv's branca" /> ) : (<img className='name-logo' src={Logo} width={'100%'} height={'100%'} alt="Logo itadori amv's branca" />)} </NavLink> </div>

      <menu className='itens'>

        <ul className='ul-itens'>
          <NavLink to={'/'} onClick={() => setActiveLink('/')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/' || activeLink === '/' ? 'active-link' : ''}>HOME</li> </NavLink>
          <NavLink to={'/About'} onClick={() => setActiveLink('/About')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/About' || activeLink === '/About' ? 'active-link' : ''}>ABOUT</li> </NavLink>
          <NavLink to={'/Contact'} onClick={() => setActiveLink('/Contatc')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/Contact' || activeLink === '/Contact' ? 'active-link' : ''}>CONTACT</li> </NavLink>
          <NavLink to={'/Clips'} onClick={() => setActiveLink('/Clips')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/Clips' || activeLink === '/Clips' ? 'active-link' : ''}> CLIPS </li> </NavLink>
        </ul>

      </menu>

      <div className="menu-responsive" style={{ display: itensDisplay }} >
        <ul className='ul-itens' style={{ backgroundColor : darkMode ? '#fff' : '#1a1a1a' }}>
          <div>
            <NavLink to={'/'} onClick={() => setActiveLink('/')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/' || activeLink === '/' ? 'active-link' : ''}>HOME</li> </NavLink>
          </div>
          <div>
            <NavLink to={'/About'} onClick={() => setActiveLink('/About')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/About' || activeLink === '/About' ? 'active-link' : ''}>ABOUT</li> </NavLink>
          </div>
          <div>
            <NavLink to={'/Contact'} onClick={() => setActiveLink('/Contatc')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/Contact' || activeLink === '/Contact' ? 'active-link' : ''}>CONTACT</li> </NavLink>
          </div>

          <div>
          <NavLink to={'/Clips'} onClick={() => setActiveLink('/Clips')}> <li style={{ color: darkMode ? '#000' : '#fff' }} className={location.pathname === '/Clips' || activeLink === '/Clips' ? 'active-link' : ''}> CLIPS </li> </NavLink>
          </div>

          <div className='responsive-icons'>

            <NavLink to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'} aria-label='Link para o instagram'> <FaInstagram fill={darkMode ? 'black' : 'white'} title='Instagram'  size={19}  /> </NavLink>
            <NavLink to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'} aria-label='Link para o Discord'> <FaDiscord fill={darkMode ? 'black' : 'white'} title='Discord'   /> </NavLink>
            <Randonvideo title="Vídeo aleatorio" />

            { !darkMode ? (
          <div> <MdDarkMode onClick={() => setDarkMode(true)}/> </div>
        ) : (
          <div> <MdDarkMode fill='black' onClick={() => setDarkMode(false)} /> </div>
        ) }

          </div>
        </ul>
      </div>

      <div className="icons">

        <NavLink to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'} aria-label='Link para o instagram'> <FaInstagram fill={darkMode ? 'black' : 'white'} size={19}  /> </NavLink>
        <NavLink to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'} aria-label='link para discord'> <FaDiscord fill={darkMode ? 'black' : 'white'} size={19}  /> </NavLink>
        <Randonvideo title='Vídeo aleatório' />
        
        { !darkMode ? (
          <div> <MdDarkMode onClick={() => setDarkMode(true)} cursor={'pointer'} /> </div>
        ) : (
          <div> <MdDarkMode fill='black' onClick={() => setDarkMode(false)} cursor={'pointer'} /> </div>
        ) }

      </div>

      <div className='container-svg' >
        <GiHamburgerMenu onClick={handlekClick} fill={darkMode ? 'black' : 'white'} size={24} />
      </div>

    </header>
  )
}
