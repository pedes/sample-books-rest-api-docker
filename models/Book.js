'use strict';

class Book {
    constructor(data = {}) {
        this.id = data.id || null;
        this.title = data.title || '';
        this.author = data.author || '';
        this.category = data.category || '';
        this.status = data.status || 'N';
    }

    // Validation methods
    validate() {
        const errors = [];

        // Required fields
        if (!this.title) {
            errors.push('Title is required');
        } else if (this.title.length > 200) {
            errors.push('Title must be less than 200 characters');
        }

        if (!this.author) {
            errors.push('Author is required');
        } else if (this.author.length > 100) {
            errors.push('Author must be less than 100 characters');
        }

        if (!this.category) {
            errors.push('Category is required');
        } else if (!this.isValidCategory(this.category)) {
            errors.push('Invalid category');
        }

        // Status validation
        if (!this.isValidStatus(this.status)) {
            errors.push('Invalid status');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    isValidCategory(category) {
        const validCategories = [
            'Fiction',
            'Fantasy',
            'Science Fiction',
            'Thriller',
            'History',
            'Biography',
            'Self-Help',
            'Productivity',
            'Psychology',
            'Philosophy',
            'Leadership',
            'Business'
        ];
        return validCategories.includes(category);
    }

    isValidStatus(status) {
        const validStatuses = ['N', 'A', 'B', 'M'];
        return validStatuses.includes(status);
    }

    // Getters and setters
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value ? parseInt(value) : null;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value || '';
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value || '';
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value || '';
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value || 'N';
    }

    // Helper methods
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            category: this.category,
            status: this.status
        };
    }

    static fromJSON(json) {
        return new Book(json);
    }
}

module.exports = Book; 