// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BASE_URL = `http://localhost:5000/cart`
// export const getCart = createAsyncThunk(`${userId}`, async (params, { rejectWithValue }) => {  

//     try {
//         const response = await axios.get(`${BASE_URL}/userId`);
//         // const response = await axios.get(`${BASE_URL}`);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response?.data || 'Something went wrong');

// });