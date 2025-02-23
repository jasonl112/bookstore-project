import { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Search,
  Heart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  // Auto-navigate to search page as the user types
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  }, [searchQuery, navigate]);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo & Search */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src="../public/images/logo.png" alt="Logo" className="h-10" />
          </Link>

          {/* Search Bar (Hidden on Mobile, Show on Click) */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring focus:ring-gray-500"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Mobile Search Icon */}
          <button
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Right Section: Profile, Wishlist, Cart */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <User className="w-6 h-6" />
              <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-10">
                <ul>
                  {isAuthenticated ? (
                    <>
                      <li>
                        <Link
                          to="/order"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/checkout"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Checkout
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
                          className="w-full text-left px-4 py-2 hover:bg-gray-200"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button
                        onClick={() => loginWithRedirect()}
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                      >
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link to="/wishlist">
            <Heart className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          </Link>

          {/* Cart with Item Count */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden p-4 bg-gray-900">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black p-4">
          <Link to="/" className="block py-2 hover:text-gray-400">
            Home
          </Link>
          <Link to="/books" className="block py-2 hover:text-gray-400">
            Books
          </Link>
          <Link to="/categories" className="block py-2 hover:text-gray-400">
            Categories
          </Link>
          <Link to="/deals" className="block py-2 hover:text-gray-400">
            Deals
          </Link>

          {/* Profile, Wishlist, Cart */}
          <div className="flex flex-col space-y-2 mt-4 z-10">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <User className="w-6 h-6" />
              <span>Profile</span>
            </button>
            {dropdownOpen && (
              <div className="bg-gray-800 p-2 rounded-md z-20">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/order"
                      className="block py-1 hover:text-gray-400"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/checkout"
                      className="block py-1 hover:text-gray-400"
                    >
                      Checkout
                    </Link>
                    <button
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      className="block py-1 hover:text-gray-400"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="block py-1 hover:text-gray-400"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
            <Link
              to="/wishlist"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <Heart className="w-6 h-6" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Cart ({cartItems.length})</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
