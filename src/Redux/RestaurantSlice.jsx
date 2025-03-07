import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import Restaurants from "../Data/RestaurantsData";
import axios from "axios";

const loadRestaurantsFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("restaurant");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error("Error loading restaurants:", err);
        return [];
    }
};

 export const addRestaurant = createAsyncThunk('add', async(data, {rejectWithValue})=>{
     try{
        console.log(data);
        const response = await axios.post('http://localhost:3000/api/restaurants/add', data);
        return response.data;
     }catch(err){
        return rejectWithValue(err.response.data);
     }
})

export const getRestaurants = createAsyncThunk('restaurant/getRestaurant', async(_,{rejectWithValue})=>{
     try{
         const response = await axios.get('http://localhost:3000/api/restaurants/all')
         console.log(response);
         return Array.isArray(response.data) ? response.data : [];
     }catch(err){
        return rejectWithValue(err.response.data) || "Failed to fetch restaurants";
     }
})
const RestaurantSlice = createSlice({
    name: 'Restaurant',
    initialState:{
        restaurant: loadRestaurantsFromLocalStorage() || [],
        loading: localStorage.getItem('loading'),
        error: localStorage.getItem('error')
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
               .addCase(addRestaurant.rejected,(state,action)=>{
                    state.loading = false;
                    state.error = action.payload;
               })
               .addCase(addRestaurant.pending,(state)=>{
                     state.loading = true;
                     state.error = null;
               })
               .addCase(addRestaurant.fulfilled,(state, action)=>{
                     state.user = action.payload;
                     state.loading = false;
                     state.error = null;

                     localStorage.setItem('restaurant',JSON.stringify(state.user));
                     localStorage.setItem('loading',JSON.stringify(state.loading));
                     localStorage.setItem('error',JSON.stringify(state.error));
               })
               .addCase(getRestaurants.rejected,(state, action)=>{
                state.loading = false;
                state.error = action.payload;
               })
               .addCase(getRestaurants.pending,(state)=>{
                state.loading = true;
                state.error = null
               })
               .addCase(getRestaurants.fulfilled,(state,action)=>{
                state.restaurant = action.payload;
                state.loading = false;
                state.error = null;
               })
    }
})

export const {} = RestaurantSlice.actions;

export default RestaurantSlice.reducer;
