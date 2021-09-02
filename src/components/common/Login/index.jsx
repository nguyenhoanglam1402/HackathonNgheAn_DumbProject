import { React } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./style.css";

const login = () => {
  return (
    <div>
      <div className="login-container">
        <h1>Đăng nhập để tiếp tục</h1>
        <div className="form-login-component">
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Tên đăng nhập"
            required
          />
          <input type="password" id="password" placeholder="Mật khẩu" />
          <div className="remember-me-block">
            <div className="checkbox">
              <input
                type="checkbox"
                name="remember"
                id="remember-me-checkbox"
                title="Remember me"
              />
              <label for="remember" id="lable-checkbox">
                Ghi nhớ tài khoản
              </label>
            </div>
            <Router>
              <Link className="forget-link" to="#">
                Quên mật khẩu?
              </Link>
            </Router>
          </div>
        </div>
        <button className="btn btn-login">Đăng nhập</button>
      </div>
      <p className="watermark">Made by BestOrNothing Team</p>
    </div>
  );
};

export default login;
