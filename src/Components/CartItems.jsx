import { useDispatch, useSelector } from "react-redux";
import ItemCart from "./ItemCart";
import { useEffect, useState } from "react";
import { getUserCart } from "../Redux/CartSlice";
import { addOrders } from "../Redux/orderSlice";

function CartItems() {

    const CartItems = useSelector((state)=>state.Cart.cart) || [];
    console.log(CartItems);
    const user = useSelector((state)=>state.User.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user?.user?._id){
            dispatch(getUserCart(user.user._id));
          }
    },[user,dispatch])

    const [itemExpand, setItemExpand] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 text-center max-w-2xl bg-white p-4 rounded-lg shadow-md mx-auto p-4 rounded-xl shadow-lg" onClick={()=> setItemExpand(!itemExpand)}>
        <h1 className="text-3xl font-bold">Order Summary</h1>
    { itemExpand &&  <div>
                  {
                     Array.isArray(CartItems) && CartItems.length>0 ? CartItems.map((CartItem)=>{
                      
                        return <ItemCart key={CartItem._id} Cart={CartItem} className="relative"/>
                      }) : (
                          <p  className="text-gray-600 text-xl">Your Cart is Empty Please Add items first.</p>
                      )
                  }
      
      
               <button className='mt-6 w-[40%] p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition' onClick={()=>dispatch(addOrders(CartItems))}>Proceed </button>
               </div>}
    </div>
  )
}

export default CartItems
