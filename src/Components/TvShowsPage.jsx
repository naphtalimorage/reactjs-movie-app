import React from "react";
import "./TvShowsPage.css";
import TvShowsRow from "./TvShowsRow";
import Carousel from "./Carousel";
import useFetch from "./useFetchTvshows";

const TvShowsPage = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint1 = "airing_today";
  const endpoint2 = "on_the_air";
  const endpoint3 = "popular";
  const endpoint4 = "top_rated";

  const {data: airingTodayTvShows,error: error1,loading: loading1}=useFetch(endpoint1,API_KEY);
  const {data: ontheAirTvShows,error: error2,loading:loading2}= useFetch(endpoint2,API_KEY); 
  const {data: popularTvShows,error:error3,loading:loading3}=useFetch(endpoint3,API_KEY); 
  const {data: topratedTvShows,error:error4,loading:loading4}=useFetch(endpoint4,API_KEY);
  if(loading1,loading2,loading3,loading4) return <div>Loading...</div>
  if(error1,error2,error3,error4) return <div>Error: {error1},{error2},{error3},{error4}</div>


  const airingTodayCategory = "Airing Today";
  const ontheAirCategory = "On The Air";
  const popularCategory = "Popular";
  const topratedCategory = "Top Rated";

  return (
    <div>
      <Carousel movies={ontheAirTvShows} />
      <div className="movie-category1">
        <TvShowsRow
          category={airingTodayCategory}
          tvshows={airingTodayTvShows}
        />
      </div>

      <div className="movie-category2">
        <TvShowsRow category={ontheAirCategory} tvshows={ontheAirTvShows} />
      </div>

      <div className="movie-category3">
        <TvShowsRow category={popularCategory} tvshows={popularTvShows} />
      </div>

      <div className="movie-category4">
        <TvShowsRow category={topratedCategory} tvshows={topratedTvShows} />
      </div>
    </div>
  );
};

export default TvShowsPage;
