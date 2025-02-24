import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'
import CategorySlice from './CategorySlice'

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice,
        Category: CategorySlice
    }
})

export default store;