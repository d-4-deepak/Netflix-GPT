import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondarContainer = () => {
  const movies = useSelector((store)=>store.movies)
  console.log("moview");
  

  return (
    <div className="bg-[#141414] sm:bg-gradient-to-b sm:from-black sm:to-[#141414]">
      <div className='  xl:-mt-32 lg:-mt-28 md:-mt-20 sm:-mt-16 relative z-20 '>
<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
<MovieList title={"Top Rated Indian shows & movies"} movies={movies.topRatedMovies} />
<MovieList title={"Popular"} movies={movies.popularMovies}/>
<MovieList title={"Korean"} movies={movies.koreanMovies} />
</div>

        {/* {
        MovieList - popular
        Moviecard *n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror

        } */}
    </div>
  )
}

export default SecondarContainer
