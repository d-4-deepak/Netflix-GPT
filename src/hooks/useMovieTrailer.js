import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const useMovieTrailer = (movieId)=>{
  //fetch the trailer video & updating the store
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  
    const getMovieVideos = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        const res = await data.json();
        // console.log(res);

        const  filteredData = res.results.filter((curVideo)=> curVideo.type === "Trailer")
        // console.log(filteredData);

        //if no tailer then take any video may be first
        const trailer = filteredData.length?filteredData[0]:res.results[0];
        console.log("tariler",trailer);
        dispatch(addTrailerVideo(trailer))
        
        
    }

    useEffect(()=>{
      
      getMovieVideos()
      
    },[])
}
export default useMovieTrailer;