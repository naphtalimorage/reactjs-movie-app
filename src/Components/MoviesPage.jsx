import React from "react";
import MovieRow from "./MovieRow";
import "./MoviesPage.css";
import Carousel from "./Carousel";
import useFetch from "./useFetchMovies";


const MoviesPage = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint1= "now_playing";
  const endpoint2= "popular";
  const endpoint3= "top_rated";
  const endpoint4= "upcoming";

  const {data: nowPlayingMovies,error: error1,loading: loading1}=useFetch(endpoint1,API_KEY);
  const {data: popularMovies,error: error2,loading:loading2}= useFetch(endpoint2,API_KEY); 
  const {data: topRatedMovies,error:error3,loading:loading3}=useFetch(endpoint3,API_KEY); 
  const {data: upcomingMovies,error:error4,loading:loading4}=useFetch(endpoint4,API_KEY);
  if(loading1 || loading2 || loading3 ||loading4) return <div>Loading...</div>
  if(error1 || error2 || error3 || error4) return <div>Error: {error1},{error2},{error3},{error4}</div>

  const nowPlayingCategory = "Now Playing";
  const PopularCategory = "Popular";
  const TopRatedCategory = "Top Rated";
  const UpcomingCategory = "Upcoming";

  return (
    <div>
      <Carousel movies={nowPlayingMovies} />
      
      <div className="movie-category1">
        <MovieRow category={nowPlayingCategory} movies={nowPlayingMovies} />
      </div>

      <div className="movie-category2">
        <MovieRow category={PopularCategory} movies={popularMovies} />
      </div> 

      <div className="movie-category3">
        <MovieRow category={TopRatedCategory} movies={topRatedMovies} />
      </div>

      <div className="movie-category4">
        <MovieRow category={UpcomingCategory} movies={upcomingMovies} />
      </div> 
    </div>
  );
};

export default MoviesPage;
