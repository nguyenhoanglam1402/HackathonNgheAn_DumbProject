import { React } from "react";
import logo from "assets/icons/logo.png";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import defaultAvatar from "assets/images/avatar.png";

const NavigaionBar = () => {
  const store = useSelector((store) => store.user);

  return (
    <nav>
      <div className="navbar">
        <div className="logo-brand">
          <img className="logo-brand-image" src={logo} alt={logo} />
        </div>
        <div className="nav-menu-group">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Tìm kiếm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product-creator">
                Đăng bài
              </Link>
            </li>
          </ul>
        </div>
        {store.uid !== "" ? (
          <div className="sign-in-block">
            <div className="avatar-block">
              <img
                className="user-avatar"
                src={defaultAvatar}
                alt={defaultAvatar}
              />
              <div className="username-block">
                <p className="username">{store.username}</p>
              </div>
            </div>
            <div></div>
          </div>
        ) : (
          <div className="sign-in-block">
            <div className="login-button-block">
              <Link to="login" className="sign-in btn">
                Đăng nhập
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigaionBar;
