import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import SlideItem from "./slide-item";

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
    csssEase: "linear",
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slide-container">
      <Slider {...settings}>
        <SlideItem description="Nông dân Bùi Thị Minh Nguyệt đang có 1 tấn Dưa hấu không hạt ngon như gái 18 muốn bán. Sản phẩm đang ở chuẩn Flite 4" />
        <SlideItem description="Nông dân Võ Ngọc Thành vừa đạt danh hiệu chăn rau sạch chuẩn Flite 5!" />
        <SlideItem description="Tập đoàn đa quốc gia Nguyễn Lâm đang có nhu cầu thu mua rau sạch chuẩn Flite 5!" />
        <SlideItem description="Thương lái Khánh Nguyên đang cần 500 tấn ngũ cốc đạt chuẩn Flite 3" />
      </Slider>
    </div>
  );
};

export default CarouselComponent;
