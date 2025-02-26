import { configureStore } from "@reduxjs/toolkit"
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'
import CategorySlice from './CategorySlice'
import SearchSlice from "./SearchSlice"
import PaymentSlice from './PaymentSlice'
import AddressSlice from './AddressSlice'

const store = configureStore({
    reducer: {
        Cart: CartSlice,
        User: UserSlice,
        Category: CategorySlice,
        Search: SearchSlice,
        Payment: PaymentSlice,
        Address: AddressSlice
    }
})

export default store;