import { CarouselComponent, Cards, MapComponent, Posts  } from "components/landing";
import React from "react";
import { NavigaionBar, FooterComponent } from "components/common";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent />
      <Cards />
      <Posts />
      <MapComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
