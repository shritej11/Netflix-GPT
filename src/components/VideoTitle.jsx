import React from 'react'
import UseNowPlayingMovies from '../hooks/UseNowPlayingMovies';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='caret-transparent pt-32 px-10'>
      <h1 className='cursor-default text-3xl font-bold'>{title}</h1>
      <p className='cursor-default text-md w-1/4 text-black/75'>{overview}</p>
      <div>
        <button className='bg-white border-1 px-8 py-2 font-bold rounded-md'>
        ▷  Play
        </button>
        <button className='bg-gray-500/70 text-white ml-7 border-1 font-bold px-8 py-2 rounded-md'>
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;