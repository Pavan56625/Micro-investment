// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Saving from './components/Saving';
import SavingMonitor from './components/SavingMonitor';
import Autopay from './components/Autopay';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/savings-goal" element={<Saving/>} />
        <Route path="/autopay-setup" element={<Autopay/>} />
        <Route path="/savingsmonitor" element={<SavingMonitor/>} />
      </Routes>
    </Router>
  );
}

export default App;