import React from "react";
// import Navbar from "../Components/Navbar";
import BookList from "../BookSearch/BookList/BookList";
import Feartured from "../Feartured/Feartured";
import Arrivals from "../Arrivals/Arrivals";
import Reviews from "../reviews/reviews";
import Blogs from "../Blogs/Blogs";
import Home1 from "../Home/Home";
import Home0 from "../Home/Home0";
import New from "../Components/New";
import Subscribe from "../Components/Subscribe";
// import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import BookList from "../BookSearch/BookList/BookList";
const Main = () => {
  return (
    <>
      <Header />

      <section id="home">
        <Home1 />

        <Home0 />
      </section>

      {/* <BookList/> */}

   

      <section id="feartured">
        <Feartured />
      </section>

      <Subscribe />

      <section id="arrivals">
        <Arrivals />
      </section>
      <New />
      <section id="reviews">
        <Reviews />
      </section>
      <section id="blogs">
        <Blogs />
      </section>

      
    </>
  );
};

export default Main;
