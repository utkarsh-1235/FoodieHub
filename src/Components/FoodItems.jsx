import React, { useEffect } from 'react'
import Foods from '../Data/Data'
import FoodCard from './FoodCard'
import Cart from './Cart'
import toast,{ Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDishes } from '../Redux/DIshSlice'



function FoodItems() {
    const handleToast = (name)=> { return toast.success(`${name} Added successfully to Cart`)}

    const selectedCategory = useSelector((state)=>state.Category.category);
    const search = useSelector((state)=>state.Search.Search)
    const dispatch = useDispatch();
    // const Foods = useSelector((state)=> state.Dish.dishes);

    useEffect(()=>{
      dispatch(getAllDishes());
    },[dispatch])
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-15 gap-10 p-6 items-start'>
        {Foods && Foods.filter((food)=>
        (selectedCategory === 'All' || selectedCategory === food.category) &&(search === '' || food.name.toLowerCase().includes(search.toLowerCase()))).map((food) => (
                        <FoodCard 
                            key={food.id} 
                            id={food.id} 
                            img={food.img} 
                            name={food.name} 
                            price={food.price} 
                            desc={food.desc} 
                            category={food.category} 
                            rating={food.rating} 
                            handleToast={handleToast} 
                        />
                    ))}
    {/* {Foods && Foods.filter((Food)=>{
        return selectedCategory === Food.category ? (<FoodCard key={Food.id} food={Food} handleToast = {handleToast}/>) : []
    })} */}
    <Cart/>
    </div>
    </>
  )
}

export default FoodItems