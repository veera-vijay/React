import React from "react";
import { Link } from "react-router-dom";
import "./Frontend.css"

const Frontend = () => {
  return (
    <>
      <div className="course_containerf">
        <h2 className="head">FRONTEND</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
        </ul>
      </div>
      <Link to="/Course" ><button>Back to Course</button></Link>
    </>
  );
};
export default Frontend