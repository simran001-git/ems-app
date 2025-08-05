require('dotenv').config();
const express = require('express');
const connectDB = require('./models/connection');
const app = express();

// Connect to DB, then start 
// server
const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
 

