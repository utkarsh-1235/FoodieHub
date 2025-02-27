import React from 'react'
import PaymentForm from '../Components/PaymentForm'
import AddressComponent from '../Components/AddressComponent'
import '../index.css'
import PaymentItems from '../Components/Payment&Item'

export default function PaymentPage() {
  return (
    <div className=' flex justify-center gap-50 bg-gradient-to-br from-red-200 to-red-800 min-h-screen p-10'>
       <div>
         <AddressComponent/>
        <PaymentForm/>
        </div>
        <PaymentItems/>        
    </div>
  )
}
