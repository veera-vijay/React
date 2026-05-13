import React, { useState } from "react";
import './register.css'
import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <>
      <h2 className="headR">REGISTER</h2>
      <div className="full">
        <form onSubmit={handleSubmit}>
          <label>First Name*</label>
          <input type="text" name="firstName" onChange={handleChange} />

          <label>Last Name*</label>
          <input type="text" name="lastName" onChange={handleChange} />

          <label>Age*</label>
          <input type="number" name="age" onChange={handleChange} />

          <label>Gender*</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
              />
              Other
            </label>
          </div>

          <label>Email*</label>
          <input type="email" name="email" onChange={handleChange} />

          <label>Password*</label>
          <input type="password" name="password" onChange={handleChange} />

          <label>Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />

          <button className="btn">Submit</button>
        </form>
      </div>

      <Link to="/Login">
        <button className="turn_login">Go to login</button>
      </Link>
    </>
  );
}

export default Register;
