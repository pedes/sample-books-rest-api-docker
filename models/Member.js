'use strict';

class Member {
    constructor(data = {}) {
        this.id = data.id || null;
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.status = data.status || 'R';
    }

    // Validation methods
    validate() {
        const errors = [];

        // Required fields
        if (!this.firstName) {
            errors.push('First name is required');
        } else if (this.firstName.length > 50) {
            errors.push('First name must be less than 50 characters');
        }

        if (!this.lastName) {
            errors.push('Last name is required');
        } else if (this.lastName.length > 50) {
            errors.push('Last name must be less than 50 characters');
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

    isValidStatus(status) {
        const validStatuses = ['R', 'P', 'S'];
        return validStatuses.includes(status);
    }

    // Getters and setters
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value ? parseInt(value) : null;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value || '';
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value || '';
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value || 'R';
    }

    // Helper methods
    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            status: this.status
        };
    }

    static fromJSON(json) {
        return new Member(json);
    }
}

module.exports = Member; 