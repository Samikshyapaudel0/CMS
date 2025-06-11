import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import Login from './assets/public/Login';
import Register from './assets/public/Register';
import Home from './assets/public/Home';

// import Register from '../public/Register';
 
function App() { 
  return ( 
    
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </Routes> 
  );   
} 
 
export default App;
