import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../Redux/UserSlice';

export default function IsAuthenticated() {
    const authentication = useSelector((state)=>state.IsAuthenticated);
    const dispatch = useDispatch();
  return (
    <>
    <nav className='flex justify-between items-center p-6 bg-white shadow-lg text-black'>
    <div>
      {
        authentication ? (
           <button className='bg-red-300 rounded-md p-2 text-black cursor-pointer hover:bg-red-400 cursor-pointer'
                   onClick={()=>dispatch(login())}>
            Login
           </button>
        ): (
            <button className='bg-red-300 rounded-md p-2 text-black cursor-pointer hover:bg-red-400 cursor-pointer'
                    onClick={()=>dispatch(logout())}>
                Logout
            </button>
        )
      }
      </div>
    </nav>
        </>
  )
}
