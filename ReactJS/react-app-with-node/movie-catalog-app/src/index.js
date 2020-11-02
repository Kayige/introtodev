import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/Header";
import SearchMovies from './components/searchMovie/searchMovie';
import ListMovies from './components/listMovies/listMovie';
import './index.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header text="REACT MOVIE DB" />
          <div className="container">
            <h1 className="title">React Movie Database</h1>
            <SearchMovies/>
          </div>
          <div className="container">
            <h2>Latest Movies</h2>
        <ListMovies/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));


