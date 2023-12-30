import React, { useContext } from 'react'
import '../../components scss/randomvideo.scss'

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { DarkModeContext } from '../../context';

import videoUrls from '../../Assets/Data/videoUrls';

export default function Randonvideo() {

  const handleButtonClick = () => {
    const randomVideoindex = Math.floor(Math.random() * videoUrls.length);
    const randomVideoUrl = videoUrls[randomVideoindex];
    window.open(randomVideoUrl, '_blank');
  };

  const [darkMode] = useContext(DarkModeContext);

  return (

    <div className='randomvideo-container'>
      <button onClick={handleButtonClick} title='botão para gerar vídeo aleatorio do meu canal itadori amv'> <GiPerspectiveDiceSixFacesRandom title='Icone de um dado' color='white' fill={darkMode ? 'black' : 'white'} size={19} /> </button>
    </div>

  )
}
