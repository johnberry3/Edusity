import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className="contact flex justify-center  items-center">
         <div className="contact-col flex flex-col   basis-[41%]">
            <h3 className='text-2xl flex gap-3 items-start font-semibold text-[#212ea0]'>Send us a message <img src={msg_icon} className='w-7' alt="" /></h3>
            <h2 className='text-[#676767] mb-4'>Feel fee to reach us through contact form or find  our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</h2>
            <ul className='flex flex-col gap-4'>
                <li>jmalachy727@gmail.com</li>
                <li>+234 919215567</li>
                <li>Geogia street 123, Abuja Nigeria</li>
            </ul>
         </div>
         <div className="contact-col">

         </div>
    </div>
  )
}

export default Contact