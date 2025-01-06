// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assests/backgroud.jpg';

const Login = () => {
  const [credential, setCredential] = useState({ useremail: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (credential.useremail === 'admin@gmail.com' && credential.password === 'admin1') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login Content */}
      <div className="relative z-10 bg-gray-800 bg-opacity-20 p-8 rounded-lg shadow-lg w-80 text-white">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-center mb-8 font-montserrat shadow-text">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="useremail" className="block mb-2 text-lg font-montserrat font-semibold">
              Email
            </label>
            <input
              type="email"
              name="useremail"
              id="useremail"
              value={credential.useremail}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-lg font-montserrat font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={credential.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full font-semibold font-montserrat text-white bg-blue-600 hover:bg-blue-700 rounded py-2 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
