import { configureStore } from "@reduxjs/toolkit"
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'
import CategorySlice from './CategorySlice'
import SearchSlice from "./SearchSlice"
import PaymentSlice from './PaymentSlice'
import AddressSlice from './AddressSlice'
import RestaurantSlice from './RestaurantSlice'
import  DishSlice  from "./DishSlice"

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice,
        Category: CategorySlice,
        Search: SearchSlice,
        Payment: PaymentSlice,
        Address: AddressSlice,
        Restaurant: RestaurantSlice,
        Dish: DishSlice
    }
})

export default store;