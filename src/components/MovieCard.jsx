import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className = 'w-40  relative z-10 hover:z-50 '> 
      <img 
        className=" rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-150"
        src={IMG_CDN_URL + posterPath}
        alt="movie_img" />
    </div>
  )
}

export default MovieCard