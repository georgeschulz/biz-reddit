import { configureStore } from '@reduxjs/toolkit';
import contentSliceReducer from '../features/contentSlice';
import filterSliceReducer from '../features/filterSlice';
import sortSliceReducer from '../features/sortSlice';

export const store = configureStore({
  reducer: {
    content: contentSliceReducer,
    filter: filterSliceReducer,
    sort: sortSliceReducer
  },
});
