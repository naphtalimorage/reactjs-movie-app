import React from "react";
import RatingIndicator from "./RatingIndicator";
import "./Film.css";
import { Link } from "react-router-dom";

const Film = ({ filmId, filmTitle, posterUrl, releaseDate, rating, alt,filmtype }) => {
  return (
    <div className="movie-item">
      <Link to={`/MovieDetails/${filmId}/${filmtype}`}>
        <img src={`https://image.tmdb.org/t/p/w500${posterUrl}`} alt={alt} />
      </Link>
      <h3 id="head1">{filmTitle}</h3>
      <h3 id="head2">{new Date(releaseDate).getFullYear()}</h3>
      {/* <div id="rating">
        <RatingIndicator percentage={Math.round(rating * 10)} />
      </div> */}
    </div>
  );
};

export default Film;
