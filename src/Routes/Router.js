import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ActiveModeProvider } from '../context/Active'

import ScrollToTop from 'react-scroll-to-top'

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Error from '../Pages/Error/Error'
import Clips from '../Pages/Clips/clips'
import Header from '../components/Header/Header'

export default function RoutesApp() {

  window.addEventListener('keydown', function (e) {

    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {

      window.location.href = 'https://www.google.com'

    }

  });

  return (

    <>
      <BrowserRouter>

        <ActiveModeProvider>

          <Header />

          <ScrollToTop smooth />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Clips' element={<Clips />} />
            <Route path='*' element={<Error />} />
          </Routes>

        </ActiveModeProvider>



      </BrowserRouter>

    </>

  )
}
