import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    query: queryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;