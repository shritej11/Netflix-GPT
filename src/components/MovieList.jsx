import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    //console.log(movies);
    if (!movies) return null;

    return (
        <div className="text-2xl font-semibold py-1.5 "> <h1>{title}</h1>
            <div className='flex overflow-x-scroll '>

                <div className=' space-x-10 pl-18 flex py-1.5 '>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
};

export default MovieList;