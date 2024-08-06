import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
const NavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">StreamHub</div>
      <ul className="navbar-links">
        <li
          className={currentPage === "movies" ? "active" : ""}
           onClick={() => {
            setCurrentPage("movies");
          }}
        >
          Movies
        </li> 
        <li
          className={currentPage === "tvshows" ? "active" : ""}
          onClick={() => {
            setCurrentPage("tvshows");
          }}
        >
          Tv Shows
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
