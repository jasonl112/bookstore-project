import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksAPI";

const BookPage = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Quantity for cart
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 5, comment: "Fantastic book!" },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "A great read, but a bit predictable.",
    },
  ]);

  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  if (isLoading) return <div> Loading....</div>;
  if (isError) return <div> error happending to load book information/</div>;

  const handleAddToCart = () => {
    console.log(book);
    dispatch(addToCart(book));
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${book.title} to the wishlist.`);
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add the new review to the existing reviews
    setReviews([...reviews, newReview]);
    // Clear the input fields after submission
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Book Details */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-80 object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
            {/* <h2 className="text-xl text-gray-700 mb-4">{book.author}</h2> */}
            <p className="text-2xl text-green-500 mb-6">{book.price}</p>

            {/* Add to Cart and Wishlist buttons */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
              >
                Add to Wishlist
              </button>
            </div>

            {/* Book Overview */}
            <h3 className="text-2xl font-semibold mb-4">Overview</h3>
            <p className="text-lg text-gray-600">{book.overview}</p>

            {/* Book Details */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <ul className="text-lg text-gray-600 space-y-2">
                <li>Author: {book.author}</li>
                <li>ISBN: {book.ISBN}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About the Auth or */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
          <p className="text-lg text-gray-600">{book.aboutAuthor}</p>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index} className="mb-6">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">Rating: {review.rating} ★</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Add a Review</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="py-2 px-4 w-full border border-gray-300 rounded-md"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                required
              />
              <select
                className="py-2 px-4 w-full border border-gray-300 rounded-md"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    rating: parseInt(e.target.value),
                  })
                }
                required
              >
                <option value={0}>Rating (1-5)</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} Star{rating > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Your Review"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* "You may also like" Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">You may also like</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* {book.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={recommendation.image}
                  alt={recommendation.title}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h4 className="font-semibold text-lg">
                  {recommendation.title}
                </h4>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPage;
