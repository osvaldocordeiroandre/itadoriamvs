import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import '../../components scss/home.scss'
import Slideshow from '../../Slide/Slide'

import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

import LogoName from '../../Assets/Imagens/Itadori_Logo_braca.webp'
import OneOh from '../../Assets/Partner Artists/3-One-Oh.webp'
import Caroline from '../../Assets/Partner Artists/Caroline.webp'
import Hurshel from '../../Assets/Partner Artists/Hurshel.webp'
import Neffex from '../../Assets/Partner Artists/NEFFEX.webp'
import Scott from '../../Assets/Partner Artists/Scott-the -pisces.webp'

export default function Home() {

  return (
    <div className="container">

      <ScrollToTop />

      <Header />

      <div className='container-master-slide'>
        <div className='slides-area-container'>
          <Slideshow />
        </div>
      </div>

      <main>

        <div className="image-itadori-main">

          <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}><img className='LogoName' src={LogoName} alt="Logo branca ITADORI AMV'S" /></Link>
          <div className="text-itadori-area">

            <p> If you still don't know my AMVs (Anime Music Videos) channel, I invite you to click on this <Link className='link-color' to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}>link</Link> to learn a little more about it and subscribe so you don't miss any new videos! </p> <br />
            <p> On my channel, I share amazing AMV videos with the best anime music and scenes. I strive to create high quality content and provide a unique experience for viewers. </p>

          </div>

          <div className="our-animes-text">  <p>In case you wonder what our favorite animes are, here are 4 animes that you will really like, they are our favorite animes from the old days, so I hope you like them if you watch them, if you want to have more information about animes, click on their image ♥</p> <br /> <h2 data-aos="fade-right" data-aos-duration="800">Favorite Animes 🍿</h2>  </div>

          <div className="favorite-animes-container" >

            <div className="animes-favorite-image">

              <div className="favorite-anime-image">
                <Link to={'https://myanimelist.net/anime/19815/No_Game_No_Life?q=no%20game%20no%20life&cat=anime'} target={'_blank'}><img src="https://cdn.discordapp.com/attachments/1135126287283920896/1135126458419916871/nogame-nolife-test.webp" alt="capa de no game no life" /></Link>
                <p>No Game No Life</p>
              </div>

              <div className="favorite-anime-image">
                <Link to={'https://myanimelist.net/anime/2001/Tengen_Toppa_Gurren_Lagann?q=Tengen%20Toppa%20Gurren-Lagann&cat=anime'} target={'_blank'}><img src="https://cdn.discordapp.com/attachments/1135126287283920896/1135126465172746321/tengen-test.webp" alt="capa de Tengen Toppa Gurren-Lagann" /></Link>
                <p>Tengen Toppa Gurren-Lagann</p>
              </div>

              <div className="favorite-anime-image">
                <Link to={'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=Full%20Metal%20a&cat=anime'} target='_blank'><img src="https://cdn.discordapp.com/attachments/1135126287283920896/1135126444083777546/fullmetal-test.webp" alt="capa de Full Metal" /></Link>
                <p>Fullmetal Alchemist</p>
              </div>

              <div className="favorite-anime-image">
                <Link to={'https://myanimelist.net/anime/47917/Bocchi_the_Rock?q=bocchi&cat=anime'} target='_blank'><img src="https://cdn.discordapp.com/attachments/1135126287283920896/1135126436185919519/bocchi-test.webp" alt="capa de Bocchi the Rock!" /></Link>
                <p>Bocchi the Rock!</p>
              </div>

            </div>

          </div>

          <div className="span-text-container" >
            <div className="our-work"> <h1> Who are we? </h1> </div>

            <div className="who-are-we-text"> <span> ITADORI AMV's is proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists. All videos are edited in the highest quality which makes up different scenes from various free commercial animation images! thanks to the animation developers! <br /> <br /> We have a team of Professional Editors focused on editing AMV's for over 8 years, our work has provided impactful narratives for all songs, giving visibility to countless unknown artists through the construction of their Anime Music Videos. <br /> <br /> My goal is to bring another way to enjoy animation by bringing together the two things that youtube audiences love the most, music and animations, and inspire people in that way. <br /> <br /> Want to know what's new in the animation industry? Watch this channel. Want to discover new artists and music genres to listen to? Our channel brings all this and more to you!
            </span> </div>
          </div>

          <div className="partners-text"> <p>If you are looking for great singers, who put all their feelings into their songs, here are our favorite singers, we use their songs in all our videos, they are very talented singers, it's worth listening to all their songs ♥</p> </div>

        </div>

        <div className="partners" > <h1> Our Favorite Musicians </h1> </div>

        <div class="slide-container-partners" >

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

        <div className="amv-text-area">

          <div className="amv-text">

          <h2> Amv </h2>

            <span> These audiovisual creations called AMVs, or Anime Music Videos, go deeper than just slicing and chopping anime scenes to the rhythm of music. They are true masterpieces, skillfully crafted by harmonizing various components such as effects, storyline, synchronization, lyrics, and the overarching narrative envisioned by the editor.

              <br />
              <br />

              Highlighting the artistic prowess of AMV editors, it is essential to acknowledge their ability to visually tell stories. With a special talent for selecting perfect scenes, they effortlessly weave an exciting and cohesive narrative. Each scene acts as a brushstroke, coming together to form an unparalleled masterpiece.

              <br />
              <br />

              Creating a captivating experience for the viewer is another crucial element of AMVs: synchronization. Editors must meticulously adjust each cut and effect to match the rhythm of the selected music, resulting in an immersive fusion. When executed masterfully, this synchronization transports the audience, making them feel as if the scenes were precisely choreographed to the music, allowing them to be truly immersed in the universe created by the editor.

              <br />
              <br />

              Adding layers of meaning to the chosen visuals, the words of the music can guide the flow of the edit and evoke specific emotions and feelings. The lyrics of the music serve as an essential element for the narrative of AMVs, providing inspiration for editors to build the story they want to tell.

              <br />
              <br />

              Visual effects are another distinctive feature of AMVs. Ranging in complexity, they can range from simple adjustments to complex animations and unique transitions. These effects serve to elevate the emotional resonance of the edit, injecting an element of individuality and elegance into the final product.

              <br />
              <br />

              AMVs are like an open window to creativity. They allow creators to craft unique narratives that transcend the boundaries of the source material. Whether revealing personal emotions, sharing meaningful messages, or reflecting on our own experiences, AMVs become a canvas for true artistic expression.

              <br />
              <br />

              The creation of AMVs would be incomplete without recognizing the importance of audio. Like the beating heart, music breathes life into these works, making the careful selection of the soundtrack vital. It sets the tone and keeps the audience captivated throughout the entire editing process.
            </span>

          </div>

        </div>

      </main>

      <Footer />


    </div>
  )
}
