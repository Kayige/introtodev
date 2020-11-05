import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

const api_key = "d431e3825c6c47923e22a5dc91f52227";

export const Movie = ({ match }) => {
  const [movie, setMovie] = useState({
    id: 0,
    homepage: "",
    original_title: "",
    overview: "",
    genres: {},
    popularity: 0,
    release_date: "",
    runtime: 0,
    status: "",
    tagline: "",
    videos: {},
    vote_average: 0,
    vote_count: 0,
  });

  useEffect(() => {
    // run useEffect when row loads
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}&append_to_response=videos`
      );

      setMovie(request.data);
    }
    fetchData();
  }, [match.params.id]);

  return (
    <div className="movie-page">
      <div className="container">
        <img
          alt={movie.id}
          width="30%"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        />

        <h1>{movie.title}</h1>
        <hr />
        <strong> Description: </strong>
        <p>{movie?.overview}</p>
        <hr />
        <strong> Rating: </strong>
        <p className="rate">{movie.vote_average}</p>
        <hr />
        <strong> Genre: </strong>

        <hr />
        <div className="trailer">
          <strong> Trailer: </strong>
        </div>
        <YouTube
          videoId={movie.videos.results ? movie.videos.results[0].key : null}
        />
      </div>
    </div>
  );
};
