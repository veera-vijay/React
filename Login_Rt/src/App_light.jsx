import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {toggle} from "./LightSlice"

export const App_light = () => {

    const isOn=useSelector((state)=>state.light.isON)
   const dispatch=useDispatch();
  return (
    <>
      <div>
      
        <h1>Light is {isOn ? "ON 💡" : "OFF🌑"}</h1>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
      </div>
    </>
  );
}
export default App_light
