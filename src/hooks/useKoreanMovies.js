import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addKoreanMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useKoreanMovies = ()=>{
    const koreanMovies = useSelector(store=>store.movies.koreanMovies)
    const dispatch = useDispatch()
    const getKoreanMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_original_language=ko&sort_by=vote_average.desc&page=1",API_OPTIONS)
        const res = await data.json();
        console.log("top rated movies",res);
        dispatch(addKoreanMovies(res.results))
        
    }

    useEffect(()=>{
        if(!koreanMovies){
        getKoreanMovies();
        }
    },[])
}
export default useKoreanMovies