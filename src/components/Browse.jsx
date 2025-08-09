import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useKoreanMovies from '../hooks/useKoreanMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const isShowGptSearch = useSelector((state)=>state.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useKoreanMovies();

  return (
    <div>
      <Header/>
    
    {isShowGptSearch?<GptSearch/>:<> <MainContainer/>
      <SecondarContainer/></>}
        
     
    </div>
  )
}

export default Browse
