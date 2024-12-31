// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const [credential, setCredential] = useState({username: '' , password: ''});
  const navigate = useNavigate();

  const handleInputChange = (e) =>{
    const{ name, value } = e.target;
    setCredential({...credential, [name]: value});
  }

  const handleLogin = (e) =>{
    e.preventDefault();
  

  if(credential.useremail ==='admin@gmail.com' && credential.password === 'admin1'){
    navigate('/dashboard');
  }else{
    alert('Invalid credentials')
  }
};

  // const toDashboard = (Login) => {
  //   navigate("/dashboard" , { state: {Login}})
  // }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" name='useremail' value={credential.useremail} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name='password' value={credential.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;