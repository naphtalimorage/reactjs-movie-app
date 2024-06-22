import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FilmDetails.css";
// import MovieDetailsRating from "./MovieDetailsRating";

const FilmDetails = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const { filmId, filmtype } = useParams();
  const [movie, setMovie] = useState(null);
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => { 
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${filmtype}/${filmId}?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(filmtype === "movie") {
          setMovie(data);
        } else {
          setSeries(data)
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDetails();

  }, [filmId,filmtype]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (filmtype === "movie" && !movie) {
    return <div>Loading...</div>;
  }

  if (filmtype === "tv" && !series) {
    return <div>Loading...</div>;
  }

  return (
      filmtype === "movie" ? <MovieDetails movie = {movie}/> : <TvshowDetails series = {series}/>    
  );
};


function MovieDetails({movie}){
  return(
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
        <button>Play Trailer</button>
      </div>
    </div>
  );
}
 
function TvshowDetails({series}){
  return(
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
        alt={series.name}
      />
      <div id="title">
        <h1>
          {series.name} ({new Date(series.first_air_date).getFullYear()})
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
        <p>{series.overview}</p>
      </div>
      <div id="date">
        <h3>Release Date</h3>
        <h4>{series.first_air_date}</h4>
      </div>
      <div className="trailor-btn">
        <button>Play Trailer</button>
      </div>
    </div>
  );
}
export default FilmDetails;
