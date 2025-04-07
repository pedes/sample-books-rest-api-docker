'use strict';

const Book = require('../models/Book');
const Member = require('../models/Member');

/**
 * Validates request body against a model
 * @param {string} modelType - The type of model to validate against ('book' or 'member')
 */
const validateRequest = (modelType) => {
  return (req, res, next) => {
    let model;
    
    // Create model instance based on type
    if (modelType === 'book') {
      model = new Book(req.body);
    } else if (modelType === 'member') {
      model = new Member(req.body);
    } else {
      return next(new Error('Invalid model type for validation'));
    }
    
    // Validate the model
    const validation = model.validate();
    
    if (!validation.isValid) {
      const error = new Error('Validation failed');
      error.status = 400;
      error.details = validation.errors;
      return next(error);
    }
    
    // Attach the validated model to the request for use in route handlers
    req.validatedData = model;
    next();
  };
};

module.exports = {
  validateRequest
}; 