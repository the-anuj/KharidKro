import { createSlice } from "@reduxjs/toolkit";
import { getAdminProducts, updateAdminProduct, deleteAdminProduct } from '../../Thunk/AdminThunk/productThunk';

const initialState = {
  adminProducts: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.adminProducts = action.payload;
        
      })
      .addCase(getAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAdminProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAdminProduct.fulfilled, (state, action) => {
        state.loading = false;
        // Update the product in the state
        const updatedProduct = action.payload;
        state.adminProducts = state.adminProducts.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        );
      })
      .addCase(updateAdminProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAdminProduct.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAdminProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.adminProducts = state.adminProducts.filter(
          (product) => product._id !== action.payload
        );
      })
      .addCase(deleteAdminProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;