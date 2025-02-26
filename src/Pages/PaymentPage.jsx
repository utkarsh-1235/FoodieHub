import React from 'react'
import PaymentForm from '../Components/PaymentForm'
import AddressComponent from '../Components/AddressComponent'
import '../index.css'

export default function PaymentPage() {
  return (
    <div className='bg-gradient-to-br from-red-200 to-red-800 min-h-screen w-full'>
        <AddressComponent/>
        <PaymentForm/>
    </div>
  )
}
