import React from 'react'
import { Link } from "react-router-dom";
import "./BackEnd.css"
const Backend = () => {
  return (
    <>
      <div className="course_containerb">
        <h2 className="head">
          <i>BACK-END</i>{" "}
        </h2>
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <Link to="/Course"><button>Back to Course</button></Link>
    </>
  );
};

export default Backend