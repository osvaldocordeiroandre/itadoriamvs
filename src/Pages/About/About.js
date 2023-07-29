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

    <div>

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

          <div className='after-effects'><img src={After} alt="After Effects 2020 logo" /></div>
          <div className='ps'><img src={Ps} alt="Photoshop 2020 logo" /></div>
          <div className='davinci'><img src={Davinci} alt="Davinci Logo" /></div>
          <img className='capcut' src={CapCut} alt="Capcut logo" />

        </div>

        <div className="info-text2"> <p> For cuts and effects I use after effects 2020, Davinci for color correction, davinci's system for color correction is more complex, thus making the result much better, I use capcut for quick edits like shorts, capcut gives you a great help for you to be able to make quick and quality edits, guiding you a lot in the effects, and finally I use photoshop when I make the thumbs, or even masks for the animations of the MMVs, </p> </div>

    </div>

    <Footer/>

    </div>
  )
}
