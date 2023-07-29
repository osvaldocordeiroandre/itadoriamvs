import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { MdDarkMode, MdFirstPage, MdLastPage } from 'react-icons/md';

import '../../components scss/clips.scss';
import Header from '../../components/Header/Header'

import ScrollToTop from 'react-scroll-to-top';

export default function Clips() {
  const [animes, setAnimes] = useState([
    { nome: 'Noragami Season 1 - Stray God', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134603113454633171/Noragami_Season_1_-_Stray_God.png', link: 'https://www.playbook.com/s/ajksz/4NLC16HDTiwP9XBtiHfKDgWk' },
    { nome: 'Noragami Season 2 - Aragato', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134603121008582686/Noragami_Season_2_-_Aragato.png', link: 'https://www.playbook.com/s/ajksz/VQd8d79JzaTTaLHr9g66fP9s' },
    { nome: 'Perfect Blue', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134603128789012510/Perfect_Blue.png', link: 'https://www.playbook.com/s/ajksz/VUBuKB72vmNBVAnYBsTWQyvW' },
    { nome: 'Plastic Memories Season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134603136087117945/Plastic_Memories.png', link: 'https://www.playbook.com/s/ajksz/9XqFch5rkNWPv6FXXdYsWQPf' },
    { nome: 'kyoukai no kanata season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134238745416179773/kyoukai_no_kanata_season_1.png', link: 'https://www.playbook.com/s/ajksz/CFdbjD4UC9GwTwZFMLjxSunV' },
    { nome: 'Megalo Box Season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134238757898424371/Megalo_Box_Season_1.png', link: 'https://www.playbook.com/s/ajksz/Gh2f9s6cWWZHcWicFNHMP3GE' },
    { nome: 'Mekakucity Actors', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134238769386618980/Mekakucity_Actors.png', link: 'https://www.playbook.com/s/ajksz/vmmnwRsgJ63v3UnmBKZTYRet' },
    { nome: 'Mob Psycho 100 Season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134238780258275409/Mob_Psycho_100_Season_1.png', link: 'https://www.playbook.com/s/ajksz/YxBx7KoXKPpT2sbN9dUNZoYn' },
    { nome: 'Kuroko no Basket Movie 4 - Last Game', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134197605841248337/Kuroko_no_Basket_Movie_4_-_Last_Game.png', link: 'https://www.playbook.com/s/ajksz/HuFzoZ2N1bEkTFM7hi7Ke6wq' },
    { nome: 'Kuroko no Basket Winter Cup Movie 1 - Kage to Hikari', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134197614557016074/Kuroko_no_Basket_Winter_Cup_Movie_1_-_Kage_to_Hikari.png', link: 'https://www.playbook.com/s/ajksz/DzYkrY5yKd5wcEiPdBZgcHhj' },
    { nome: 'Kuroko no Basket Winter Cup Movie 2 - Namida no Saki e', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134197623994191954/Kuroko_no_Basket_Winter_Cup_Movie_2_-_Namida_no_Saki_e.png', link: 'https://www.playbook.com/s/ajksz/vs8aN7eWEENZbU2HwsWq2ytN' },
    { nome: 'Kuroko no BasketWinter Cup Movie 3 - Tobira no Mukou', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1134197631099359302/Kuroko_no_BasketWinter_Cup_Movie_3_-_Tobira_no_Mukou.png', link: 'https://www.playbook.com/s/ajksz/gDJcC8zKbfnGA35tPeD6xapA' },
    { nome: 'Darling in the FranXX', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133573047165648896/Darling_in_the_FranXX.png', link: 'https://www.playbook.com/s/ajksz/HP3AiP7H93ZYwqW4AYMA1yqy' },
    { nome: 'Kiznaiver', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133573056833540177/Kiznaiver.png', link: 'https://www.playbook.com/s/ajksz/MAJYDXRofRfDoM3wwD76FcMg' },
    { nome: 'Koe no Katachi', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133573073698836610/Koe_no_Katachi.png', link: 'https://www.playbook.com/s/ajksz/zibQa916Aw9c1hgfu4HsxubA' },
    { nome: 'K-On! The Movie', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133573083719012413/K-On_The_Movie.png', link: 'https://www.playbook.com/s/ajksz/dxqN1M8a7MetBJmxKDUoo85L' },
    { nome: 'I Want To Eat Your Pancreas', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133206198783574076/I_want_to_eat_your_pancreas.png', link: 'https://www.playbook.com/s/ajksz/Z6YAttgbwBnKpJrmQ17XTfsB' },
    { nome: 'Jujutsu Kaisen Season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133206209038655538/Jujutsu_Kaisen_Season_1.png', link: 'https://www.playbook.com/s/ajksz/CaKP9pJ2ZmtNeML5VBcc6EdL' },
    { nome: 'K Project', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1133206219671207997/K_Project.png', link: 'https://www.playbook.com/s/ajksz/ihsqKbfJb6raceu5Zd7qYwgP' },
    { nome: 'Haikyuu!! Movie 1 - Owari to Hajimari', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132789961649819718/Haikyuu_Movie_1_-_Owari_to_Hajimari.png', link: 'https://www.playbook.com/s/ajksz/Eiig8DW39geUdkMjyqpyR127' },
    { nome: 'Haikyuu!! Movie 2 - Shousha to Haisha', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132789969476390932/Haikyuu_Movie_2_-_Shousha_to_Haisha.png', link: 'https://www.playbook.com/s/ajksz/Y9SEzLHsx8Qtq1jb9mnCiTQU' },
    { nome: 'Haikyuu!! Movie 3 - Sainou to Sense', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132789978364121189/Haikyuu_Movie_3_-_Sainou_to_Sense.png', link: 'https://www.playbook.com/s/ajksz/UBBwXu6bd6CtRwPEZmA6uUdq' },
    { nome: 'Haikyuu!! Movie 4 - Concept no Tatakai', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132789986203271289/Haikyuu_Movie_4_-_Concept_no_Tatakai.png', link: 'https://www.playbook.com/s/ajksz/mrr2waQhdKuQ6yfaZ2mtP1fd' },
    { nome: 'Black Lagoon', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132791464590589952/Black_Lagoon.png', link: 'https://www.playbook.com/s/ajksz/vWcT3S3ZcYL4Wj4WuoorFxbn' },
    { nome: 'Devilman Crybaby', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132791475957153883/Devilman_Crybaby.png', link: 'https://www.playbook.com/s/ajksz/vqzpVfURBStUcjEPSbU7j7x9' },
    { nome: 'Shingeki no Kyojin 1, Attack on Titan 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132759367230431304/Attack_on_Titan_Season_1.png', link: 'https://www.playbook.com/s/ajksz/X6vBUfS9v39dDUE22CWK8Y2C' },
    { nome: 'Shingeki no Kyojin 2, Attack on Titan 2', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132759377313546280/Attack_on_Titan_Season_2.png', link: 'https://www.playbook.com/s/ajksz/MC9iq94PJDg39dmFTAKjdZ8P' },
    { nome: 'Shingeki no Kyojin 3, Attack on Titan 3', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132759387593785494/Attack_on_Titan_Season_3.png', link: 'https://www.playbook.com/s/ajksz/waM4TpKgGZR6smcELRrhVGzL' },
    { nome: 'Shingeki no Kyojin 4, Attack on Titan 4', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1132759399132319775/Attack_on_Titan_Season_4.png', link: 'https://www.playbook.com/s/ajksz/dGjYBQ8TcqnRYAREGLwKkk4T' },
    { nome: 'Bersek Movie', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1130655362664648784/bersek.png', link: 'https://www.playbook.com/s/ajksz/Fme1L8hynLAYDkKpm7AFbcAp' },
    { nome: 'My Dress up Darling, Sono Bisque Doll wa Koi wo Suru ', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1130655388686102658/my-dress-up-darling.png', link: 'https://www.playbook.com/s/ajksz/73DWBU429xxnRGFKHQzwrDLj' },
    { nome: 'Your Name, Kimi no Na wa', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145183172165722/your-name.png', link: ' https://www.playbook.com/s/ajksz/Nzd9xrKqdEQjN8B2v6hQ1uzs ' },
    { nome: 'Arcane', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145133482266715/arcane.png', link: 'https://www.playbook.com/s/ajksz/TMpidTNxLZT59SWY3dEc5T1H' },
    { nome: 'Kakegurui Twin', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145145649934458/kakegurui-twin.png', link: 'https://www.playbook.com/s/ajksz/MF43YvbsRvs9E9BW6U7U3GUP' },
    { nome: 'One Punch Man Season 1', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145156001480785/one-punch-man-s1.png', link: 'https://www.playbook.com/s/ajksz/gnzJDEvHsB7w56Sijddh2Zg3' },
    { nome: 'One Punch Man Season 2', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145171667210281/one-punch-man-s2.png', link: 'https://www.playbook.com/s/ajksz/2qGScAbMLRgHvJ45bjTfbTv3' },
    { nome: 'Summer Ghost', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1117145178910752850/summer-ghost.png', link: 'https://www.playbook.com/s/ajksz/Q5y12Ku9ccKJoVbZbt18CZxh' },
    { nome: 'Bakemonogatari', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464221156417586/Bakemonogatari.png', link: 'https://www.playbook.com/s/ajksz/iHbgYQZpzzWrwVLPwnypucxK' },
    { nome: 'Nisemonogatari', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464236843126824/Nisemonogatari.png', link: 'https://www.playbook.com/s/ajksz/GwZNak6VXQrSrprZpY8yCdaF' },
    { nome: 'Kizumonogatari', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464244745175040/Kizumonogatari.png', link: 'https://www.playbook.com/s/ajksz/5epc7v3rs418TSDet7KtzpLu' },
    { nome: 'Another', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464252613709874/another.png', link: 'https://www.playbook.com/s/ajksz/GM299MEnvaXz1DPwhKwKbbnE' },
    { nome: 'Cowboy Bebop the movie', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464258682867752/Cowboy_Bebop_the_movie.png', link: 'https://www.playbook.com/s/ajksz/Gy5XrbaRD4AN5ZqiSvAgnNS7' },
    { nome: 'Fate Stay Night', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464266597519410/fate_stay_night.png', link: 'https://www.playbook.com/s/ajksz/Gqd9huytKrjWUwPoQrEmrKD7' },
    { nome: 'Komi-san wa, Komi Can t Communicate', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464275447488553/Komi_san.png', link: 'https://www.playbook.com/s/ajksz/FzVKExTfWvZV51wAEJfMpGqs' },
    { nome: 'shikimori s not just a cutie, Kawaii dake ja Nai Shikimori-san', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464286314926202/shikimoris_not_just_a_cutie.png', link: 'https://www.playbook.com/s/ajksz/htciweR7pGqWzbam5MszwaeZ' },
    { nome: 'White Album 2', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128464291448754218/white_album_2.png', link: 'https://www.playbook.com/s/ajksz/H5LPddNDSLXhNk9D5QYeaJ7D' },
    { nome: 'A Kite', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536793789235310/A_Kite.png', link: 'https://www.playbook.com/s/ajksz/xvE6knK38x7rHeusbVCgHxuR' },
    { nome: 'Ao Haru Ride', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536804321153065/Ao_Haru_Ride.png', link: 'https://www.playbook.com/s/ajksz/LvrBwWmf2Hsfp5YcLWCsZSpd' },
    { nome: 'Citrus', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536816107130890/Citrus.png', link: 'https://www.playbook.com/s/ajksz/eqHnKbDSdLsz6jopjA9KXkWu' },
    { nome: 'Demon Slayer', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536825791791144/Demon_Slayer.png', link: 'https://www.playbook.com/s/ajksz/yvFF8FbHQJWH4ngLrCKdvmob' },
    { nome: 'Gangsta', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536839779790941/Gangsta.png', link: 'https://www.playbook.com/s/ajksz/Ug1QLyq44qC8TMzePzzFPFKg' },
    { nome: 'Hyouka', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128536846461325402/Hyouka.png', link: 'https://www.playbook.com/s/ajksz/CXz2cW9soEq8EriStW5qBxcT' },
    { nome: '5 Centimeters per Second', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844213048578098/5_seconds_per_second.png', link: 'https://www.playbook.com/s/ajksz/xmKfDSZRksw1119g7mqgcR4b' },
    { nome: 'Afro Samurai', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844225618903121/Afro_Samurai.png', link: 'https://www.playbook.com/s/ajksz/HGnjR1G2euhtDr4W4VVWtiRg' },
    { nome: 'FLCL', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844254425382992/FLCL.png', link: 'https://www.playbook.com/s/ajksz/dt5YL24CpDPEGwYCkXnHdAoQ' },
    { nome: 'Erased', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844248440119336/Erased.png', link: 'https://www.playbook.com/s/ajksz/twxam1twoxAcHXECGvDezjfX' },
    { nome: 'Domestic Girlfriend', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844232858284152/Domestic_Girlfriend.png', link: 'https://www.playbook.com/s/ajksz/nfFp193i8XZFxmU8ocvEngHS' },
    { nome: 'Dusk Maiden of Amnesia', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844239191691334/Dusk_of_maiden_amnesia.png', link: 'https://www.playbook.com/s/ajksz/rwqGpDzGMEvsWorWc5uMVjDy' },
    { nome: 'Horimiya', imagem: 'https://cdn.discordapp.com/attachments/1117138599469666415/1128844260964323408/Horimiya.png', link: 'https://www.playbook.com/s/ajksz/hdjqXGF2BX6KHYTasHiHY6Vo' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('dark-mode');
  const [moonColor, setMoonColor] = useState('white');
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

  const AddTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);

    if (newTheme === 'light-mode') {

      document.body.style.background = 'white'

      document.getElementById('contagem').style.color = '#000000';


    } else if (newTheme === 'dark-mode') {

      document.body.style.background = '#242424'
      document.getElementById('contagem').style.color = '#FFFFFF';

    }
  }

  const AddMoonColor = () => {
    const newMooncolor = moonColor === 'white' ? 'black' : 'white'
    setMoonColor(newMooncolor)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value !== '' && filteredAnimes.length === 0) {
      setShowMensagem(true);
      document.getElementById('pagesid').style.display = 'none';
    } else if (e.target.value && filteredAnimes) {
      document.getElementById('pagesid').style.display = 'none';
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

  return (
    <div className={theme} onLoad={handleImageLoad} id='content-all'>

      {imagesLoaded && (
        <>
            <Header/>

          <div className='search-content'>
            <input className='search-part' type="text" name="" id="" placeholder='Anime name...' onChange={handleSearch} />
          </div>
        </>
      )}

      <div className="thememod" onClick={AddMoonColor} > <MdDarkMode fill={moonColor} onClick={AddTheme} cursor={'pointer'} size={20} /> </div>

      <ScrollToTop />

      {showmensagem && <p className='error-search'> Anime não encontrado... </p>}

      <div className='anime-space-content'>

        {animesPaginaAtual.map((anime) => (

          <div className='spance-capas' key={anime.nome}>

            <a href={anime.link} target='_blank' real="noopener noreferrer" ><img className='anime-images' src={anime.imagem} alt={anime.nome} /></a>

          </div>

        ))}

      </div>

      <div className="paginas" id='pagesid'>
        <button onClick={irParaPaginaAnterior} disabled={currentPage === 1} > <MdFirstPage fill='black' /> </button>
        <span id='contagem'>{`${currentPage} / ${totalPaginas}`}</span>
        <button onClick={irParaProximaPagina} disabled={currentPage === totalPaginas} > <MdLastPage fill='black' /> </button>
      </div>

    </div>
  );
}
