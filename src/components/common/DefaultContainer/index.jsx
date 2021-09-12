import React from "react";
import { NavigaionBar } from "components/common";
import { Route } from "react-router-dom";
import { MapComponent } from "components/landing";

const HomePage = React.lazy(() => import("pages/Home/index"));
const ProductRegisterPage = React.lazy(() =>
  import("pages/ProductRegister/index")
);

const DefaultContainer = () => {
  return (
    <div className="container">
      <NavigaionBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/map" component={MapComponent} />
      <Route path="/product-creator" component={ProductRegisterPage} />
    </div>
  );
};

export default DefaultContainer;
