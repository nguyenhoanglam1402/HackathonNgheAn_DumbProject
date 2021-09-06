import { CarouselComponent } from "components/landing";
import Cards from "components/landing/Cards";
import { React } from "react";
import { NavigaionBar } from "../../components/common";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent/>
      <Cards />
    </div>
  );
};

export default HomePage;
