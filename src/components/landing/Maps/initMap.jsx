import React, { useState, useEffect } from "react";
import ReactMapGL, { Popup, GeolocateControl } from "react-map-gl";
import Pins from "./pins";
import Info from "./info";
import "mapbox-gl/dist/mapbox-gl.css";
import MapStyle from "StyleMap/map-style.json";
import { fetchPosts } from "api/services";
import axios from "axios";
import PropTypes from "prop-types";

//custom cursor
const getCursor = ({ isHovering, isDragging }) => {
  return isDragging ? "grabbing" : isHovering ? "pointer" : "default";
};

const InitMap = (props) => {
  InitMap.propTypes = {
    search: PropTypes.array,
  };
  InitMap.defaultProps = {
    search: [],
  };
  const { search } = props;
  console.log(">>Map:", search);
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
    if (search.length === 0) {
      // if (addressMarker.length === 0)
      fetchPosts().then((data) => {
        fetchLocation(data);
      });
    } else {
      setAddressMarker([]);
      fetchLocation(search);
    }
  }, [search]);
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
        auto={false}
      />
      {addressMarker && renderMarkerAddr(addressMarker)}
      {popupInfo && (
        <Popup
          tipSize={5}
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={setPopupInfo}
          closeButton={false}
        >
          <Info info={popupInfo} />
        </Popup>
      )}
    </ReactMapGL>
  );
};
export default InitMap;
