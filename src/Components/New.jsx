import React from "react";
import Test from "./3D/test"
const App = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50 min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-orange-500 text-xl font-bold mb-4">Deal Of The Day</h2>
        <h1 className="text-gray-800 text-4xl font-bold mb-4">Up to 50% Off</h1>
        <p className="text-gray-600 text-lg mb-6">
          Good News For You, If You Buy Any Book On Saturday And Sunday You Will Get 50% Off And
          Also You Will Get Free Delivery.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
          Shop Now
        </button>
      </div>

      
      {/* <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/book3.png" // Replace with your image URL
          alt="Book Promo"
          className="w-full max-w-xs md:max-w-md"
        />
      </div> */}
      <Test/>
    </div>
  );
};

export default App;
