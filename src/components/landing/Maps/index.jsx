import React, {useState} from 'react';
import InitMap from './initMap';
import './style.css';
import { SearchComponent } from 'components/common';
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const MapComponent = (props) => {
  const [searchData , setSearchData] = useState([]);
  const handleLocation = (newSearchData)=>{
    setSearchData(newSearchData);
  }
  return (
    <div className="map-container">
      <SearchComponent onSubmit={handleLocation} title="Tìm kiếm sản phẩm trên bản đồ" fa={faSearchLocation}/>
      <InitMap search = {searchData}/>
    </div>
  );
};

export default MapComponent;
