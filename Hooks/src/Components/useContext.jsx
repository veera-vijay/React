import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const useContextExample = () => {
  const [users, setUsers] = useState("vijay");
  return (
    <>
      <UserContext.Provider value={users}>
        <h2>{`hi ${users} `}</h2>
        <Components1 />
      </UserContext.Provider>
    </>
  );
};
const Components1 = () => {
  const users = useContext(UserContext);
  return (
    <>
      <p>components1 is used the usecontext</p>
      <h2>{`hi ${users} again`}</h2>
      <Components2></Components2>
    </>
  );
};

const Components2 = () => {
  return (
    <>
      <p>Components2 is not used the usecontext</p>
     
      <Components3></Components3>
    </>
  );
};

const Components3 = () => {
  const users = useContext(UserContext);
  return (
    <>
      <p>Components 3 is use the usercontext</p>
      <h3>{`hi ${users} again `}</h3>
    </>
  );
};
export default useContextExample;
