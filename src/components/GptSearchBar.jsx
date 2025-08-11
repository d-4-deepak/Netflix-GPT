import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const selectedLang = useSelector((store)=>store.config.lang);
  const searchText = useRef();

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const res = await data.json();
    console.log(res);
    return res.results;
   }

 const handleGptSearchClick = async ()=>{
      console.log(searchText.current.value);

      const gptQuery = "You are a movie recommendation system,Return exactly 5 movie names only, separated by commas, no explanations, no extra words."+searchText.current.value +".Output format example: Gadar, Golmaal, Koi Mil Gaya, Sholay, Doodh Ka Karz Do not ask any questions or request clarification. If unsure, still output 5 movie names."
      const configurationExample = await openai.chat.completions.create({
        model: "provider-3/gpt-5-nano",
        messages: [
          { role: "user", content: gptQuery},
        ],
      });
      // console.log("xx : ", configurationExample.choices[0].message.content);

      const gptMovies = configurationExample.choices[0].message.content.split(",")
      console.log(gptMovies);

      //for each movie searching in tmdb api
    const promiseArray =   gptMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);
    
     dispatch(addGptMovieResult({movieNames:gptMovies , movieResults: tmdbResult}));
 }


  
  
  if(!selectedLang) return
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='bg-black grid grid-cols-12 w-1/2' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' placeholder={lang[selectedLang]?.searchPlaceholder} className='m-4 px-4 py-2 bg-white col-span-9'/>
            <button onClick={handleGptSearchClick} className=' m-4 px-4 py-2 bg-red-700 rounded-lg text-white col-span-3 cursor-pointer hover:bg-red-800'>{lang[selectedLang]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
