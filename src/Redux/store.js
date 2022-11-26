import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Slices/searchSlice";
import populerSlice from "./Slices/populerSlice";
import detailSlice from "./Slices/detailSlice";

export const store = configureStore({
  reducer: {
    searchmovies: searchSlice,
    popmovies: populerSlice,
    detailmovies: detailSlice,
  },
});
