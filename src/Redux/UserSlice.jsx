import { createSlice } from "@reduxjs/toolkit";

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
const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user: getUseFromLocalStorage(),
        currentUser: null,
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        token: null
    },
    reducers:{
        AddUser : (state, action)=>{
            console.log("Login Action Triggered:", action.payload); // Debugging
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated',JSON.stringify(true));
        },
        removeUser : (state, action)=>{
            state.user = state.user.filter((user)=>user.id !== action.payload.id)
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        login : (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user',JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated',JSON.stringify(true));
        },
        logout : (state, action)=>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated')
        }

    }
})

export const {AddUser, removeUser, login, logout} = UserSlice.actions;

export default UserSlice.reducer;