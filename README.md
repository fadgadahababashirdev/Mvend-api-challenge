
# Mvend API Challenge

This project is a RESTful API built using **Express** ,**postgress** and **Sequelize** for managing users, articles, and comments. The API provides endpoints for user authentication, CRUD operations for users, articles, and comments, and authorization for secured routes.

## Table of Contents

- [Getting Started](getting-started)
- [Environment Variables](environment-variables)
- [Installation](installation)
- [Running the Application](running-the-application)
- [API Endpoints](api-endpoints)
  - [User Routes](user-routes)
  - [Article Routes](article-routes)
  - [Comment Routes](comment-routes)
- [Dependencies](dependencies)
- [Dev Dependencies](dev-dependencies)


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** (version 16+)
- **PostgreSQL** (for database)
- **Nodemon** (for automatic restarts during development)

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

**env**
NODE_ENV=development
APP_PORT=3100 
APP_SECRET=8f62d8d9c3a4b7vmdjnvsdnvlsd.k asdv.fkjvnsdae1f5x9k2m4p6r8t0v2
# app credenatials  

DB_USERNAME=postgres
DB_PASSWORD=r2a8s5cc5s8r2aanifa
DB_DATABASE=article
DB_HOST=localhost
DB_DIALECT=postgres



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mvend-api-challenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mvend-api-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the server in development mode:

```bash
npm start
```

The server will run on `http://localhost:3100` by default.

## API Endpoints

### User Routes

- **POST** `/api/v1/createAccount` - Register a new user.
- **GET** `/api/v1/users` - Retrieve all users.
- **GET** `/api/v1/user/:id` - Retrieve a single user by ID.
- **PUT** `/api/v1/user/:id` - Update a user by ID.
- **DELETE** `/api/v1/user/:id` - Delete a user by ID.
- **POST** `/api/v1/user/login` - Authenticate and login a user.

### Article Routes

<!-- each newely created article appears on the top -->
- **POST** `/api/v1/article` - Create a new article (Authorization required).
- **GET** `/api/v1/article` - Retrieve all articles (Authorization required).
- **GET** `/api/v1/article/:id` - Retrieve a single article by ID (Authorization required).
- **PUT** `/api/v1/article/:id` - Update an article by ID (Authorization required).
- **DELETE** `/api/v1/article/:id` - Delete an article by ID (Authorization required).

### Comment Routes

<!-- each newlry comment appears on the top -->
- **POST** `/api/v1/comment` - Add a new comment to an article (Authorization required).
- **GET** `/api/v1/comment/` - Get all comments on an article (Authorization required).
- **GET** `/api/v1/comment/:id` - Get a single comment by ID (Authorization required).
- **PUT** `/api/v1/comment/:id` - Update a comment by ID (Authorization required).
- **DELETE** `/api/v1/comment/:id` - Delete a comment by ID (Authorization required).

## Dependencies

- `@sequelize/core` - Sequelize ORM for managing database operations.
- `bcrypt` - Library for hashing passwords.
- `dotenv` - Loads environment variables from a `.env` file.
- `express` - Fast, unopinionated web framework for Node.js.
- `jsonwebtoken` - Implementation of JSON Web Tokens for secure communication.
- `sequelize` - Promise-based Node.js ORM for SQL databases.

## Dev Dependencies

- `nodemon` - Automatically restarts the application on code changes.
- `sequelize-cli` - Command-line interface for Sequelize.

---

## Additional Notes

- **Authorization Middleware**: The `authorization` middleware is applied on protected routes to ensure only authenticated users can access certain endpoints.
- **Error Handling**: Errors are handled and returned in a JSON format with appropriate status codes.
- **Database Configuration**: The project uses PostgreSQL, configured through Sequelize. Update database credentials in `.env` as needed.

For any questions, please reach out via 
contacts:0793366074 
email:fadgadahababashirdev@gmail.com
---

This README provides the basic information needed to understand and get started with the API, making it accessible for further development or deployment.