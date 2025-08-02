import { createSlice } from "@reduxjs/toolkit";

const trailerSoundSlice = createSlice({
    name:"sound",
    initialState:{
        mute:true
    },
    reducers:{
        handleMute:(state)=>{
            state.mute = !state.mute
        }
    }
})
export const {handleMute} = trailerSoundSlice.actions
export default trailerSoundSlice.reducer