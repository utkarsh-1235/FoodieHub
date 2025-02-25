import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'
import CategorySlice from './CategorySlice'
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice,
        Category: CategorySlice,
        Search: SearchSlice
    }
})

export default store;