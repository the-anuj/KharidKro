import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const notify = () => toast("Logout successful!");

  const handleOnLogout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear()
    notify()
    setTimeout(() => {
      navigate('/signin')
    }, 2000);
    
  }
 

  useEffect(() => {
    // Redirect if not logged in
    if (!user || !localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div className=' flex flex-col items-center justify-center gap-10 font-bold bg-slate-100 h-[100vh]'>
      <h1 className='text-3xl'><span className='text-[#1d293d]'>Welcome,</span> {user?.name}</h1>
      <p className='text-2xl'>Email: {user?.email}</p>
      <button onClick={handleOnLogout} className='border border-red-500 rounded-md px-8 py-4 text-white cursor-pointer bg-red-500'>Logout <ToastContainer /></button>
      
    </div>
  );
};

export default Profile;