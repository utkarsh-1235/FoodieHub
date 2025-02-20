import React from 'react'
import Foods from '../Data/Data'
import FoodCard from './FoodCard'

function FoodItems() {
  return (
    <>
    {Foods && Foods.map((Food)=>{
        return <FoodCard key={Food.id} food={Food}/>
    })}
    </>
  )
}

export default FoodItems