import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const localStorageGetItem = ()=>{
    try{
        const savedCart = localStorage.getItem('cart');
        const parsedCart = JSON.parse(savedCart) || [];
        return parsedCart.map((item)=>({
            ...item,
            _id: item._id || item.id,
            dish: {
                ...item.dish,
                dishId : item.dish?.dishId || item.dish?.id
            }
        }))
    }catch(err){
        console.error("Error in loading the cart",err);
        return [];
    }
}

export const CreateCart = createAsyncThunk('cart/add', async(cartData,{rejectWithValue})=>{
    try{
        // console.log('cart',cartData);
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
        // console.log(response.data);
        return response.data;
    }catch(err){
       return rejectWithValue(err.response.data) ;
    }
})

export const removeItemFromCart = createAsyncThunk('cart/item/delete',async(item, {rejectWithValue})=>{
    try{
        console.log(item);
         const response = await axios.post('http://localhost:3000/api/carts/delete', item);

         return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
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
            const id = action.payload?.dish?.dishId  ;
        console.log(id);
        console.log(state.cart);
            const item = state.cart.find((product)=> product.dish.dishId === id);
             console.log('item',item);
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
        
    console.log(action.payload);
        const id = action.payload._id  ;
            const item = state.cart.find((product) => product.dish.dishId === id);
            console.log(state.cart);
            console.log('item',item)
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        
        
        },
        // removeFromCart: (state, action)=>{
        //     state.cart = state.cart.filter((item)=> item._id !== action.payload?._id);
        //     localStorage.setItem("cart", JSON.stringify(state.cart));
        // },
        // 
        decreaseQty: (state, action) => {
            const id = action.payload._id; // Get the dish ID from the action payload
            const item = state.cart.find(product => product.dish.dishId === id); // Find the item using dishId
          console.log(id);
            if (item) {
                if (item.quantity > 1) { // Ensure quantity does not go below 1
                    item.quantity -= 1; // Decrease quantity
                } else {
                    // Optionally handle case where quantity is 1 and should be removed
                    state.cart = state.cart.filter(product => product.dish.dishId !== id);
                }
            }
        
            localStorage.setItem("cart", JSON.stringify(state.cart)); // Update local storage
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
                        console.log('cartSLice',action.payload);
                        state.cart = Array.isArray(action.payload.cartItems) ? action.payload.cartItems : [];
                        state.loading = false;
                        state.error = null;
                         
                        // console.log('carts',state.cart);
                        localStorage.setItem('cart',JSON.stringify(state.cart));
                        localStorage.setItem('loading',JSON.stringify(state.loading));
                        localStorage.setItem('error',JSON.stringify(state.error));
                     })
                     .addCase(removeItemFromCart.rejected, (state, action)=>{
                        state.error = action.payload;
                        state.loading = false;
                     })
                     .addCase(removeItemFromCart.pending,(state)=>{
                        state.loading = true;
                        state.error = null;
                     })
                     .addCase(removeItemFromCart.fulfilled,(state,action)=>{
                        state.cart = action.payload;
                        state.error = null;
                        state.loading = false;
                        localStorage.setItem('cart',JSON.stringify(state.cart));
                        localStorage.setItem('loading',JSON.stringify(state.loading));
                        localStorage.setItem('error',JSON.stringify(state.error));
                     })
    }
})

export const{addToCart, inCreaseQty, decreaseQty, deletCart} = cartSlice.actions;

export default cartSlice.reducer;