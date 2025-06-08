// import React from 'react'; 

import React, { useState } from 'react';
import './Register.css';
 
// function Register() { 
//   return ( 
//     <div style={{ textAlign: 'center', marginTop: '100px' }}> 
//       <h2>Register Page</h2>
       
//     </div> 
//   ); 
// } 
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-image-section">
        <img
          src="src/assets/image/Register.png"
          alt="Student Illustration"
          className="register-image"
        />
      </div>
      <div className="register-form-section">
        <h2>Create Account</h2>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Create Account</button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
 
export default Register; 
 