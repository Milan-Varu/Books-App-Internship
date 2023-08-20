import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";


const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1 className="title">Welcome to Our Book Store</h1>
        <p className="subtitle">Explore a world of knowledge and imagination.</p>
      </header>
     
      <section className="cta">
        <h2 className="cta-title">Browse the Books to Read</h2>
        <p className="cta-subtitle">Explore our wide selection of books in various genres.</p>
        <Link to="/Login" className="cta-button">
          Browse Books
        </Link>
      </section>
    </div>
  );
};






export default Home;
