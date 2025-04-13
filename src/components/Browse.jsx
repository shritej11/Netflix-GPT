import React from 'react'
import UseNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import UserDropDown from './UserDropDown';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import UseTopRatedMovies from '../hooks/UseTopRatedMovies';


const Browse = () => {

  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  

  return (
    <div>
      <UserDropDown />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse