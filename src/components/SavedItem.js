import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromSaved } from '../features/saveSlice';

const SavedItem = ({dish}) => {
    const dispatch = useDispatch();

  return (
    <div>
        <li key={dish.id} className='flex justify-around items-center h-[80px] sm:h-20 media769:h-24 p-4 media769:p-5 mt-4 bg-gradient-to-r from-[#b97f5f] to-[#c6ac9e] text-white rounded-md w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto'> 
            <Link to={`/ingredients-page/${dish.id}`}>
              <span className='p-1 media769:p-2 text-[8px] sm:text-[12px] media769:text-base w-[80px] sm:w-40 media769:w-52 hover:underline'>{dish.title} </span>
            </Link>
            <FaTrash role='button' 
                onClick={() => dispatch(removeFromSaved(dish))} 
                className='text-[12px] sm:text-base hover:scale-125' 
            />
        </li>
    </div>
  )
}

export default SavedItem;