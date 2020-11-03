import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="card col-3" key={movie.id}>
      <img
        className="cardimage"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="cardcontent">
        <h3>{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
