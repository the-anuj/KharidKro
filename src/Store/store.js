import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from '../Store/Slices/userSlice/cartSlice'
import productReducer from '../Store/Slices/userSlice/productSlice'
import adminProductReducer from '../Store/Slices/adminSlice/productSlice.js'

export const store = configureStore({
    reducer:{
        // cart:cartSlice,
        products:productReducer,
        adminProduct:adminProductReducer
    }
})