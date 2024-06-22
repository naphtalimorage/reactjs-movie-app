import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FilmDetails.css";
// import MovieDetailsRating from "./MovieDetailsRating";

const FilmDetails = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const { filmId, filmtype } = useParams();
  const { film } = useParams();
  const [movie, setMovie] = useState(null);
 
 
  useEffect(() => { 
    let type;
  
    if(filmtype === "movie") {
      type = "movie"
    }else {
      type = "tv"
    }

    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${filmId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [filmId , filmtype]);
  
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div id="title">
        <h1>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h1>
      </div>
      <div id="rating">
        <h3>Rating score</h3>
        <div className="rate-img">
          {/* <MovieDetailsRating
            percentage={Math.round(movie.vote_average * 10)}
          /> */}
        </div>
      </div>
      <div id="overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
      <div id="date">
        <h3>Release Date</h3>
        <h4>{movie.release_date}</h4>
      </div>
    <div className="trailor-btn">
        <button>Play Trailor</button>
    </div>

    </div>
  );
};

export default FilmDetails;





