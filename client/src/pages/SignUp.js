// src/pages/SignUp.js
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}required />
     
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;