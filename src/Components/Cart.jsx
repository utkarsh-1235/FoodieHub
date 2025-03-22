import  {  useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CreateCart, getUserCart, removeItemFromCart } from '../Redux/CartSlice';

function Cart() {

  const CartItems = useSelector((state)=> state.Cart.cart) || [];
  console.log(CartItems)
    // const CartItems = useSelector((state)=>state.Dish?.dishes) || [];
    const [activeState, setActiveState] = useState(false);
    const dispatch = useDispatch();
    
    const totalItems = Array.isArray(CartItems) ? CartItems.reduce((total,item)=> total + item.quantity || 0 ,0) : 0;

    const totalPrice = Array.isArray(CartItems) 
  ? CartItems.reduce((total, item) => total + (item.quantity || 0) * (item.dish?.price || 0), 0)
  : 0;
    const user = useSelector((state)=> state.User.user);
    const dish = useSelector((state)=> state.Dish.dishes);
    

    useEffect(()=>{
      if(user?.user?._id){
        dispatch(getUserCart(user.user._id));
      }
    },[dispatch, user])

    const navigate = useNavigate();
    const handleCheckout = ()=>{
     const cartData = {
      userId: user.user._id,
       items: CartItems.map((item)=>{
        console.log(item);
        const dishIds = dish.find((d)=> d._id === item.dish.dishId);
        console.log(dishIds);
        return {
         dishId: dishIds?._id,
         qty: item.quantity
       }}), 
       totalPrice, 
       totalItems
     }

     
   dispatch(CreateCart({cartData}));
   navigate(`/payment?price=${totalPrice}&items=${totalItems}`)
    }
    
    
  return (
    <>
    <div className={`fixed top-0 right-0 bg-white w-full lg:w-[20vw] min-h-screen text-black p-5 ${activeState === true ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}>
         <div className='flex justify-between my-3'>
            <span className='text-xl font-bold text-gray-800'>
                My Cart
            </span>
            <IoMdClose className='border-2 border-gray-600 text-black font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 hover:pointer-cursor' onClick={()=>setActiveState(!activeState)}/>
         </div>
         <div>
            {
               Array.isArray(CartItems) && CartItems.length>0 ? CartItems.map((CartItem)=>{
                
                  return <ItemCart key={CartItem._id} Cart={CartItem}/>
                }) : (
                    <p  className="text-gray-600 text-xl">Your cart is empty.</p>
                )
            }


         </div>
         <div className='absolute bottom-0'>
            
            <h3 className='font-semibold text-gray-800'> Items: {totalItems}</h3>
            <h3 className='font-semibold text-gray-800'> Total Amount: {totalPrice.toFixed(2)}</h3>
            <hr className='w-[90vw] lg:w-[18vw]'/>
            <button className='bg-red-400 font-bold px-3 py-2 text-white hover:bg-red-600 rounded m-2 w-[90vw] lg:w-[18vw] mb-5'onClick={handleCheckout}>CheckOut</button>
         </div>
       
    </div>
    <FaShoppingCart className={`text-5xl p-3 rounded-full bg-red-600 text-gray-300 shadow-md fixed bottom-6 right-10 ${totalItems >0 && 'animate-bounce delay-500 transition-all duration-500'}`} onClick={()=>setActiveState(!activeState)}/>
    </>
  )
}

export default Cart