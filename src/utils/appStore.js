import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import soundreducer from './trailerSoundSlice'
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        sound:soundreducer,
    },
})
export default appStore;