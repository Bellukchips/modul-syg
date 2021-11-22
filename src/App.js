import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from "./components/Pages/LandingPages";
// Components
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
