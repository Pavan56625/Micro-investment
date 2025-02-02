import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SavingMonitor = () => {
  const { state } = useLocation();
  const { goalType, dailyAmount } = state || {};
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  // Simulate savings progress update (In real case, fetch actual savings from backend)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100)); // Increase progress by 5% every 2 sec
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">{goalType} Saving Monitor</h2>
        <p className="text-lg mb-2">Daily Saving: <span className="font-semibold">INR {dailyAmount?.toFixed(2)}</span></p>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-300 h-6 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-lg font-semibold mt-2">{progress}% Complete</p>

        {/* Back to Dashboard Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-shadow shadow-md hover:shadow-lg"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SavingMonitor;
