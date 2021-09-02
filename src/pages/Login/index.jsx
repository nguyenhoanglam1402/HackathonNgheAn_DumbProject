import { React } from "react";
import "./style.css";
import image from "../../assets/images/Login.png";
<<<<<<< HEAD
import { LoginComponent } from "../../components/common";
=======
import {RegisterComponent } from "../../components/common";

>>>>>>> 6826fa6... update(RegisterComponent): update logic for register

const loginPage = () => {
  return (
    <div className="column-container">
      <div className="row-container">
        <div className="form">
          <div className="form-login">
            <div className="image-block">
              <img className="image-login" src={image} alt="" />
            </div>
            <div className="content">
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
