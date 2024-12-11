import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const[loginEmail, setLoginEmail] = useState('');
  const[loginPassword, setLoginPassword] = useState('');

  const navigate= useNavigate();

  const handleLoginSubmit = async (e) =>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginEmail('');
      setLoginPassword('');
      alert('Login Succesfull!!')
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      alert('Some Error Occurred');
    }
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit} 
        className='flex flex-col justify-center items-center space-y-5 my-8 h-[284px] sm:h-[364px] media769:h-96 w-[264px] sm:w-[364px] media769:w-96 mx-auto rounded-lg shadow-2xl'>
        <div className='flex flex-col p-3'>
          <label htmlFor='email' className='text-[#56463c] text-sm sm:text-base media769:text-xl'> Email </label>
          <input className='w-56 sm:w-72 media769:w-80 rounded-md outline-none p-1 text-xs sm:text-base '
            id='email'
            type='text'
            placeholder='Enter Your email'
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col p-3'>   
          <label htmlFor='password' className='text-[#56463c] text-sm sm:text-base media769:text-xl'> Password </label>
          <input className='w-56 sm:w-72 media769:w-80 rounded-md outline-none p-1 text-sm sm:text-base'
            id='password'
            type='password'
            required
            placeholder='Enter your password'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>

        <button className='text-[#F2E9E4] text-sm sm:text-base bg-[#56463c] rounded-md w-40 sm:w-48 media769:w-52 p-2 media769:p-1 shadow-lg hover:scale-110'>Login</button>
        
        <div className='flex'>
          <p className='text-[#56463c] text-sm sm:text-base'>Do not have an account?</p>
          <Link to='/sign-up' className='ml-2 text-blue-800 hover:underline text-sm sm:text-base'>SignUp</Link>
        </div>  
      </form>  
    </div>
  )
}

export default Login;