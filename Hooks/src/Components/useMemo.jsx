import React, { use, useMemo, useState } from 'react'

export const App = () => {


const [count, setCount] = useState(0)
const[todos,setTodo]=useState([])

const addtodo=()=>{
    setTodo((list)=>[...list,"new todo"])}


    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 10; i++) {
        num += 1;
      }
      return num;
    };

const calc=useMemo(()=>expensiveCalculation (count),[count])



  return (
    <>

    <h3>
        myTodo
    </h3>
    {
        todos.map((todo,index)=>{
            return <p key={index}> {todo}</p>
        })
    }
    <button onClick={addtodo}>Add todo</button>
    <h3>count:{count}</h3>
    <button onClick={(e)=>setCount(count+1)}>Increment</button>
    <h3>
        {calc}
    </h3>



    </>
   
  )
}
export default App
