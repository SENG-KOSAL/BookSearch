import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Navbar from "./Components/Navbar";
import Feartured from "./Feartured/Feartured";
import Arrivals from "./Arrivals/Arrivals";
import Reviews from "./reviews/reviews";
import Blogs from "./Blogs/Blogs";
import Home1 from "./Home/Home";

import Booklist from "./BookSearch/BookList/BookList";
import BookDetails from "./BookSearch/BookDetails/BookDetails";
import { AppProvider } from "./BookSearch/context";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div>
      <AppProvider>
      <Router>
        
        <Main />
        <Routes>
          
          
          <Route path="/feartured" element={<Feartured />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book" element={<Booklist />}  />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </AppProvider>
       
      </div>
    </>
  );
}

export default App;
{/* <Route path="/book" element={<Booklist />} />
          <Route path="/book/:id" element={<BookDetails />} /> */}