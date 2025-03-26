import React, { useState } from 'react'
import PaymentForm from '../Components/PaymentForm'
import AddressComponent from '../Components/AddressComponent'
import '../index.css'
import PaymentItems from '../Components/Payment&Item'
import AddressItems from '../Components/AddressItems'
import Cart from '../Components/Cart'
import CartItems from '../Components/CartItems'

export default function PaymentPage() {
  // const [selectedAddress, setSelectedAddress] = useState(null);
  // const [showNewAddress, setShowNewAddress] = useState(false);

  // const handleAddressSelect = (addressId)=>{
  //   setSelectedAddress(addressId);
  //   setShowNewAddress(false);
  // }

  // const handleNewAddress = () => {
  //   setSelectedAddress(null);
  //   setShowNewAddress(true);
  // }
  return (
    <div className='w-full flex flex-col justify-center gap-10 bg-gradient-to-br from-red-200 to-red-800 min-h-screen p-10'>
       <div className='w-full'>
         
        <AddressItems className='w-full'/>
        </div>
        <CartItems/>
        <PaymentForm/>
        {/* <PaymentItems/>         */}
    </div>
  )
}
