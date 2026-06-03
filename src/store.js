import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './features/services/servicesSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});
