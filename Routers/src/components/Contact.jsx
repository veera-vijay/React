import React from 'react'


import "./Contact.css"
import { Link } from 'react-router-dom';



const Contact = () => {
  return (
    <>
      <div>
        
        <div className="contact-info">
          <h2>Bright Mind Academy</h2>
          <p>
            We provide industry-ready training in Web Development with real-time
            projects.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> info@brightmindacademy.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Address:</strong> 123, Main Street, Chennai, India
            </p>
          </div>
        </div>
       
      </div>
      <Link to="/Home" ><button>Back to Home</button></Link>

     
    </>
  );
}
export default Contact