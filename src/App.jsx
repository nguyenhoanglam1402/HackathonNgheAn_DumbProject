import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MapComponent } from "components/landing";

const HomePage = React.lazy(() => import("./pages/Home/index"));
const LoginPage = React.lazy(() => import("./pages/Login/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading App...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={LoginPage} />
            <Route path="/product/:id" component={LoginPage} />
            <Route path="/map" component={MapComponent} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
