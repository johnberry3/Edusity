import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

         const [toast, setToast] = useState("")


         const handleSubmit = async(event) =>{
             event.preventDefault();
             setToast("sending......")

             const formData = new FormData(event.target)

             formData.append("accessKey", 81449242494 )

             const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
             }).then((res) => res.json())

             if(res.success){
                  console.log("Sucess", res)
                  setToast(res.message)
             } else{
               console.log("Error", res)
               setToast(res.message)
             }
         }
  return (
    <div className="contact flex justify-between max-xl:flex-col max-xl:gap-10  items-center">
         <div className="contact-col flex flex-col   basis-[41%]">
            <h3 className='text-2xl mb-4 flex gap-3 items-start font-semibold text-[#212ea0]'>Send us a message <img src={msg_icon} className='w-7' alt="" /></h3>
            <h2 className='text-[#676767] mb-4'>Feel fee to reach us through contact form or find  our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</h2>
            <ul className='contactIcon flex flex-col gap-4'>
                <li><img src={mail_icon} alt="" />jmalachy727@gmail.com</li>
                <li><img src={phone_icon} alt="" />+234 919215567</li>
                <li><img src={location_icon} alt="" />Geogia street 123, Abuja Nigeria</li>
            </ul>
         </div>
         <div className="contact-col flex flex-col basis-[41%]">
              <form action="" onSubmit={handleSubmit}>
                  <label htmlFor="">Your name</label>
                  <input type="text" name='name' placeholder='Enter Your name' required />
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" name="Phone Number" id="" placeholder='Enter Your phone number' required />
                  <label htmlFor="">Write your messages here</label>
                  <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                  <button type='submit' className='submitBtn bg-[#212ea0] text-white'>Submit</button>
              </form>
              <span>{toast}</span>
         </div>
    </div>
  )
}

export default Contact