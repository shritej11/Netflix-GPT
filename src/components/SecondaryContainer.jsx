import React from 'react'
import MovieList from './movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-20 -mt-30">
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing movies "} movies={movies?.nowPlayingMovies} />

    </div>
  )
}

export default SecondaryContainer