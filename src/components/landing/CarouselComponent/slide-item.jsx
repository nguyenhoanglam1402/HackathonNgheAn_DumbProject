import { React } from "react";
import slides from "./images";
import { Link } from "react-router-dom";
import "./style.css";

const SlideItem = (props) => {
  return (
    <div className="slides">
      <div className="slide-content">
        <div className="text">{props.description}</div>
        <div className="button-block">
          <button className="infor-button">
            <Link to="#" className="infor-button-content">
              Thông tin chi tiết
            </Link>
          </button>
        </div>
      </div>
      <img className="slide" src={slides.img1} alt="" />
    </div>
  );
};

export default SlideItem;
