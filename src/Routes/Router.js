import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Error from '../Pages/Error/Error'
import Clips from '../Pages/Clips/clips'

export default function RoutesApp() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Clips' element={<Clips/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </BrowserRouter>

  )
}
