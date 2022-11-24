import {createSlice} from '@reduxjs/toolkit';
import { getPopulerMoviesAsync} from '../services';

export const searchSlice = createSlice({
    name:'popmovies',
    initialState:{
        items:[],
        isLoading:true,
        error:null,
        pending:false,

    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getPopulerMoviesAsync.pending,(state,action)=>{
            state.isLoading=true;
            state.pending=true;

        })
        .addCase(getPopulerMoviesAsync.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.isLoading=false;
        })
        .addCase(getPopulerMoviesAsync.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })


    }
})

export default searchSlice.reducer;