import React from 'react'
import Hero from '../../componets/Hero/Hero'
import Category from '../../componets/category'
import Service from '../../componets/Service/Service'
import Goldbanner from '../../componets/GoldBanner/Goldbanner'
import Footer from '../../componets/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <Service/>
    <Goldbanner/>
    <Footer/>
    </>
    
  )
}

export default Home