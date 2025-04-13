import React from 'react'
import UseNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import UserDropDown from './UserDropDown';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import UseTopRatedMovies from '../hooks/UseTopRatedMovies';
import UseTvShows from '../hooks/UseTvShows';


const Browse = () => {

  UseNowPlayingMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  UseTvShows();
  

  return (
    <div>
      <UserDropDown />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse