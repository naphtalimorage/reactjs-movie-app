import React from "react";
import './MovieRow.css';
import Film from "./Film";

const TvShowsRow = ({ category, tvshows }) => {
  return (
    <div className="movie-row-container">
      <h2>{category}</h2>
      <div className='movie-row'>
        {tvshows.map((tvshow) => (
          <div  className='movie-item' key={tvshow.id}>
            <Film  filmId={tvshow.id} filmTitle={tvshow.name} rating={tvshow.vote_average} releaseDate={tvshow.first_air_date} posterUrl={tvshow.poster_path} alt={tvshow.name} filmtype={"tv"}/>
          </div> 
          
          ))}
        </div>
      
    </div>
  );
};

export default TvShowsRow;
