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
        <SlideItem description="Nông dân Võ Ngọc Thành đang có 1 tấn Dưa hấu không hạt. Được trồng theo quy trình khép kín từ khâu gieo trồng đến khâu thu hoạch. Đảm bảo không sử dụng dư lượng thuốc bảo vệ thực vật" />
        <SlideItem description="Nông dân Bùi Thị Minh Nguyệt đã thu hoạch 20 tấn hành tây hữu cơ. Hành tây củ to vừa, lớp vỏ ngoài mỏng, tương đối đều màu, bẹ hành chắc, thơm" />
        <SlideItem description="Tập đoàn đa quốc gia Nguyễn Lâm đang có nhu cầu thu mua rau sạch chuẩn VietGap" />
        <SlideItem description="Thương lái Khánh Nguyên đang cần 500 tấn ngũ cốc đạt chuẩn Flite 3" />
      </Slider>
    </div>
  );
};

export default CarouselComponent;
