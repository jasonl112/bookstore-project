const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">BOOKSTORE</h1>
          <p className="text-lg mb-6">
            Your one-stop shop for books of all genres!
          </p>
          <a href="/search">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
