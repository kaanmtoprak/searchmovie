import { createSlice } from "@reduxjs/toolkit";
import {
  getPopulerWeekMoviesAsync,
  getPopulerDayMoviesAsync,
} from "../services";

export const searchSlice = createSlice({
  name: "popmovies",
  initialState: {
    day: {
      items: [],
      isLoading: false,
      error: null,
      pending: false,
    },
    week: {
      items: [],
      isLoading: true,
      error: null,
      pending: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopulerWeekMoviesAsync.pending, (state, action) => {
        state.week.isLoading = true;
        state.week.pending = true;
      })
      .addCase(getPopulerWeekMoviesAsync.fulfilled, (state, action) => {
        state.week.items = action.payload;
        state.week.isLoading = false;
      })
      .addCase(getPopulerWeekMoviesAsync.rejected, (state, action) => {
        state.week.isLoading = false;
        state.week.error = action.error.message;
      })
      .addCase(getPopulerDayMoviesAsync.pending, (state, action) => {
        state.day.isLoading = true;
        state.day.pending = true;
      })
      .addCase(getPopulerDayMoviesAsync.fulfilled, (state, action) => {
        state.day.items = action.payload;
        state.day.isLoading = false;
      })
      .addCase(getPopulerDayMoviesAsync.rejected, (state, action) => {
        state.day.isLoading = false;
        state.day.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
