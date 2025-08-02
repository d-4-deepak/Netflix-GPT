import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

  const getNowPlayingVideos = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const res = await data.json();
    //   console.log(res.results);
      dispatch(addNowPlayingMovies(res.results))
      
  }

  useEffect(()=>{
      getNowPlayingVideos()
  },[])
}

export default useNowPlayingMovies;