// import React from 'react'; 
import React, {useState} from "react";
import "./Login.css";

 

// const Login = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data submitted:", formData);
//     // You can send the data to backend here
//   };
//   // function Login() { 
//     return ( 
//       <div style={{ textAlign: 'center', marginTop: '100px' }}> 
//         <h2>Login Page</h2> 
//       </div> 
      
//       <div className="login-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           /> 
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//            <button type="submit">Login</button>
//           <p className="forgot-password">
//             <a href="#">Forgot Password?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//     ); 
//   } 
// // }

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data submitted:", formData);
    // Send data to backend or handle login logic here
  };

  return (
    <div className="login-wrapper">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login Page</h2>
      </div>

      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};
 
export default Login; 

