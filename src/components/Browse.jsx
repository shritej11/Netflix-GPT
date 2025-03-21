import React, { useEffect, useState } from 'react'
import UserAcc from './UserSignOut'
import UseNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import UserDropDown from './UserDropDown';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  UseNowPlayingMovies();

  return (
    <div>
      <UserDropDown />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse