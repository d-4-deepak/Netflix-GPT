import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utils/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies)

    const getNowPlayingMovie = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_original_language=ru&sort_by=popularity.desc&page=1",API_OPTIONS);
        const res = await data.json();
        console.log("popular",res.results);

        dispatch(addPopularVideos(res.results))
        
    }
    useEffect(()=>{
        if(!popularMovies){
            getNowPlayingMovie();
        }
        
    },[])

}
export default usePopularMovies;