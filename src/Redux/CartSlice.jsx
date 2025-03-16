import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const localStorageGetItem = ()=>{
    try{
        const savedCart = localStorage.getItem('cart');
        return Array.isArray(JSON.parse(savedCart)) ? JSON.parse(savedCart) : [];
    }catch(err){
        console.error("Error in loading the cart",err);
        return [];
    }
}

export const CreateCart = createAsyncThunk('cart/add', async(cartData,{rejectWithValue})=>{
    try{
        console.log('cart',cartData);
        const response = await axios.post('http://localhost:3000/api/carts/createCart',({
           cartData
        }))

        return response.data;

    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

export const getUserCart = createAsyncThunk('cart/user',async(userId,{rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:3000/api/carts/${userId}`);
        console.log(response.data);
        return response.data;
    }catch(err){
       return rejectWithValue(err.response.data) ;
    }
})

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: Array.isArray(localStorageGetItem()) ? localStorageGetItem() : [],
        loading: false,
        error: null
    },
    reducers: {
         addToCart: (state, action)=>{
            const id = action.payload.id || action.payload._id ;
            // console.log(id)
            const item = state.cart.find((product)=> product.id === id)
            // console.log('item',item);
            if(item){
                item.quantity = item.quantity + 1;
            }
            else{
                state.cart.push({...action.payload, quantity: 1});
            }
            
            localStorage.setItem("cart", JSON.stringify(state.cart));
            console.log(state.cart);
        },
        inCreaseQty: (state, action) => {
            const id = action.payload.id || action.payload._id;
            console.log(action.payload.id);
            const item = state.cart.find((product) => product.id === id)
            console.log('item',item)
            if (item) {
                item.quantity += 1;
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
                item.quantity = item.quantity-1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        deletCart : (state)=>{
            state.cart = [];
            localStorage.removeItem("cart");
        }

    },
    extraReducers: (builder)=>{
            builder
                    .addCase(CreateCart.pending,(state)=>{
                            state.loading = true;
                            state.error = null;
                             })
                     .addCase(CreateCart.rejected,(state,action)=>{
                            state.error = action.payload;
                            state.loading = false;
                     })
                     .addCase(CreateCart.fulfilled,(state, action)=>{

                        // const item = state.cart.find((product)=> product.id === action.payload.id);

                        // if(item){
                        //    item.qty = item.qty+1;
                        // }
                        // else{
                        //     state.cart.push({...action.payload, qty: 1})
                        //     localStorage.setItem('cart',JSON.stringify(state.cart));
                        // }
                            state.cart = Array.isArray(action.payload) ? action.payload : [] ;
                            state.loading = false;
                            state.error = null;
                            
                            
                            localStorage.setItem('cart',JSON.stringify(state.cart));
                            localStorage.setItem('loading',JSON.stringify(state.loading));
                            localStorage.setItem('error',JSON.stringify(state.error));

                            
                            
                     })
                     .addCase(getUserCart.pending, (state)=>{
                        state.loading = true;
                        state.error = null;
                     })
                     .addCase(getUserCart.rejected, (state, action)=>{
                        state.loading = false;
                        state.error = action.payload;
                     })
                     .addCase(getUserCart.fulfilled, (state, action)=>{
                        state.cart = Array.isArray(action.payload.cartItems) ? action.payload.cartItems : [];
                        state.loading = false;
                        state.error = null;
                         
                        console.log('carts',state.cart);
                        localStorage.setItem('cart',JSON.stringify(state.cart));
                        localStorage.setItem('loading',JSON.stringify(state.loading));
                        localStorage.setItem('error',JSON.stringify(state.error));
                     })
    }
})

export const{addToCart, removeFromCart, inCreaseQty, decreaseQty, deletCart} = cartSlice.actions;

export default cartSlice.reducer;