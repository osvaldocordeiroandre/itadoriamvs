import React, { useContext } from 'react'
import '../../components scss/footer.scss'

import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context'

export default function Footer() {

    const year = new Date().getFullYear();

    const [darkMode] = useContext(DarkModeContext);

    return (
        <div className='footer-container' style={{backgroundColor: darkMode ? '#fff' : '#1a1a1a'}}>

            <div className='year-container'>

                <p style={{ color: darkMode ? '#000' : '#fff' }}> © ITADORI AMV'S - {year} </p>

            </div>
            <div className="redes-sociais-footer">

                <div className="youtube">
                    <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'} aria-label='Link para o meu canal no youtube Itadori amvs'>
                        <AiFillYoutube fill={darkMode ? 'black' : 'white'} size={24}  />
                    </Link>
                </div>

                <div className="instagram">
                    <Link to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'} aria-label='link para o Instagram'>
                        <AiFillInstagram fill={darkMode ? 'black' : 'white'} size={24}  />
                    </Link>
                </div>

                <div className="discord">
                    <Link to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'} aria-label='Link para o Discord'>
                        <BsDiscord fill={darkMode ? 'black' : 'white'} size={24}  />
                    </Link>
                </div>

            </div>

        </div>
    )
}
