import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";
import Categories from "./Categories";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/categories" component={Categories} />
        </Switch>
        <Nav />
        <Banner />
        <Row
          title="Upcoming Movies"
          fetchURL={requests.fetchUpcomingMovies}
          isLargeRow
        />
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
        <Row
          title="Documentaries"
          fetchURL={requests.fetchDocumentariesMovies}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
