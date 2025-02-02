import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assests/space.jpg";
import menuIcon from "../assests/menuicon.jpg"; // Your custom menu icon

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSavingSelection = (goalType) => {
    navigate("/savings-goal", { state: { goalType } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Toggle Sidebar Button (Same Icon for Open & Close) */}
      <button
        className="fixed top-5 right-5 z-50 bg-transparent p-3 rounded shadow-lg hover:opacity-80 transition"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <img src={menuIcon} alt="Menu" className="w-10 h-10" />
      </button>

      {/* Sidebar (Right Side) */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 text-white transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
        <div className="mt-16 flex flex-col gap-6 p-6">
          <h2 className="text-2xl font-bold ">Menu</h2>
          <button onClick={() => navigate("/savings-monitor")} className="text-lg hover:text-blue-400">Savings Monitor</button>
          <button onClick={() => navigate("/personal-info")} className="text-lg hover:text-blue-400">Personal Info</button>
          <button onClick={() => navigate("/security")} className="text-lg hover:text-blue-400">Security</button>
          <button onClick={() => navigate("/bank-details")} className="text-lg hover:text-blue-400">Bank Details</button>
          <button onClick={() => navigate("/contact-us")} className="text-lg hover:text-blue-400">Contact Us</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Overlay */}
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
            <button onClick={() => handleSavingSelection("Vacation")} className="py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl">
              Vacation
            </button>
            <button onClick={() => handleSavingSelection("Personal Gifts")} className="py-3 px-6 bg-purple-500 hover:bg-purple-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl">
              Personal Gifts
            </button>
            <button onClick={() => handleSavingSelection("Generic Savings")} className="py-3 px-6 bg-teal-500 hover:bg-teal-600 rounded-lg text-xl font-semibold transition-shadow shadow-lg hover:shadow-2xl">
              Savings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
