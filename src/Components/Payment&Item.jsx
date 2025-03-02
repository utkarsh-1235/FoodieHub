import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PaymentItems() {
    const [searchParams] = useSearchParams();

    const price = searchParams.get('price');
    const items = searchParams.get('items');
    
  return (
    <>
    <div className='p-6 text-left bg-gray-100 rounded-lg shadow-lg max-w-3xl h-[70%]'>
     <h1 className='text-3xl  font-semibold p-6'> Price Details</h1>
     <hr />
     <h3 className='text-xl p-3'> Items: <span>{items}</span></h3>
     <h3 className='text-left p-3'> Total Price: <span>{price}</span></h3>
      
    </div>
    </>
  )
}

export default PaymentItems