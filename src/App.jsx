import { useState } from 'react'
import { Navbar } from './component/Navbar'
import { About } from './component/About'
import Services from './component/Services'
import Home from './component/Home'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
