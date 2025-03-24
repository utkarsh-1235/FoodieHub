import { useSelector } from "react-redux"
import AddressCart from "./AddressCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressComponent from "./AddressComponent";


function AddressItems({onclick, onSelect}) {
    const [expandIndex, setExpandIndex] = useState(null);
    const user = useSelector((state)=>state.User.user.user) || [];
    console.log(user);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleAddress = (id)=>{
        setSelectedAddress((prevId)=> prevId === id ? null : id);
    }

    const onToggle = (index)=>{
        setExpandIndex((ExpandedIndex)=> ExpandedIndex === index ? null :  index);
        setSelectedAddress(null);
    }
    const onEdit = (id)=>{
        console.log(id);
    }
    const onDeliver = (id)=>{
        console.log(id);
    }
  return (
    <div className="w-full flex flex-col gap-2 text-center max-w-2xl bg-white p-4 rounded-lg shadow-md mx-auto p-4 bg-gradient-to-br from-red-300 to-red-500 rounded-xl shadow-lg">
        <h2 className="text-white text-xl font-bold px-4 py-2">Delivery Address</h2>
      <div className="flex flex-col gap-4 mt-4">
        {
            (user.address ?? []).map((address, index)=>(
                <AddressCart key={address._id} id={address._id} name={user.name} phoneNumber={address.phoneNumber} state={address.state} city={address.city} pinCode={address.pinCode} district={address.district} address={address.address} isSelected={selectedAddress === address._id} onSelect={handleAddress} onEdit={onEdit} onDeliver={onDeliver} index={index} expandIndex={expandIndex} onToggle={()=>onToggle(index)} isExpanded={expandIndex === index}/>
            ))
        }
      </div>
      
      <AddressComponent />
    </div>
  )
}

export default AddressItems
