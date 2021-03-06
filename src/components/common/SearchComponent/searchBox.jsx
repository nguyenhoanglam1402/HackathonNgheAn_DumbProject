import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./style.css";                    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
  SearchBox.propTypes = {
    onSubmit: PropTypes.func,
  };
  SearchBox.defaultProps = {
    onSubmit: null,
  };
  const { onSubmit } = props;
  const [searchItem, setSearchItem] = useState("");
  const collecting = useRef(null);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchItem(value);
    if (!onSubmit) return;
    e.preventDefault();
    if (collecting.current) {
      clearTimeout(collecting.current);
    }

    collecting.current = setTimeout(() => {
      const formValue = {
        searchItem: value,
      };
      onSubmit(formValue)
    }, 350);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="search-box">
      <h1 className="title-search green-tea">
        Tìm kiếm sản phẩm trên bản đồ
        <FontAwesomeIcon className="title-icon" icon={faSearchLocation} />
      </h1>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={searchItem}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </form>
  );
};

export default SearchBox;
