import React from 'react'
import PaymentForm from '../Components/PaymentForm'
import AddressComponent from '../Components/AddressComponent'
import '../index.css'
import PaymentItems from '../Components/Payment&Item'
import AddressItems from '../Components/AddressItems'
import Cart from '../Components/Cart'

export default function PaymentPage() {
  return (
    <div className='w-full flex justify-center gap-50 bg-gradient-to-br from-red-200 to-red-800 min-h-screen p-10'>
       <div className='w-full'>
         {/* <AddressComponent/> */}
        {/* <PaymentForm/> */}
        <AddressItems className='w-full'/>
        <Cart/>
        </div>
        {/* <PaymentItems/>         */}
    </div>
  )
}
