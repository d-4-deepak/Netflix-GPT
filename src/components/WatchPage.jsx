import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useMovieTrailer from '../hooks/useMovieTrailer';
import Header from './Header';
import ReactPlayer from 'react-player';

const WatchPage = () => {
    const {id} = useParams();
    useMovieTrailer(id);
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
    console.log("trailervideo",trailerVideo);

   

    
  return (
    <>
  <Header />
  <div className="bg-black w-screen h-screen flex items-center justify-center">
    {trailerVideo ? (
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&controls=1&rel=0&modestbranding=1&showinfo=0`}
        title="Netflix-like Movie Trailer"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      ></iframe>
    ) : (
      <p className="text-white text-xl">Loading trailer...</p>
    )}
  </div>
</>
  )
}

export default WatchPage
