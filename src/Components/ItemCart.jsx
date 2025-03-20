import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { inCreaseQty, decreaseQty, removeItemFromCart } from '../Redux/CartSlice';
import toast from 'react-hot-toast';

export default function ItemCart({Cart}) {
    

    const dispatch = useDispatch();

    const handleRemove = (name)=>( toast.error(`${name} removed from your Cart`))
    const userId = useSelector((state)=> state.User.user.user._id);
       console.log(Cart?.dish?.dishId);

  return (
    <div className='shadow-md gap-2 flex rounded-lg p-2 mb-3'>
        {/* <MdDelete className='absolute right-7 hover:cursor-pointer hover:text-red-500' 
        onClick={()=>{dispatch(removeFromCart(Cart));
            if(Cart.dish?.name) handleRemove(Cart.dish?.name)
        }}/> */}
        <MdDelete className='absolute right-7 hover:cursor-pointer hover:text-red-500' 
        onClick={()=>{dispatch(removeItemFromCart({item: {id:Cart._id, userId}}));
            if(Cart.dish?.name) handleRemove(Cart.dish?.name)
        }}/>
        <img src={Cart.dish.image}
        alt={Cart.dish?.name}
        className='w-[70px] h-[50px]'/>

        <div className='leading-5'>
            <h2> {Cart.dish?.name}</h2>
            <div className='flex justify-between'>
                <span className='flex text-red-400 font-bold'> <FaIndianRupeeSign className='mt-1'/> {Cart.dish?.price * Cart.quantity}</span>
                <div className='flex justify-center items-center absolute right-7 gap-2'>
                <AiOutlinePlus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-400 hover:bg-red-500 hover:pointer-cursor transition-all ease-linear'
                onClick={()=>dispatch(inCreaseQty({_id: Cart.dish?.dishId }))}
                />
                <span>{Cart.quantity}</span>
                <AiOutlineMinus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:bg-red-400 hover:border-red-500 hover:pointer-cursor transition-all ease-linear'
                onClick={()=>dispatch(()=>{
                    if(Cart.quantity > 1){
                        console.log('dishId', Cart.dish?.dishId)
                        dispatch(decreaseQty( {_id: Cart.dish?.dishId}))
                    }else{
                        // dispatch(removeFromCart({_id: Cart._id}))
                        dispatch(removeItemFromCart({Cart, userId}))
                        if(Cart.dish?.name) handleRemove(Cart.dish?.name)
                    }
                })}/>
                </div>
            </div>
        </div>
    </div>
  )
}
