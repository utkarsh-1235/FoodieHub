import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const storeDishesFromLocalStorage = ()=>{
    try{
         const dishData = localStorage.getItem('dishes');
         return dishData ? JSON.parse(dishData) : [];
    }catch(err){
        console.error("Error in loading cart", err);
        return [];
    }
}
export const getAllDishes = createAsyncThunk('food',async(_, {rejectedWithValue})=>{
    try{
       const response = await axios.get('http://localhost:3000/api/dishes/all')
    //    console.log("Dishes",response.data.data);
       return response.data.data;
    }catch(err){
        return rejectedWithValue(err?.response?.data?.message);
    }
})

export const DishSlice = createSlice({
    name: 'Dish',
    initialState:{
        dishes: storeDishesFromLocalStorage(),
        loading: false,
        error: null
    },
    reducers:{

    },
    extraReducers: (builder)=>{
       builder
              .addCase(getAllDishes.rejected,(state,action)=>{
                  state.loading = false;
                  state.error = action.payload;
                 
                   })
              .addCase(getAllDishes.pending,(state)=>{
                  state.loading = true;
                  state.error = null;
                 
              })
              .addCase(getAllDishes.fulfilled,(state,action)=>{
                
        
                  state.dishes = action.payload.map(({ name, price,img, description, rating, category, _id }) => ({
                    name,
                    image: img,
                    description,
                    price,
                    category,
                    rating,
                    _id                }));
                  state.loading = false;
                  state.error = null;
                // console.log('Data', state.dishes);
                  localStorage.setItem('dishes',JSON.stringify(state.dishes));
                  localStorage.setItem('loading', false);
                  localStorage.setItem('error',null);
                  
              })
    }
})

// export const{} = DishSlice.actions;
export default DishSlice.reducer;