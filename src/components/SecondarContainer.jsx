import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import lang from '../utils/languageConstants'

const SecondarContainer = () => {
  const movies = useSelector((store)=>store.movies)
  console.log("moview");
  const selectedLang = useSelector((store)=>store.config.lang)

  return (
    <div className="bg-[#141414] sm:bg-gradient-to-b sm:from-black sm:to-[#141414]">
      <div className='  xl:-mt-32 lg:-mt-28 md:-mt-20 sm:-mt-16 relative z-20 '>
<MovieList title={`${lang[selectedLang].nowPlaying}`} movies={movies.nowPlayingMovies} />
<MovieList title={`${lang[selectedLang].topRatedIndian}`} movies={movies.topRatedMovies} />
<MovieList title={`${lang[selectedLang].popular}`} movies={movies.popularMovies}/>
<MovieList title={`${lang[selectedLang].korean}`} movies={movies.koreanMovies} />
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
