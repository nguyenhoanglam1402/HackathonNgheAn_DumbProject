import { CarouselComponent, Cards,MapComponent } from "components/landing";
import { React } from "react";
import { NavigaionBar, FooterComponent } from "components/common";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavigaionBar />
      <CarouselComponent />
      <Cards />
      <MapComponent 
        googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80vh`,width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
