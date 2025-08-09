import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const selectedLang = useSelector((store)=>store.config.lang);
 
  
  
  if(!selectedLang) return
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='bg-black grid grid-cols-12 w-1/2'>
            <input type='text' placeholder={lang[selectedLang]?.searchPlaceholder} className='m-4 px-4 py-2 bg-white col-span-9'/>
            <button className=' m-4 px-4 py-2 bg-red-700 rounded-lg text-white col-span-3 cursor-pointer hover:bg-red-800'>{lang[selectedLang]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
