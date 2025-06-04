const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://root:root@cluster0.3rngn5t.mongodb.net/joblisting?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// MongoDB connection event handlers
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Routes
app.use('/api/jobs', jobRoutes);

// Start server
const PORT = process.env.PORT || 5001;  // Change to a different port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});