'use strict';

/**
 * Centralized error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  // Default error status and message
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  // Log the error (in a real app, use a proper logger)
  console.error(`Error: ${message}`);
  console.error(err.stack);
  
  // Send error response
  res.status(status).json({
    success: false,
    error: {
      message,
      status,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

module.exports = errorHandler; 