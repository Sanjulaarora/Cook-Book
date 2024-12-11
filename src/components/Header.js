import React, { useContext } from 'react';
import logo from '../images/logo.png';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();
  
  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    alert('Logout successfull !');
    navigate('/');
  };

  return (
    <header className='flex justify-around items-center h-24 p-2'>
      <Link to='/'>
        <div className='flex items-center space-x-1 rounded-lg'>
          <img className='w-10 sm:w-24 h-14 sm:h-24 rounded-full' src={logo} alt='chef logo' loading='lazy'/>
          <p className='font-Dancing text-lg sm:text-4xl'>Cook Book</p>  
        </div>
      </Link>
      <div id='login/signup'>
        { !user &&
          <Link to='/login'><button className='w-14 sm:w-20 h-8 sm:h-10 bg-[#DAD7CD] text-[#0f0f1b] text-[12px] sm:text-base font-medium rounded-md hover:scale-110'>Login</button></Link>
        }
        { user &&
          <div className='flex space-x-2'>
            <button className='w-16 sm:w-20 h-8 sm:h-10 bg-[#DAD7CD] text-[#0f0f1b] text-[12px] sm:text-base font-medium rounded-md hover:scale-110' onClick={handleLogout}>Logout</button>
            <Link to='/saved'><button className='w-16 sm:w-24 h-8 sm:h-10 bg-[#DAD7CD] text-[#0f0f1b] text-[12px] sm:text-base font-medium rounded-md hover:scale-110'>My Dishes</button></Link>
          </div>
        }
      </div>
    </header>
  )
}

export default Header;