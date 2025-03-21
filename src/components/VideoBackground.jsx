import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';

const VideoBackground = ({ movieId }) => {

  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/950396/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter(video => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, [])
  return (
    <div>
      <iframe
       
        src={"https://www.youtube.com/embed/"+ trailer.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        >
      </iframe>
    </div>
  )
}

export default VideoBackground;