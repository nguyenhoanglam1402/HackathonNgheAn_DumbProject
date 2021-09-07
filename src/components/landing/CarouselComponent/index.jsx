import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";
import SlideItems from "./SlideItems";
import pic1 from "assets/images/slide1.jpg";
import pic2 from "assets/images/slide2.png";
import pic3 from "assets/images/slide3.png";

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
  };
  const [list, setList] = useState([
    {
      picture: pic1,
      description:
        "Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán",
    },
    {
      picture: pic2,
      description:
        "Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán",
    },
    {
      picture: pic3,
      description:
        "Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn lựu không hạt ngon như gái 18 muốn bán",
    },
  ]);
  return (
    <div className="slide-container">
      <Slider {...settings}>
          {list.map((item,index)=>
            <SlideItems picture={item.picture} description={item.description}/>
          )}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
