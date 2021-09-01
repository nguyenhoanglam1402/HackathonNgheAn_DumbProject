import React from 'react'
import './style.css'
const registerComponent = () => {
    return (
        <div className="form-content">
            <form className="form-register" action="">
                <h1 className="form-title-register">Đăng ký</h1>
                {/* Ten nguoi dung */}
                <div className="form-inputs">
                    <label 
                        htmlFor="name"
                        className="form-label">
                        Họ và tên: 
                    </label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className="form-input" 
                        placeholder="Họ và tên"/>
                </div>

                {/* Ten dang nhap */}
                <div className="form-inputs">
                    <label 
                        htmlFor="username"
                        className="form-label">
                        Tên đăng nhập: 
                    </label>
                    <input 
                        id="username"
                        name="username"
                        type="text"
                        className="form-input" 
                        placeholder="Tên đăng nhập:"/>
                </div>

                {/* Mat khau */}
                <div className="form-inputs">
                    <label 
                        htmlFor="password"
                        className="form-label">
                        Mật khẩu:  
                    </label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        className="form-input" 
                        placeholder="Mật khẩu"/>
                </div>

                {/* Nhap lai mat khau */}
                <div className="form-inputs">
                    <label 
                        htmlFor="re-password"
                        className="form-label">
                        Nhập lại mật khẩu:  
                    </label>
                    <input 
                        id="re-password"
                        name="re-password"
                        type="password"
                        className="form-input" 
                        placeholder="Nhập lại mật khẩu"/>
                </div>

                {/* so dien thoai */}
                <div className="form-inputs">
                    <label 
                        htmlFor="phone-number"
                        className="form-label">
                        Số điện thoại: 
                    </label>
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
                
                {/* submission */}
                <button 
                    className="form-input-btn"
                    type="submit">
                    Submit
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default registerComponent
