import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/Auth'
import cartSlice from "./slices/CartSlice"

const store=configureStore({
    reducer:{
        auth:AuthSlice,
        cart:cartSlice,
    }
})

export default store