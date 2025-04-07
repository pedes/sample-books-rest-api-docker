'use strict';

const BookRepository = require('../repositories/BookRepository');

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  /**
   * Get all books with optional filtering
   * @param {Object} filters - Filter criteria
   * @returns {Array} - Array of books
   */
  getAllBooks(filters = {}) {
    const { status, category, author, search } = filters;
    
    if (search) {
      return this.bookRepository.searchBooks(search);
    }
    
    if (status) {
      return this.bookRepository.getBooksByStatus(status);
    }
    
    if (category) {
      return this.bookRepository.getBooksByCategory(category);
    }
    
    if (author) {
      return this.bookRepository.getBooksByAuthor(author);
    }
    
    return this.bookRepository.getAllBooks();
  }

  /**
   * Get a book by ID
   * @param {number} id - Book ID
   * @returns {Object} - Book object
   * @throws {Error} - If book not found
   */
  getBookById(id) {
    const book = this.bookRepository.getBookById(id);
    if (!book) {
      const error = new Error('Book not found');
      error.status = 404;
      throw error;
    }
    return book;
  }

  /**
   * Create a new book
   * @param {Object} bookData - Book data
   * @returns {Object} - Created book
   */
  createBook(bookData) {
    return this.bookRepository.createBook(bookData);
  }

  /**
   * Update a book
   * @param {number} id - Book ID
   * @param {Object} bookData - Updated book data
   * @returns {Object} - Updated book
   * @throws {Error} - If book not found
   */
  updateBook(id, bookData) {
    const book = this.bookRepository.updateBook(id, bookData);
    if (!book) {
      const error = new Error('Book not found');
      error.status = 404;
      throw error;
    }
    return book;
  }

  /**
   * Delete a book
   * @param {number} id - Book ID
   * @returns {boolean} - Success status
   * @throws {Error} - If book not found
   */
  deleteBook(id) {
    const success = this.bookRepository.deleteBook(id);
    if (!success) {
      const error = new Error('Book not found');
      error.status = 404;
      throw error;
    }
    return true;
  }
}

module.exports = new BookService(); 