import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import Register from "./register";
import Login from "./login";
import './Home.css'

 const Home = () => {
  return (
    <>
      <div className="Homepage">
        <h1>Home Page</h1>
        <p className='txt'>Welcome to our website!</p>

        <nav className='nav'>
          <Link className="links" to="/Login">
            login
          </Link>

          <Link className="links" to="/Register">
            register
          </Link>
        </nav>
      </div>

     
    </>
  );
}
export default Home
