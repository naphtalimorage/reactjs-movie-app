import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           
        autoplaySpeed: 2000,       
        pauseOnHover: true,       
        cssEase: 'linear'          
    };

    const images = [
        { src: "movie1.png", alt: "movie1" },
        { src: "movie2.png", alt: "movie2" },
        { src: "movie3.png", alt: "movie3" },
        { src: "movie4.png", alt: "movie4" },
        { src: "movie5.png", alt: "movie5" }
    ];

    const imageStyle = {
      width: '100vh',
      height: '500px',
      objectfit: 'cover', 
      margin: '20px' ,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img style={imageStyle} src={image.src} alt={image.alt} onError={(e) => e.target.src = 'fallback-image.jpeg'} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
