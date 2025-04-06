import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken } from '../../../utils/auth';

const BASE_URL = 'http://localhost:5000';



export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId, { rejectWithValue }) => {
    try {
      // const token = getToken();
      const response = await axios.get(
        `${BASE_URL}/cart/${userId}`
      );
      return response.data.cart; // Make sure your backend returns { cart: {...} }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// export const createCart = createAsyncThunk(
//   'cart/createCart',
//   async (userId, { rejectWithValue }) => {
//     try {
//       const token = getToken();
//       const response = await axios.post(
//         `${BASE_URL}/cart/${userId}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       return response.data.cart; // Make sure your backend returns { cart: {...} }
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${BASE_URL}/cart/${userId}/items`,
         {productId, quantity},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const increaseQuantity = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${BASE_URL}/cart/${userId}/items`,
         {productId, quantity},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);