import React, { useState, useEffect } from "react";
import SearchBox from "./searchBox";
import { fetchPosts } from "api/services";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  Search.propTypes = {
    onSubmit: PropTypes.func,
  };
  Search.defaultProps = {
    onSubmit: null,
  };
  const { onSubmit } = props;
  const [product, setProduct] = useState([]);
  //fetch data
  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        if (product.length === 0) {
          const response = await fetchPosts();
          await setProduct(response);
        }
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      }
    };
    fetchDataSearch();
  }, [product]);
  console.log("PRODUCT", product);
  //handlechanging
  const handleChanging = (newFilters,e) => {
    console.log("Item: ", newFilters.searchItem);
    const results = product.filter((item) =>(
        item.productName.toLowerCase().includes(newFilters.searchItem.toLowerCase())
      ));
    console.log("Result filter: ",results);
    if (newFilters.searchItem.length === 0) {
      onSubmit([]);
    } else {
      onSubmit(results);
    }
  };
  return (
    <div>
      <h1 className="title-search green-tea">
        {props.title}
        <FontAwesomeIcon className="title-icon" icon={props.fa} />
      </h1>
      <SearchBox onSubmit={handleChanging} />
    </div>
  );
};

export default Search;
