import React, { useState, useEffect, useContext } from 'react';

import { MdFirstPage, MdLastPage } from 'react-icons/md';

import '../../components scss/clips.scss';

import itadorin from '../../Assets/Imagens/itadori-teach.webp'

import { DarkModeContext } from '../../context';

import animes from '../../Assets/Data/AnimesData'


export default function Clips() {

  const [searchTerm, setSearchTerm] = useState('');
  const [showmensagem, setShowMensagem] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.anime-images');

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        image.classList.toggle('hidden', !isVisible)
      })
    }

    window.addEventListener('scroll', handleScroll);

  }, []);

  const handleImageLoad = () => {
    const images = document.querySelectorAll('.anime-images');
    const allImagesLoades = Array.from(images).every((image) => image.complete);

    if (allImagesLoades) {
      setImagesLoaded(true);
    }
  }

  const handleSearch = (e) => {
    
    setSearchTerm(e.target.value);

    if (e.target.value !== '' && filteredAnimes.length === 0) {
      setShowMensagem(true);

      document.getElementById('pagesid').style.display = 'none';
    } else if (e.target.value && filteredAnimes) {
      document.getElementById('pagesid').style.display = 'none';
      setShowMensagem(false);

    }
    else {
      setShowMensagem(false)
      document.getElementById('pagesid').style.display = 'block';
    }
    
  };

  const filteredAnimes = animes.filter((anime) => anime.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  const itenPorPagina = 40;
  const totalPaginas = Math.ceil(filteredAnimes.length / itenPorPagina);
  const indexInicio = (currentPage - 1) * itenPorPagina;
  const indexFim = indexInicio + itenPorPagina;
  const animesPaginaAtual = filteredAnimes.slice(indexInicio, indexFim);

  const irParaPaginaAnterior = () => {
    setCurrentPage((paginaAnterior) => Math.max(paginaAnterior - 1, 1))
  }

  const irParaProximaPagina = () => {
    setCurrentPage((proximaPagina) => Math.min(proximaPagina + 1, totalPaginas))
  }

  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [itadorinOpen, setItadorinOpen] = useState(true)

  const removeItadorin = () => {
    setItadorinOpen(false)
  }

  const openPopup = (src) => {
    setIframeSrc(src);
    setIsOpen(true)
  }

  const closePopup = () => {
    setIframeSrc("");
    setIsOpen(false);
    setIframeLoad(false)
    setItadorinOpen(true)
  }

  const [load, setLoad] = useState(false);
  const [iframeLoad, setIframeLoad] = useState(false)
  const [loading, setLoading] = useState(true)
  const [contentLoading, setContentLoading] = useState(false)

  const handleLoading = () => {
    setLoading(false)
    setContentLoading(true)
  }

  const handleClickImage = () => {

    setLoad(true)

  }

  const handLoad = () => {
    setIframeLoad(true)
    setLoad(false)
  }

  const HandleonKeydown = (e) => {

    if (e.key === 'Escape') {
      closePopup();

    }

  };

  const HandleArrow = (e) => {

    if (e.key === 'ArrowRight') {
      irParaProximaPagina();
    } else if (e.key === 'ArrowLeft') {
      irParaPaginaAnterior();
    }


  }

  useEffect(() => {

    document.addEventListener('keydown', HandleonKeydown);

    document.addEventListener('keydown', HandleArrow);

    return () => {
      document.removeEventListener('keydown', HandleonKeydown);
      document.removeEventListener('keydown', HandleArrow);
    };
  }, [HandleArrow]);

  const [darkMode] = useContext(DarkModeContext);

  return (
    <div onLoad={handleImageLoad} id='content-all' style={{ backgroundColor: darkMode ? '#fff' : '#1a1a1a' }} >

      {imagesLoaded && (
        <>

          <div className='search-content'>
            <input className='search-part' type="text" name="" id="" placeholder='Anime name...' onChange={handleSearch} />
          </div>
        </>
      )}

      {showmensagem && <p className='error-search'> Anime not found... </p>}

      {loading && (

        <div className="loadingOverlay">

          loading...

        </div>

      )}

      <div className='anime-space-content' onLoad={handleLoading} style={{ display: contentLoading ? 'flex' : 'none' }}>

        <div className="paginas" id='pagesid'>
          <button onClick={irParaPaginaAnterior} disabled={currentPage === 1} > <MdFirstPage fill='black' /> </button>
          <span id='contagem'>{`${currentPage} / ${totalPaginas}`}</span>
          <button onClick={irParaProximaPagina} disabled={currentPage === totalPaginas} > <MdLastPage fill='black' /> </button>
        </div>

        {animesPaginaAtual.map((anime) => (

          <div className='spance-capas' onClick={handleClickImage} key={anime.id}>

            <img className='anime-images' width={'100%'} height={'100%'} onClick={() => openPopup(anime.link)} src={anime.imagem} alt={anime.nome} />

          </div>



        ))}

        {load && (

          <div className="loadingOverlay">

            <span className="loader"></span>

          </div>

        )}

        {isOpen && (
          <div className="popup" onLoad={handLoad} style={{ display: iframeLoad ? 'block' : "none" }}>

            <div className='addanimaiton' >

              <img src={itadorin} className='teach' alt="como fazer download dos clips" onLoad={handLoad} style={{ display: itadorinOpen ? 'block' : 'none' }} />

              <button onClick={removeItadorin}> X </button>

            </div>

            <button onClick={closePopup}> X </button>

            <iframe src={iframeSrc} frameBorder="0" title='clips area' ></iframe>

          </div>
        )}

      </div>

    </div>
  );
}
