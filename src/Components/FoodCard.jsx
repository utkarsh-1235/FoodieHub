import React from 'react'

function FoodCard({food}) {
  return (
    <div className='flex flex-col w-80 h-[40%] bg-white shadow-lg rounded-lg overflow-hidden relative p-4 min-h-[450px]'>
       <div>{
        food.id && (<span 
                     className='absolute top-2 left-2 bg-gray-800 text-xs px-2 py-1 rounded-t-lg'>
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
        <h3 className='text-lg font-semibold text-black'>{food.name}</h3>
        <p className='text-black text-sm mt-2 flex-grow'>{food.desc}</p>
       </div>
       <div className="flex items-center justify-between mt-2 px-4 pb-4">
          <span className="text-gray-700 font-medium">₹{food.price} for one</span>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {food.rating} ★
          </span>
        </div>
    </div>
  )
}

export default FoodCard 