import { CarouselComponent } from "components/landing";
import { React } from "react";
import { NavigaionBar } from "../../components/common";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent/>
    </div>
  );
};

export default HomePage;
