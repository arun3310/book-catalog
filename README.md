📚 Book Catalog API
A simple CRUD API built with Node.js, Express, and MongoDB to manage a catalog of books. This service allows you to Create, Read, Update, and Delete books with full validation and error handling.
📁 Project Structure
book-catalog/
├── controllers/ # Request handlers
├── models/ # Mongoose schema
├── routes/ # API routes
├── middleware/ # Custom error handlers
├── app.js # Express setup
├── server.js # Server entry point
├── .env.example # Sample environment variables
├── package.json # Node dependencies
└── README.md # Project overview
🚀 Features
Add new books to the catalog
List all books
Get details of a specific book by ID
Update book information
Delete a book
Input validation (title, author, ISBN, price)
Error handling for invalid input or missing data
🧰 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
Postman for testing
🛠️ Setup Instructions
Clone the repository:  git clone https://github.com/arun3310/book-catalog.git
cd book-catalog
Install dependencies:
npm install
Create a .env file
Set your MongoDB URI in .env:
MONGO_URI=mongodb://localhost:27017/bookcatalog
PORT=3000
Start the server:
npm start
📬 API Endpoints
Method	Endpoint	Description
POST	/books	Create a new book
GET	/books	Get all books
GET	/books/:id	Get a book by ID
PUT	/books/:id	Update book by ID
DELETE	/books/:id	Delete a book by ID



