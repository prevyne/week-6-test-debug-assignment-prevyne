const express = require('express');
const cors = require('cors');

const postRoutes = require('./routes/posts'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes); // Mount the post routes

module.exports = app; // Export the app for testing