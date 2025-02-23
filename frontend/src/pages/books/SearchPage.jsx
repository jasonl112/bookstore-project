import { useState } from "react";
import BookCard from "../../components/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksAPI";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: books = [] } = useFetchAllBooksQuery();

  //   {
  //     id: 1,
  //     title: "Book Title 1",
  //     category: "Fiction",
  //     image: "/images/book1.jpg",
  //     description: "A thrilling adventure novel.",
  //   },
  //   {
  //     id: 2,
  //     title: "Book Title 2",
  //     category: "Non-Fiction",
  //     image: "/images/book2.jpg",
  //     description: "An inspiring memoir of hope.",
  //   },
  //   {
  //     id: 3,
  //     title: "Book Title 3",
  //     category: "Sci-Fi",
  //     image: "/images/book3.jpg",
  //     description: "A science fiction epic about AI.",
  //   },
  //   {
  //     id: 4,
  //     title: "Book Title 4",
  //     category: "Fantasy",
  //     image: "/images/book4.jpg",
  //     description: "A magical fantasy novel.",
  //   },
  //   {
  //     id: 5,
  //     title: "Book Title 5",
  //     category: "Non-Fiction",
  //     image: "/images/book5.jpg",
  //     description: "A deep dive into history.",
  //   },
  //   {
  //     id: 6,
  //     title: "Book Title 6",
  //     category: "Fiction",
  //     image: "/images/book6.jpg",
  //     description: "A compelling drama.",
  //   },
  // ]);

  // Filter books based on the selected category and search query
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory
      ? book.genre === selectedCategory
      : true;
    const matchesSearchQuery = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-8">Search Books</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for books..."
            className="py-2 px-4 w-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Dropdown to filter books */}
        <div className="mb-8">
          <label
            htmlFor="category"
            className="text-lg font-semibold text-gray-700"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            className="mt-2 py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>

        {/* Books Grid using BookCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
