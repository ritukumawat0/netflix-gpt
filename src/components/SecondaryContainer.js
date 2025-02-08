import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(store=>store.movies?.nowPlayingMovies)
  const upcomingMovies = useSelector(store=>store.movies?.upcomingMovies)
  const topRatedMovies = useSelector(store=>store.movies?.topRatedMovies)
  const popularMovies = useSelector(store=>store.movies?.popularMovies)
  return (
    <div className=' bg-black'>
       <div className='mt-0 sm:-mt-36 md:-mt-6  z-50 relative'>
          <MovieList movies={nowPlayingMovies} title={"Now playing movies"}/>
          <MovieList movies={upcomingMovies} title={"Upcoming"}/>
          <MovieList movies={topRatedMovies} title={"Top-Rated"}/>
          <MovieList movies={popularMovies} title={"Popular"}/>
      </div>
      {/*
          Movielist - Popular
            - movie cards * n
          Movielist - Now Playing
          Movielist - Trending
          Movielist - Horror
       */}
    </div>
  )
}

export default SecondaryContainer