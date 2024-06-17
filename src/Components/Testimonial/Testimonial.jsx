import React from 'react'
import './Testimonial.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const Testimonial = () => {
  return (
    <div className="Testimonials">
        <img src={next_icon} className='next-btn' alt="" />
        <img src={back_icon} className='back-btn' alt="" />
    </div>
  )
}

export default Testimonial