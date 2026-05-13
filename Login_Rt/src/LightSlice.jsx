import  {createSlice} from "@reduxjs/toolkit";

const LightSlice=createSlice({

    name:"light",
    initialState:{
        isON:false,
    },
reducers:{
    toggle:(state)=>{
        state.isON=!state.isON;
    },
},


})
export const {toggle}=LightSlice.actions;
export default LightSlice.reducer;