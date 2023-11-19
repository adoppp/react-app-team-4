import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://powerpulse-171j.onrender.com/api/';
export const getProducts = createAsyncThunk('products',
    async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});