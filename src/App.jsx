import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Section'
import GroupExample from './Cards'
import IndustryGrid from './Industries'
import International from './International'
import Portfolio from './Portfolio'
import TestimonialsCarousel from './TestimonialsCarousel'
import FillExample from './Fill'
import Get from './Get'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <GroupExample/>
      <IndustryGrid/>
      <International/>
      <Portfolio/>
    
      <TestimonialsCarousel/>
  <FillExample/>
  <Get/>
  <Footer/>
    </div>

  )
}

export default App