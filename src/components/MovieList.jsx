import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log("movies",movies);
    if (!movies || movies.length === 0) {
      return null; 
    }
  return (
    <div className='ml-2 sm:ml-7 text-white mr-2'>
        <div >
            <h1 className='px-5 p-3 sm:text-[2.4vw] md:text-[2.1vw] lg:text-[1.6vw] font-bold'>{title}</h1>
            <div className='flex overflow-x-auto gap-2 px-4 pr-5 scrollbar-hide scroll-smooth'>
                {movies && movies.map((movie)=>{  
                 return(<MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path
}/>)})}
                
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
