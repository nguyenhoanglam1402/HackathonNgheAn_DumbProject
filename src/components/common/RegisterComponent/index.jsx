import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import firebase from "firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//Schema
const signUpSchema = yup.object().shape({
  fullName: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
  phoneNumber: yup.number().positive().integer().required(),
  role: yup.string().required(),
});

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onRegister = (data) => {
    const { email, password } = data;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Sign Up Complete");
        updateProfile(auth.currentUser, {
          displayName: data.fullName,
          photoURL: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
      });
    console.log(data);
  };
  const onError = (errors) => console.log(errors);
  return (
    <div className="form-container">
      <form
        className="form-register"
        onSubmit={handleSubmit(onRegister, onError)}
      >
        <h1 className="form-title-register">Đăng ký</h1>

        <div className="form-inputs">
          <input
            name="fullName"
            type="text"
            className="form-input"
            placeholder="Họ và tên"
            {...register("fullName")}
          />
        </div>
        <p>{errors.fullName?.message}</p>

        <div className="form-inputs">
          <input
            name="userName"
            type="text"
            className="form-input"
            placeholder="Tên đăng nhập"
            {...register("userName", { required: true })}
          />
        </div>
        <p>{errors.userName?.message}</p>

        <div className="form-inputs">
          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="form-inputs">
          <input
            name="password"
            type="password"
            className="form-input"
            placeholder="Mật khẩu"
            {...register("password", { required: true, minLength: 8 })}
          />
        </div>

        <div className="form-inputs">
          <input
            name="confirmPassword"
            type="password"
            className="form-input"
            placeholder="Nhập lại mật khẩu"
            {...register("confirmPassword", { required: true, minLength: 8 })}
          />
        </div>

        <div className="form-inputs">
          <input
            name="phoneNumber"
            type="tel"
            className="form-input"
            placeholder="Số điện thoại"
            {...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
        </div>

        <span className="form-input-login">Vai trò của bạn là:</span>
        <div className="checking-role">
          <div className="outside-radio">
            <input
              value="Farmer"
              id="radio-box-register1"
              name="role"
              type="radio"
              className="check-radio"
              {...register("role")}
            />
            <label htmlFor="radio-box-register1" className="radio-label">
              Nông dân
            </label>
          </div>

          <div className="outside-radio">
            <input
              value="Company"
              id="radio-box-register2"
              name="role"
              type="radio"
              className="check-radio"
              {...register("role")}
            />
            <label htmlFor="radio-box-register2" className="radio-label">
              Công ty
            </label>
          </div>
        </div>

        <div className="submit-zone">
          <button className="btn form-input-btn" type="submit">
            Đăng ký
          </button>
          <span className="form-input-login">
            Bạn đã có tài khoản? Đăng nhập
            <Link to="/login" className="change-link">
              tại đây
            </Link>
          </span>
        </div>
        <p className="watermark">Made by BestRNothing Team</p>
      </form>
    </div>
  );
};

export default RegisterComponent;
