import { useParams } from "react-router-dom";

function User() {
  const { name} = useParams(); 
  return <h2>User Page for ID: {name}</h2>;
}

export default User;
