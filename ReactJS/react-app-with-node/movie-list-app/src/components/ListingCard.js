import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const ListingCard = ({ movie }) => {
  const { addMovieToCart, moveToWatchlist, watchlist, cart } = useContext(
    GlobalContext
  );

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieCart = cart.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : storedMovieCart ? true : false;
  const cartDisabled = storedMovieCart ? true : false;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  return (
    <div className="listing-card">
      <div className="overlay">
        <h3 className="title">{movie.title}</h3>

        <div className="overview">{truncate(movie?.overview, 150)}</div>

        <div className="inner-card-controls">
          <button
            className="ctrl-btn"
            disabled={watchlistDisabled}
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-heart"></i>
          </button>

          <button
            className="ctrl-btn"
            disabled={cartDisabled}
            onClick={() => addMovieToCart(movie)}
          >
            <i className="fa-fw fa fa-shopping-cart"></i>
          </button>

          <Link to={`/movie/${movie.id}`}>
            <button className="ctrl-btn">
              <i className="fa-fw fab fa-readme"></i>
            </button>
          </Link>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
    </div>
  );
};
