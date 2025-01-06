const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/auth')

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://pjartarg56625:lvukncvUihv5UV45@cluster0.bjdoj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
