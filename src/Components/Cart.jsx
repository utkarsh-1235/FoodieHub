import React from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCart from './ItemCart'
function Cart() {
  return (
    <div className='fixed top-0 right-0 bg-white w-full lg:w-[20vw] min-h-screen text-black p-5'>
         <div className='flex justify-between my-3'>
            <span className='text-xl font-bold text-gray-800'>
                My Order
            </span>
            <IoMdClose className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 hover:pointer-cursor'/>
         </div>
         <div>
            <ItemCart/>
            <ItemCart/>
            <ItemCart/>
            <ItemCart/>
            
         </div>
         <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'> Items: </h3>
            <h3 className='font-semibold text-gray-800'> Total Amount: </h3>
            <hr className='w-[90vw] lg:w-[18vw]'/>
            <button className='bg-red-400 font-bold px-3 py-2 text-white hover:bg-red-600 rounded m-2 w-[90vw] lg:w-[18vw] mb-5'>CheckOut</button>
         </div>
    </div>
  )
}

export default Cart