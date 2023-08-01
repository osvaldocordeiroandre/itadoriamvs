import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import LogoItadori from '../../Assets/Imagens/itadori_amvs_pfp.webp'
import Logo from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import After from '../../Assets/Softwares/after.webp'
import Ps from '../../Assets/Softwares/ps-new-color.webp'
import Davinci from '../../Assets/Softwares/davinci-new-color.webp'
import CapCut from '../../Assets/Softwares/capcut-new-color.webp'

import '../../components scss/about.scss'
import ScrollToTop from 'react-scroll-to-top'

export default function About() {
  return (

    <div className='allaboutus'>

      <ScrollToTop/>

      <Header />

      <div className="video-itadori">
      <div className='itadoall'>
            <img className='itadori-logo' src={LogoItadori} alt="" />

            <div className="itadori-message">

                <h1 className='channelName'> <strong> ITADORI AMV'S </strong> </h1>
                <h3 className='h3message'> We bring another way to enjoy animations! </h3>

            </div>

            <div className="itadori-analustic">

                <h2 className='itadoriAnalystic'><strong>analytics</strong> 📊</h2>
                <h1 className='dados' > <strong> 📺 77k+ subscribers <br /> 👀 20M+ views </strong> </h1>

            </div>

        </div>

    </div>

    <div className="main">

      <div className="logo-white"> <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}><img src={Logo} alt="" /></Link> </div>

      <div className="about-text"> <span> Hello, I'm here today to talk a little about myself, as some people may not know I am <Link to={'https://www.youtube.com/@ajksz'} target={'_blank'}>Ajk </Link>
       the creator and owner of the <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}>ITADORI AMV'S</Link> channel, nowadays I own it together with my friend <Link to={'https://www.youtube.com/@LeviEdits'} target={'_blank'}>Levi</Link>, a channel that I created more than 2 years ago, me and my friend Levi have been editing for over 5 years, until at a certain time we had stopped doing long edits and focused only on short and better edited edits, at the end of 2020 I had the idea of taking my old channel that it was called ajk amv's and it turned into <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}>ITADORI AMV'S</Link> as it is known nowadays, I created the channel and soon after I called my friend <Link to={'https://www.youtube.com/@LeviEdits'}>Levi</Link>, and even another friend of mine called <Link to={'https://www.youtube.com/@MrSeih'} target={'_blank'}>Seih</Link>, we decided to focus on a long and well edited edition, since we always focus on the well edited short edits, why not focus on well edited long edits, and nowadays we are here with all of you, our channel is growing a lot, and all thanks to our audience, we are always striving to bring the best edit for you, I hope that they always like our content. </span> </div>

    </div>

    <div className="infos">

        <div className="info-text"> <p> If you have any questions about the programs we use to edit, I'll leave the name below! </p> </div>

        <div className="software-icons">

          <div className='after-effects'><a href={'https://doc-10-b8-docs.googleusercontent.com/docs/securesc/stl8k3qupj54jft9tjkimootk5nco1sd/n0jdtmve338dp6hchkhtg2fa3v931ppv/1690900425000/08237399899367760461/08237399899367760461/17pDyAAuOn42_STyvgc2R4kEWdIdPBYlD?e=download&ax=AGtFMPWS2qH8lS7ojsUZESuUDGyDrEY3KLx_O611EVIbiQ1ZPlMAIQs8w1Bnr59LgcWCkKqUjkZzhUj0B5e2H4ZugX-tZIp9ibVq7ChVAfaP4KJo1-eqfT7QGqH28MaJEy-TLB-omuGSpzbAoaWWZKUFCmyNQ-pJlP3pNp5p0jxwtrVKNFhnGn7GA2fS28Ewljmu2tRH6Fk5Kl5a2eFEZD_oaEViDWnYRfZpF47EiHX-NcI_65E0CNEcDVg6aXk5CP5qsztKDCT5UV-Z2TCIruU3Zi9rTHV8ak8t7htsw0CL8PMLWHtKRWN1kWUdTcCmsdqdU9MqzpVS18wWh4hOHs7VksV0vlY4WSgsuu8lOsT0yEyd5x47o8ZG1kW0_QNJ0_BZAOhPcYk_TntfES8-tl6Wvb89a5a1gb2aNoNIG7YsaAbnaP29kP6QT-bZGpbHrqxE27vpsK-Gna7j4u0P_aT4wFb3UQ_imnX3wfzYxs1hqiPynV1jHMXnD0r6RBAJCzXpcrQW5gOVw78nncG7xw2yhBJmZRFkDtZ3Uwysx8AxZXBxZWfUM0Yk8Z0WZLB4mh8VNs31-LLYj06Cm0_8p4LU7l0rHE5Yfj_u1Duu-os8qLdbZeMYiGNsN8krVqtTfB9yQ7NIVxJiMqy4nXcAksXeZbHWmbyTzsiM_kkuP0FKJfY6CyQ4c10Xdltbt0mFb8aaDSk1u_Q8ih6_Zf4hNNng0-9TuCSQH1h_K_5tPOiBaPvrivkGhR-fGYUgf0EWrAkvliz-M_7MHcNbosP_rkh1MyktD6g9S87ZQmQDfcnaZctOHfJLDHDvvrGX-sBruIb2jezAFhvvKD7wIfmB9Ir6ueRhq9UWn_idC6z-PWHV_5xKv5jhIiWq1BgrKvJ9UEfl3pb1FXdNsg3Q5qV1JYFbr0XcrfJccufUBed3Cadr5_0qkHGaOyla6rKiXbhFSnZCNzuXMBzW_8CiljyJcs7eT8oTpGLgos1tYpg1hjBL-rVUc868ihO5v4bL8unHMPxBFSLwjPu5zhz1MoQPhCeoxGZ639Kf_y4bf86JXHmaaMx0-C2AKruGC0vHPNV2125vRt4zhunvBLfo1XVs8Cv_D2r_FuC5qWRV2s9rw4HsQAvf4BflozCs5y3I&uuid=7ca99d1b-7a36-47af-95ba-879763a1c731&authuser=4&nonce=mfiv1faiuqbma&user=08237399899367760461&hash=r91pbt8onbeir1glss94udufdpb6fsds'}><img src={After} alt="After Effects 2020 logo" /></a></div>
          <div className='ps'><img src={Ps} alt="Photoshop 2020 logo" /></div>
          <div className='davinci'><a href="https://www.blackmagicdesign.com/br/products/davinciresolve" target='_blank'><img src={Davinci} alt="Davinci Logo" /></a></div>
          <a href="https://www.capcut.com/" target='_blank'><img className='capcut' src={CapCut} alt="Capcut logo" /></a>

        </div>

        <div className="info-text2"> <p> For cuts and effects I use after effects 2020, Davinci for color correction, davinci's system for color correction is more complex, thus making the result much better, I use capcut for quick edits like shorts, capcut gives you a great help for you to be able to make quick and quality edits, guiding you a lot in the effects, and finally I use photoshop when I make the thumbs, or even masks for the animations of the MMVs, </p> </div>

    </div>

    <Footer/>

    </div>
  )
}
