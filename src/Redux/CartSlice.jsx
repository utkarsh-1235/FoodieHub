import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action)=>{
            const item = state.cart.find((product)=> product.id === action.payload.id)
            
            if(item){
                item.qty = item.qty + 1;
            }
            else{
                state.cart.push({...action.payload, qty: 1});
            }
        },
        inCreaseQty: (state, action)=>{
            const item = state.cart.find((product)=>product.id === action.payload.id)

            if(item){
                item.qty = item.qty+1;
            }
        },
        removeFromCart: (state, action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id);
        },
        decreaseQty: (state, action)=>{
            const item = state.cart.find((product)=>product.id === action.payload.id)

            if(item){
                item.qty = item.qty-1;
            }
        }

    }
})

export const{addToCart, removeFromCart, inCreaseQty, decreaseQty} = cartSlice.actions;

export default cartSlice.reducer;