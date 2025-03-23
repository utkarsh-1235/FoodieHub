import { configureStore } from "@reduxjs/toolkit"
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'
import CategorySlice from './CategorySlice'
import SearchSlice from "./SearchSlice"
import PaymentSlice from './PaymentSlice'
import AddressSlice from './AddressSlice'
import RestaurantSlice from './RestaurantSlice'
import  DishSlice  from "./DishSlice"
import OrderSlice from "./orderSlice"
import logger from "redux-logger"

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice,
        Category: CategorySlice,
        Search: SearchSlice,
        Payment: PaymentSlice,
        Address: AddressSlice,
        Restaurant: RestaurantSlice,
        Dish: DishSlice,
        Order: OrderSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Enable logging
})

export default store;