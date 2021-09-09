import * as React from 'react';
import { useState } from 'react';
import ReactMapGL,
    {Popup,
    GeolocateControl} from 'react-map-gl';
import Pins from './pins';
import Info from './info';

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
const InitMap = ()=> {
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 800,
    latitude: 16.0545,
    longitude: 108.0717,
    zoom: 11
  });
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        <GeolocateControl 
            positionOptions={{
                enableHighAccuracy: true,
            }}
            trackUserLocation
            auto
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