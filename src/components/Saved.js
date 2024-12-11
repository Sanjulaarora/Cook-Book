import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

const SavedItem = lazy(() => import('./SavedItem'));

const Saved = () => {
  const {save} = useSelector((state) => state.allSave);

  return (
    <div className='flex flex-col my-4'>
      <h1 className='font-Dancing text-2xl media769:text-5xl text-center mt-4'>My Recipes</h1>

      <div>
        <div className='mt-4 text-center'>
          <ol>
            <Suspense fallback={<div>Loading...</div>}>
            <>
              {save.map((dish) =>
                <Suspense fallback={<div>Loading...</div>} key={dish.id} >
                  <SavedItem key={dish.id} dish={dish} />
                </Suspense>
              )}
            </>
            </Suspense>
          </ol> 
          {!(save.length) &&
            <div>
              <p className='font-bold text-xs media450:text-xl media830:text-2xl'>Looks like your saved is empty.</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Saved;