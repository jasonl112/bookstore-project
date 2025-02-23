const express = require("express");

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book");
const router = express.Router();

// POST request to add a new book
router.post("/create-book", createBook);

// GET all books
router.get("/", getAllBooks);

// GET a single book by ID
router.get("/:id", getBookById);

// Update book data by id
router.put("/edit/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
