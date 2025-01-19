import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <nav className=" w-full bg-orange-500 text-white   top-0 left-0 z-10  sticky flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink smooth to="/#home" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink smooth to="/#feartured" className="hover:text-gray-200">
            Featured
          </NavLink>
          <NavLink smooth to="/#arrivals" className="hover:text-gray-200">
            Arrivals
          </NavLink>
          <NavLink smooth to="/#reviews" className="hover:text-gray-200">
            Reviews
          </NavLink>



          <NavLink smooth to="/#blogs" className="hover:text-gray-200">
            Blog
          </NavLink>

          
        </div>




        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
