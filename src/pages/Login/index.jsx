import { React } from "react";
import "./style.css";
import image from "assets/images/Login.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginComponent, RegisterComponent } from "components/common";

const LoginPage = () => {
  return (
    <div className="column-container">
      <div className="row-container">
        <div className="form">
          <div className="form-login">
            <div className="image-block">
              <img className="image-login" src={image} alt="" />
            </div>
            <Router>
              <div className="content">
                <Switch>
                  <Route path="/login" component={ LoginComponent }/>
                  <Route path="/register" component={RegisterComponent}/>
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
