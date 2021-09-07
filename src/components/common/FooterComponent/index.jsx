import React from "react";
import logo from "assets/icons/logowhite.png";
import "./style.css";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-row-above">
        <div className="footer-logo-container">
          <img className="logo-footer-image" src={logo} alt="" />
        </div>
        <div className="footer-about-container">
          <h2>Description</h2>
          <p>Lorem isum</p>
        </div>
        <div className="footer-product-container">
          <h2>Product</h2>
          <p>Lorem isum</p>
        </div>
        <div className="footer-contact-container">
          <h2>Contact</h2>
          <p>Lorem isum</p>
        </div>
      </div>
      <div className="footer-row-under">
        <div className="footer-contact-container">
          <h2>Contact</h2>
          <p>Lorem isum</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
