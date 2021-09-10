import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMapGL, { Popup, GeolocateControl } from "react-map-gl";
import Pins from "./pins";
import Info from "./info";
import "mapbox-gl/dist/mapbox-gl.css";
import MapStyle from "StyleMap/map-style.json";

//custom cursor
const getCursor = ({ isHovering, isDragging }) => {
  return isDragging ? "grabbing" : isHovering ? "pointer" : "default";
};

//data to translate to coordinate
const addressdata = [
  { id: 3, address: "số 15 Điện Biên Phủ thành phố Hồ Chí Minh" },
  { id: 1, address: "số 41 Xuân Hòa 1 quận Thanh Khê thành phố Đà Nẵng" },
  {
    id: 2,
    address: "Số 8 Tôn Thất Thuyết Phường Mỹ Đình 2 Quận Nam Từ Liêm Hà Nội",
  },
];

const InitMap = () => {
  const [viewport, setViewport] = useState({
    height: 650,
    latitude: 16.0545,
    longitude: 108.0717,
    zoom: 4,
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const [addressMarker, setAddressMarker] = useState([]);

  const fetchLocation = async () => {
    const promises = addressdata.map(async (data) => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.address}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}`
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

  const renderMarkerAddr = (addreses) => {
    console.log("addreses", addreses);
    return (
      <Pins data={addreses} onClick={setPopupInfo} sizeZoom={viewport.zoom} />
    );
  };

  useEffect(() => {
    if (addressMarker.length === 0) {
      fetchLocation();
    }
  }, [addressMarker.length]);

  useEffect(() => {
    console.log("addrmarker", addressMarker);
  }, [addressMarker]);

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
        trackUserLocation={true}
        auto={false}
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
