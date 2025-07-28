import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer' className='p-8 flex flex-row justify-around items-start mt-5'>
      <div className='footer-section'>
        <h2 className='footer-brand'>KharidKaro</h2>
        <p className='footer-desc'>Your one-stop shop for the best products, deals, and customer service. Shop smart, live better!</p>
        <div className='footer-socials'>
          <a href='https://facebook.com' aria-label='Facebook'><FaFacebook /></a>
          <a href='https://instagram.com' aria-label='Instagram'><FaInstagram /></a>
          <a href='https://twitter.com' aria-label='Twitter'><FaTwitter /></a>
        </div>
      </div>
      <div className='br'></div>
      <div className='footer-section'>
        <h2>Useful Links</h2>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/Product'>Shop</a></li>
          <li><a href='/categories'>Categories</a></li>
          <li><a href='/about'>About Us</a></li>
        </ul>
      </div>
      <div className='br'></div>
      <div className='footer-section'>
        <h2>Customer Service</h2>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Shipping & Returns</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div className='br'></div>
      <div className='footer-section'>
        <h2>Contact</h2>
        <ul>
          <li>Email: support@kharidkaro.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Address: 123 Market St, Mumbai, India</li>
        </ul>
        <div className='footer-payments'>
          <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal /> <FaCcAmex />
        </div>
      </div>
    </footer>
  )
}

export default Footer