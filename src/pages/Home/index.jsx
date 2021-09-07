import { CarouselComponent } from "components/landing";
import Cards from "components/landing/Cards";
import { React } from "react";
import { NavigaionBar, FooterComponent } from "components/common";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent/>
      <Cards />
      <FooterComponent/>
    </div>
  );
};

export default HomePage;
