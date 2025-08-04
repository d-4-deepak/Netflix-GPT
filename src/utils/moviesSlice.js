import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        koreanMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopularVideos:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addKoreanMovies:(state,action)=>{
            state.koreanMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularVideos,addTopRatedMovies,addKoreanMovies} = moviesSlice.actions;
export default moviesSlice.reducer