import { createSlice } from "@reduxjs/toolkit";

const localStorageGetItem = ()=>{
    try{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }catch(err){
        console.error("Error in loading the cart",err);
        return [];
    }
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: localStorageGetItem()
    },
    reducers: {
        addToCart: (state, action)=>{
            const item = state.cart.find((product)=> product.id === action.payload.id)
            
            if(item){
                item.qty = item.qty + 1;
            }
            else{
                state.cart.push({...action.payload, qty: 1});
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        inCreaseQty: (state, action)=>{
            const item = state.cart.find((product)=>product.id === action.payload.id)

            if(item){
                item.qty = item.qty+1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseQty: (state, action)=>{
            const item = state.cart.find((product)=>product.id === action.payload.id)

            if(item){
                item.qty = item.qty-1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }

    }
})

export const{addToCart, removeFromCart, inCreaseQty, decreaseQty} = cartSlice.actions;

export default cartSlice.reducer;