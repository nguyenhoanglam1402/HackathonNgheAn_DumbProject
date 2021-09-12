import React from "react";
import { CarouselComponent,Cards } from "components/landing";
import { FooterComponent } from "components/common";
import Card from "components/landing/Cards/card";
import "./style.css";
import cachua from 'assets/imageFruit/ca-chua.png';
import cam from 'assets/imageFruit/cam.png'
const fruit = [
  {
    name: "Cà chua",
    image: cachua,
  },
  {
    name: "Cam sành",
    image: cam,
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
