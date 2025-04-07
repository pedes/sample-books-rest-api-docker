'use strict';

class BookRepository {
    constructor() {
        this.books = [
            {
                "id": 1,
                "title": "Animal Farm",
                "author": "George Orwell",
                "category": "Fiction",
                "status": "N"
            },
            {
                "id": 2,
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "category": "Fiction",
                "status": "A"
            },
            {
                "id": 3,
                "title": "The Hobbit",
                "author": "J.R.R. Tolkien",
                "category": "Fantasy",
                "status": "A"
            },
            {
                "id": 4,
                "title": "The Da Vinci Code",
                "author": "Dan Brown",
                "category": "Thriller",
                "status": "A"
            },
            {
                "id": 5,
                "title": "Sapiens",
                "author": "Yuval Noah Harari",
                "category": "History",
                "status": "A"
            },
            {
                "id": 6,
                "title": "Becoming",
                "author": "Michelle Obama",
                "category": "Biography",
                "status": "A"
            },
            {
                "id": 7,
                "title": "How to Win Friends and Influence People",
                "author": "Dale Carnegie",
                "category": "Self-Help",
                "status": "A"
            },
            {
                "id": 8,
                "title": "The 7 Habits of Highly Effective People",
                "author": "Stephen R. Covey",
                "category": "Self-Help",
                "status": "A"
            },
            {
                "id": 9,
                "title": "Atomic Habits",
                "author": "James Clear",
                "category": "Productivity",
                "status": "A"
            },
            {
                "id": 10,
                "title": "Outliers",
                "author": "Malcolm Gladwell",
                "category": "Psychology",
                "status": "A"
            },
            {
                "id": 11,
                "title": "The Art of War",
                "author": "Sun Tzu",
                "category": "Philosophy",
                "status": "A"
            },
            {
                "id": 12,
                "title": "Daring Greatly",
                "author": "Brené Brown",
                "category": "Self-Help",
                "status": "A"
            },
            {
                "id": 13,
                "title": "12 Rules for Life",
                "author": "Jordan B. Peterson",
                "category": "Psychology",
                "status": "A"
            },
            {
                "id": 14,
                "title": "Foundation",
                "author": "Isaac Asimov",
                "category": "Science Fiction",
                "status": "A"
            },
            {
                "id": 15,
                "title": "The Hitchhiker's Guide to the Galaxy",
                "author": "Douglas Adams",
                "category": "Science Fiction",
                "status": "A"
            },
            {
                "id": 16,
                "title": "The Subtle Art of Not Giving a F*ck",
                "author": "Mark Manson",
                "category": "Self-Help",
                "status": "A"
            },
            {
                "id": 17,
                "title": "Lean In",
                "author": "Sheryl Sandberg",
                "category": "Leadership",
                "status": "A"
            },
            {
                "id": 18,
                "title": "The Lean Startup",
                "author": "Eric Ries",
                "category": "Business",
                "status": "A"
            },
            {
                "id": 19,
                "title": "The Martian",
                "author": "Andy Weir",
                "category": "Science Fiction",
                "status": "A"
            },
            {
                "id": 20,
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "category": "Fiction",
                "status": "A"
            }
        ];
    }

    getAllBooks() {
        return this.books;
    }

    getBookById(id) {
        return this.books.find(book => book.id === parseInt(id));
    }

    createBook(bookData) {
        const newBook = {
            id: this.books.length + 1,
            title: bookData.title,
            author: bookData.author,
            category: bookData.category,
            status: "N" // N for New/Available
        };
        this.books.push(newBook);
        return newBook;
    }

    updateBook(id, bookData) {
        const index = this.books.findIndex(book => book.id === parseInt(id));
        if (index === -1) return null;

        this.books[index] = {
            ...this.books[index],
            title: bookData.title || this.books[index].title,
            author: bookData.author || this.books[index].author,
            category: bookData.category || this.books[index].category,
            status: bookData.status || this.books[index].status
        };

        return this.books[index];
    }

    deleteBook(id) {
        const index = this.books.findIndex(book => book.id === parseInt(id));
        if (index === -1) return false;

        this.books = this.books.filter(book => book.id !== parseInt(id));
        return true;
    }

    getBooksByStatus(status) {
        return this.books.filter(book => book.status === status.toUpperCase());
    }

    getBooksByCategory(category) {
        return this.books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    }

    getBooksByAuthor(author) {
        return this.books.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    searchBooks(query) {
        const searchTerm = query.toLowerCase();
        return this.books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm)
        );
    }
}

module.exports = BookRepository; 