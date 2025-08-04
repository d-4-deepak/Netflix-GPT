import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const getTopRatedMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=vote_average.desc&page=1",API_OPTIONS)
        const res = await data.json();
        console.log("top rated movies",res);
        dispatch(addTopRatedMovies(res.results))
        
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
}
export default useTopRatedMovies