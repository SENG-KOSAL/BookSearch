import React, { useRef, useState, useEffect } from "react";
import {
  FaBook,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Header = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <>
      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
  <a href="/#home" className="flex items-center text-3xl font-bold hover:text-yellow-400 transition duration-300">
    <FaBook className="mr-2" />
    AngkorBook
  </a>

  <form className="relative flex items-center w-1/3" onSubmit={handleSubmit}>
    <div className="flex flex-grow items-center bg-white rounded-full px-4 py-2 shadow-inner">
      <input
        type="text"
        className="flex-grow text-sm px-2 py-1 rounded-l-full outline-none text-gray-800 placeholder-gray-500"
        placeholder="Search for books..."
        ref={searchText}
      />
      <button
        type="submit"
        className="text-gray-500 hover:text-gray-700 transition duration-200 text-xl"
      >
        <FaSearch />
      </button>
    </div>
  </form>

  <div className="flex items-center space-x-6">
    <button id="search-btn" className="text-xl hover:text-yellow-400 transition duration-300">
      <FaSearch />
    </button>
    <a href="#" className="text-xl hover:text-yellow-400 transition duration-300">
      <FaHeart />
    </a>
    <a href="#" className="text-xl hover:text-yellow-400 transition duration-300">
      <FaShoppingCart />
    </a>
    <button id="login-btn" className="text-xl hover:text-yellow-400 transition duration-300">
      <FaUser />
    </button>
  </div>
</div>

    </>
  );
};

export default Header;
