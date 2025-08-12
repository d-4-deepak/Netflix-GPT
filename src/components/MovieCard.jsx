import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constant'
import { useNavigate } from 'react-router-dom';
import WatchPage from './WatchPage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../utils/gptSlice';
import { removeTrailerVideo } from '../utils/moviesSlice';

const MovieCard = ({poster_path,id}) => {
  
  const dispatch = useDispatch()
  const isShowGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const navigate = useNavigate()
  // console.log("MovieCard rendered with id:", id);
  const handleCardClick = ()=>{
    // console.log("clicked",id);
    dispatch(removeTrailerVideo(null))
    setTimeout(() => {
      navigate(`/watch/${id}`);
      dispatch(toggleGptSearch(!isShowGptSearch));
    }, 0.3);

  }

  const poster_placeholder ="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
  let poster = IMAGE_CDN_URL+poster_path
  if(!poster_path){
    poster = poster_placeholder
  }
  
  return (
    <div  className="flex-shrink-0 ">
        <img onClick={handleCardClick} alt={"movie card"} src={poster}  onError={(e) => e.target.src = poster_placeholder}  className=' xl:w-[15vw]  lg:w-[23vw] md:w-[26vw] sm:w-[34vw] w-[50vw] h-11/12 object-cover'/>
    </div>
  )
}

export default MovieCard
