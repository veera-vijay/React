import {configureStore} from "@reduxjs/toolkit";
import LightReducer from "./LightSlice";
const storeLight=configureStore({
    reducer:{
        light:LightReducer,
    },
})
 export default storeLight