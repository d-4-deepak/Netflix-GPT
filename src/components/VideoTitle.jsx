import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleMute } from '../utils/trailerSoundSlice';

const VideoTitle = ({title, overview}) => {
  const dispatch = useDispatch();
  const mute = useSelector((store)=>store.sound.mute);
  return (
    <div  className='w-screen aspect-video absolute  bg-gradient-to-r from-black'>
      <div className='pt-[17vw] sm:pt-12 sm:pt-[17vw] md:pt-[19vw] lg:pt-[18vw] px-12 text-white'>
      <p className='sm:text-[3.4vw] font-bold'>{title}</p>
      <p className='py-[10px] sm:py-6 text-[2.2vw]  sm:text-[1.5vw] sm:text-[1.2vw] w-2/4 sm:w-1/4'>{overview}</p>
<div className='flex justify-between'>
      <div className='flex gap-6'>
        <button className='bg-white rounded-lg text-black text-[10px] sm:text-[2vw] md:text-[2vw] lg:text-[1.4vw] w-[22vw] sm:w-[8rem] md:w-[10rem] lg:w-[12rem] hover:bg-white/85 cursor-pointer flex justify-center items-center  p-[1.3vw]  lg:p-[1.2vw]  '><i className="fa-solid fa-play"></i>Play</button>
        <button className='bg-[#406369] hover:bg-[#6B7172]/50 cursor-pointer rounded-lg text-white text-[10px] sm:text-[2vw] md:text-[2vw] lg:text-[1.4vw]  w-[22vw] sm:w-[8rem] md:w-[10rem] lg:w-[12rem] py-[1.5vw] p-[1.5vw]  lg:p-[1.2vw]  '><i className="fa-solid fa-circle-info"></i>More Info</button>

      </div>

        <button onClick={()=>dispatch(handleMute(!mute))} className='cursor-pointer'>{mute?<i className="fa-solid fa-volume-xmark"></i> :<i className="fa-solid fa-volume-high"></i>}</button>
        </div>

      </div>
    </div>
  )
}

export default VideoTitle
// py-[1.5vw] p-[1.5vw]  lg:p-[1.2vw]