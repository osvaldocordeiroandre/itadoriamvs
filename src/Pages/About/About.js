import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import After from '../../Assets/Softwares/after.webp'
import Ps from '../../Assets/Softwares/ps-new-color.webp'
import Davinci from '../../Assets/Softwares/davinci-new-color.webp'
import CapCut from '../../Assets/Softwares/capcut-new-color.webp'
import Render from '../../Assets/Imagens/render-itadori.webp'

import '../../components scss/about.scss'
import ScrollToTop from 'react-scroll-to-top'

export default function About() {
  return (

    <div className='allaboutus'>

      <ScrollToTop />

      <Header />

      <div className="infos">

        <div className="textInfosArea">

          <div className="titleArea">

            <h3> Who we are </h3>

            <p> We are an AMV (anime music video) channel created in 2020 with the aim of bringing another way to enjoy animation, bringing together the two things that the YouTube audience loves most, music and animations, and inspiring people in this way </p>

            <h3> What we do? </h3>

            <p> ITADORI AMV's is proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists. All videos are edited in the highest quality which makes up different scenes from various free commercial animation images! thanks to the animation developers! <br /><br /> We have a team of Professional Editors focused on editing AMV's for over 8 years, our work has provided impactful narratives for all songs, giving visibility to countless unknown artists through the construction of their Anime Music Videos </p>

          </div>

          <div className="software-icons">

            <h3> How we do? </h3>

            <div className='aaaaaaaaaaaaaaaaaa'>
              <p> simply speaking for cuts and effects I use After Effects 2020, Davinci for color correction, davinci's system for color correction is more complex, thus leaving the result much better, I use capcut for quick edits like shorts, the capcut helps you a lot so you can make quick and quality edits, guiding you a lot in the effects, and finally I use photoshop when I make the thumbs, or even masks for the MMV animations.
                compiling different animation scenes and adding high-quality editing and special effects to create original and completely new animation music videos. </p>
              <h3> Softwares </h3>
            </div>

            <div className='ItadoriFri'>
              <div className='softwareIcons'>
                <div className='after-effects'><a href={'https://www.mediafire.com/file/rrx4mm4fbg7jf4l/Adobe.After.Effects.2020.v17.1.3.41.zip/file'} download={'https://www.mediafire.com/file/rrx4mm4fbg7jf4l/Adobe.After.Effects.2020.v17.1.3.41.zip/file'} target='_blank' rel="noreferrer"><img src={After} alt="After Effects 2020 logo" /></a></div>
                <div className='ps'><img src={Ps} alt="Photoshop 2020 logo" /></div>
                <div className='davinci'><a href="https://www.blackmagicdesign.com/br/products/davinciresolve" target='_blank' rel="noreferrer"><img src={Davinci} alt="Davinci Logo" /></a></div>
                <a href="https://www.capcut.com/" target='_blank' rel="noreferrer"><img className='capcut' src={CapCut} alt="Capcut logo" /></a>
              </div>

              <img className='render' src={Render} alt="" />

            </div>
          </div>


        </div>


      </div>

      <Footer />

    </div>
  )
}
