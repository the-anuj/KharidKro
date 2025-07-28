import React from 'react'
import Footer from '../../componets/Footer'
import story_img from "../../assets/story_img.jpg"
import mission_img from '../../assets/mission_img.jpg'
import { FaHeart, FaUsers, FaAward, FaShieldAlt, FaRocket, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner in online shopping, delivering quality products and exceptional service since 2025
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Secure Shopping</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <FaHeart className="text-red-500 text-2xl" />
                <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to <span className="font-semibold text-blue-600">KharidKaro</span>! We're more than just an eCommerce store – we're a team of passionate individuals committed to bringing you high-quality products that make a difference in your life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025, our journey began with a simple idea: to create an online shopping experience that's not just convenient, but truly delightful. What started as a small, local initiative has since grown into a thriving online store serving customers nationwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Along the way, we've overcome challenges, learned valuable lessons, and built a loyal community of customers who trust us for our commitment to quality, transparency, and exceptional service.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-20"></div>
              <img 
                src={story_img} 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" 
                alt="Our Story" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg opacity-20"></div>
              <img 
                src={mission_img} 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" 
                alt="Our Mission" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-20"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <FaHandshake className="text-blue-500 text-2xl" />
                <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                At <span className="font-semibold text-blue-600">KharidKaro</span>, our mission is to provide products that not only meet your needs but exceed your expectations. We believe in offering products that are high-quality, sustainable, and innovative.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to help you discover amazing products that enhance your daily life, while providing a shopping experience that's seamless, secure, and enjoyable. We're committed to building lasting relationships with our customers through trust, transparency, and exceptional service.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Quality First</h4>
                  <p className="text-sm text-gray-600">We never compromise on quality</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Customer Focus</h4>
                  <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at KharidKaro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion</h3>
              <p className="text-gray-600">
                We're passionate about delivering the best products and service to our customers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trust</h3>
              <p className="text-gray-600">
                Building trust through transparency, reliability, and consistent quality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving and innovating to better serve our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About