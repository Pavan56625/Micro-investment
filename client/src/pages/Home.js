// src/pages/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";
import backgroundImage from "../assests/backgroud.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative flex flex-col items-center justify-center text-center z-10">
        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "font-semibold font-montserrat text-blue-700 bg-gray-200 rounded py-2 px-4 border border-blue-700"
                : "font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4 hover:bg-gray-200 transition"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "font-semibold font-montserrat text-blue-700 bg-gray-200 rounded py-2 px-4 border border-blue-700"
                : "font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4 hover:bg-gray-200 transition"
            }
          >
            Sign Up
          </NavLink>
        </div>

        {/* Title and subtitle */}
        <div className="max-w-4xl p-6 rounded-lg shadow-lg">
          <h1 className="text-6xl font-semibold text-center text-white shadow-text font-montserrat">
            Micro Investment Portal
          </h1>
          <p className="text-3xl font-semibold text-center text-white shadow-text font-montserrat">
            Manage your vacations and savings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
