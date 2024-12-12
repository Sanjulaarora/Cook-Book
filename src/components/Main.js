import React, { useState, useEffect, useContext } from 'react';
import mainImage from '../images/background.png';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { FaMagnifyingGlass, FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { addToSaved, removeFromSaved } from '../features/saveSlice';
import AppContext from '../context/AppContext';
const apiKey = process.env.REACT_APP_API_KEY;

const Main = () => {
  const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minFat=30`;
  const { data: dishes, isLoading, fetchError } = useAxiosFetch(url);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const {save} = useSelector((state) => state.allSave);
  const { user } = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    // Filter dishes based on the selected category
    const categorizedDishes = dishes?.filter((dish) => {
      if (selectedCategory === 'high') {
        return dish.calories >= 500 && dish.calories <= 1000; // High-calorie range
      } else if (selectedCategory === 'low') {
        return dish.calories >= 100 && dish.calories <= 500; // Low-calorie range
      } else {
        return true; // No category selected, include all dishes
      }
    });
  
    // Filter dishes based on the search input
    const searchedDishes = dishes?.filter((dish) =>
      dish.title.toLowerCase().includes(search.toLowerCase())
    );
  
    // Combine search and category filters
    if (search) {
      setSearchResults(searchedDishes);
    } else if (selectedCategory) {
      setSearchResults(categorizedDishes);
    } else {
      setSearchResults(dishes); // if no filters are applied
    }
  }, [dishes, search, selectedCategory]);

  return (
    <main className='flex flex-col space-y-4 sm:space-y-14 my-4 sm:my-8'>
      <p className='w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto font-Dancing text-center text-orange-800 sm:text-2xl'>All you need is love. But a little good food now and then does't hurt.</p>

      <img className='w-[280px] sm:w-[420px] p-1 media769:w-[768px] media1025:w-[1024px] mx-auto' src={mainImage} alt='main' loading='lazy'/>

      <p className='w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto font-Dancing text-center text-orange-800 sm:text-2xl'>A Recipe has no soul. You, as the cook, must bring soul to the recipe.</p>

      <div className='w-[280px] sm:w-[420px] media769:w-[768px] media1025:w-[1024px] mx-auto bg-gradient-to-r from-[#b97f5f] to-[#c6ac9e] p-2 sm:p-3'>
        <p className='text-center font-Dancing p-1 text-xl sm:text-2xl media769:text-4xl mt-6'>Here you go with the Dishes</p>

        <div className='flex justify-around items-center mt-8'>
          <form className='flex items-center space-x-1 sm:space-x-2 rounded-sm sm:rounded-lg p-[5px] sm:p-2 w-3/4 bg-white'>
            <FaMagnifyingGlass className='mx-auto'/>
            <input 
              className='rounded-sm sm:rounded-lg text-[10px] sm:text-base p-1 sm:p-2 w-10/12 mx-auto outline-none'
              type='text'
              placeholder='Search your dish :)'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <select 
            className='text-[8px] sm:text-[12px] rounded-md md:p-1 outline-none w-12 sm:w-[90px] h-9 sm:h-14' 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value=''>Category</option>
            <option value='high'>High Calories</option>
            <option value='low'>Low Calories</option>
          </select>
        </div>

        <div className='flex flex-wrap justify-center items-center mt-3'>
          {isLoading && <Audio height='60' width='60' radius='6' color='black' ariaLabel='loading' wrapperStyle wrapperClass/>}
          {!isLoading && fetchError && <p className='text-center font-Dancing text-[12px] md:text-lg'>{fetchError}</p>}
          {!isLoading && !fetchError && (searchResults.length ? 
            <>
              {searchResults.map(dish =>(
                <div className='m-4 h-[260px] sm:h-[320px] w-60 sm:w-[300px] bg-white p-2 sm:p-4 rounded-lg hover:scale-110' key={dish.id}>
                  <Link to={`/ingredients-page/${dish.id}`}>
                    <h1 className='w-56 sm:w-72 h-12 sm:h-16 text-center font-Dancing text-base sm:text-lg underline'>{dish.title}</h1>
                    <img src={dish.image} alt='img' loading='lazy'/>
                  </Link>
                  <div>
                    { user &&
                      save.some((p) => p.id === dish.id) ?
                      (
                        <FaBookmark role='button'  
                          onClick = {() => dispatch(removeFromSaved(dish))}
                          className='mt-2 ml-48 sm:ml-[250px]'
                        />
                      ) :
                      (
                        <FaRegBookmark role='button'
                          onClick = {() => dispatch(addToSaved(dish))}
                          className='mt-2 ml-48 sm:ml-[250px]'
                        />
                      )
                    }
                  </div>
                </div>
              ))}
            </> 
            : 
            <div className='text-center font-Dancing text-[12px] md:text-lg'>No Dish is Available.</div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main;