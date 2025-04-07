'use strict';

const memberService = require('../services/memberService');
const { validateRequest } = require('../middleware/validator');

/**
 * Member routes
 * @param {Object} app - Express app
 */
const memberRoutes = (app) => {
  // Get all members with optional filtering
  app.get('/api/members', (req, res, next) => {
    try {
      const filters = {
        status: req.query.status,
        lastName: req.query.lastName,
        search: req.query.search
      };
      
      const members = memberService.getAllMembers(filters);
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  });

  // Get a member by ID
  app.get('/api/members/:id', (req, res, next) => {
    try {
      const member = memberService.getMemberById(parseInt(req.params.id));
      res.json({ success: true, data: member });
    } catch (error) {
      next(error);
    }
  });

  // Create a new member
  app.post('/api/members', validateRequest('member'), (req, res, next) => {
    try {
      const member = memberService.createMember(req.validatedData);
      res.status(201).json({ success: true, data: member });
    } catch (error) {
      next(error);
    }
  });

  // Update a member
  app.put('/api/members/:id', validateRequest('member'), (req, res, next) => {
    try {
      const member = memberService.updateMember(parseInt(req.params.id), req.validatedData);
      res.json({ success: true, data: member });
    } catch (error) {
      next(error);
    }
  });

  // Delete a member
  app.delete('/api/members/:id', (req, res, next) => {
    try {
      memberService.deleteMember(parseInt(req.params.id));
      res.json({ success: true, message: 'Member deleted successfully' });
    } catch (error) {
      next(error);
    }
  });

  // Get members by status
  app.get('/api/members/status/:status', (req, res, next) => {
    try {
      const members = memberService.getAllMembers({ status: req.params.status });
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  });

  // Get members by last name
  app.get('/api/members/lastname/:lastName', (req, res, next) => {
    try {
      const members = memberService.getAllMembers({ lastName: req.params.lastName });
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  });

  // Search members
  app.get('/api/members/search', (req, res, next) => {
    try {
      const { query } = req.query;
      if (!query) {
        const error = new Error('Search query is required');
        error.status = 400;
        throw error;
      }
      const members = memberService.getAllMembers({ search: query });
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = memberRoutes; 