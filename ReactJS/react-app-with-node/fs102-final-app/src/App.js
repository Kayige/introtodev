import "./App.css";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" exact></Route>
          {/* <Router path="/"></Router> */}
        </Switch>
        <Collections />
      </Router>
    </div>
  );
}

export default App;
