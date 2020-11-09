import "./App.css";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
