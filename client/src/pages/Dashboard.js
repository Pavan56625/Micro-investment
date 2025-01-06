// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assests/space.jpg"; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSavingSelection = (goalType) => {
    navigate("/savings-goal", { state: { goalType } });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Welcome Section */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-8 font-montserrat shadow-text">
          Welcome to your Dashboard
        </h1>
        <p className="text-xl font-light mb-6 font-montserrat">
          Explore your savings in the vast cosmos
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          <button
            onClick={() => handleSavingSelection("Vacation")}
            className="py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl"
          >
            Vacation
          </button>
          <button
            onClick={() => handleSavingSelection("Personal Gifts")}
            className="py-3 px-6 bg-purple-500 hover:bg-purple-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl"
          >
            Personal Gifts
          </button>
          <button
            onClick={() => handleSavingSelection("Generic Savings")}
            className="py-3 px-6 bg-teal-500 hover:bg-teal-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl"
          >
            Savings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
