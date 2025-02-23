const About = () => {
  return (
    <section className="bg-gray-100 py-16 h-screen">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            We are an independent bookstore that prides itself on offering a
            wide variety of books for readers of all ages and interests. Our
            mission is to bring stories to life, foster a love for reading, and
            provide a welcoming space for book lovers to explore.
          </p>

          <div className="my-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="border-t border-black w-1/4"></div>
              <p className="text-xl italic text-gray-600">
                "A book is a dream that you hold in your hand."
              </p>
              <div className="border-t border-black w-1/4"></div>
            </div>
          </div>

          <p>
            Our team is passionate about curating the best selection of books,
            from classic novels to the latest bestsellers. Whether you're
            looking for a thrilling mystery, a heartwarming romance, or an
            inspiring self-help book, we have something for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
