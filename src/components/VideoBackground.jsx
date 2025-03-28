import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className=" w-full h-screen"> {/* This prevents scrolling */}
      {trailerVideo?.key && (
        <iframe 
          className="top-0 left-0 object-cover w-full  h-screen pointer-events-none "
          
          src={
            
            `https://www.youtube.com/embed/
            ${trailerVideo.key}
            ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${trailerVideo.key}`
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  )
}

export default VideoBackground;
