import { CarouselComponent, Cards, MapComponent } from "components/landing";
import { React } from "react";
import { FooterComponent } from "components/common";
import { Posts } from "components/landing";

const HomePage = () => {
  return (
    <div className="home-container">
      <CarouselComponent />
      <Cards title="Nông sản hiện có"/>
      <Posts title="Bài đăng nổi bật"/>
      <MapComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
