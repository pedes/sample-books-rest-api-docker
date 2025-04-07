'use strict';

class MemberRepository {
    constructor() {
        this.members = [
            {
                "id": 1,
                "firstName": "John",
                "lastName": "Smith",
                "status": "R"
            },
            {
                "id": 2,
                "firstName": "Emma",
                "lastName": "Johnson",
                "status": "R"
            },
            {
                "id": 3,
                "firstName": "Liam",
                "lastName": "Williams",
                "status": "R"
            },
            {
                "id": 4,
                "firstName": "Olivia",
                "lastName": "Brown",
                "status": "R"
            },
            {
                "id": 5,
                "firstName": "Noah",
                "lastName": "Jones",
                "status": "R"
            },
            {
                "id": 6,
                "firstName": "Ava",
                "lastName": "Garcia",
                "status": "R"
            },
            {
                "id": 7,
                "firstName": "Elijah",
                "lastName": "Miller",
                "status": "R"
            },
            {
                "id": 8,
                "firstName": "Isabella",
                "lastName": "Davis",
                "status": "R"
            },
            {
                "id": 9,
                "firstName": "James",
                "lastName": "Rodriguez",
                "status": "R"
            },
            {
                "id": 10,
                "firstName": "Sophia",
                "lastName": "Martinez",
                "status": "R"
            },
            {
                "id": 11,
                "firstName": "Benjamin",
                "lastName": "Hernandez",
                "status": "R"
            },
            {
                "id": 12,
                "firstName": "Charlotte",
                "lastName": "Lopez",
                "status": "R"
            },
            {
                "id": 13,
                "firstName": "Lucas",
                "lastName": "Gonzalez",
                "status": "R"
            },
            {
                "id": 14,
                "firstName": "Amelia",
                "lastName": "Wilson",
                "status": "R"
            },
            {
                "id": 15,
                "firstName": "Henry",
                "lastName": "Anderson",
                "status": "R"
            },
            {
                "id": 16,
                "firstName": "Mia",
                "lastName": "Thomas",
                "status": "R"
            },
            {
                "id": 17,
                "firstName": "Alexander",
                "lastName": "Taylor",
                "status": "R"
            },
            {
                "id": 18,
                "firstName": "Harper",
                "lastName": "Moore",
                "status": "R"
            },
            {
                "id": 19,
                "firstName": "Daniel",
                "lastName": "Jackson",
                "status": "R"
            },
            {
                "id": 20,
                "firstName": "Evelyn",
                "lastName": "Martin",
                "status": "R"
            }
        ];
    }

    getAllMembers() {
        return this.members;
    }

    getMemberById(id) {
        return this.members.find(member => member.id === parseInt(id));
    }

    createMember(memberData) {
        const newMember = {
            id: this.members.length + 1,
            firstName: memberData.firstName,
            lastName: memberData.lastName,
            status: "R" // R for Regular member
        };
        this.members.push(newMember);
        return newMember;
    }

    updateMember(id, memberData) {
        const index = this.members.findIndex(member => member.id === parseInt(id));
        if (index === -1) return null;

        this.members[index] = {
            ...this.members[index],
            firstName: memberData.firstName || this.members[index].firstName,
            lastName: memberData.lastName || this.members[index].lastName,
            status: memberData.status || this.members[index].status
        };

        return this.members[index];
    }

    deleteMember(id) {
        const index = this.members.findIndex(member => member.id === parseInt(id));
        if (index === -1) return false;

        this.members = this.members.filter(member => member.id !== parseInt(id));
        return true;
    }

    getMembersByStatus(status) {
        return this.members.filter(member => member.status === status.toUpperCase());
    }

    getMembersByLastName(lastName) {
        return this.members.filter(member => 
            member.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    searchMembers(query) {
        const searchTerm = query.toLowerCase();
        return this.members.filter(member => 
            member.firstName.toLowerCase().includes(searchTerm) ||
            member.lastName.toLowerCase().includes(searchTerm)
        );
    }
}

module.exports = MemberRepository; 