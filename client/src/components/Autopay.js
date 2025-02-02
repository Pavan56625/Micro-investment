 import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
 
 const Autopay = () => {
    const {state} = useLocation();
    const { goalType, dailyAmount } = state || {};
    const navigate = useNavigate();


    const finalizeSetup = () =>{
        alert("Autopay setup is successfull!");
        navigate("/savingsmonitor", { state: {goalType, dailyAmount,}});
    }

  return (
     <div  className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Autopay setup</h1>
        <p className="text-lg mb-6">
        You need to save INR <strong>{dailyAmount ? dailyAmount.toFixed(2) : "0.00"}</strong> per day for your <strong>{goalType || "goal"}</strong>.
      </p>
        <button onClick={finalizeSetup}
         className="py-2 px-4 bg-teal-500 hover:bg-teal-600 rounded-lg text-white text-lg font-semibold transition-shadow shadow-lg hover:shadow-2xl">Confirm</button>
        </div>
   );
};

export default Autopay;







