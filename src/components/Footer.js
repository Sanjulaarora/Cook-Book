import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#66371e] text-white p-2'>
      <div className='hidden sm:block'>
        <div className='flex justify-around'>
          <div className='p-1 sm:p-4'>
            <h1 className='text-base sm:text-lg font-bold text-[#341c10]'>About Us</h1>
            <form className='w-96'>
              <label htmlFor='email-footer' className='hidden sm:block'>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</label>
              <label htmlFor='email-footer' className='block sm:hidden text-[12px] sm:text-base'>Welcome to our website.</label>
              <input 
                id='email-footer'
                className='text-[10px] sm:text-base p-1 sm:p-2 w-24 sm:w-52 rounded-sm sm:rounded-lg'
                type='text'
                placeholder='Enter your Email'
              />
              <button className='bg-slate-400 text-[10px] sm:text-base p-1 sm:p-2 rounded-sm sm:rounded-lg m-2 font-semibold'>Send</button>
            </form>
          </div>
          <div className='flex flex-col p-1 sm:p-4'>   
            <h1 className='font-bold text-base sm:text-lg text-[#341c10]'>Learn More</h1>      
            <ul>
              <li className='text-[12px] sm:text-base hover:underline'>Our Cooks</li>  
              <li className='text-[12px] sm:text-base hover:underline'>See Our Features</li>
              <li className='text-[12px] sm:text-base hover:underline'>FAQ</li>
            </ul>             
          </div>
        </div>
      </div>

      <div className='block sm:hidden'>
        <div className='flex flex-col'>
          <div className='p-1 sm:p-4'>
            <h1 className='text-base sm:text-lg font-bold text-[#341c10]'>About Us</h1>
            <form className='w-96'>
              <label className='hidden sm:block'>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</label>
              <label className='block sm:hidden text-[12px] sm:text-base'>Welcome to our website.</label>
              <input 
                className='text-[10px] sm:text-base p-1 sm:p-2 w-24 sm:w-52 rounded-sm sm:rounded-lg'
                type='text'
                placeholder='Enter your Email'
              />
              <button className='bg-slate-400 text-[10px] sm:text-base p-1 sm:p-2 rounded-sm sm:rounded-lg m-2 font-semibold'>Send</button>
            </form>
          </div>
          <div className='flex flex-col p-1 sm:p-4'>   
            <h1 className='font-bold text-base sm:text-lg text-[#341c10]'>Learn More</h1>      
            <ul>
              <li className='text-[12px] sm:text-base hover:underline'>Our Cooks</li>  
              <li className='text-[12px] sm:text-base hover:underline'>See Our Features</li>
              <li className='text-[12px] sm:text-base hover:underline'>FAQ</li>
            </ul>             
          </div>
          </div>
      </div>
      
      <p className='text-[12px] sm:text-base text-center mt-3'><span className='font-Dancing text-lg sm:text-3xl mr-2 sm:mr-4'>Cook Book</span>Copyright &copy; 2024</p>
    </footer>
  )
}

export default Footer;