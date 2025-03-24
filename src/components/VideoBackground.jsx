import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
       
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        >
      </iframe>
    </div>
  )
}

export default VideoBackground;