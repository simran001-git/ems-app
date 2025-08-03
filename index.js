require('dotenv').config();
const express = require('express');
const connectDB = require('./models/connection');
const app = express();

// Git configuration
const { exec } = require('child_process');
exec('git config --global user.name "simran"');
exec('git config --global user.email "simran@gmail.com"');

// Connect to DB, then start server
connectDB()

const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
 

