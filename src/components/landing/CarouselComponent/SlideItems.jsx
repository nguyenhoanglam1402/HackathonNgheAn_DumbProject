import React from "react";
import { Link } from "react-router-dom";

const SlideItems = (props) => {
  return (
    <div className="slides">
      <div className="slide-content">
        <div className="text">{props.description}</div>
        <button className="infor-link">
          <Link to="/#" className="link">
            Thông tin chi tiết tại đây
          </Link>
        </button>
      </div>
      <img className="slide" src={props.picture} alt={props.picture} />
    </div>
  );
};

export default SlideItems;
