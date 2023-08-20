// BookDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";
import "./bookdetails.css";
import StarRating from "./StarRating"; // Adjust the import path based on your project structure

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details-container">
      <div className="book-image-container">
        <img src={book?.image_url} alt="#" className="book-image" />
      </div>
      <div className="book-details">
        <h2 className="book-title">{book?.title}</h2>
        <div className="card-section">
          <h2 className="card-title">Description</h2>
          <p>{book?.description}</p>
        </div>
        <div className="card-section">
          <h2 className="card-title">Authors</h2>
          <p>{book?.authors}</p>
        </div>
        <div className="card-section">
          <h2 className="card-title">Genres</h2>
          <p>{book?.genres}</p>
        </div>
        <div className="card-section">
          <h2 className="card-title">Book Rating</h2>
         <p> <StarRating rating={book?.rating} /></p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
