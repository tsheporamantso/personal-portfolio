import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../../utils/api';

export const getServicesData = createAsyncThunk(
  'getServicesData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(API.services);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  services: [],
  isLoading: true,
  isError: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getServicesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServicesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload.services;
      })
      .addCase(getServicesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default servicesSlice.reducer;
