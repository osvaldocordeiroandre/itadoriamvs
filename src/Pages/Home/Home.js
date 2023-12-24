import TopList from '../../components/TopAnimeList/Topanimelist'

import '../../components scss/home.scss'

import { Link, NavLink } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

import LogoName from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import LogoBlack from '../../Assets/Imagens/Itadori_Logo_black.webp'
import LoveNow from '../../Assets/new designer/love-me-now.webp'
import Evertything from '../../Assets/new designer/everything-goes-on.webp'
import OceanBlue from '../../Assets/new designer/ocean-blue.webp'
import paradise from '../../Assets/new designer/so-this-is-paradise.webp'
import Clipsimage from '../../Assets/new designer/clipsV2.webp'

import LogoItadori from '../../Assets/Imagens/itadori_amvs_pfpV2.webp'
import RenderIta from '../../Assets/Imagens/render-itadori.webp'

import Footer from '../../components/Footer/Footer'

import partnersAll from '../../Assets/Data/Partners'

import { motion } from 'framer-motion'
import { useContext } from 'react'
import { DarkModeContext } from '../../context'
import { ActiveModeContext } from '../../context/Active'

export default function Home() {

  const [darkMode] = useContext(DarkModeContext);
  const [activeLink, setActiveLink] = useContext(ActiveModeContext);

  return (
    <div className="container" style={{ backgroundColor : darkMode ? '#fff' : '#1a1a1a' }}>

      <ScrollToTop />

      <div className="video-itadori">
        <div className='itadoall'>

          <Link to={'https://www.youtube.com/c/ITADORIAMVs'} target='_blank' aria-label='Link para o canal do Youtube itadori amvs'><img className='itadori-logo' src={LogoItadori} width={'100%'} height={'100%'} alt="Logo com personagem itadori de jujutsu kaisen" /></Link>

          <div className="itadori-message">

            <h1 className='channelName' title='Nome do canal' > <strong> ITADORI AMV'S </strong> </h1>
            <h3 className='h3message' title='Mensagem para motivar os editores' > We bring another way to enjoy animations! </h3>

          </div>

          <div className="itadori-analustic">

            <h2 className='itadoriAnalystic' title='dados do canal' ><strong>analytics</strong> 📊</h2>
            <h1 className='dados' title='numero de inscritos e viws' > <strong> 📺 80k+ subscribers <br /> 👀 22M+ views </strong> </h1>

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

            <h2 style={{ color: darkMode ? '#000' : '#fff' }} title='titulo sobre os melores amv'>BEST AMVS</h2>
            <div className='newDesignerContainer'>
              <div className="loveMeNow">
                <Link to={'https://youtu.be/wNxRo7S73PQ'} target='_blank'><img src={LoveNow} width={'100%'} height={'100%'} alt="love me now" /></Link>
              </div>
              <div className="everythingGoes">
                <Link to={'https://youtu.be/Zu4KpfFoCow'} target='_blank'><img src={Evertything} width={'100%'} height={'100%'} alt="everything" /></Link>
              </div>
            </div>

            <div className="mostPopularArea">
              <h2 style={{ color: darkMode ? '#000' : '#fff' }} title='videos mais populares do canal' >MOST POPULAR</h2>

              <div className='popularVideos'>
                <div className="oceanBlue">
                  <Link to={'https://youtu.be/c6YHXtHzvQg'} target='_blank'><img src={OceanBlue} width={'100%'} height={'100%'} alt="ocean blue" /></Link>
                </div>
                <div className="paradise">
                  <Link to={'https://youtu.be/y-DXPpn23kg'} target='_blank'><img src={paradise} width={'100%'} height={'100%'} alt="paradise" /></Link>
                </div>
              </div>
            </div>

            <div className="clips">
              <div className="clipsImage">
                <NavLink to={'/Clips'}><img src={Clipsimage} onClick={() => setActiveLink('/Clips')} width={'100%'} height={'100%'} alt="clips" /></NavLink>
              </div>
            </div>
          </div>

          <div className="favorite-animes-container" >

            <h2 style={{ color: darkMode ? '#000' : '#fff' }} title='animes em alta neste temporada' >TRENDING ANIME NOW 🍿</h2>

            <div className="animes-favorite-image">

              <TopList/>

            </div>

          </div>

          <div className="span-text-container" >

            <div className="our-work">

            {darkMode ? ( <img className='name-logo' width={'100%'} height={'100%'} src={LogoBlack} alt="Logo itadori amv's branca" /> ) : (<img className='name-logo' src={LogoName} width={'100%'} height={'100%'} alt="Logo itadori amv's branca" />)}

              <div className='h3area'>

                <h3 style={{ color: darkMode ? '#000' : '#fff' }} title='texto explicando como adicionando um valor unico ao nossos vídeos' >we are proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists.
                </h3>

              </div>

              <div>

                <NavLink to={'/About'} aria-label='Link para a area about do site itadoriamv'><button className='readMore' onClick={() => setActiveLink('/About') } aria-label='botão clickavel para ir para o read more' > READ MORE </button></NavLink>

              </div>

            </div>

            <div className="renderItadori">

              <Link to={'https://www.youtube.com/c/ITADORIAMVs'} target='_blank' aria-label='Link para o canal do youtube itadori amvs'><img className='renderitadorimage' src={RenderIta} width={'100%'} height={'100%'} alt="render itadori" /></Link>

            </div>

          </div>


        </div>

        <div className="partnercontainerArea" >

        <div className="partners" > <h1 style={{ color: darkMode ? '#000' : '#fff' }}> OUR FAVORITE MUSICIANS </h1> </div>

          <div className='slide-container-partners'>
            <motion.div className='carousel'>
              <motion.div className='inner' drag="x" dragConstraints={{right:50, left: -700}}>
                
                {partnersAll.map((allpart) => (

                  <motion.div className='item' key={allpart.nome}>

                    <div className="slide">

                      <a href={allpart.link} target='_blank' rel='noreferrer' aria-label='Links para o canal do youtube do cantor'><img src={allpart.imagem} width={'100%'} height={'100%'} className='naosei' alt="" /></a>

                      <span> {allpart.nome} </span>

                    </div>

                  </motion.div>

                ))}
                
              </motion.div>
            </motion.div>
          </div>

        </div>

        <Footer />


      </main>


    </div>
  )
}
