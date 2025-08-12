import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        isLoading:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        toggleLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        clearGptMovieResult: (state) => {
            state.movieNames = null;
            state.movieResults = null;
          }
          
    }
})
export const {toggleGptSearch,addGptMovieResult,toggleLoading,clearGptMovieResult} = gptSlice.actions
export default gptSlice.reducer