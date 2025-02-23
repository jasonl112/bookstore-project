import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BookCard from "../../components/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksAPI";

const Recommendation = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  // Example book data (You can replace this with dynamic data)
  const recommendedBooks = [
    {
      id: 1,
      title: "Book Title 1",
      category: "Fiction",
      image: "/images/book1.jpg",
      description: "A thrilling fantasy novel filled with magic and mystery.",
    },
    {
      id: 2,
      title: "Book Title 2",
      category: "Non-Fiction",
      image: "/images/book2.jpg",
      description: "An inspiring memoir of perseverance and hope.",
    },
    {
      id: 3,
      title: "Book Title 3",
      category: "Sci-Fi",
      image: "/images/book3.jpg",
      description: "A captivating historical fiction set during World War II.",
    },
    // Add more book data as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">What Booksellers Recommend</h1>

        {/* Jane's Picks */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Jane's Picks</h2>
          <p className="text-lg text-gray-600">
            A collection of intriguing books handpicked for readers seeking
            adventure, insight, and inspiration.
          </p>
        </div>

        {/* Book Slider */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Number of books visible at a time
          loop={true} // Infinite loop
          breakpoints={{
            640: {
              slidesPerView: 1, // On small screens show one book at a time
            },
            768: {
              slidesPerView: 2, // On medium screens show two books at a time
            },
            1024: {
              slidesPerView: 3, // On large screens show three books at a time
            },
          }}
          pagination={{ clickable: true }} // Pagination buttons
          navigation={true} // Navigation arrows
        >
          {/* Book Cards */}
          {recommendedBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommendation;
