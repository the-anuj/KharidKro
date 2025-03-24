import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import product from '../../../../../Backend/models/product';

const BASE_URL = "http://localhost:5000/admin";

export const getAdminProducts = createAsyncThunk('admin/getproducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/getproducts`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

export const updateAdminProduct = createAsyncThunk('admin/updateProduct',async ({ productId, updatedData }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`${BASE_URL}/updatedadminproduct/${productId}`, updatedData);
        return response.data; // Return the updated product
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
      }
    }
  );
  export const deleteAdminProduct = createAsyncThunk(
    'admin/deleteAdminProduct',
    async (productId, { rejectWithValue }) => {
      try {
        await axios.delete(`${BASE_URL}/deleteadminproduct/${productId}`);
        return productId; // Return the deleted product ID
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
      }
    }
  );