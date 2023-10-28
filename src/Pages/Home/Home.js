import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TopList from '../../components/TopAnimeList/Topanimelist'

import '../../components scss/home.scss'
import Slideshow from '../../Slide/Slide'

import { Link, NavLink } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

import LogoName from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import OneOh from '../../Assets/Partner Artists/3-One-Oh.webp'
import Caroline from '../../Assets/Partner Artists/Caroline.webp'
import Hurshel from '../../Assets/Partner Artists/Hurshel.webp'
import Neffex from '../../Assets/Partner Artists/NEFFEX.webp'
import Scott from '../../Assets/Partner Artists/Scott-the -pisces.webp'
import LoveNow from '../../Assets/new designer/love-me-now.png'
import Evertything from '../../Assets/new designer/everything-goes-on.png'
import OceanBlue from '../../Assets/new designer/ocean-blue.png'
import paradise from '../../Assets/new designer/so-this-is-paradise.png'
import Clipsimage from '../../Assets/new designer/clips.png'

import LogoItadori from '../../Assets/Imagens/itadori_amvs_pfp.webp'
import RenderIta from '../../Assets/Imagens/render_itadori.png'

export default function Home() {

  return (
    <div className="container">

      <ScrollToTop />

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

      {/*<div className='container-master-slide'>
        <div className='slides-area-container'>
          <Slideshow />
        </div>
  </div> */ }

      <main>

        <div className="image-itadori-main">


          <div className="new-images">

            <h2>Best amvs</h2>
            <div className='newDesignerContainer'>
              <div className="loveMeNow">
                <Link to={'https://youtu.be/wNxRo7S73PQ'} target='_blank'><img src={LoveNow} alt="love me now" /></Link>
              </div>
              <div className="everythingGoes">
                <Link to={'https://youtu.be/Zu4KpfFoCow'} target='_blank'><img src={Evertything} alt="everything" /></Link>
              </div>
            </div>

            <div className="mostPopularArea">
              <h2>Most popular</h2>

              <div className='popularVideos'>
                <div className="oceanBlue">
                  <Link to={'https://youtu.be/c6YHXtHzvQg'} target='_blank'><img src={OceanBlue} alt="ocean blue" /></Link>
                </div>
                <div className="paradise">
                  <Link to={'https://youtu.be/y-DXPpn23kg'} target='_blank'><img src={paradise} alt="paradise" /></Link>
                </div>
              </div>
            </div>

            <div className="clips">
              <div className="clipsImage">
                <NavLink to={'/clips'}><img src={Clipsimage} alt="clips" /></NavLink>
              </div>
            </div>
          </div>

          <div className="favorite-animes-container" >

            <h2 data-aos="fade-right" data-aos-duration="800">TRENDING ANIME NOW 🍿</h2>

            <div className="animes-favorite-image">

              <TopList/>

            </div>

          </div>

          <div className="span-text-container" >

            <div className="our-work">

              <img src={LogoName} className='LogoName' alt="" />

              <div className='h3area'>

                <h3>we are proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists.
                </h3>

              </div>

              <div>

                <NavLink to={'/about'}><button className='readMore'> READ MORE </button></NavLink>

              </div>

            </div>

            <div className="renderItadori">

              <img className='renderitadorimage' src={RenderIta} alt="render itadori" />

            </div>

          </div>


        </div>

        <div class="partnercontainerArea" >

        <div className="partners" > <h1> OUR FAVORITE MUSICIANS </h1> </div>

          <div className='slide-container-partners'>
            <div class="slide">
              <Link to={'https://www.youtube.com/@3OneOhOfficial'} target={'_blank'}><img src={OneOh} alt="Slide 1" /></Link>
              <span> 3 ONE OH </span>
            </div>
            <div class="slide">
              <Link to={'https://www.youtube.com/c/Carolinesmusic/featured'} target={'_blank'}><img className='left-space' src={Caroline} alt="Slide 2" /></Link>
              <span> CAROLINE </span>
            </div>
            <div class="slide">
              <Link to={'https://www.youtube.com/c/Hurshel'} target={'_blank'}><img className='left-space' src={Hurshel} alt="Slide 3" /></Link>
              <span> HURSHEL </span>
            </div>
            <div className="slide">
              <Link to={'https://www.youtube.com/user/neffexmusic'} target={'_blank'}><img className='left-space' src={Neffex} alt="Slide 4" /></Link>
              <span> NEFFEX </span>
            </div>
            <div className="slide">
              <Link to={'https://www.youtube.com/c/ScottThePisces'} target={'_blank'}><img className='left-space' src={Scott} alt="Slide 5" /></Link>
              <span> SCOTT THE PISCES </span>
            </div>
          </div>

        </div>


      </main>

      <Footer />


    </div>
  )
}
