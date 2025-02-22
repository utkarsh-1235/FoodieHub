import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromCart, inCreaseQty, decreaseQty } from '../Redux/CartSlice';
import toast from 'react-hot-toast';

export default function ItemCart({Cart}) {
    

    const dispatch = useDispatch();

    const handleRemove = (name)=>( toast.error(`${name} removed from your Cart`))
    

  return (
    <div className='shadow-md gap-2 flex rounded-lg p-2 mb-3'>
        <MdDelete className='absolute right-7 hover:cursor-pointer hover:text-red-500' 
        onClick={()=>{dispatch(removeFromCart(Cart));
            if(Cart.name) handleRemove(Cart.name)
        }}/>
        <img src={Cart.img}
        alt={Cart.name}
        className='w-[70px] h-[50px]'/>

        <div className='leading-5'>
            <h2> {Cart.name}</h2>
            <div className='flex justify-between'>
                <span className='flex text-red-400 font-bold'> <FaIndianRupeeSign className='mt-1'/> {Cart.price * Cart.qty}</span>
                <div className='flex justify-center items-center absolute right-7 gap-2'>
                <AiOutlinePlus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-400 hover:bg-red-500 hover:pointer-cursor transition-all ease-linear'
                onClick={()=>dispatch(inCreaseQty({id: Cart.id}))}
                />
                <span>{Cart.qty}</span>
                <AiOutlineMinus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:bg-red-400 hover:border-red-500 hover:pointer-cursor transition-all ease-linear'
                onClick={()=>dispatch(()=>{
                    if(Cart.qty > 1){
                        dispatch(decreaseQty({id: Cart.id}))
                    }else{
                        dispatch(removeFromCart(Cart))
                        if(Cart.name) handleRemove(Cart.name)
                    }
                })}/>
                </div>
            </div>
        </div>
    </div>
  )
}
