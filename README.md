# MERN Bookstore

A full-stack Bookstore application built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Browse books
- Add, edit, and delete books
- User authentication (if implemented)
- Responsive UI

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/mern-bookstore.git
   cd mern-bookstore
   ```

2. Install dependencies for both backend and frontend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm start
   ```

2. Start the frontend:

   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173/` (or the default port used by Vite).

## License

This project is licensed under the MIT License.
