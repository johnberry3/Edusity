import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="div px-[10%] pt-[5%] ">
      <Title subTitle = 'Our Program' title='What we offer'/>
      <Program/>
      <About/>
      <Title subTitle = 'GALLERY' title='Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title='What Students Say'/>
      <Testimonial/>
      <Title subTitle = 'CONTACT' title='Get in Touch'/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
