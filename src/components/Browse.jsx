import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useKoreanMovies from '../hooks/useKoreanMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useKoreanMovies();

  return (
    <div>
      <Header/>
      

      {/* 
      MainContainer
        -VideoBackground
        -VideoTitle
      SecondaryContainer
        -MovieList *n
        -cards *n  
      */}



      <MainContainer/>
      <SecondarContainer/>
    </div>
  )
}

export default Browse
