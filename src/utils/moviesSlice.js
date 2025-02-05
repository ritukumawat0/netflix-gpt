import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        upcomingMovies:null,
        topRatedMovies:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;