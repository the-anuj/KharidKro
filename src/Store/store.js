import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../Store/Slices/cartSlice';
import productReducer from '../Store/Slices/productSlice'

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productReducer
    }
})