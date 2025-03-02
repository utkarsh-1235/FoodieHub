import React from 'react'
import Restaurants from '../Data/RestaurantsData';
import RestaurantCart from './RestaurantCart';


function RestaurantList() {

  return (
    <>
    <div className='bg-gradient-to-br from-red-200 to-red-800 text-white p-6 mx-auto w-full min-h-screen'>
        <div></div>
        <div>
        <h1 className='text-2xl mb-4 font-bold'> Restaurants Near You</h1>

         <input className='bg-white border rounded-md text-gray-800 py-1 px-2 text-center mb-4'
                 placeholder='Search restaurants'/>

                 <div className='flex mb-4 gap-4'>
                    <button className=' px-4 py-2 bg-red-400  rounded-md'>Best Rated</button>
                    <button className='px-4 py-2 bg-red-400  rounded-md '>Fastest Delivery</button>
                 </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-15 gap-10 p-6 items-start'>
         {
            Restaurants.map((restaurant)=>(
            <RestaurantCart key={restaurant.id} id = {restaurant.id} name = {restaurant.name} img = {restaurant.img} rating = {restaurant.rating} cuisine = {restaurant.cuisine} delivery = {restaurant.deliveryTime}/>
            ))
         }
         </div>
         </div>
    </div>
    </>
  )
}

export default RestaurantList