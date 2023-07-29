import React from 'react'
import '../../components scss/randomvideo.scss'

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

export default function Randonvideo() {

    const videoUrls = [

        'https://www.youtube.com/watch?v=067S_uyHD_Y',
        'https://www.youtube.com/watch?v=wNxRo7S73PQ',
        'https://www.youtube.com/watch?v=AvNkiJsM30s',
        'https://www.youtube.com/watch?v=Qp4EgujQR8Q',
        'https://www.youtube.com/watch?v=9nEURPGRBiM',
        'https://www.youtube.com/watch?v=rIHRKNGLHy4',
        'https://www.youtube.com/watch?v=c6YHXtHzvQg',
        'https://www.youtube.com/watch?v=kbemT8URwzE',
        'https://www.youtube.com/watch?v=746Hi3nHm84',
        'https://www.youtube.com/watch?v=99rxlCwC070',
        'https://www.youtube.com/watch?v=q7-NPDQ6YA4',
        'https://www.youtube.com/watch?v=12vU0ZxmVFY'

    ];

    const handleButtonClick = () => {
        const randomVideoindex = Math.floor(Math.random() * videoUrls.length);
        const randomVideoUrl = videoUrls[randomVideoindex];
        window.open(randomVideoUrl, '_blank');
    };

  return (
    
    <div className='randomvideo-container'>
        <button onClick={handleButtonClick}> <GiPerspectiveDiceSixFacesRandom color='white' size={19}/> </button>
    </div>

  )
}
