import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondarContainer from './SecondarContainer';


const Browse = () => {
  useNowPlayingMovies();

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
