import React from "react";
import logo from "assets/icons/logowhite.png";
import "./style.css";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-row-above">
        <div className="footer-logo-container">
          <img className="logo-footer-image" src={logo} alt="" />
        </div>
        <div className="footer-about-container">
          <h2>Giới thiệu</h2>
          <p class="text-about">
            Flite được tạo ra với mục đích kết nối nhanh chóng giữa cung và cầu
            cho ngành nông nghiệp. Hân hạnh được phục vụ cho nhu cầu của bạn.
          </p>
        </div>
        <div className="footer-product-container">
          <h2>Sản phẩm</h2>
          <li class="rice-footer">
            <Link to={{ pathname: `/product/rice` }}>Gạo</Link>
          </li>
          <li class="rice-footer">
            <Link to={{ pathname: `/product/fruit` }}>Trái cây</Link>
          </li>
          <li class="rice-footer">
            <Link to={{ pathname: `/product/cafe` }}>Cà phê</Link>
          </li>
          <li class="rice-footer">
            <Link to={{ pathname: `/product/vegetable` }}>Rau củ</Link>
          </li>
          <li class="rice-footer">
            <Link to={{ pathname: `/product/crereals` }}>Ngũ côc</Link>
          </li>
        </div>
        <div className="footer-contact-container">
          <h2>Liên hệ</h2>
          <div class="textwidget">
            22 Cách mạng tháng 8, Đà Nẵng
            <br />
            <a href="mailto:farmerlite@gmail.com">farmerlite@gmail.com</a>
            <br />
            Làm việc 24/7
            <br />
            0915012166
          </div>
        </div>
      </div>
      <div className="footer-row-under">
        <div className="footer-contact-container">
          <p>
            &copy; Copyright 2021
            <span class="sitename"> FarmerLite </span>|
            <a href="https://i.imgur.com/NTHTrYH.jpg"> BestRNothing Team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
