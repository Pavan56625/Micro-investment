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
     <div>
        <h1>Autopay setup</h1>
        <p>You need to save INR {dailyAmount.toFixed(2)} per day for your {goalType} goal.  </p>
        <button onClick={finalizeSetup}>Confirm</button>
        </div>
   );
 }
 
 export default Autopay