import React, { useState } from "react";
import InitMap from "./initMap";
import './style.css';

const MapComponent = () => {
  return (
    <div className="map-container">
      <InitMap/>
    </div>
  );
};

export default MapComponent;
