import React from "react";
import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import FilmDetails from "./Components/FilmDetails";
import NavBar from "./Components/NavBar";
import MoviesPage from "./Components/MoviesPage";
import TvShowsPage from "./Components/TvShowsPage";
import { useState } from "react";
import SearchResults from "./Components/SearchResults";

const App = () => {
  const [currentPage, setCurrentPage] = useState("movies");
  const location = useLocation();
  const showNavBar = !location.pathname.includes("/FilmDetails");

  return (
    <div className="app-container">
      {showNavBar && <NavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />}
        <Routes>
          <Route path="/"    element={currentPage === "movies" ? (<MoviesPage/> ) : (<TvShowsPage/>)} />
          <Route path="/FilmDetails/:filmId/:filmtype" element={<FilmDetails />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
    </div>
  );
};

export default App;

//  val currentTab = useState(mov)

//  Mov/Srs
//  setCurr(mo)
//  setCurr(srs)

//  if(currentTab == mov) {
//   <MovPg></MovPg>
//  } else {
//     <TvS></TvS>
//  }
