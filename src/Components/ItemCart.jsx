import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

export default function ItemCart() {
    const [addState, setAddState] = useState(1);
    
    

  return (
    <div className='shadow-md gap-2 flex rounded-lg p-2 mb-3'>
        <MdDelete className='absolute right-7 hover:cursor-pointer hover:text-red-500'/>
        <img src='https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5'
        alt=''
        className='w-[70px] h-[50px]'/>

        <div className='leading-5'>
            <h2> Onion Pizza</h2>
            <div className='flex justify-between'>
                <span className='flex text-red-400 font-bold'> <FaIndianRupeeSign className='mt-1'/> 120</span>
                <div className='flex justify-center items-center absolute right-7 gap-2'>
                <AiOutlinePlus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-400 hover:bg-red-500 hover:pointer-cursor transition-all ease-linear'
                />
                <span>1</span>
                <AiOutlineMinus className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:bg-red-400 hover:border-red-500 hover:pointer-cursor transition-all ease-linear'/>
                </div>
            </div>
        </div>
    </div>
  )
}
