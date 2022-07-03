import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './movies-slice';
import categoriesReducer from './categories-slice';
import paginationReducer from './pagination-slice'

export const store = configureStore({
    reducer: {
      movies : moviesReducer,
      categories: categoriesReducer,
      pagination: paginationReducer
    },
  })












