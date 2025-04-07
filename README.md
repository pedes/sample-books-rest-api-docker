# Sample Books Library REST API

A containerized REST API implementation for managing books and libraries using Node.js, Express, and Docker.

## 🚀 Features

- RESTful API endpoints for books and library management
- Docker containerization for easy deployment
- Modern Node.js with Express framework
- ESLint and Prettier for code quality
- Jest for testing
- Development environment with hot-reload

## 📋 Prerequisites

- Node.js >= 14.0.0
- Docker and Docker Compose
- npm or yarn package manager

## 🛠️ Installation

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sample-books-rest-api-docker.git
cd sample-books-rest-api-docker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Docker Setup

1. Build the Docker image:
```bash
docker build -t books-library-api .
```

2. Run the container:
```bash
docker run -p 3000:3000 books-library-api
```

Or using Docker Compose:
```bash
docker-compose up
```

## 📚 API Documentation

### Books Endpoints

#### Get All Books
- **GET** `/api/books`
- Returns a list of all books
- Response: `200 OK`
```json
{
  "books": [
    {
      "id": "1",
      "title": "Sample Book",
      "author": "John Doe",
      "isbn": "1234567890"
    }
  ]
}
```

#### Get Book by ID
- **GET** `/api/books/:id`
- Returns a specific book
- Response: `200 OK` or `404 Not Found`

#### Create Book
- **POST** `/api/books`
- Creates a new book
- Request Body:
```json
{
  "title": "New Book",
  "author": "Jane Smith",
  "isbn": "0987654321"
}
```
- Response: `201 Created`

#### Update Book
- **PUT** `/api/books/:id`
- Updates an existing book
- Request Body: Same as Create Book
- Response: `200 OK` or `404 Not Found`

#### Delete Book
- **DELETE** `/api/books/:id`
- Deletes a book
- Response: `204 No Content` or `404 Not Found`

### Library Endpoints

#### Get Library Status
- **GET** `/api/library/status`
- Returns the current library status
- Response: `200 OK`
```json
{
  "totalBooks": 100,
  "availableBooks": 95,
  "borrowedBooks": 5
}
```

#### Borrow Book
- **POST** `/api/library/borrow/:bookId`
- Borrows a book from the library
- Response: `200 OK` or `404 Not Found`

#### Return Book
- **POST** `/api/library/return/:bookId`
- Returns a borrowed book
- Response: `200 OK` or `404 Not Found`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Code Quality

- Lint the code:
```bash
npm run lint
```

- Fix linting issues:
```bash
npm run lint:fix
```

## 🔧 Configuration

The API can be configured using environment variables:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Andres Cespedes Morales

## 🙏 Acknowledgments

- Express.js team
- Docker team
- All contributors and maintainers
