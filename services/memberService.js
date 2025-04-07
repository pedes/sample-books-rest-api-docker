'use strict';

const MemberRepository = require('../repositories/MemberRepository');

class MemberService {
  constructor() {
    this.memberRepository = new MemberRepository();
  }

  /**
   * Get all members with optional filtering
   * @param {Object} filters - Filter criteria
   * @returns {Array} - Array of members
   */
  getAllMembers(filters = {}) {
    const { status, lastName, search } = filters;
    
    if (search) {
      return this.memberRepository.searchMembers(search);
    }
    
    if (status) {
      return this.memberRepository.getMembersByStatus(status);
    }
    
    if (lastName) {
      return this.memberRepository.getMembersByLastName(lastName);
    }
    
    return this.memberRepository.getAllMembers();
  }

  /**
   * Get a member by ID
   * @param {number} id - Member ID
   * @returns {Object} - Member object
   * @throws {Error} - If member not found
   */
  getMemberById(id) {
    const member = this.memberRepository.getMemberById(id);
    if (!member) {
      const error = new Error('Member not found');
      error.status = 404;
      throw error;
    }
    return member;
  }

  /**
   * Create a new member
   * @param {Object} memberData - Member data
   * @returns {Object} - Created member
   */
  createMember(memberData) {
    return this.memberRepository.createMember(memberData);
  }

  /**
   * Update a member
   * @param {number} id - Member ID
   * @param {Object} memberData - Updated member data
   * @returns {Object} - Updated member
   * @throws {Error} - If member not found
   */
  updateMember(id, memberData) {
    const member = this.memberRepository.updateMember(id, memberData);
    if (!member) {
      const error = new Error('Member not found');
      error.status = 404;
      throw error;
    }
    return member;
  }

  /**
   * Delete a member
   * @param {number} id - Member ID
   * @returns {boolean} - Success status
   * @throws {Error} - If member not found
   */
  deleteMember(id) {
    const success = this.memberRepository.deleteMember(id);
    if (!success) {
      const error = new Error('Member not found');
      error.status = 404;
      throw error;
    }
    return true;
  }
}

module.exports = new MemberService(); 