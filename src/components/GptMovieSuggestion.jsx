import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const gpt = useSelector((store)=>store.gpt);
    const {movieNames,movieResults}=gpt;
    if(!movieNames) return
  return (
    <div className='p-4 m-4 bg-black/80 text-white'>
      <div>
        {
            movieNames.map((movieName,idx)=> <MovieList key={movieName} title={movieName} movies={movieResults[idx]}/>)
        }
      </div>

    </div>
  )
}

export default GptMovieSuggestion
