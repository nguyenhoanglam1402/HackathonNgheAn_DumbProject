import React from 'react';
import InitMap from './initMap';
import './style.css';

const MapComponent = (props) => {
  return (
    <div className="map-container">
      <InitMap location = {props.location}/>
    </div>
  );
};

export default MapComponent;
