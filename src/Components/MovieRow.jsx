import React from "react";
import './MovieRow.css';
import Film from "./Film";


const MovieRow = ({ category, movies }) => {
    
  return (
    <div className="movie-row-container">
      <h2>{category}</h2>
      <div className='movie-row'>
        {movies.map((movie) => {
          return (
          <div  className='movie-item' key={movie.id}>
            <Film  filmId={movie.id} filmTitle={movie.title} rating={movie.vote_average} releaseDate={movie.release_date} posterUrl={movie.poster_path} alt={movie.title} filmtype={"movie"}/>
          </div>
          );        
        })};
      </div>
      
    </div>
  );
};

export default MovieRow;
