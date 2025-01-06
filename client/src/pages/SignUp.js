// src/pages/SignUp.js
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assests/backgroud.jpg';

const SignUp = () => {
const [email, setEmail] = useState("");
const[password, setPassword] =useState("");
const[message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    const response = await axios.post("http://localhost:5000/api/auth/signup",{
      email,
      password,
    });
    setMessage(response.data.message);
    setEmail("");
    setPassword("");
  }catch(error){
    setMessage(error.response?.data?.message || "signup failed");
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center relative"
           style={{ backgroundImage: `url(${backgroundImage})` }}>

             {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-20 p-8 rounded-lg shadow-lg w-80 text-white">
      <h1 className="text-4xl font-semibold text-center mb-8 font-montserrat shadow-text">Sign Up Page</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
          <label  htmlFor="useremail" className="block mb-2 text-lg font-montserrat font-semibold">Email:</label>
          <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <label htmlFor="password" className="block mb-2 text-lg font-montserrat font-semibold" >Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}required 
           placeholder="Enter your password"
           className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
     
        <button type="submit" className="w-full font-semibold font-montserrat text-white bg-blue-600 hover:bg-blue-700 rounded py-2 transition">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;