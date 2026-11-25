import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSpotlight from '../components/HeroSpotlight'
import {Routes,Route}  from 'react-router-dom'
import Home from '../pages/Home'
import ShopFooter from '../components/ShopFooter'
import PrivacyPolicy from '../pages/Privacy'

const App = () => {
  
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/policies/privacy' element={<PrivacyPolicy />} />

   </Routes>
   <ShopFooter />
   </>
  )
}

export default App
