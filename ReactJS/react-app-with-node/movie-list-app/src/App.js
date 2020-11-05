import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Cart } from "./components/Cart";
import { Add } from "./components/Add";
import { Listing } from "./components/Listing";
import { Movie } from "./components/Movie";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/add" component={Add} />
          <Route path="/cart" component={Cart} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
