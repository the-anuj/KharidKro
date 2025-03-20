import React from 'react'
import './About.css'
import Footer from '../../componets/Footer'
import story_img from "../../assets/story_img.jpg"
import mission_img from '../../assets/mission_img.jpg'

const About = () => {
  return (
    <div className='w-full about_div'>
      <div className='about w-full h-48 bg-slate-900 flex flex-col items-center justify-center text-white text-4xl underline'><span>AboutUs</span></div>
      <div className='py-30 flex flex-row justify-between'>
        <div className='w-full p-20'>
        <h2 className='text-4xl mb-7 text-yellow-300 drop-shadow-lg'>Story</h2>
        <div className='text-sm px-5'>Welcome to KHARID KARO! We’re more than just an eCommerce store – we’re a team of passionate individuals committed to bringing you high-quality [product type] that make a difference in your life.

Founded in [2025], our journey began with a simple idea: [briefly explain the inspiration behind starting your business]. What started as a small, local initiative has since grown into a thriving online store serving customers nationwide. Along the way, we've overcome challenges, learned valuable lessons, and built a loyal community of customers who trust us for [reason customers trust you].</div>
        </div>
        <div className='relative w-half h-full mr-20'>
          <div className='w-40 h-40 bg-amber-300 absolute -ml-20 -mt-20 rounded-md'></div>
        <img src={story_img} className='rounded-md size-90' alt="" />
        <div className='w-40 h-40 right-0 -mt-20 -mr-20 bg-amber-300 absolute rounded-md'></div>
        </div>
      </div>
      <div className=' flex flex-row gap-10 bg-gray-200 p-10 mb-12' >
        <div className='relative w-full h-full ml-10'>
        <div className='w-40 h-40 bg-amber-300 absolute -ml-20 -mt-20 rounded-md'></div>
        <img src={mission_img} className='size-90 rounded-md mr-10' alt="" />
        <div className='w-40 h-40 right-0 -mt-20 -mr-20 bg-amber-300 absolute rounded-md'></div>
      </div>
        <div className='py-20 px-10' >
          <h2 className='text-4xl mb-7 text-yellow-300 drop-shadow-lg'>Our Mission</h2>
          <div className='text-sm'>At KHARID KARO, our mission is to provide [products/services] that not only meet your needs but exceed your expectations. We believe in offering products that are [describe unique qualities of your products—whether it's high-quality, sustainable, innovative, or handcrafted]. Our goal is to help you [solve a problem, feel better, make life easier, etc.].</div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default About