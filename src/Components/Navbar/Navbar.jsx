import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import Menu from '../../assets/menu-icon.png'

const Navbar = () => {
    
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
         window.scrollY > 200? setSticky(true):setSticky(false);
      }, [])
  })

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () =>{
      mobileMenu?setMobileMenu(false): setMobileMenu(true);
  }

  return (
     <nav className={`w-full text-white px-[10%] max-xl:px-[6%] max-xl:py-4   ${sticky?'dark-nav': ''}`}>
         <img src={logo} className='w-[180px] max-xl:w-[160px]' alt="" />
         <ul className={`flex inline-block ${mobileMenu?'' : 'hide-menu'}  items-center outline-none gap-5  text-[15px] max-xl:my-[0px] max-xl:mx-[0px] my-[5px] mx-[20px]`}>
             <li>Home</li>
             <li>Program</li>
             <li>About Us</li>
             <li>Campus</li>
             <li>Testimonials</li>
             <li><button className='bg-[#fff] text-[#212121] py-[14px] px-[25px] text-[16px] rounded-3xl'>Contact us</button></li>
         </ul>
         <div className='menu'>
             <img src={Menu}  className='w-9 cursor-pointer' onClick={toggleMenu} alt="" />
         </div>
     </nav>
  )
}

export default Navbar