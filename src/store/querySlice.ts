import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  currentQuery: string;
  history: string[];
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: QueryState = {
  currentQuery: '',
  history: [],
  results: [],
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.unshift(action.payload);
    },
    setResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentQuery, addToHistory, setResults, setLoading, setError } = querySlice.actions;
export default querySlice.reducer;