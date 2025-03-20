import React, { useState } from 'react';
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Signin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrorMessage('All fields are required');
      return; // Stop execution if validation fails
    }

    try {
      let response = await fetch('http://localhost:5000/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      
      if (response.ok) {
        localStorage.setItem('token', response.data.token);
        navigate('/'); 
      } else {
        setErrorMessage('Sign-in failed');
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-form mt-40">
      <h2>SignIn</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSignin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleOnChange}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className='flex flex-row relative'>
            <input
              onChange={handleOnChange}
              type={showPassword ? "password" : "text"}
              id="password"
              name="password"
              required
            />
            <span
              className='absolute right-3 mt-3 text-lg'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEyeClosed /> : <LuEye />}
            </span>
          </div>
        </div>

        <button id='signup_page_button' className='bg-slate-900' type="submit">Sign-In</button>
        <Link to='/signup'>Don't have Account? SignUp</Link>
      </form>
    </div>
  );
};

export default Signin;