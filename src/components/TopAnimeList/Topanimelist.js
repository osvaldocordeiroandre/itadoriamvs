import React, { useState, useEffect, useRef } from 'react';

import '../../components scss/topAnimeList.scss'

import { motion } from 'framer-motion';

import axios from 'axios';


const TopAnimeList = () => {
  const [animeData, setAnimeData] = useState([]);
  const [width, setWidth] = useState(0);

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

  return (
    <div className='trandingMain'>
      
        <motion.div className='carousel'>
          <motion.div className='inner' drag="x" dragConstraints={{right: 300, left: -300}}>
            {animeData.slice(0, 5).map((anime) => (

                <motion.div className='trandingArea' key={anime.mel_id}>
                    <a href={anime.trailer.url} target='_blank'><img className='imagesCapa' src={anime.images.jpg.image_url} alt={anime.title} /></a>
                </motion.div>
          
            ))}
          </motion.div>
        </motion.div>
      
    </div>
  );
};

export default TopAnimeList;
