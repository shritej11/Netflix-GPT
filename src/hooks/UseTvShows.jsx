import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvShows } from "../utils/MoviesSlice";

const UseTvShows = () => {
    const dispatch = useDispatch();

    const getTvShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?page=1',
            API_OPTIONS
        );

        const json = await data.json();
        // console.log(json.results);
        dispatch(addTvShows(json.results));
    };

    useEffect(() => {
        getTvShows();
    }, []); 
};

export default UseTvShows;

