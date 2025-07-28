import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken } from '../../../utils/auth';

const BASE_URL = 'https://kharid-karo-backend.vercel.app/';

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId, { rejectWithValue }) => {
    try {
      const token = getToken();
      console.log('Token from localStorage:', token);
      console.log('User ID:', userId);
      
      const response = await axios.get(
        `${BASE_URL}/cart/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Cart response:', response.data);
      return response.data.cart; // Make sure your backend returns { cart: {...} }
    } catch (error) {
      console.log('Cart error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

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
  'cart/increaseQuantity',
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(
        `${BASE_URL}/cart/${userId}/items/${productId}/increase`,
        {},
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

export const decreaseQuantity = createAsyncThunk(
  'cart/decreaseQuantity',
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(
        `${BASE_URL}/cart/${userId}/items/${productId}/decrease`,
        {},
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

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.delete(
        `${BASE_URL}/cart/${userId}/items/${productId}`,
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