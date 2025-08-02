import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const mute = useSelector((store) => store.sound.mute);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const iframeRef = useRef(null);

  useMovieTrailer(movieId);

  useEffect(() => {
    const iframe = iframeRef.current;
  
    if (iframe && iframe.contentWindow) {
      const message = mute
        ? '{"event":"command","func":"mute","args":""}'
        : '{"event":"command","func":"unMute","args":""}';
  
      iframe.contentWindow.postMessage(message, '*');
    }
  }, [mute]);
  

  if (!trailerVideo) return null;

  return (
    <div className='w-screen'>
     <iframe
  ref={iframeRef}
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay"
  allowFullScreen
></iframe>

    </div>
  );
};

export default VideoBackground;
