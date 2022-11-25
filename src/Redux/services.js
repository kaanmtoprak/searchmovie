
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopulerWeekMoviesAsync = createAsyncThunk(
  "popmovies/getPopulerWeekMoviesAsync",
  async () => {
    const res = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
    // console.log(res)
    return await res.data;
  }
);
export const getPopulerDayMoviesAsync = createAsyncThunk(
  "popmovies/getPopulerDayMoviesAsync",
  async () => {
    const res = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    // console.log(res)
    return await res.data;
  }
);
export const getSearchMoviesAsync = createAsyncThunk(
  "searchmovies/getPopulerMoviesAsync",
  async (data) => {
    const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${data}&page=1`);
    console.log(res)
    return await res.data;
  }
);


