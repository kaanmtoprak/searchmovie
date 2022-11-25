import {createSlice} from '@reduxjs/toolkit';
import { getSearchMoviesAsync } from '../services';

export const searchSlice = createSlice({
    name:'searchmovies',
    initialState:{
        items:[],
        isLoading:true,
        error:null,
        pending:false,

    },
    reducers:{
        changePending: (state) =>{
            state.pending = false
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getSearchMoviesAsync.pending,(state,action)=>{
            state.isLoading=true;
            state.pending=true;

        })
        .addCase(getSearchMoviesAsync.fulfilled,(state,action)=>{
            state.items = action.payload;
            state.isLoading=false;
        })
        .addCase(getSearchMoviesAsync.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
})

export const {changePending} = searchSlice.actions

export default searchSlice.reducer;