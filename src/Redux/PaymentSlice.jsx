import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'Payment',
    initialState:{
        payment: [],
        paymentCompleted: false
    },
    reducers:{
        addpayment: (state, action)=>{
            state.payment = action.payload;
            state.paymentCompleted = true
            localStorage.setItem('payment',JSON.stringify(state.payment));
            localStorage.setItem('paymentCompleted',JSON.stringify(state.paymentCompleted));
        }
    }
})

export const {addpayment} = paymentSlice.actions;
export default paymentSlice.reducer;

