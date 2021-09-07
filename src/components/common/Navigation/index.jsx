import { React } from "react";
import logo from "assets/icons/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const NavigaionBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo-brand">
          <img className="logo-brand-image" src={logo} alt={logo} />
        </div>
        <div className="nav-menu-group">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Giới thiệu
              </Link>
            </li>
          </ul>
        </div>
        <div className="sign-in-block">
          <Link to="/login" className="sign-in btn">Đăng nhập</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigaionBar;
