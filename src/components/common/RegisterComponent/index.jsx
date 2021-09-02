import React from "react";
import "./style.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
const registerComponent = () => {
  return (
    <div className="form-container">
      <form className="form-register" action="">
        <h1 className="form-title-register">Đăng ký</h1>
        {/* Ten nguoi dung */}
        <div className="form-inputs">
          <input
            name="name"
            type="text"
            className="form-input"
            placeholder="Họ và tên"
            required
          />
        </div>

        {/* Ten dang nhap */}
        <div className="form-inputs">
          <input
            name="username"
            type="text"
            className="form-input"
            placeholder="Tên đăng nhập:"
            required
          />
        </div>

        {/* Mat khau */}
        <div className="form-inputs">
          <input
            name="password"
            type="password"
            className="form-input"
            placeholder="Mật khẩu"
            required
          />
        </div>

        {/* Nhap lai mat khau */}
        <div className="form-inputs">
          <input
            name="re-password"
            type="password"
            className="form-input"
            placeholder="Nhập lại mật khẩu"
            required
          />
        </div>

        {/* so dien thoai */}
        <div className="form-inputs">
          <input
            name="phone-number"
            type="tel"
            className="form-input"
            maxLength="10"
            placeholder="Số điện thoại"
            required
          />
        </div>

        {/* Kiem tra vai tro */}
        <span className="form-input-login">Vai trò của bạn là:</span>
        <div className="checking-role">
          <div class="outside-radio">
            <input
              id="radio-box-register1"
              name="radio-box"
              type="radio"
              className="check-radio"
            />
            <label htmlFor="radio-box-register1" className="radio-label">
              Nông dân
            </label>
          </div>

          <div class="outside-radio">
            <input
              id="radio-box-register2"
              name="radio-box"
              type="radio"
              className="check-radio"
            />
            <label htmlFor="radio-box-register2" className="radio-label">
              Công ty
            </label>
          </div>
        </div>

        {/* submission */}
        <div class="submit-zone">
          <button className="btn form-input-btn" type="submit">
            Đăng ký
          </button>
          <span className="form-input-login">
            Bạn đã có tài khoản? Đăng nhập
            <Router>
              <Link className="change-link">tại đây</Link>
            </Router>
          </span>
        </div>
        <p className="watermark">Made by BestRNothing Team</p>
      </form>
    </div>
  );
};

export default registerComponent;
