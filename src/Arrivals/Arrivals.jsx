import { Arrival } from "../lib/data";
import React, { useRef } from "react";

const Arrivals = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100  py-16">
      <h1 className="text-center text-3xl font-bold mb-6">New Arrivals</h1>

      {/* Carousel Section */}
      <div className="relative w-full   ">
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          onClick={scrollLeft}
        >
          ◀
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 px-4 md:px-10 overflow-hidden scroll-smooth no-scrollbar "
        >
          {Arrival.map((book) => (
            <div
              key={book.id}
              className="min-w-[calc(33.33%-1rem)] max-w-[calc(33.33%-1rem)] bg-white shadow-md rounded-md p-4 flex-shrink-0 "
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-auto mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-500 mb-2">{book.author}</p>
              <div className="text-orange-500 mb-2">
                {"★".repeat(Math.floor(book.rating))}
                {"☆".repeat(5 - Math.floor(book.rating))}
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-800">
                  ${book.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400 ml-2">
                  ${book.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Arrivals;
