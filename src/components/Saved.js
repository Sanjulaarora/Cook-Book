import React, { lazy, Suspense } from 'react';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const SavedItem = lazy(() => import('./SavedItem'));

const Saved = () => {
  const {save} = useSelector((state) => state.allSave);

  return (
    <div className='flex flex-col my-14'>
      <h1 className='font-Dancing text-2xl media769:text-5xl text-center mt-4'>My Recipes</h1>

      <div className='my-24'>
        <div className='mt-4 text-center'>
          <ol>
            <Suspense fallback={<Audio height='60' width='60' radius='6' color='black' ariaLabel='loading' wrapperStyle wrapperClass/>}>
            <>
              {save.map((dish) =>
                <Suspense fallback={<div className='font-dancing sm:text-xl'>Loading...</div>} key={dish.id} >
                  <SavedItem key={dish.id} dish={dish} />
                </Suspense>
              )}
            </>
            </Suspense>
          </ol> 
          {!(save.length) &&
            <div>
              <p className='w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto h-[80px] sm:h-20 media769:h-24 py-10 bg-gradient-to-r from-[#b97f5f] to-[#c6ac9e] rounded-md text-white text-xs sm:text-base text-center'>Looks like your have not saved any dish 🤷🏽‍♀️.</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Saved;