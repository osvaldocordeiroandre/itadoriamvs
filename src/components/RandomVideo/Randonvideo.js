import React from 'react'
import '../../components scss/randomvideo.scss'

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

export default function Randonvideo() {

  const videoUrls = [

    'https://youtu.be/y16StPq-Rm4',
    'https://youtu.be/Q8bpBJM77dE',
    'https://youtu.be/rZj7QKlqGig',
    'https://youtu.be/60ewJ2yEoNI',
    'https://www.youtube.com/watch?v=SqcUixL97d0',
    'https://www.youtube.com/watch?v=rZj7QKlqGig',
    'https://www.youtube.com/watch?v=60ewJ2yEoNI',
    'https://www.youtube.com/watch?v=pVDUSwCOAO0',
    'https://www.youtube.com/watch?v=-H9G7EzwShE',
    'https://www.youtube.com/watch?v=JokUMSmOxfg',
    'https://www.youtube.com/watch?v=Zu4KpfFoCow',
    'https://www.youtube.com/watch?v=E-UVvnaSVvw',
    'https://www.youtube.com/watch?v=KqtYrvbTKzU',
    'https://www.youtube.com/watch?v=067S_uyHD_Y',
    'https://www.youtube.com/watch?v=wNxRo7S73PQ',
    'https://www.youtube.com/watch?v=AvNkiJsM30s',
    'https://www.youtube.com/watch?v=c6YHXtHzvQg',
    'https://www.youtube.com/watch?v=12vU0ZxmVFY',

  ];

  const handleButtonClick = () => {
    const randomVideoindex = Math.floor(Math.random() * videoUrls.length);
    const randomVideoUrl = videoUrls[randomVideoindex];
    window.open(randomVideoUrl, '_blank');
  };

  return (

    <div className='randomvideo-container'>
      <button onClick={handleButtonClick}> <GiPerspectiveDiceSixFacesRandom color='white' size={19} /> </button>
    </div>

  )
}
