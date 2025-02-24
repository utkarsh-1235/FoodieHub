import React, { useEffect } from 'react'
import { useState } from 'react';
import FoodItems from './FoodItems';
import Data from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../Redux/CategorySlice';

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
        <div className='flex justify-center flex-wrap mt-6 gap-4'>
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
        <div>
        <FoodItems/>
        </div>
    </div>
  )
}
