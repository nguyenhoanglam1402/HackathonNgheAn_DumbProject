import React from "react";
import { CarouselComponent } from "components/landing";
import { FooterComponent } from "components/common";
import { Cards } from "components/landing";
import Card from "components/landing/Cards/card";
import "./style.css";
const fruit = [
  {
    name: "Cà chua",
    image: "",
  },
  {
    name: "Cam sành",
    image: "",
  },
  {
    name: "Dưa hấu",
    image: "",
  },
  {
    name: "Dâu tây",
    image: "",
  },
  {
    name: "Nho",
    image: "",
  },
];
const ProductPage = () => {
  return (
    <div className="product-container">
      <CarouselComponent />
      <div className="product-cards">
        <Cards title="Tổng các loại sản phẩm" />
      </div>
      <h1 className="product-cat-title">Trái cây</h1>
      <div className="product-cat-cards">
        {fruit.map((data, index) => (
          <Card name={data.name} image={data.image} key={index} />
        ))}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProductPage;
