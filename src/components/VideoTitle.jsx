import React from 'react'


const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute pt-[20%] caret-transparent  px-10 text-white'>
      <h1 className='cursor-default text-3xl font-bold'>
        {title}
      </h1>
      <p className='cursor-default  text-md pt-4 pb-4 w-1/4 text-white'>
        {overview}
      </p>
      <div>
        <button className='bg-white text-black border-1 px-8 py-2 font-bold rounded-md  '>
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