import React from 'react'
import Hero_img from '../Images/Hero.png'
import button from '../Images/button.png'
import { useNavigate } from 'react-router-dom'
import '../Hero/Hero.css'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <> 
      <div className='bg-slate-900 text-white'>
        <div id='hero_body' className='flex felx-row justify-between '>
          <div className='w-full'>
            <p id='hero_para' className='mt-40 ml-10 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maiores culpa eveniet, quibusdam libero ullam accusamus porro assumenda praesentium in labore distinctio placeat maxime minima, iure quaerat quod voluptate eaque.
              Ratione saepe mollitia autem asperiores possimus ex fugit blanditiis </p>
              <button onClick={()=>navigate('/about')} id='hero_page_button' className='text-white font-bold cursor-pointer ml-10 mt-5 '>Explore more..</button>
          </div>
          <img id='hero_img' className='' src={Hero_img} alt="" />
        </div>
        

      </div>

    </>
  )
}

export default Hero