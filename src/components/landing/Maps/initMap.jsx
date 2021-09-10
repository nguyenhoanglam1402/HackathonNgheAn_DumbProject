import React, { useState, useEffect } from "react";
import ReactMapGL, { Popup, GeolocateControl } from "react-map-gl";
import Pins from "./pins";
import Info from "./info";
import "mapbox-gl/dist/mapbox-gl.css";
import MapStyle from "StyleMap/map-style.json";
import { fetchPosts } from "api/services";
import axios from "axios";

//custom cursor
const getCursor = ({ isHovering, isDragging }) => {
  return isDragging ? "grabbing" : isHovering ? "pointer" : "default";
};

const InitMap = () => {
  const [viewport, setViewport] = useState({
    height: 650,
    latitude: 16.0545,
    longitude: 108.0717,
    zoom: 8,
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const [addressMarker, setAddressMarker] = useState([]);

//fetchLocation
  const fetchLocation = async (addr) => {
    const promises = addr.map(async (data) => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.location}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}`
        );
        if (!response) return null;

        const detailAddr = {
          ...data,
          latitude: response.data.features[0].center[1],
          longitude: response.data.features[0].center[0],
        };
        setAddressMarker((prevState) => [...prevState, detailAddr]);
        return await Promise.all(promises);
      } catch (error) {
        console.log(error);
      }
    });
  };

//render Marker
  const renderMarkerAddr = (addreses) => {
    return (
      <Pins data={addreses} onClick={setPopupInfo} sizeZoom={viewport.zoom} />
    );
  };

//fetchdata
  useEffect(() => {
    if (addressMarker.length === 0) {
      fetchPosts().then(async (data) => {
        fetchLocation(data);
      });
    }
  }, [addressMarker.length]);

  //render
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      mapStyle={MapStyle}
      scrollZoom={{
        speed: 5,
        smooth: true,
      }}
      getCursor={getCursor}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        positionOptions={{
          enableHighAccuracy: true,
        }}
        trackUserLocation={false}
        auto={true}
      />
      {addressMarker && renderMarkerAddr(addressMarker)}
      {popupInfo && (
        <Popup
          tipSize={5}
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <Info info={popupInfo} />
        </Popup>
      )}
    </ReactMapGL>
  );
};
export default InitMap;
