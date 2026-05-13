import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"
function LoginForm(){
  const [user,setuser]= useState({
    email:"",password:""
  });
  const handlechange=(e)=>{
    const{name,value}=e.target
    setuser({
      ...user,
      [name]: value,
    });
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("user details:", user);
    };


    return (
      <>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-title">SIGN IN</div>
            <input
              type="text"
              name="email"
              onChange={handlechange}
              id=""
              placeholder="Enter Your Email"
            />
            <br />
            <input
              type="Password"
              name="password"
              onChange={handlechange}
              placeholder="Enter Your Password"
            />{" "}
            <br />
            <button type="submit">Login</button> <br />
            <button type="reset">reset</button>
          </form>
        </div>

        <Link to="/Register">
          <button className="turn">Go to Register</button>
        </Link>
      </>
    );

    
}
export default LoginForm;