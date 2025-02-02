import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assests/space.jpg";

const Saving = () => {
  const { state } = useLocation();
  const { goalType } = state || {};
  const [amount, setAmount] = useState(""); // User sets this
  const [duration, setDuration] = useState(""); // User sets this
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dailyAmount = parseFloat(amount) / parseInt(duration, 10);
    navigate("/autopay-setup", {
      state: { goalType, amount, duration, dailyAmount },
    });
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative z-10 text-center text-white p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold mb-6 font-montserrat shadow-text">
          Set your {goalType} Goal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-light mb-1">Target Amount:</label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-light mb-1">Duration (days):</label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              className="p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-teal-500 hover:bg-teal-600 rounded-lg text-lg font-semibold transition-shadow shadow-lg hover:shadow-2xl"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Saving;