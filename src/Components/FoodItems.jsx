import React from 'react'
import Foods from '../Data/Data'
import FoodCard from './FoodCard'
import Cart from './Cart'

function FoodItems() {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 items-start'>
    {Foods && Foods.map((Food)=>{
        return <FoodCard key={Food.id} food={Food}/>
    })}
    <Cart/>
    </div>
  )
}

export default FoodItems