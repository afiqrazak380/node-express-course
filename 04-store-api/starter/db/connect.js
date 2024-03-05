const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {});
};

// Check the connection status
const db = mongoose.connection;

// Event listener for successful connection
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Event listener for connection errors
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Event listener for disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = connectDB;
