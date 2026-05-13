import React, { useRef, useState  } from 'react'

export const App = () => {

 const [rendercount,setrendeCount]=useState(0)
 const refCount=useRef(0);
 const[count,setCount]=useState(0)

 const Changecount=()=>{
    setCount(count+1)
    console.log("Count:",count);
    
 }

 const ChangeRender=()=>{
    setrendeCount(rendercount+1)
    console.log("RenderCount:",rendercount)

 }
 const Changeref=()=>{
    refCount.current = refCount.current + 1;
    console.log("Ref Count:", refCount.current);
 }


  return (
    <>
    <h2>RenderCount:{rendercount} </h2>
    <button onClick={ChangeRender}>Render</button>

    <hr />
    <h2>useRef:{refCount.current}</h2>
    <button onClick={Changeref}>Ref</button>
    <hr />
    <h2>count:{count}</h2>
    <button onClick={Changecount}>count</button>


   
    </>
  )
}
export default App