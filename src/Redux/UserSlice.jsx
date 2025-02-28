import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUseFromLocalStorage = ()=>{
    try{
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null ;
    }
    catch(err){
        console.error("Error in loading cart", err);
        return null;
    }
}

export const AddUser = createAsyncThunk('signup',async(userData, {rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:3000/api/users/register', userData, {
            headers: { "Content-Type": "application/json" }
        })
        return response.data;  
    }catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const login = createAsyncThunk('login',async(userData,{rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:3000/api/users/login',userData,{
            headers: {"Content-Type": "application/json"}
        })
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user: getUseFromLocalStorage(),
        currentUser: null,
        error: null,
        loading: null,
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        token: null
    },
    reducers:{
    
        removeUser : (state, action)=>{
            state.user = state.user.filter((user)=>user.id !== action.payload.id)
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        
        logout : (state, action)=>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated')
        }

    },
    extraReducers:(builder)=>{
        builder
              .addCase(AddUser.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
              })
              .addCase(AddUser.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(AddUser.fulfilled,(state, action)=>{
                 state.user = action.payload;
                 state.token = action.payload.token;
                 state.isAuthenticated = true;
                 state.loading = false; 
                 state.error = false;

                 localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('isAuthenticated', 'true');
                 
              })
              .addCase(login.rejected,(state,action)=>{
                 state.error = action.payload;
                 state.loading = false;
              })
              .addCase(login.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(login.fulfilled,(state,action)=>{
                state.user = action.payload;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = false;

                localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('isAuthenticated', 'true');
              })
              
    }
})

export const {removeUser, logout} = UserSlice.actions;

export default UserSlice.reducer;