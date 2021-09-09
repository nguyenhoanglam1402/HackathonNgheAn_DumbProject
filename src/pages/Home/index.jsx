import { CarouselComponent, Cards, MapComponent } from "components/landing";
import { React } from "react";
import { NavigaionBar, FooterComponent } from "components/common";
import { Posts } from "components/landing";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent />
      <Cards />
      <Posts/>
      <MapComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
