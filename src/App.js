import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilmDetails from "./Components/FilmDetails";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import MoviesPage from "./Components/MoviesPage";
import TvShowsPage from "./Components/TvShowsPage";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("movies");
  
  return (
    <div className="app-container">
      {/* <SearchBar /> */}
      <NavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
        <Routes>
          <Route path="/"    element={currentPage === "movies" ? (<MoviesPage/> ) : (<TvShowsPage/>)} />
          <Route path="/FilmDetails/:filmId/:filmtype" element={<FilmDetails />} />
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
