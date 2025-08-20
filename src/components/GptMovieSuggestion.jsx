import React from 'react'
import {  useSelector } from 'react-redux'
import MovieList from './MovieList';
import Spinner from './Spinner';

const GptMovieSuggestion = () => {
    const gpt = useSelector((store)=>store.gpt);
    const {movieNames,movieResults}=gpt;
      const loading = useSelector(store=>store.gpt.isLoading)   
      // console.log(loading);
      
  return (
    <div className={` p-4 m-4 mt-16 ${loading || movieNames ?" bg-black/80":" "} text-white`} >
     {loading && <div className='flex flex-col items-center'><Spinner/>  <p className="mt-4 text-lg text-gray-300 animate-pulse">
      🤖 AI is thinking... Please wait for better recommendations
    </p></div> }
      <div>
        {
         movieNames &&  movieNames.map((movieName,idx)=> <MovieList key={movieName} title={movieName} movies={movieResults[idx]}/>)
        }
      </div>
      
    </div>
  )
}

export default GptMovieSuggestion

//${loading || movieNames ?" bg-black/80":" "}