import React from 'react'
import { useGlobalContext } from '../context'
import Book from './Book'
import Loading from "../Loader/Loader";
import coverImg from "../images/cover_not_found.jpg";
//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
      return {
        ...singleBook,
        // removing /works/ to get only id
        id: (singleBook.id).replace("/works/", ""),
        
        cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
      }
    });
  
    if(loading) return <Loading />;
  
    return (
      <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.length > 0 ? (
            booksWithCovers.slice(0, 30).map((item) => (
              <Book key={item.id} {...item} />
            ))
          ) : (
            <p>No books found for the given search.</p> 
          )}
        </div>
      </div>
    </section>
    )
  }
  
  export default BookList