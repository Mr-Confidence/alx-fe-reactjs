import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide no-underline"
          >
            <span className="bg-white text-blue-600 px-2 py-1 rounded-lg">
              GitHub
            </span>{" "}
            Search
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/users"
              className="text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 no-underline"
            >
              Users
            </Link>
            <Link
              to="/search"
              className="ml-6 text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 no-underline"
            >
              Search
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col space-y-1">
              <div className="w-full h-1 bg-white rounded"></div>
              <div className="w-full h-1 bg-white rounded"></div>
              <div className="w-full h-1 bg-white rounded"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-2 space-y-2">
          <Link
            to="/users"
            className="block px-4 py-2 text-white hover:bg-blue-800 rounded-lg transition-all duration-300 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Users
          </Link>
          <Link
            to="/search"
            className="block px-4 py-2 text-white hover:bg-blue-800 rounded-lg transition-all duration-300 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Search
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
