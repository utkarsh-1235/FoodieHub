import React, { useEffect } from 'react'
import { useState } from 'react';
import FoodItems from './FoodItems';
import Data from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../Redux/CategorySlice';
import { setSearchState } from '../Redux/SearchSlice';

export default function CatagoryMenu() {
    const [activeCategory, setActiveCategory] = useState([]);    

    const Categories = ['All', 'Breakfast', 'Lunch', 'Dinner','Snacks']
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.Category.category);

    const listuniqueCategories = ()=>{
        const uniqueCategory = [...new Set(Data.map((food)=>food.category).filter((food)=>food.category != 'undefined'))]
        setActiveCategory(uniqueCategory)

    }

    useEffect(()=>{
     listuniqueCategories();
    },[])
  return (
    <div className='w-full bg-gradient-to-br from-red-200 to-red-800 min-h-screen text-white'>
        <div className='w-1/2 flex flex-col md:flex-row px-4 py-6 md:px-10 justify-between items-center ml-50 gap-10'>
        <div className='flex justify-center flex-wrap mt-6 ml-8 gap-4 md:justify-start'>
        <button
                   className={`px-4 py-2 transition duration-300 rounded-md ${selectedCategory === 'All' ? 'bg-red-600 text-white shadow-lg' : 'bg-red-400 hover:bg-red-500'}`}
                   onClick={()=>dispatch(addCategory('All'))}> All</button>
           { 
            activeCategory && activeCategory.map((Category, index)=>{
           return <button
                   key={index} 
                   className={`px-4 py-2 transition duration-300 rounded-md ${selectedCategory === Category ? 'bg-red-600 text-white shadow-lg' : 'bg-red-400 hover:bg-red-500'}`}
                   onClick={()=>dispatch(addCategory(Category))}>

                   {Category}
        </button>})}
       
          </div>    
          <input
              onClick={(e)=>dispatch(setSearchState(e.target.value))}
              className='w-full md:w-1/3 lg:w-1/4 bg-white rounded-md text-black text-center px-4 py-2 mt-6'
              placeholder='Search here'/>
        </div>
        <div>
        <FoodItems/>
        </div>
    </div>
  )
}
