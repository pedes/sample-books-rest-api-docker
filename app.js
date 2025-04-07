'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const cors = require('./config/cors');
const errorHandler = require('./middleware/errorHandler');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
cors(app);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: config.version,
    timestamp: new Date().toISOString()
  });
});

// API routes
bookRoutes(app);
memberRoutes(app);

// Error handling middleware (should be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
