'use strict';

const config = require('./config');

/**
 * Configure CORS middleware
 * @param {Object} app - Express app
 */
const configureCors = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.cors.origin);
    res.header('Access-Control-Allow-Methods', config.cors.methods.join(', '));
    res.header('Access-Control-Allow-Headers', config.cors.allowedHeaders.join(', '));
    next();
  });
};

module.exports = configureCors;
