import * as React from "react";
import "./style.css";
const Info = (props) => {
  const { info } = props;
  const author = `${info.author}`;
  const content = `${info.content}`;
  const product = `${info.productName}`;
  const price = `${info.price}`;
  return (
    <div className="infor-container">
      <div className="infor-author">{author}</div>
      <div className="content-container">
        <div className="infor-product">Sản phẩm: {product}</div>
        <div className="infor-content">Mô tả: {content}</div>
      </div>
      <div className="infor-price">
        Giá ước lượng: {price} vnd
        <br /> <span>*Có thể thương lượng*</span>
      </div>
    </div>
  );
};

export default Info;
