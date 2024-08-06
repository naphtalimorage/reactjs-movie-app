// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Carousel.css';

// const Carousel = ({movies}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//       };

//   return (
//     <div className='carousel-container'>
//       <Slider {...settings}>
//         {movies.slice(0,5).map(movie => {
//             return (
//               <div  key={movie.id} className="movieImage">
//               <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
//               </div>
//             );
//         })}

//       </Slider>
//     </div>
//   )
// }

// export default Carousel;

import React from "react";
import "./Carousel.css";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className= "search-bar"> 
      <SearchBar/>
      </div>
    </div>
  );
};

export default Carousel;
