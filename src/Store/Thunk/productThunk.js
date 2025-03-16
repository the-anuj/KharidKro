import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = "https://api.escuelajs.co/api/v1/products"
// const options = {
//     method: 'GET',
//     url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
//     params: {
//         category_id: '2478868012',
//         page: '1',
//         country: 'US',
//         sort_by: 'RELEVANCE',
//         product_condition: 'ALL',
//         is_prime: 'false',
//         deals_and_discounts: 'NONE'
//       },
//       headers: {
//         'x-rapidapi-key': '12d0fb2c48msh398c379417eaabap18ea7bjsnac6a1f5ffeb2',
//         'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//       }
//   };


// Get All Products
export const getProducts = createAsyncThunk('products/getAll', async (params, { rejectWithValue }) => {  
    // try {
    //     const response = await axios.request(options);
    //     return response.data;
    // } catch (error) {
    //     return rejectWithValue(error.response?.data || 'Something went wrong'); ;
    // } 
    try {
        const response = await axios.get(BASE_URL);
        // const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});


