import React from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GoSignIn } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Logo from '../componets/Images/logo.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const Navbar = () => {
  // const {cartQuantity}=useSelector(state=>state.cart)

  const [navLinks, setNavLinks] = useState(false);
  const renderNavLinks = ()=>{
    setNavLinks(!navLinks);
  }

  // Removed theme state and effect
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim() !== "") {
      navigate(`/category/${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div id='navbar' className='flex flex-row justify-between p-5' style={{ background: 'black', color: 'white' }}>
      <div className='flex flex-row mx-4'>
        <img className='size-10 mr-4' src={Logo} alt="logo" />
      </div>
      <div id='navbar-link-dev' className='m-0 p-0'>
        <ul id='navbar-Links' className={`flex flex-row gap-7  ${navLinks?'render' : 'undo'} `}>
            <span id='navbar-cross' onClick={renderNavLinks} ><RxCross2/></span>
            <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-b-yellow-300"
                : "text-gray-300"
            }>Home</NavLink>
            <NavLink to="/About" className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-b-yellow-300"
                : "text-gray-300"
            }>About</NavLink>
            <NavLink to="/Product" className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-b-yellow-300"
                : "text-gray-300"
            }>Products</NavLink>
            <NavLink to="/categories" className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-b-yellow-300"
                : "text-gray-300"
            }>Categories</NavLink>
        </ul>
        </div>
        <div id='nav-search' className='flex flex-row'>
            <span className='text-lg mt-2 mr-2'><FaSearch/></span>
            <input className='p-1' type="text" placeholder='Search Product' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleSearchKeyDown} />
            {search && (
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <RxCross2 />
              </button>
            )}
        </div>
        <div id='nav-cart-signup' className='flex flex-row justify-between items-center gap-5'>
          <NavLink id='nav-cart' className='text-2xl font-bold ml-5 cursor-pointer flex flex-row' to="/cart"><BsCart3 /><span className='text-xs font-light'></span></NavLink>
          <Link id='nav-signup' className='mx-4 cursor-pointer' to={localStorage.getItem('token')?'/profile':'/signup'}><GoSignIn /></Link>
          <Link id='nav-bar' onClick={renderNavLinks}><FaBarsStaggered /></Link>
        </div>
    </div>
  ) 
}

export default Navbar