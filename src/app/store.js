import { configureStore } from '@reduxjs/toolkit';
import contentSliceReducer from '../features/contentSlice';
import filterSliceReducer from '../features/filterSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    content: contentSliceReducer,
    filter: filterSliceReducer
  },
});
