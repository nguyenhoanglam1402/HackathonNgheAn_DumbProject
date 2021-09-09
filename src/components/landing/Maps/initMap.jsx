import * as React from 'react';
import { useState } from 'react';
import ReactMapGL,
    {Popup,
    GeolocateControl} from 'react-map-gl';
import Pins from './pins';
import Info from './info';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapStyle from './map-style.json';
const Farmer=[
    {
        id: "123",
        name: "Chó Nguyệt",           
        latitude: 16.0545,                
        longitude: 108.0717,
    },
    {
        id: "234",
        name: "Lâm",            
        latitude: 14.0545,                
        longitude: 109.0717,
    }
]
const getCursor=({isHovering, isDragging})=> {
  return isDragging ? 'grabbing' : isHovering ? 'pointer' : 'default';
}
const InitMap = ()=> {
  const [viewport, setViewport] = useState({
    height: 700,
    latitude: 16.0545,
    longitude: 108.0717,
    zoom: 11
  });
  const [popupInfo, setPopupInfo] = useState(null);
  return (
      <ReactMapGL
      {...viewport}
      width="100%"
      mapStyle={MapStyle}
      getCursor={getCursor}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        <GeolocateControl 
            positionOptions={{
                enableHighAccuracy: true,
            }}
            trackUserLocation={true}
            auto={false}
        />
        <Pins data={Farmer} onClick={setPopupInfo} sizeZoom={viewport.zoom}/>
        { popupInfo && (
              <Popup
                tipSize={5}
                anchor="top"
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
}
export default InitMap;