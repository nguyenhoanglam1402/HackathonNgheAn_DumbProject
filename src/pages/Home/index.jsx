import { CarouselComponent, Cards, MapComponent, Posts  } from "components/landing";
import React, {useState}from "react";
import { NavigaionBar, FooterComponent, SearchComponent } from "components/common";

const HomePage = () => {
  const [location , setLocation] = useState('');
  const handleLocation = (newLocation)=>{
    setLocation(newLocation);
  }
  console.log("Homepage:",location);
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent />
      <Cards />
      <Posts />
      <SearchComponent onSubmit={handleLocation} />
      <MapComponent location = {location}/>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
