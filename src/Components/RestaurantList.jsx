import React, { useEffect, useState } from 'react'
 import Restaurants from '../Data/RestaurantsData';
import RestaurantCart from './RestaurantCart';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../Redux/RestaurantSlice';


function RestaurantList() {
    const [sort, setSort] = useState('rating');
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    // const Restaurants = useSelector((state)=>state.Restaurant.restaurant || []);
    const loading = useSelector((state)=>state.Restaurant.loading);
    const error = useSelector((state)=>state.Restaurant.error)

  //   useEffect(() => {
  //     dispatch(getRestaurants());
  //  }, [dispatch]);
   
  //  useEffect(() => {
  //     console.log("Updated Restaurants:", Restaurants);
  //  }, [Restaurants]);
   
    const filterRestaurant = Restaurants.filter((ind)=> ind.name.toLowerCase().includes(search.toLowerCase()))
                                        .sort((a,b)=> sort === 'rating' ? b.rating - a.rating : a.deliveryTime - b.deliveryTime)

  return (
    <>
    <div className='bg-gradient-to-br from-red-200 to-red-800 text-white p-6 mx-auto w-full min-h-screen'>
        <div></div>
        <div className='text-center'> 
        <h1 className='text-2xl mb-4 font-bold'> Restaurants Near You</h1>

         <input className='bg-white border rounded-md text-gray-800 py-1 px-2 text-center mb-4'
                 placeholder='Search restaurants'
                 value={search}
                 onChange={(e)=>setSearch(e.target.value)}/>

                 <div className='flex mb-4 gap-4 justify-center'>
                    <button className=' px-4 py-2 bg-red-400  rounded-md ' onClick={()=>setSort('rating')}>Best Rated</button>
                    <button className='px-4 py-2 bg-red-400  rounded-md ' onClick={()=>setSort('delivery')}>Fastest Delivery</button>
                 </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-15 gap-10 p-6 items-start'>
         {
            filterRestaurant.map((restaurant)=>(
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