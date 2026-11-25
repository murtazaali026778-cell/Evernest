import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSpotlight from '../components/HeroSpotlight'
import {Routes,Route}  from 'react-router-dom'
import Home from '../pages/Home.jsx'

const App = () => {
  
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />


   </Routes>
   </>
  )
}

export default App
