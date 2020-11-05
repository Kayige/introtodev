import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Cart = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Shopping Cart</h1>

          <span className="count-pill">
            {cart.length} {cart.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {cart.length > 0 ? (
          <div className="movie-grid">
            {cart.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="cart" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your cart! Add some!</h2>
        )}
      </div>
    </div>
  );
};
