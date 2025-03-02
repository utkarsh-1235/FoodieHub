import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const localStorageGetItem = ()=>{
    try{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }catch(err){
        console.error("Error in loading the cart",err);
        return [];
    }
}

export const CreateCart = createAsyncThunk('cart/add', async(cartData,{rejectWithValue})=>{
    try{
            console.log(cartData);
        const response = await axios.post('http://localhost:3000/api/carts/createCart',({
           cartData
        }))

        return response.data;

    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: localStorageGetItem(),
        loading: false,
        error: null
    },
    reducers: {
         addToCart: (state, action)=>{
            console.log('action payload',action.payload)
            const item = state.cart.find((product)=> product.id === action.payload.id)
            
            if(item){
                item.qty = item.qty + 1;
            }
            else{
                state.cart.push({...action.payload, qty: 1});
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }

            console.log(state.cart);
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
        },
        deletCart : (state,action)=>{
            state.cart = [];
            localStorage.removeItem("cart");
        }

    },
    extraReducers: (builder)=>{
            builder
                    .addCase(CreateCart.pending,(state,action)=>{
                            state.loading = true;
                            state.error = null;
                             })
                     .addCase(CreateCart.rejected,(state,action)=>{
                            state.error = action.payload;
                            state.loading = false;
                     })
                     .addCase(CreateCart.fulfilled,(state, action)=>{

                        const item = state.cart.find((product)=> product.id === action.payload.id);

                        if(item){
                           item.qty = item.qty+1;
                        }
                        else{
                            state.cart.push({...action.payload, qty: 1})
                            localStorage.setItem('cart',JSON.stringify(state.cart));
                        }
                            
                            state.loading = false;
                            state.error = null;

                            
                            
                     })
    }
})

export const{addToCart, removeFromCart, inCreaseQty, decreaseQty, deletCart} = cartSlice.actions;

export default cartSlice.reducer;