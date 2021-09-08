import React, { useState,useEffect } from 'react';
import {GoogleMap, Marker,withGoogleMap, withScriptjs,} from 'react-google-maps';
import Mark from './mark';
import "./style.css";

const MapComponent = () =>{
  const [center, setCenter] = useState({
          lat: 16.0545,
          lng: 108.0717
        });
  const [zoom,setZoom] = useState(6);
  return(
    <div className="map-container">
        <GoogleMap
           defaultCenter={center}
           defaultZoom={zoom}
         >
         </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(MapComponent));