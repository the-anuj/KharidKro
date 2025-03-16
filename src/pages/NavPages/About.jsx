import React from 'react'
import './About.css'
import Footer from '../../componets/Footer'
import story_img from "../../assets/story_img.jpg"
import mission_img from '../../assets/mission_img.jpg'

const About = () => {
  return (
    <div className='w-full about_div'>
      <div className='about w-full h-48 bg-slate-900 flex flex-col items-center justify-center text-white text-4xl underline'><span>AboutUs</span></div>
      <div className='p-5 flex flex-row'>
        <div className='p-20'>
        <h2 className='text-4xl mb-7 text-yellow-300 drop-shadow-lg'>Story</h2>
        <div className='text-sm'>Welcome to KHARID KARO! We’re more than just an eCommerce store – we’re a team of passionate individuals committed to bringing you high-quality [product type] that make a difference in your life.

Founded in [2025], our journey began with a simple idea: [briefly explain the inspiration behind starting your business]. What started as a small, local initiative has since grown into a thriving online store serving customers nationwide. Along the way, we've overcome challenges, learned valuable lessons, and built a loyal community of customers who trust us for [reason customers trust you].</div>
        </div>
        <img src={story_img} className='size-96 rounded-md mr-10' alt="" />
      </div>
      <div className='p-5 flex flex-row bg-gray-200' >
      <img src={mission_img} className='size-90 rounded-md mr-10' alt="" />
        <div className='p-20' >
          <h2 className='text-4xl mb-7 text-yellow-300 drop-shadow-lg'>Our Mission</h2>
          <div className='text-sm'>At KHARID KARO, our mission is to provide [products/services] that not only meet your needs but exceed your expectations. We believe in offering products that are [describe unique qualities of your products—whether it's high-quality, sustainable, innovative, or handcrafted]. Our goal is to help you [solve a problem, feel better, make life easier, etc.].</div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default About