import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const StoreOrders = ()=>{
    try{
    const orders = localStorage.getItem('orders') || [];

    return Array.isArray(orders) ? JSON.parse(orders) : [];
    }catch(err){
        console.log("Error in loading the orders",err);
      return []
    }
}

export const createOrders = createAsyncThunk('add/orders', async(paymentData,{rejectedWithValue})=>{
   try{
     const response = await axios.post('http://localhost:3000/api/orders/add',paymentData);
     return response.data;
   }catch(err){
     return rejectedWithValue(err?.response?.data?.message);
   }
})

const orderSlice = createSlice({
    name: 'Order',
    initialState: {
       orders: StoreOrders() ,
       status: 'pending',
       loading: false,
       error: null
    },
    reducers: {
        addOrders: (state,action)=>{
          console.log(action.payload);
          state.orders.push(action.payload);
          localStorage.setItem('orders',JSON.stringify(state.orders));
        }
    },
    extraReducers: (builder)=>{
       builder
              .addCase(createOrders.pending,(state)=>{
                 state.loading = true;
                 state.error = null;
              }) 
              .addCase(createOrders.rejected,(state, action)=>{
                state.loading = null;
                state.error = action.payload;
              })
              .addCase(createOrders.fulfilled,(state, action)=>{
                state.orders = action.payload;
                state.loading = false;
                state.error = null;

                localStorage.setItem('orders',JSON.stringify(state.orders));
                localStorage.setItem('error',JSON.stringify(state.error));
                localStorage.setItem('loading',JSON.stringify(state.loading));
              })
    }
})

export const {addOrders} = orderSlice.actions;
export default orderSlice.reducer;