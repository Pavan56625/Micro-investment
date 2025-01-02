// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"
import backgroundImage from "../assests/backgroud.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Gradient overlay */}
      
      <div className="relative flex flex-col items-center justify-center text-center z-10">
        <div>
          <Link to="/login">
            <button className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4">Login</button>
          </Link>
          <Link to="/signup">
            <button className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4">Sign Up</button>
          </Link>
        </div>
        
        <div className="max-w-4xl p-6 rounded-lg shadow-lg">
          <h1 className="text-6xl font-semibold text-center text-white shadow-text font-montserrat">Micro Investment Portal</h1>
          <p className="text-3xl font-semibold text-center text-white shadow-tex font-montserrat">Manage your vacations and savings</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
