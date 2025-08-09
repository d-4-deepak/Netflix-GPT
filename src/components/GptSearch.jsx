import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_URl } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <img className='absolute -z-10 top-0 left-0 w-full h-full object-cover' src={BACKGROUND_URl}/>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch
