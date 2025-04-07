'use strict';

const bookService = require('../services/bookService');
const { validateRequest } = require('../middleware/validator');

/**
 * Book routes
 * @param {Object} app - Express app
 */
const bookRoutes = (app) => {
  // Get all books with optional filtering
  app.get('/api/books', (req, res, next) => {
    try {
      const filters = {
        status: req.query.status,
        category: req.query.category,
        author: req.query.author,
        search: req.query.search
      };
      
      const books = bookService.getAllBooks(filters);
      res.json({ success: true, data: books });
    } catch (error) {
      next(error);
    }
  });

  // Get a book by ID
  app.get('/api/books/:id', (req, res, next) => {
    try {
      const book = bookService.getBookById(parseInt(req.params.id));
      res.json({ success: true, data: book });
    } catch (error) {
      next(error);
    }
  });

  // Create a new book
  app.post('/api/books', validateRequest('book'), (req, res, next) => {
    try {
      const book = bookService.createBook(req.validatedData);
      res.status(201).json({ success: true, data: book });
    } catch (error) {
      next(error);
    }
  });

  // Update a book
  app.put('/api/books/:id', validateRequest('book'), (req, res, next) => {
    try {
      const book = bookService.updateBook(parseInt(req.params.id), req.validatedData);
      res.json({ success: true, data: book });
    } catch (error) {
      next(error);
    }
  });

  // Delete a book
  app.delete('/api/books/:id', (req, res, next) => {
    try {
      bookService.deleteBook(parseInt(req.params.id));
      res.json({ success: true, message: 'Book deleted successfully' });
    } catch (error) {
      next(error);
    }
  });

  // Get books by status
  app.get('/api/books/status/:status', (req, res, next) => {
    try {
      const books = bookService.getAllBooks({ status: req.params.status });
      res.json({ success: true, data: books });
    } catch (error) {
      next(error);
    }
  });

  // Get books by category
  app.get('/api/books/category/:category', (req, res, next) => {
    try {
      const books = bookService.getAllBooks({ category: req.params.category });
      res.json({ success: true, data: books });
    } catch (error) {
      next(error);
    }
  });

  // Get books by author
  app.get('/api/books/author/:author', (req, res, next) => {
    try {
      const books = bookService.getAllBooks({ author: req.params.author });
      res.json({ success: true, data: books });
    } catch (error) {
      next(error);
    }
  });

  // Search books
  app.get('/api/books/search', (req, res, next) => {
    try {
      const { query } = req.query;
      if (!query) {
        const error = new Error('Search query is required');
        error.status = 400;
        throw error;
      }
      const books = bookService.getAllBooks({ search: query });
      res.json({ success: true, data: books });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = bookRoutes; 