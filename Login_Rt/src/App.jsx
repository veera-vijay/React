import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./auth";

function App() {
  const [name, setName] = useState("");

  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome {user}</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => dispatch(login(name))}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
