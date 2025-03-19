import React, { useContext } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../Redux/CartSlice'

function FoodCard({id, img, name, price, desc, category, rating, handleToast}) {
const dispatch = useDispatch();
const dish = useSelector((state)=> state.Dish.dishes)


const handleAddToCart = ()=>{
  const itemprice = price ?? 0;

  const cart = {
    dish:{
      dishId: id,
      name: name,
      image: img,
      price: itemprice
     },
     quantity: 1, // Ensure quantity is always present
     _id: id,
 }
 console.log('cart',cart)
     dispatch(addToCart(cart));

    if(name) handleToast(name);
};


  return (
    <div className='flex flex-col w-70 h-[40%] bg-white shadow-lg rounded-lg overflow-hidden relative p-4 lg:min-h-[350px] min-h-[250px]'>
       {/* <div>{
         (<span 
                     className='absolute left-2 bg-gray-800 text-xs px-2 py-1 rounded-t-lg'>
              {id}
        </span>
       )}
          </div> */}
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
    
        <p className='text-black text-sm mt-2 flex-grow'>{String(desc).slice(0,50)}............</p>
       </div>
       <div className="flex items-center justify-between gap-2 mt-2 px-4 pb-4">
          <span className="text-gray-700 font-medium">₹{price} for one</span>
          <button className='bg-red-500 p-2 rounded-lg font-bold hover:bg-red-600 text-sm' 
                  onClick={ handleAddToCart}> Add to Cart</button>
          
        </div>
    </div>
  )
}

export default FoodCard 