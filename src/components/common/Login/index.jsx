import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import "./style.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signIn } from "actions/user";
import { PopUp } from "components/common";

const Login = () => {
  const userDispatch = useDispatch();
  const history = useHistory();
  const [isPopUp, setPopUp] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const redirect = (isSuccess) => {
    if (isSuccess) history.push("/");
  };

  const login = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        const userResult = userCredential.user;
        const userInfo = {
          uid: userResult.uid,
          username: userResult.displayName,
          email: userResult.email,
          phone: userResult.phoneNumber,
        };
        const loginAction = signIn(userInfo);
        userDispatch(loginAction);
        redirect(true);
      })
      .catch((error) => {
        console.error(error);
        setPopUp(true);
      });
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <div className="login-container">
        <h1>Đăng nhâp</h1>
        <div className="form-login-component">
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Tên đăng nhâp"
            {...register("username", {
              required: true,
            })}
          />
          <input
            type="password"
            id="password"
            placeholder="Mât khâu"
            {...register("password", {
              minLength: 8,
              required: true,
            })}
          />
          <div className="remember-me-block">
            <div className="checkbox">
              <input
                type="checkbox"
                name="remember"
                id="remember-me-checkbox"
                title="Remember me"
              />
              <label htmlFor="remember" id="lable-checkbox">
                Ghi nhớ tài khoản
              </label>
            </div>
            <Router>
              <Link className="forget-link" to="#">
                Quên mât khẩu?
              </Link>
            </Router>
          </div>
        </div>
        <button type="submit" className="btn btn-login">
          Đăng nhâp
        </button>
      </div>
      <p className="register-link">
        Nếu chưa có tài khoản.
        <Link className="link" to="/register">
          Đăng ký tai đây
        </Link>
      </p>

      <p className="watermark">Made by BestRNothing Team</p>
      <PopUp
        title="Đăng nhập thất bại"
        trigger={isPopUp}
        setTrigger={setPopUp}
        content="Đăng nhập thất bại. Vui lòng kiểm tra lại!"
        completed={false}
      />
    </form>
  );
};

export default Login;
