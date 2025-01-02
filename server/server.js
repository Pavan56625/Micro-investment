// const authRoutes = require("./routes/auth");
// app.use("api/auth", authRoutes);

// server.js or app.js (Node.js backend)
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');  // Assuming you have a User model

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection (replace with your MongoDB Atlas connection string)
mongoose.connect('mongodb+srv://pjartarg56625:lvukncvUihv5UV45@cluster0.bjdoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

// SignUp Route
app.post('/api/auth/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'Sign up successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});