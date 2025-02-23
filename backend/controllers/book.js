const Book = require("../models/book.model"); // Import the Book model

// Create a new book
const createBook = async (req, res) => {
  try {
    const newBook = new Book({ ...req.body });
    await newBook.save();
    res
      .status(201)
      .json({ message: "Book added successfully!", book: newBook });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add the book", details: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch books", details: error.message });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch book", details: error.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated successfully!", book: updatedBook });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update book", details: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete book", details: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
