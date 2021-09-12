import { ProductRegister } from "components/landing";
import { NavigaionBar } from "components/common";
import React from "react";
import "./style.css";

const ProductRegisterPage = () => {
  return (
    <div>
      <NavigaionBar />
      <div className="product-register-page">
        <ProductRegister />
      </div>
    </div>
  );
};

export default ProductRegisterPage;
