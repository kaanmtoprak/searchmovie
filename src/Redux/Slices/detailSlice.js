import {createSlice} from '@reduxjs/toolkit';
import {getDetailMoviesAsync } from '../services';

export const detailSlice = createSlice({
    name:'detailmovies',
    initialState:{
        items:[],
        isLoading:true,
        error:null,
        pending:false,
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getDetailMoviesAsync.pending,(state,action)=>{
            state.isLoading=true;
            state.pending=true;

        })
        .addCase(getDetailMoviesAsync.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.isLoading=false;
        })
        .addCase(getDetailMoviesAsync.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })



    }
})

export default detailSlice.reducer;