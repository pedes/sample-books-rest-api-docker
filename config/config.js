'use strict';

/**
 * Application configuration
 */
const config = {
  // Application
  version: process.env.VERSION || '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  
  // API
  apiPrefix: '/api',
  
  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
  
  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },
  
  // Pagination defaults
  pagination: {
    defaultLimit: 10,
    maxLimit: 100
  }
};

module.exports = config;
