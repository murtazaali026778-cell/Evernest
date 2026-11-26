import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSpotlight from '../components/HeroSpotlight'
import {Routes,Route}  from 'react-router-dom'
import Home from '../pages/Home'
import ShopFooter from '../components/ShopFooter'
import PrivacyPolicy from '../pages/Privacy'
import Terms from '../pages/Terms'

const App = () => {
  
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/policies/privacy' element={<PrivacyPolicy />} />
    <Route path='/policies/termsandconditions' element={<Terms />} />
    


   </Routes>
   <ShopFooter />
   </>
  )
}

export default App
