import React, { useContext } from 'react'

function FoodCard({food}) {

  return (
    <div className='flex flex-col w-80 h-[40%] bg-white shadow-lg rounded-lg overflow-hidden relative p-4 min-h-[350px]'>
       <div>{
        food.id && (<span 
                     className='absolute left-2 bg-gray-800 text-xs px-2 py-1 rounded-t-lg'>
              {food.id}
        </span>
       )}
          </div>
       <div className='relative w-full mt-3 ml-3'>
         <img 
         src={food.img} 
         alt={food.name} 
         className='w-full h-40 object-cover rounded-lg'/>
       </div>

       <div className='p-4 flex flex-col flex-grow'>
        <div className='flex justify-between'>
        <h3 className='text-sm font-semibold text-black'>{food.name}</h3>
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {food.rating} ★
          </span>
        </div>
    
        <p className='text-black text-sm mt-2 flex-grow'>{food.desc.slice(0,50)}............</p>
       </div>
       <div className="flex items-center justify-between gap-2 mt-2 px-4 pb-4">
          <span className="text-gray-700 font-medium">₹{food.price} for one</span>
          <button className='bg-red-500 p-2 rounded-lg font-bold hover:bg-red-600 text-sm'> Add to Cart</button>
          
        </div>
    </div>
  )
}

export default FoodCard 