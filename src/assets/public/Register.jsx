// import React from 'react'; 
// import '../image';

import '../../Css'
// import '../public/' 
function Register() { 
  return ( 
    <div style={{ textAlign: 'center', marginTop: '100px' }}> 
      <h2>Register Page</h2>
       
    </div> 
  ); 
}


function Register(){
  const{register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

 const Register = () => {
  
  const onSubmit = (data) => {
    localStorage.setItem("user",JSON.stringify(data));
    alert("Registered successfully!");
    Navigate("/login");
  };

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
        <form> onSubmit={handleSubmit(onSubmit)}
          
          <div className="name-fields">
            <label>First Name</label>
            <input{...register('First Name',{required:'Name is required'})}/>
            {errors.name && <p>{errors.name.message}</p>}

            <label>Last Name</label>
            <input{...register('Last Name',{required:'Name is required'})}/>
            {errors.name && <p>{errors.name.message}</p>}
            {/* <input type="text" placeholder="Last Name" /> */}
          </div>
          <div> 
            <label>Email</label> 
            <input type="email" {...register('email', { required: 'Email is required' })} /> 
            {errors.email && <p>{errors.email.message}</p>} 
          </div>
          <div> 
            <label>Password</label> 
            <input type="password" {...register('password', { required: 'Password is required' })} /> 
            {errors.password && <p>{errors.password.message}</p>} 
          </div> 


          {/* <input type="email" placeholder="Email" /> */}
          {/* <input type="password" placeholder="Password" /> */}
          <button type="submit">Create Account</button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
}
 
export default Register; 
 