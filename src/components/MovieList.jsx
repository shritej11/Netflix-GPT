import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    //console.log(movies);
    if (!movies) return null;

    return (
        <div className=" text-2xl font-semibold  py-1.5 ">
            <h1 className="px-17 py-1">
                {title}
            </h1>
            <div className='flex overflow-x-scroll scrollbar-hide  '>

                <div className=' space-x-7 pl-18 flex py-1.5 '>
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