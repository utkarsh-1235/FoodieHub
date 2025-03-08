import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllDishes = createAsyncThunk('food',async(_, {rejectedWithValue})=>{
    try{
       const response = await axios.get('http://localhost:3001/api/dishes/all')
       console.log(response)
       return response.data;
    }catch(err){
        return rejectedWithValue(err);
    }
})

export const DishSlice = createSlice({
    name: 'Dish',
    initialState:{
        dish: [],
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
                  state.loading = false;
                  state.error = null;
                  state.dish = action.payload ;
                  console.log(state.dish)
              })
    }
})

export const{} = DishSlice.actions;
export default DishSlice.reducer;