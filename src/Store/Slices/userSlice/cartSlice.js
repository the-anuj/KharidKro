import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart, increaseQuantity, decreaseQuantity, removeFromCart } from "../../Thunk/UserThunk/cartThunk";

const initialState = {
    cart : [],
    loading: false,
    error: null
}

 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cart = [];
      }
    },
    extraReducers: (builder) => {
      builder
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
          state.error = action.payload?.message || 'Failed to get cart';
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
        })

        // Increase Quantity
        .addCase(increaseQuantity.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(increaseQuantity.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        })
        .addCase(increaseQuantity.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to increase quantity';
        })

        // Decrease Quantity
        .addCase(decreaseQuantity.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(decreaseQuantity.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        })
        .addCase(decreaseQuantity.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to decrease quantity';
        })

        // Remove from Cart
        .addCase(removeFromCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        })
        .addCase(removeFromCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to remove from cart';
        });

    }
})

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer