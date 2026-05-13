import React, {useCallback,useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(0)
    const[multiply,setMultiply]=useState(0)

    const Changecount = useCallback(() => {
      console.log("change count:", count);
    }, [count]);

    const Changemultiply=useCallback(
      () => {
        console.log("change ",multiply)
      },
      [multiply],
    )
    
    
  return (
    <>
    <button onClick={()=>{setCount(count+1); Changecount()}}>change count</button>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setMultiply (multiply+1);Changemultiply();} }> change multiply</button>
    <h1>multiply:{multiply}</h1>


    </>
    
  )
} 
export default App
