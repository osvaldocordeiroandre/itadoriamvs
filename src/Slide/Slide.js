import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import '../components scss/slide.scss'

const Slideshow = () => {
  const slideImages = [
    {
      url: 'https://embed-ssl.wistia.com/deliveries/c0efbb44c3054a430a9c9e4155471cd07023a9bb.bin',
      videoUrl: 'https://youtu.be/067S_uyHD_Y'
    },
    {
      url: 'https://embed-ssl.wistia.com/deliveries/89840e16b790a0036d6a697e819737e37cf71bc1.bin',
      videoUrl: 'https://youtu.be/rIHRKNGLHy4'
    },
    {
      url: 'https://embed-ssl.wistia.com/deliveries/0e572005608b48243d1fef72730a4f8a1316e4bf.bin',
      videoUrl: 'https://youtu.be/wNxRo7S73PQ'
    }
  ];

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slide, index) => (
          <div key={index} className="each-slide">
            <a href={slide.videoUrl} target="_blank" rel="noreferrer">
              <div className='adjust' style={{'backgroundImage': `url(${slide.url})`}}>
              </div>
            </a>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
