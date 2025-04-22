# Book Management System API
here is the Node.js backend API for managing books using MySQL and Sequelize ORM

Features:
View all books
Add new books
Retrieve, update, and delete books
am using Mac so am tesing on linux
#this are my curl commands
# get all boks
curl http://localhost:3000/api/books

# POST create new book
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "The Alchemist", "author": "Paulo Coelho", "isbn": "9780062315007", "publication_year": 1988, "genre": "Fiction"}'

# GET a specific book by id
curl http://localhost:3000/api/books/1

# PUT update a book
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{"genre": "Adventure"}'

# DELETE a book
curl -X DELETE http://localhost:3000/api/books/1

NAME: Joshua Akibo-Jones