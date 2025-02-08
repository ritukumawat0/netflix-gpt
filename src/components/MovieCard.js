import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({img}) => {
  if(!img) return null;
  return (
    <div className='w-48 px-4'>
        <img src={IMG_CDN+img}  alt="movie" className='w-full'/>
    </div>
  )
}

export default MovieCard;