import { React } from "react";
import "./style.css";
import image from "assets/images/bgr_login.jpg";
import { useLocation } from "react-router-dom";
import { LoginComponent, RegisterComponent } from "components/common";

const LoginPage = (_) => {
  const state = useLocation();
  return (
    <div className="column-container">
      <div className="row-container">
        <div className="form">
          <div className="form-login">
            <div className="image-block">
              <img className="image-login" src={image} alt="" />
            </div>
            <div className="content">
              {state.pathname === "/login" ? (
                <LoginComponent />
              ) : (
                <RegisterComponent />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
