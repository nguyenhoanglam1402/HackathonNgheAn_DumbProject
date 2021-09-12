import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DefaultContainer } from "components/common";

const LoginPage = React.lazy(() => import("./pages/Login/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading App...</div>}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={LoginPage} />
            <Route component={DefaultContainer} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
