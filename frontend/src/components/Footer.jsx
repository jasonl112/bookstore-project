import { Facebook, Twitter, Instagram } from "lucide-react"; // Install lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Shipping & Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <form className="flex flex-col items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-2 text-black rounded-md"
            />
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
