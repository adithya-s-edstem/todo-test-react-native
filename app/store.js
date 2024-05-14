import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../redux/slices';

export const store = configureStore({
  reducer: todoReducer
});
