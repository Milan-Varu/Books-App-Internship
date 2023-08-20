import React, { useState, useEffect } from "react";
import { API } from "../API.js";
import "../book/booklist.css";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Calculate the index of the first and last book on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="book-list">
      {currentBooks.map((book) => (   // Changed 'books' to 'currentBooks'
        <div key={book.id} className="Book">
          <div>
            <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
          </div>
          <div>
            <h3>{book.title}</h3>
          </div>

          {/* favorites */}
          <div>
            {favoritesChecker(book.id) ? (
              <button type="button" onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button type="button" onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}

      {/* pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }).map((item, index) => (
          <span
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
        }
export default Booklist;
