import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between bg-orange-500 p-8 w-full text-white shadow-md top-10 left-0 z-10">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left text-white max-w-md">
            <h1 className="text-5xl font-bold mb-4">Up To 75% Off</h1>
            <p className="text-lg mb-6">
              There is good news for all of you! If you buy any book from our
              website, you will get a 75% discount and free delivery.
            </p>
            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded hover:bg-gray-200">
              Shop Now
            </button>
          </div>

          {/* Right Side: Image Section */}
          <div className="mt-8 md:mt-0 relative">
            {/* Books Container */}
            <div className="flex justify-center items-end space-x-4 sm:space-x-6 relative z-10">
              {/* Book Images */}
              <img
                src="/images/book-2.png"
                alt="Book 1"
                className="w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <img
                src="/images/book-3.png"
                alt="Book 2"
                className="w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <img
                src="/images/book3.png"
                alt="Book 3"
                className="w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Stand Image */}
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
