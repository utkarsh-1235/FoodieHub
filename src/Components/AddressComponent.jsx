import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { StoreAddress } from '../Redux/AddressSlice';
import { addAddress } from '../Redux/UserSlice';

function AddressComponent() {
    const [address, setAddress] = useState({
        phoneNumber: '',
        state: '',
        dist: '',
        city: '',
        pin: '',
        address: ''
    })
    const userId = useSelector((state)=>state.User.user.user._id);
    console.log(userId)
    const [showNewAddress, setShowNewAddress] = useState(false);
    const handleInput = (e)=>{
        const {name, value} = e.target;
         setAddress((prev)=>({...prev, [name]:value}))
    }
      const dispatch = useDispatch();
      
    const SubmitAddress = ()=>{
        if (!address.state || !address.dist || !address.city || !address.pin || !address.address) {
            console.error("All fields are required!");
            return;
          }
          dispatch(addAddress({userId, address}));
        //  dispatch(StoreAddress(address));
    }
  return (
    <>
    <div className= 'p-6 mb-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto relative w-9/10'>
    <h2 className="text-red-500 hover:text-red-600" onClick={()=>setShowNewAddress(!showNewAddress)}>+  Add New Address</h2>
    {console.log(showNewAddress)}
    { showNewAddress && (<div>
       <h2 className='text-xl text-center font-semibold'> Address Details </h2>
       <div className='text-center p-4'>
       <input
                                            className='w-[80%] text-center ml-4 p-1 mb-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'Number'
                                             name = 'phoneNumber'
                                             placeholder = 'Enter Phone Number'
                                             value={address.phoneNumber}
                                             onChange = {handleInput}/>
       <input
                                            className='w-[80%] text-center ml-4 p-1 mb-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'state'
                                             placeholder = 'State'
                                             value={address.state}
                                             onChange = {handleInput}/>

<input
                                            className='w-[80%] text-center ml-4 p-1 mb-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'dist'
                                             placeholder = 'District'
                                             value = {address.dist}
                                             onChange = {handleInput}/>  
                                             <input
                                            className='w-[80%] text-center ml-4 p-1 mb-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'pin'
                                             placeholder = 'Pin Code'
                                             value = {address.pin}
                                             onChange = {handleInput}/>

                                            <input
                                            className='w-[80%] text-center ml-4 mb-3 p-1 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'city'
                                             placeholder = 'City'
                                             value = {address.city}
                                             onChange = {handleInput}/>

                                             <input
                                            className='w-[80%] text-center ml-4 p-1 mb-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                             type = 'text'
                                             name = 'address'
                                             placeholder = 'Flat Number'
                                             value = {address.address}
                                             onChange = {handleInput}/>
          
                                           
       <button className='mt-6 w-[40%] p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition' onClick={SubmitAddress}>Proceed </button>
       </div>
       </div>)}
    </div>
    </>
  )
}

export default AddressComponent