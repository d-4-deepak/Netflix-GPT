import React, { useEffect } from 'react'
import "../App.css"
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user)
  const handleSignOut = ()=>{

signOut(auth).then(() => {
  // Sign-out successful.

}).catch(() => {
  // An error happened.
});


  }

  useEffect(()=>{

  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,displayName,email,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          displayName:displayName,
          email:email,
          photoURL:photoURL
        }))
  
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    //Unsubscribe when component unmounts
    return  ()=>unsubscribe()
  },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=' w-[18vw] sm:w-40' src={NETFLIX_LOGO}/>

     {user && <div className='flex gap-2 items-center '>
     <img className=' w-7 h-7 sm:w-12 sm:h-12  ' alt="logo" src={user.photoURL} />
     <button onClick={handleSignOut} className='font-bold text-white cursor-pointer xl:text-[1.2vw]'>Sign Out</button>
     </div>}
    </div>
  )
}

export default Header


// "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "