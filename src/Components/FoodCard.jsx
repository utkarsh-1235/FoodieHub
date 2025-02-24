import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'

function FoodCard({id, img, name, price, desc, category, rating, handleToast}) {
const dispatch = useDispatch();

  return (
    <div className='flex flex-col w-80 h-[40%] bg-white shadow-lg rounded-lg overflow-hidden relative p-4 min-h-[350px]'>
       <div>{
         (<span 
                     className='absolute left-2 bg-gray-800 text-xs px-2 py-1 rounded-t-lg'>
              {id}
        </span>
       )}
          </div>
       <div className='relative w-full mt-3 ml-3'>
         <img 
         src={img} 
         alt={name} 
         className='w-full h-40 object-cover rounded-lg'/>
       </div>

       <div className='p-4 flex flex-col flex-grow'>
        <div className='flex justify-between'>
        <h3 className='text-sm font-semibold text-black'>{name}</h3>
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {rating} ★
          </span>
        </div>
    
        <p className='text-black text-sm mt-2 flex-grow'>{desc.slice(0,50)}............</p>
       </div>
       <div className="flex items-center justify-between gap-2 mt-2 px-4 pb-4">
          <span className="text-gray-700 font-medium">₹{price} for one</span>
          <button className='bg-red-500 p-2 rounded-lg font-bold hover:bg-red-600 text-sm' 
                  onClick={()=>{
                    dispatch(addToCart({ ...food,qty:1}));
                   if(food.name) handleToast(name)
                    }}> Add to Cart</button>
          
        </div>
    </div>
  )
}

export default FoodCard 