import React from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
const apiKey = process.env.REACT_APP_API_KEY;

const IngredientsPage = () => {
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`;
  const { data, isLoading, fetchError } = useAxiosFetch(url);

  const ingredients = data?.ingredients || [];

  return (
    <div className='w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto bg-gradient-to-r from-[#b97f5f] to-[#c6ac9e] p-4 my-10'>
      <h1 className='font-Dancing text-2xl media769:text-5xl text-center mt-4'>Ingredients</h1>

      <div className='flex flex-wrap justify-center items-center mt-3 sm:mt-8'>
        {isLoading && <Audio height='60' width='60' radius='6' color='black' ariaLabel='loading' wrapperStyle wrapperClass/>}
        {!isLoading && fetchError && <p className='text-center font-Dancing text-[12px] md:text-lg'>{fetchError}</p>}
        {!isLoading && !fetchError && (ingredients.length ? 
          <>
            {ingredients.map(ingredient =>(
              <div className='m-4 h-24 sm:h-32 w-40 sm:w-60 bg-white p-4 rounded-lg' key={ingredient.name}>
                <h1 className='text-[12px] sm:text-base text-center font-semibold underline'>{ingredient.name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}</h1>
                <div className='flex justify-evenly mt-2'>
                  <p className='text-[#98684e] text-[10px] sm:text-base'>Quantity:</p>
                  <p className='text-[#958177] text-[10px] sm:text-base'>{ingredient.amount.metric.value}<span>{ingredient.amount.metric.unit}</span></p>
                </div>
              </div>
            ))}
          </> : <div className='text-center font-Dancing text-[12px] md:text-lg'>No Ingredients.</div>
        )}
      </div>
      
    </div>
  )
}

export default IngredientsPage;