import React, { useState } from 'react'
import '../Signup/Signup.css'
import { Link } from 'react-router-dom';
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const notify = () => toast("User Created!");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const[showPassword, setShowPassword]=useState(true);
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage('All fields are required');
      return;
    } else {
      setFormData({ name: '', email: '', password: '' })
    }
    setErrorMessage('');

    try {
      let response = await fetch('http://localhost:5000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        notify();
        setTimeout(() => {
          navigate('/signin'); 
        }, 2000);
      } else {
        setErrorMessage('Sign-in failed');
      }
    } catch (error) {
      console.log("resposne error", error)
    }

  };
  return (
    <div className="signup-form">
      <h2>Signup</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className='flex flex-row relative'>
          <input
            type={showPassword?"password":"text"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className='absolute right-3 mt-3 text-lg' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <LuEyeClosed /> : <LuEye />}</span>
          </div>
        </div>

        <button id='signup_page_button' className='bg-slate-900' type="submit">Sign Up <ToastContainer /></button>
      </form>
      <Link to="/signin">Already have Account? SignIn</Link>
    </div>
  )
}

export default Signup