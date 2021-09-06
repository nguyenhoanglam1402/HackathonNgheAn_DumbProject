import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./Style.css"
import slides from './images';

const CarouselComponent = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 800,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    return (
        <div className="slide-container">            
            <Slider {...settings}>
                <div className="slides">
                    <img className="slide" src={slides.img1}/>
                </div>
                <div className="slides">
                    <img className="slide" src={slides.img2}/>
                </div>
                <div className="slides">
                    <img className="slide" src={slides.img3}/>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselComponent
