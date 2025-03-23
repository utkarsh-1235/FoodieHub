import { RadioGroup } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrders } from '../Redux/orderSlice';
import { getUserCart } from '../Redux/CartSlice';


const paymentMethods = [
    { id: "upi", name: "UPI", description: "Pay using UPI ID or linked app" },
    { id: "wallet", name: "Wallet", description: "Pay using Paytm, Amazon Pay, etc." },
    { id: "card", name: "Credit/Debit Card", description: "Enter card details for payment" },
    { id: "netbanking", name: "Net Banking", description: "Pay using your bank's net banking service" },
    { id: "cod", name: "Cash on Delivery", description: "Pay when you receive the order" }
]

export default function PaymentForm() {
    const [payment, setPayment] = useState({
        upiId:'',
        cardNumber:'',
        expiryDate:'',
        cvv:''
    })
    const dispatch = useDispatch();
    const [method, setMethod] = useState(paymentMethods[0].id);
  
    const handleInput = (e)=>{
        const {name, value} = e.target;
        setPayment((prev)=>({...prev, [name]:value}));
    }
    const user = useSelector((state)=> state.User.user);
    const cart = useSelector((state)=>state.Cart.cart);
    
    useEffect(()=>{
         dispatch(getUserCart(user?.user._id));
    },[dispatch, user])

    useEffect(()=>{
        console.log('Cart Updated in Payment Component:',cart);
    },[cart])


    console.log('cart',cart);
    const createOrder = {
        user: user?.user?._id,
        payment,
        items: cart.map((item)=>{
            return {
                dishId: item.dish.dishId,
                quantity: item.quantity
            }
        }) 
    }

    const handlePayment = ()=>{
        if (method === 'upi' && !payment.upiId) {
            alert('Please enter your UPI ID.');
            return;
        }
        if (method === 'card') {
            if (!payment.cardNumber || !payment.expiryDate || !payment.cvv) {
                alert('Please fill in all card details.');
                return;
            }
        }
        dispatch(createOrders(createOrder));
        alert(`Payment method selected: ${method}\nDetails: ${JSON.stringify(payment)}`);
    }

    const isAddress = useSelector((state)=>state.User.user.user.address);

    console.log(isAddress);
    
  return (
   <>
  { isAddress  ? (<div className='p-6 text-center bg-white rounded-lg shadow-lg max-w-3xl mx-auto'>
        <h2 className='text-center text-xl font-semibold mb-4'> Select Payment Method</h2> 
        <div className='ml-10'>
        <RadioGroup  value={method} onChange={setMethod}>
            {paymentMethods && paymentMethods.map((paymentMethod)=>(
                <RadioGroup.Option key={paymentMethod.id} value={paymentMethod.id}>
                    {({checked})=>(
                        <div className={`p-3  m-2 w-[80%] text-center rounded-lg cursor-pointer transition ${checked ? 'bg-red-400':'bg-gray-200 hover:bg-gray-300'}`}>
                            <p className="font-medium text-black">{paymentMethod.name}</p>
                            <p className="text-sm">{paymentMethod.description}</p>
                            {
                                checked && ( paymentMethod.id === 'upi' || paymentMethod.id === 'card') &&(
                                    <div className='mt-2 p-3 bg-gray-100 rounded-lg space-y-2'>
                                        {
                                            paymentMethod.id === 'upi' && <input
                                            className='w-full  text-center p-1 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'upiId'
                                             placeholder = 'Enter UPI ID'
                                             value = {payment.upiId}
                                             onChange = {handleInput}/>
                                        }
                                         {
                                            paymentMethod.id === 'card' && <div className='space-y-2'><input
                                            className='w-full text-center p-1 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'cardNumber'
                                             placeholder = 'Card Number'
                                             value = {payment.cardNumber}
                                             onChange = {handleInput}/>
                                        
                                             <input
                                            className='w-full text-center p-1 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'expiryDate'
                                             placeholder = 'MM/YY'
                                             value = {payment.expiryDate}
                                             onChange = {handleInput}/>
                                        
                                             <input
                                            className='w-full text-center p-1 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'cvv'
                                             placeholder = 'CVV'
                                             value = {payment.cvv}
                                             onChange = {handleInput}/>
                                             </div>
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
            
                    }
                </RadioGroup.Option>))}

        </RadioGroup>
        </div>
        <button className="mt-6 w-[40%] p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition" onClick={handlePayment}>
        Proceed to Pay
      </button>
    </div>): (
                <div className='p-6 text-center bg-white rounded-lg shadow-lg max-w-3xl mx-auto'>
                    <h2 className='text-red-500 text-xl font-semibold mb-4'>
                        Please add a delivery address first!
                    </h2>
                    <p className='text-gray-600'>
                        You need to provide a shipping address before proceeding to payment.
                    </p>
                </div>
            )}
    </>
  )
}
