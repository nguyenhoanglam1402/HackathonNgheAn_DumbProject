import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./Style.css"
import { Link } from 'react-router-dom';
import slides from './images';

const CarouselComponent = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        csssEase: "linear",
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    return (
        <div className="slide-container">            
            <Slider {...settings}>
                <div className="slides">
                    <div className="slide-content">
                        <div className = "text">
                            Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán
                        </div>
                        <button className="infor-link">                        
                            <Link to="/#" className="link" >
                                Thông tin chi tiết tại đây
                            </Link>
                        </button>
                    </div>
                    <img className="slide" src={slides.img1}/>
                </div>
                <div className="slides">
                    <div className="slide-content">
                        <div className = "text">
                            Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán
                        </div>
                        <button className="infor-link">                        
                            <Link to="/#" className="link" >
                                Thông tin chi tiết tại đây
                            </Link>
                        </button>
                    </div>
                    <img className="slide" src={slides.img2}/>
                </div>
                <div className="slides">
                    <div className="slide-content">
                        <div className = "text">
                            Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán
                        </div>
                        <button className="infor-link">                        
                            <Link to="/#" className="link" >
                                Thông tin chi tiết tại đây
                            </Link>
                        </button>
                    </div>
                    <img className="slide" src={slides.img3}/>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselComponent
