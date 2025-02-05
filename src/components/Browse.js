import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovie";
import usePopularMovies  from "../hooks/usePopularMovie"

const Browse = () => {

  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        main container
          - video background
          - video title
        secondary container 
          - MovieList * n
            - cards * n    
       */}
    </div>
  );
};

export default Browse;
