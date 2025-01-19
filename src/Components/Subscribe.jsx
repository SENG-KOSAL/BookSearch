import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[url('/images/letter-bg.jpg')] h-80 bg-cover bg-center animate-bgZoom flex justify-center items-center">
      <div className="bg-opacity-50 p-8 rounded-lg text-center space-y-4">
        <label className="text-white text-2xl font-semibold block">
          Subscribe for the latest updates
        </label>
        <div className="flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md w-72 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="text-white text-xl font-semibold px-6 py-3 bg-orange-500 rounded-full shadow-lg transition transform hover:scale-105 hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
