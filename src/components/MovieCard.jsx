import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className="flex-shrink-0 ">
        <img alt={"movie card"} src={IMAGE_CDN_URL+poster_path}  className=' xl:w-[15vw]  lg:w-[23vw] md:w-[26vw] sm:w-[34vw] w-[50vw] h-11/12 '/>
    </div>
  )
}

export default MovieCard
