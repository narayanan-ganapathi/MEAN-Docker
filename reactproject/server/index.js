// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB URI - replace 'your_database' with your actual database name
// and 'your_username:your_password' with your actual MongoDB credentials
const mongoURI = 'mongodb://mongo:27017/your_database';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/data', (req, res) => {
  res.json({ message: 'custom messages'});
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));