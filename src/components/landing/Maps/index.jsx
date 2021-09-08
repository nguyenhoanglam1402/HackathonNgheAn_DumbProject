import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Mark from "./mark";

const MapComponent = () => {
  const [center, setCenter] = useState({
    lat: 16.0545,
    lng: 108.0717,
  });
  const [zoom, setZoom] = useState(6);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Mark lat={59.955413} lng={30.337844} checkPoint="Position" />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
