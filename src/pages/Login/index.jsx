import { React } from "react";
import "./style.css";
import image from "../../assets/images/Login.png";
import { LoginComponent, RegisterComponent } from "../../components/common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const loginPage = () => {
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

export default loginPage;
