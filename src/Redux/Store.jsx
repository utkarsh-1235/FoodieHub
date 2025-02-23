import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice
    }
})

export default store;