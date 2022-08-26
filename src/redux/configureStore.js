import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import checkReducer from './categories/categories';
import addRemoveReducer from './books/books';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: addRemoveReducer,
  },
});

export const getbooks = createAsyncThunk(
  'books/getbooks',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8bHEqSbfdyYUuS4cM1PJ/books/');
    return response.data;
  },
);

export default store;
