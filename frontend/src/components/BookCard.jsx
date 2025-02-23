import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">{book.title}</h3>
        <p className="text-gray-700">{book.description}</p>
        <p className="text-gray-500 text-sm">{book.category}</p>
      </div>
    </Link>
  );
};

export default BookCard;
