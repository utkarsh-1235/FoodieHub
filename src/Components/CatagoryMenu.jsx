import React from 'react'
import { useState } from 'react';
import FoodItems from './FoodItems';

export default function CatagoryMenu() {
    const [activeCategory, setActiveCategory] = useState('All');

    const Categories = ['All', 'Breakfast', 'Lunch', 'Dinner','Cousine', 'Snacks', 'Chinese']
  return (
    <div className='w-full bg-gradient-to-br from-red-200 to-red-800 min-h-screen text-white'>
        <div className='flex justify-center flex-wrap mt-6 gap-4'>
           { 
            Categories.map((Category)=>{
           return <button
                   key={Category} 
                   className={`px-4 py-2 transition duration-300 rounded-md ${activeCategory === Category ? 'bg-red-600 text-white shadow-lg' : 'bg-red-400 hover:bg-red-500'}`}
                   onClick={()=>setActiveCategory(Category)}>{Category}
                   {console.log(Category)}
                   
        </button>})}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 items-start">
        <FoodItems/>
        </div>
    </div>
  )
}
