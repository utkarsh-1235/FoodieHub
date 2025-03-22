import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
function getOrders() {
    const orders = useSelector((state)=>state.Order.orders);
    const loading = useSelector((state)=>state.Order.loading);
  return (
    <>
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-200 to-red-800 text-white">
       <div className="flex gap-4 mt-12 items-center justify-center">
            <input className='w-full md:w-1/3 lg:w-3/5 bg-white rounded-md text-black text-center px-4 py-2'
                   placeholder = 'search orders'/>

                   <button className="px-4 py-2 w-1/6 transition duration-300 rounded-md bg-red-400 text-white shadow-lg hover:bg-red-500"> Search</button>
        
        </div>     
        { 
       loading ? (<div className='text-center text-lg font-bold mt-6'>Loading Dishes.....</div>   ) : (<div className="flex flex-col items-center mt-10">
            {
                orders.length > 0 ? (
                    orders.map((order)=>{
                        <OrderCard key={order._id} id={order._id} items={order.items} totalPrice={order.totalPrice} totalItems={order.totalItems} status={order.status}/>
                    })
                ):
                (<h1 className="text-3xl font-bold"> No orders Found</h1>)
            }
            </div>     )      }
    </div>
    </>
  )
}

export default getOrders
