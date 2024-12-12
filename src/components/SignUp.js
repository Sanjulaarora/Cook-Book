import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {
  const[signupEmail, setSignupEmail] = useState('');
  const[signupPassword, setSignupPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSignupSubmit = async(e) =>{
    e.preventDefault();
    if(signupPassword !== confirmPassword){
      Error('Passwords do not match !');
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      setSignupEmail('');
      setSignupPassword('');
      setConfirmPassword('');
      console.log(result);
      alert('SignUp Successfull!!');
      navigate('/login');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      alert('Some Error Occurred');
    }
  }

  return (
    <div className='my-24'>
      <form onSubmit={handleSignupSubmit} 
        className='flex flex-col justify-center items-center space-y-2 sm:space-y-3 media769:space-y-4 my-8 h-[280px] sm:h-[350px] media769:h-[418px] w-[260px] sm:w-80 media769:w-96 mx-auto p-2 rounded-lg shadow-2xl'> 
        <div className='flex flex-col p-1 media769:p-2'>
          <label htmlFor='email' className='font-anton text-[#56463c] text-xs sm:text-sm media769:text-xl'> Email </label>
          <input className='w-56 sm:w-64 media769:w-80 rounded-md outline-none p-1 text-xs sm:text-base'
            id='email'
            type='text'
            placeholder='Enter Your email'
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col p-1 media769:p-2'>   
          <label htmlFor='password' className='font-anton text-[#56463c] text-xs sm:text-sm media769:text-xl'> Password </label>
          <input className='w-56 sm:w-64 media769:w-80 rounded-md outline-none p-1 text-xs sm:text-base'
            id='password'
            type='password'
            placeholder='Enter your password'
            required
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col p-1 media769:p-2'>
          <label htmlFor='confirm-password' className='font-anton text-[#56463c] text-xs sm:text-sm media769:text-xl'> Confirm Password </label>
          <input className='w-56 sm:w-64 media769:w-80 rounded-md outline-none p-1 text-xs sm:text-base'
            id='confirm-password'
            type='password'
            placeholder='Enter Your password to confirm'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className='font-anton text-[#F2E9E4] text-xs sm:text-sm bg-[#56463c] rounded-md w-40 sm:w-48 media769:w-52 p-2 media769:p-1 shadow-lg hover:scale-110'>SignUp</button>
        
        <div className='flex'>
          <p className='font-anton text-[#56463c] text-xs sm:text-base'>Already have an account?</p>
          <Link to='/login' className='ml-2 font-anton text-blue-800 hover:underline text-xs sm:text-base'>Login</Link>
        </div>  
      </form>  
    </div>
  )
}

export default SignUp;