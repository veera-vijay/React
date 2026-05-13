import React, { useState, memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <hr />

      <RegularChild />
      <MemoChild />
    </div>
  );
}

// WITHOUT MEMO 
const  RegularChild= (()=> {
  console.log(" Regular Child rendered!");
  return <div style={{ background: "pink" }}>Regular Child</div>;
})

//  WITH MEMO 
const MemoChild = memo(() => {
  console.log(" Memo Child rendered!");
  return <div style={{ background: "lightgreen" }}>Memo Child</div>;
});

export default App;
