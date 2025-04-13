import React from 'react'
import MovieList from './movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black -mt-20">
      <div className="relative z-20  text-white">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Tv Shows"} movies={movies?.tvShows} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        

      </div>
    </div>
  )
}

export default SecondaryContainer