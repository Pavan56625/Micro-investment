import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Saving = () => {
    const { state} = useLocation();
    const { goalType } = state || {};
    const [ amount, setAmount] = useState(0);
    const [ duration, setDuration] =useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const dailyAmount = amount / duration;
        navigate("/autopay-setup", {
            state: {goalType, amount, duration, dailyAmount},
        });
    };
  return (
    <div>
        <h2>Set your {goalType} Goal</h2>
        <form onSubmit={handleSubmit}>
            <label>Target Amount: </label>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} required/>
            <label>Duration (days): </label>
            <input type='number' value={duration} onChange={(e) => setDuration(e.target.value)} required/>
            <button type='submit'>Next</button>
        </form>
        </div>
  );
}

export default Saving;