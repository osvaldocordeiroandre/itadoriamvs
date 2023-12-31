import React, { useState, useEffect, useContext } from 'react';

import '../../components scss/topAnimeList.scss'

import { motion } from 'framer-motion';

import axios from 'axios';

const TopAnimeList = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    // Fazer uma solicitação GET para a API Jikan.
    axios
      .get('https://api.jikan.moe/v4/seasons/now')
      .then((response) => {
        if (response.data.data) {
          setAnimeData(response.data.data);
        } else {
          console.error('Dados não encontrados na resposta da API Jikan');
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API Jikan', error);
      });

  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const openPopup = (src) => {
    setIframeSrc(src);
    setIsOpen(true);
  }

  const closePopup = () => {
    setIframeSrc("");
    setIsOpen(false);
    setIframeLoad(false);
  }

  const [iframeLoad, setIframeLoad] = useState(false)
  const [load, setLoad] = useState(false)

  const handleClickImage = () => {
    setLoad(true)
  }

  const handLoad = () => {
    setLoad(false)
    setIframeLoad(true);
  }

  const HandleonKeydown = (e) => {

    if (e.key === 'Escape') {
      closePopup();

    }

  };

  useEffect(() => {
    document.addEventListener('keydown', HandleonKeydown);

    return () => {
      document.removeEventListener('keydown', HandleonKeydown);
    };
    
  }, [closePopup]);

  return (
    <div className='trandingMain'>

      <motion.div className='carousel'>
        <motion.div className='inner' drag="x" dragConstraints={{ right: 400, left: -400 }}>
          {animeData.slice(0, 5).map((anime) => (

            <motion.div className='trandingArea' onClick={handleClickImage} key={anime.mal_id}>
              <img className='imagesCapa' width={'225px'} height={'318px'} onClick={() => openPopup(anime.trailer.embed_url)} src={anime.images.jpg.image_url} alt={anime.title} />
            </motion.div>

          ))}
        </motion.div>
      </motion.div>

      {load && (

        <div className="loadingOverlay">

          <span className="loader"></span>

        </div>

      )}

      {isOpen && (
        <div className="popup2" onLoad={handLoad} style={{ display: iframeLoad ? 'block' : "none" }}>

          <button onClick={closePopup} > X </button>

          <iframe src={iframeSrc} frameBorder="0" title='iframe for anime trailer vídeos' allowFullScreen></iframe>

        </div>
      )}

    </div>
  );
};

export default TopAnimeList;
