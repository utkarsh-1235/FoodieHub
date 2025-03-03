import React from 'react'

function RestaurantCart({id, name, img, rating, cuisine, delivery}) {
  return (
    <>
    <div className='flex flex-col w-80 h-[40%] bg-white shadow-lg rounded-lg overflow-hidden relative p-4 min-h-[300px]'>
    <div className='relative w-full mt-3 ml-1 text-center'>
    <h3 className='text-2xl font-semibold text-black mb-3'>{name}</h3>
         <img 
         src={img} 
         alt={name} 
         className='w-full h-40 object-cover rounded-lg'/>
       </div>    

       <div className='p-4 flex flex-col flex-grow'>
        <div className='flex justify-between'>
        
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {rating} ★
          </span>

          <p className='bg-red-600 text-white text-xs px-2 py-1 rounded'>{cuisine}</p>
          <p className='bg-red-600 text-white text-xs px-2 py-1 rounded'>{delivery}min</p>
        </div>
        </div>
            </div>
    </>
  )
}

export default RestaurantCart;