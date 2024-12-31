import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    // return(
    //     <div>
    //         <h1>Welcome to the dashboard</h1>
    //     </div>
    // );
    const navigate = useNavigate();

    const handleSavingSelection = (goalType) => {
        navigate("/savings-goal", { state: {goalType }});
    };


  return (
    <div>
        <h1>Welcome to your Dashboard</h1>
        <div>
            <button onClick={() => handleSavingSelection("Vacation")}>Vacation</button>
            <button onClick={() => handleSavingSelection("Personal Gifts")}>Personal Gifts</button>
            <button onClick={() => handleSavingSelection("Genric Savings")}>Savings</button>
        </div>
        </div>
  );
};  

export default Dashboard;
