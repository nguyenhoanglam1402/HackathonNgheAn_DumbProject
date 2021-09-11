import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./style.css"
const SearchBox = (props) => {
  SearchBox.propTypes = {
    onSubmit: PropTypes.func,
  };
  SearchBox.defaultProps = {
    onSubmit: null,
  };
  const { onSubmit } = props;
  const [searchItem, setSearchItem] = useState([]);
  const collecting = useRef(null);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchItem(value);
    if (!onSubmit) return;

    if (collecting.current) {
      clearTimeout(collecting.current);
    }

    collecting.current = setTimeout(() => {
      const formValue = {
        searchItem: value,
      };
      onSubmit(formValue);
    }, 350);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={searchItem}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBox;
