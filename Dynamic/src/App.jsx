import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";

function App() {
  
  const users = [{id:1,name:"vijay"},
    {id:4,name:'Ajay'}
  ];

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <br>
        </br>
        <Link to="/about">About</Link> 
        {users.map((user) => (
          <div key={user.id}>
             <Link to={`/user/${user.name}`}>{user.name}</Link>{" "}
  
          </div>
        ))
        
        }
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      
        <Route path="/user/:name" element={<User />} />

       
      </Routes>
    </Router>
  );
}

export default App;
