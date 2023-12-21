import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Error from '../Pages/Error/Error'
import Clips from '../Pages/Clips/clips'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function RoutesApp() {

  window.addEventListener('keydown', function(e) {

    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {

      window.location.href = 'https://www.google.com'

    }

  });

  return (

    <>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Clips' element={<Clips />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer/>

      </BrowserRouter>

    </>

  )
}
