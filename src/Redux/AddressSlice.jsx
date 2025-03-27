import { createSlice } from "@reduxjs/toolkit";

const AddressStorage = ()=>{
    try{
       const newAddress = localStorage.getItem('address');
       return newAddress?.JSON.parse(newAddress) || {};
    }catch(err){
        console.log("Error in loading the address",err);
        return {}
    }
}

const AddressSlice = createSlice({
    name: 'Address',
    initialState: {
        address: AddressStorage()
    },
    reducers:{
        StoreAddress: (state, action)=>{
            console.log(action.payload);

            state.address = action.payload;
            localStorage.setItem("address",JSON.stringify(state.address));

        }
    }
})

export const {StoreAddress} = AddressSlice.actions;
export default AddressSlice.reducer;
