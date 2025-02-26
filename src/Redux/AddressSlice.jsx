import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
    name: 'Address',
    initialState: {
        address: {}
    },
    reducers:{
        StoreAddress: (state, action)=>{
            console.log(action.payload);
            return {...state, address: action.payload}
        }
    }
})

export const {StoreAddress} = AddressSlice.actions;
export default AddressSlice.reducer;
