import React, { useEffect } from 'react'
import "../App.css"
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { addGptMovieResult, toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageConstants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user)
  const ShowGptSearch = useSelector((state)=>state.gpt.showGptSearch);

  //sign out function
  const handleSignOut = ()=>{

    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch(() => {
      // An error happened.
    });
  }

  //handle gpt search button
  const handleGptSearch =()=>{
    dispatch(toggleGptSearch(!ShowGptSearch))
    dispatch(addGptMovieResult({movieName:null,movieResults:null}))
   navigate("/browse")
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
  
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  
    return () => unsubscribe();
  }, []);
  

    //HANDLE LANUAGE CHANGE
    const handleChange =(e)=>{
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
    }

    //Selected lang 
    const selectedLang = useSelector((store)=>store.config.lang)

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=' w-[18vw] sm:w-40' src={NETFLIX_LOGO}/>

     {user && <div className='flex gap-2 items-center '>

       <select onChange={handleChange} className='cursor-pointer bg-gray-300 w-10 sm:w-10 sm:py-2 text-black'>
        {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
)}          
      </select>

      <button onClick={()=>handleGptSearch()} className="bg-red-700 text-white font-bold px-2 py-1 sm:px-4 sm:py-2 rounded cursor-pointer xl:text-[1.1vw] lg:text-[1.3vw]  md:text-[1.7vw] sm:text-[1.8vw] text-[2.3vw] hover:bg-red-800 transition">
  {!ShowGptSearch? `${lang[selectedLang]?.gptSearch}` :`${lang[selectedLang]?.home}`}
</button>
     <img className=' w-7 h-7 sm:w-12 sm:h-12  ' alt="logo" src={user.photoURL} />
     <button onClick={handleSignOut} className='font-bold text-white cursor-pointer xl:text-[1.2vw]'>{lang[selectedLang]?.signOut}</button>
     </div>}
    </div>
  )
}

export default Header


// "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "