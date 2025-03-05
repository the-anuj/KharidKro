import {React,useState} from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

const Signin = () => {

   const[showPassword, setShowPassword]=useState(true);
   const [formData, setFormData] = useState({
       email: '',
       password: '',
     });
   const [errorMessage, setErrorMessage] = useState('');

  //  console.log("cjeck form data",formData)

    const handleOnChange = (e)=>{
      // console.log("check",{...formData,[e.target.name]:e.target.value})
      setFormData({...formData,[e.target.name]:e.target.value})
    }
   const handleSignin = async (e) => {

    e.preventDefault();
    // console.log(formData);
    try {
      let response = await fetch('http://localhost:5000/signin',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      // console.log(response)
      alert("you are logged In",response)
    } catch (error) {
      console.log("resposne errorrr", error)
    }
    // Basic validation
    if ( !formData.email || !formData.password) {
      setErrorMessage('All fields are required');
    } else {
      setFormData({ email: '', password: '' })
    }
    // Clear error message if validation passes
    setErrorMessage('');

  };

  
  return (
    <div className="signup-form">
      <h2>SignIn</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSignin} >
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
            type={showPassword?"password":"text"}
            id="password"
            name="password"
            required
          />
          <span className='absolute right-3 mt-3 text-lg' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <LuEyeClosed /> : <LuEye />}</span>
          </div>
        </div>

        <button id='signup_page_button' className='bg-slate-900' type="submit">Sign-In</button>
      </form>
    </div>
  )
}

export default Signin