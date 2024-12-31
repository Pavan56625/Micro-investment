import React from 'react'
import { useLocation } from 'react-router-dom'

const SavingMonitor = () => {
const {state} = useLocation();
const { goalType, dailyAmount} = state || {};

const progress = 50;
  return (
    <div>
        <h2>{goalType} Saving Monitor</h2>
        <p>Daily Saving Amount: INR{dailyAmount.toFixed(2)}</p>
        <progress value={progress} max="100"></progress>
        <p>{progress}% Complete</p></div>
  )
}

export default SavingMonitor