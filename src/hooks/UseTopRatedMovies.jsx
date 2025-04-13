import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/MoviesSlice";
import { useDispatch } from "react-redux";

const UseTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_OPTIONS
        );

        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []); 
};

export  default UseTopRatedMovies;

