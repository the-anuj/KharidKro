import { createSlice } from "@reduxjs/toolkit";
import {addToCart, getCart } from "../../Thunk/UserThunk/cartThunk";

const initialState = {
    cart : [],
    cartLoading:false,
    error:null
}

 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cart = null;
      }
    },
    extraReducers: (builder) => {
      builder
        // Create Cart
        // .addCase(createCart.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(createCart.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.cart = action.payload;
        // })
        // .addCase(createCart.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.payload?.message || 'Failed to create cart';
        // })
        .addCase(getCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        })
        .addCase(getCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to create cart';
        })
        
        // Add to Cart
        .addCase(addToCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addToCart.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        })
        .addCase(addToCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to add to cart';
        });

    }
})

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer