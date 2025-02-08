import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMovies:null,  
        movieNames:null 
    },
    reducers:{
        toggleShowGptSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const{movieNames,movieResults}=action.payload
            state.gptMovies=movieResults
            state.movieNames=movieNames
        }
    }
});

export const{toggleShowGptSearch,addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;