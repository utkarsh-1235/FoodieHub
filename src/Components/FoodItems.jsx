import React from 'react'
import Foods from '../Data/Data'
import FoodCard from './FoodCard'
import Cart from './Cart'
import toast,{ Toaster } from 'react-hot-toast'



function FoodItems() {
    const handletoast = (name)=> { return toast.success(`${name} Added successfully to Cart`)}
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 items-start'>
    {Foods && Foods.map((Food)=>{
        return <FoodCard key={Food.id} food={Food} handleToast = {handletoast}/>
    })}
    <Cart/>
    </div>
    </>
  )
}

export default FoodItems