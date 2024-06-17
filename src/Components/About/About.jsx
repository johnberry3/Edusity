import React from 'react'
import './About.css'
import about_img  from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about_left relative">
            <img src={about_img} className='rounded-lg' alt="" />
            <img src={play_icon} className='absolute top-[43%] w-[80px] left-[43%] right-0 bottom-0 ' alt="" />
        </div>
        <div className="about_right">
            <h3 className='font-bold text-[#212ea0] text-2xl'>ABOUT UNIVERSITY</h3>
            <h2 className='font-semibold text-[#000f38] text-lg'>Nurturing Tommorrow's leaders Today</h2>
            <p>Embark on a tranformative educational journey with our university's comprehensive education programs. Our cutting edge curriculum is designed to empower students with the knowledge skill and experiences need to excel in the dynamic field of  education.</p>
            <p>With a focus on innovation, hands on learning, and personalized mentorship, our programs prepare aspiring educator to make meaningful impact in classrooms, schools and communities</p>
            <p>Whether you are aspiring to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potentials in shaping the future of education </p>
        </div>
    </div>
  )
}

export default About