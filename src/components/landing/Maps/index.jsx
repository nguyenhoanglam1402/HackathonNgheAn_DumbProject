import React, {useState} from 'react';
import InitMap from './initMap';
import './style.css';
import { SearchComponent } from 'components/common';

const MapComponent = (props) => {
  const [searchData , setSearchData] = useState([]);
  const handleLocation = (newSearchData)=>{
    setSearchData(newSearchData);
  }
  return (
    <div className="map-container">
      <SearchComponent onSubmit={handleLocation} />
      <InitMap search = {searchData}/>
    </div>
  );
};

export default MapComponent;
