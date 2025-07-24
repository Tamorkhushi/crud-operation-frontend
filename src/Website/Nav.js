







import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="bg-purple-700 text-white shadow-md w-full h-16 fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-200 text-white transition">
            CRUD App
          </Link>
        </div>

        {/* Navigation Links */}
        {auth ? (
          <ul className="flex gap-8 items-center text-sm font-medium ">
            <li>
              <Link
                to="/"
                className="relative group text-white "
              >
                HOME
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="relative group"
              >
                ADD PRODUCTS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/update"
                className="relative group text-white "
              >
                UPDATE
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <button
                onClick={logout}
                className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition text-white "
              >
                LOGOUT
              </button>
              <span className="text-sm italic">
                Welcome, {JSON.parse(auth).name}
              </span>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-6 items-center text-sm font-medium">
            <li>
              <Link
                to="/signup"
                className="relative group text-white "
              >
                SIGN UP
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="relative group text-white border-none"
              >
                LOGIN
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
