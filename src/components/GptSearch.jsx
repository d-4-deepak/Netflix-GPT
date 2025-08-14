import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_URl } from '../utils/constant'
import GptMovieSuggestion from './GptMovieSuggestion'
import netflixbg from '../assets/netflixbg.webp'

const GptSearch = () => {
  return (
    <div>
        <img className='fixed -z-10 top-0 left-0 w-full h-full object-cover' src={netflixbg}/>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    
    </div>
  )
}

export default GptSearch
