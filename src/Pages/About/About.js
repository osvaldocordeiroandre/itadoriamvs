import React, { useContext } from 'react'

import After from '../../Assets/Softwares/after.webp'
import Ps from '../../Assets/Softwares/ps-new-color.webp'
import Davinci from '../../Assets/Softwares/davinci-new-color.webp'
import CapCut from '../../Assets/Softwares/capcut-new-color.webp'
import Render from '../../Assets/Imagens/render-itadori.webp'

import '../../components scss/about.scss'
import ScrollToTop from 'react-scroll-to-top'
import { DarkModeContext } from '../../context'

export default function About() {

  const [darkMode] = useContext(DarkModeContext);
  return (

    <div className='allaboutus' style={{ backgroundColor : darkMode ? '#fff' : '#1a1a1a' }}>

      <ScrollToTop />

      <div className="infos">

        <div className="textInfosArea">

          <div className="titleArea" >

            <h3 style={{ color: darkMode ? '#000' : '#fff' }}> Who we are </h3>

            <p style={{ color: darkMode ? '#000' : '#fff' }}> We are an AMV (anime music video) channel created in 2020 with the aim of bringing another way to enjoy animation, bringing together the two things that the YouTube audience loves most, music and animations, and inspiring people in this way </p>

            <h3 style={{ color: darkMode ? '#000' : '#fff' }}> What we do? </h3>

            <p style={{ color: darkMode ? '#000' : '#fff' }}> ITADORI AMV's is proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists. All videos are edited in the highest quality which makes up different scenes from various free commercial animation images! thanks to the animation developers! <br /><br /> We have a team of Professional Editors focused on editing AMV's for over 8 years, our work has provided impactful narratives for all songs, giving visibility to countless unknown artists through the construction of their Anime Music Videos </p>

          </div>

          <div className="software-icons">

            <h3 style={{ color: darkMode ? '#000' : '#fff' }}> How we do? </h3>

            <div className='aaaaaaaaaaaaaaaaaa'>
              <p style={{ color: darkMode ? '#000' : '#fff' }}> simply speaking for cuts and effects I use After Effects 2020, Davinci for color correction, davinci's system for color correction is more complex, thus leaving the result much better, I use capcut for quick edits like shorts, the capcut helps you a lot so you can make quick and quality edits, guiding you a lot in the effects, and finally I use photoshop when I make the thumbs, or even masks for the MMV animations.
                compiling different animation scenes and adding high-quality editing and special effects to create original and completely new animation music videos. </p>
              <h3 style={{ color: darkMode ? '#000' : '#fff' }}> Softwares </h3>
            </div>

            <div className='ItadoriFri'>
              <div className='softwareIcons'>
                <div className='after-effects'><a href={'https://www.adobe.com/products/aftereffects.html'} target='_blank' rel="noreferrer" aria-label='Link para o site da adobe produto after effects'><img src={After} alt="After Effects 2020 logo" /></a></div>
                <div className='ps'><a href="https://www.adobe.com/products/photoshop.html" target='_blank'><img src={Ps} alt="Photoshop 2020 logo" /></a></div>
                <div className='davinci'><a href="https://www.blackmagicdesign.com/br/products/davinciresolve" target='_blank' rel="noreferrer"><img src={Davinci} alt="Davinci Logo" /></a></div>
                <a href="https://www.capcut.com/" target='_blank' rel="noreferrer"><img className='capcut' src={CapCut} alt="Capcut logo" /></a>
              </div>

              <img className='render' src={Render} alt="" />

            </div>
          </div>


        </div>


      </div>

    </div>
  )
}
