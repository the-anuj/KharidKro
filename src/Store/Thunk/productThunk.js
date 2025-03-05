import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = "https://api.escuelajs.co/api/v1/products"


// Get All Products
export const getProducts = createAsyncThunk('products/getAll', async (params, { rejectWithValue }) => {   
    try {
        const response = await axios.get(BASE_URL);
        // const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});


