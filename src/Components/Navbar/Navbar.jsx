import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
     <nav className='w-full text-white px-[10%]'>
         <img src={logo} className='w-[180px]' alt="" />
         <ul className='flex inline-block items-center outline-none gap-5 text-[15px] my-[5px] mx-[20px]'>
             <li>Home</li>
             <li>Program</li>
             <li>About Us</li>
             <li>Campus</li>
             <li>Testimonials</li>
             <li><button className='bg-[#fff] text-[#212121] py-[14px] px-[25px] text-[16px] rounded-3xl'>Contact us</button></li>
         </ul>
     </nav>
  )
}

export default Navbar