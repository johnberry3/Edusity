import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-text px-[10%] justify-center flex flex-col items-center gap-4">
          <h1 className=' font-semibold text-center '>We Ensure better education for a better World</h1>
          <p className='leading-7 text-center'>Our Cutting_edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
          <button className='bg-[#fff] font-semibold text-[#212121] gap-5 flex items-center py-[14px] px-[25px] text-[16px] rounded-3xl'>Explore more <img className='w-7' src={dark_arrow} alt="" /></button>
       </div>
    </div>
  )
}

export default Hero