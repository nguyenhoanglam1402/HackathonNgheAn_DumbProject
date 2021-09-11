import React, { useState, useEffect } from "react";
import SearchBox from "./searchBox";
import { fetchPosts } from "api/services";
import PropTypes from "prop-types";

const Search = (props) => {
  Search.propTypes={
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
    console.log(">>PRODUCT LIST: ", product);
  }, [product]);

  //handlechanging
  const handleChanging = (newFilters) => {
    console.log("Item: ", newFilters.searchItem);
    const results = product.filter((item) =>
      item.productName.toLowerCase().includes(newFilters.searchItem.toLowerCase())
    );
    setProduct(results);
    console.log("RESULT: ", results);
    results.map((data)=>(
        onSubmit(data.location)
    ))
  };
  return (
    <div>
      <SearchBox onSubmit={handleChanging} />
    </div>
  );
};

export default Search;