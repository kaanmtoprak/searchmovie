import { createSlice } from "@reduxjs/toolkit";
import { getSearchMoviesAsync } from "../services";

export const searchSlice = createSlice({
  name: "searchmovies",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    pending: false,
    control: false,
  },
  reducers: {
    changePending: (state) => {
      state.control = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchMoviesAsync.pending, (state, action) => {
        state.isLoading = true;
        state.pending = true;
      })
      .addCase(getSearchMoviesAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.control = true;
      })
      .addCase(getSearchMoviesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { changePending } = searchSlice.actions;

export default searchSlice.reducer;
