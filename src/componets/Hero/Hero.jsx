import React from 'react'
import Hero_img from '../Images/Hero.jpg'
import button from '../Images/button.png'
import { useNavigate } from 'react-router-dom'
import '../Hero/Hero.css'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <> 
      <div className='hero-bg'>
        <div id='hero_body' className='flex flex-row justify-between items-center'>
          <img id='hero_img' className='ml-16 rounded-xl shadow-xl' src={Hero_img} alt="Hero" />
          <div className='w-full'>
            <h1 id='hero_title' className='ml-14 text-4xl font-bold text-gray-800 mb-4'>
              KharidKaro - Your Ultimate Shopping Destination
            </h1>
            <p id='hero_para' className='ml-14 text-sm font-medium text-gray-700 max-w-xl leading-relaxed'>
              Discover the best products for your needs. Shop with confidence and enjoy exclusive deals every day!
            </p>
            <button onClick={()=>navigate('/about')} id='hero_page_button' className='font-bold cursor-pointer ml-14 mt-8 text-lg shadow-lg'>Explore more..</button>
          </div>
        </div>
        

      </div>

    </>
  )
}

export default Hero