import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Course.css";
import FrontEnd from "./FrontEnd.jsx";
import BackEnd from "./BackEnd.jsx";

const Course = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Courses</h1>

        <nav className="courses">
          <Link className="course-link" to="/Frontend">
            Frontend
          </Link>
          <Link className="course-link" to="/Backend">
            Backend
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Course;
