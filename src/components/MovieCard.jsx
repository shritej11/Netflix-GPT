import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className = 'w-35'> 
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie_img" />
    </div>
  )
}

export default MovieCard