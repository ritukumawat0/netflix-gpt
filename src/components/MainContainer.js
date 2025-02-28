import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies) 
    console.log(movies)
    if(movies===null) return;
    const mainMovie = movies[0];
    const {original_title , overview , id} = mainMovie;
  return (
    <div className='pt-[30%] sm:pt-[15%] bg-black sm:bg-none md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer