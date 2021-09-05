import "./App.css";
import { HomePage, LoginPage } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
