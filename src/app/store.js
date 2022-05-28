import { configureStore } from '@reduxjs/toolkit';
import contentSliceReducer from '../features/contentSlice.js';
import filterSliceReducer from '../features/filterSlice.js';
import sortSliceReducer from '../features/sortSlice.js';

export const store = configureStore({
  reducer: {
    content: contentSliceReducer,
    filter: filterSliceReducer,
    sort: sortSliceReducer
  },
});
