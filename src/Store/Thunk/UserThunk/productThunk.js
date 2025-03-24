import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = "http://localhost:5000/user"
// Get All Products
export const getProducts = createAsyncThunk('user/getproducts', async (params, { rejectWithValue }) => {  

    try {
        const response = await axios.get(`${BASE_URL}/getproducts`);
        // const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});
export const getProductsCategory = createAsyncThunk('user/getproducts/categories', async (params, { rejectWithValue }) => {  

    try {
        const response = await axios.get(`${BASE_URL}/getproducts/categories`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});


