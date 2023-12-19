import React from 'react'
import '../../components scss/footer.scss'

import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className='footer-container'>

            <div className='year-container'>

                <p> © ITADORI AMV'S - {year} </p>

            </div>
            <div className="redes-sociais-footer">

                <div className="youtube">
                    <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}>
                        <AiFillYoutube size={24} />
                    </Link>
                </div>

                <div className="instagram">
                    <Link to={'https://www.instagram.com/itadoriamvs/'} target={'_blank'}>
                        <AiFillInstagram size={24} />
                    </Link>
                </div>

                <div className="discord">
                    <Link to={'https://discord.com/invite/fDDv7Whsry'} target={'_blank'}>
                        <BsDiscord size={24} />
                    </Link>
                </div>

            </div>

        </div>
    )
}
