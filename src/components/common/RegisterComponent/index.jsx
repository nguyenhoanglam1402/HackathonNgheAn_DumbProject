import React from 'react'
import './style.css'
const registerComponent = () => {
    return (
        <div className="form-container">
            <form className="form-register" action="">
                <h1 className="form-title-register">Đăng ký</h1>
                {/* Ten nguoi dung */}
                <div className="form-inputs">
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className="form-input" 
                        placeholder="Họ và tên"/>
                </div>

                {/* Ten dang nhap */}
                <div className="form-inputs">
                    <input 
                        id="username"
                        name="username"
                        type="text"
                        className="form-input" 
                        placeholder="Tên đăng nhập:"/>
                </div>

                {/* Mat khau */}
                <div className="form-inputs">
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        className="form-input" 
                        placeholder="Mật khẩu"/>
                </div>

                {/* Nhap lai mat khau */}
                <div className="form-inputs">
                    <input 
                        id="re-password"
                        name="re-password"
                        type="password"
                        className="form-input" 
                        placeholder="Nhập lại mật khẩu"/>
                </div>

                {/* so dien thoai */}
                <div className="form-inputs">
                    <input 
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        className="form-input" 
                        maxLength= "11"
                        placeholder="Số điện thoại"/>
                </div>

                {/* Kiem tra vai tro */}
                <span className = "form-input-login">
                    Vai trò của bạn là: 
                </span>
                <div className="checking-role">
                    <div class="outside-radio">
                        <label 
                            htmlFor="radio-box-register"
                            className="radio-label">
                            Nông dân: 
                        </label>
                        <input 
                            id="radio-box-register"
                            name="radio-box"
                            type="radio" 
                            className="check-radio"/>
                    </div>
                    
                    <div class="outside-radio">
                        <label 
                            htmlFor="radio-box-register"
                            className="radio-label">
                            Công ty: 
                        </label>
                        <input 
                            id="radio-box-register"
                            name="radio-box"
                            type="radio" 
                            className="check-radio"/>
                    </div>
                </div>
                
                {/* submission */}
                <div class="submit-zone">
                    <button 
                        className="form-input-btn"
                        type="submit">
                        Submit
                    </button>
                    <span className="form-input-login">
                        Bạn đã có tài khoản? Đăng nhập <a href="#">tại đây</a>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default registerComponent
