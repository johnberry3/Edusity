import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="div px-[10%] pt-[5%] ">
      <Title subTitle = 'Our Program' title='What we offer'/>
      <Program/>
      <About/>
      </div>
    </div>
  )
}

export default App
