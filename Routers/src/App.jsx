import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/register";
import Course from "./components/Course.jsx";
import Contact from "./components/Contact";
import "./components/App.css";
import FrontEnd from "./components/FrontEnd.jsx";
import BackEnd from "./components/BackEnd.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <h2 className="topic">Bright Mind Acadamy</h2>
        <Link to="/Home">Home</Link>
        <Link to="/Login">login</Link>
        <Link to="/Register">register</Link>
        <Link to="/Course">course</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
         <Route path="/"element={<Home/>}/> 
        <Route path="Home" element={<Home />} />
        <Route path="Course" element={<Course />} />
        <Route path="Contact/*" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Frontend" element={<FrontEnd />} />
        <Route path="Backend" element={<BackEnd />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
