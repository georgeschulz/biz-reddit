import { configureStore } from '@reduxjs/toolkit';
import contentSliceReducer from '../features/contentSlice';

export const store = configureStore({
  reducer: {
    content: contentSliceReducer
  },
});
